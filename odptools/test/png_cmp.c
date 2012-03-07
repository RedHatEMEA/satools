#define _GNU_SOURCE
#include <errno.h>
#include <png.h>
#include <stdio.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

static int
read_png(const char *file, png_structp *p, png_infop *i) {
  *p = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
  if(!p) {
    fprintf(stderr, "%s: png_create_read_struct() failed\n",
	    program_invocation_short_name);
    goto err_1;
  }

  *i = png_create_info_struct(*p);
  if(!i) {
    fprintf(stderr, "%s: png_create_info_struct() failed\n",
	    program_invocation_short_name);
    goto err_2;
  }

  FILE *f = fopen(file, "r");
  if(!f) {
    fprintf(stderr, "%s: %s: fopen() failed\n",
	    program_invocation_short_name, file);
    goto err_2;
  }

  png_init_io(*p, f);
  png_read_png(*p, *i, PNG_TRANSFORM_IDENTITY, NULL);
  fclose(f);

  if(png_get_color_type(*p, *i) & PNG_COLOR_MASK_PALETTE) {
    fprintf(stderr, "%s: %s: unsupported color type\n",
	    program_invocation_short_name, file);
    goto err_2;
  }

  return 0;

 err_2:
  png_destroy_read_struct(p, i, NULL);
 err_1:
  return 1;
}

static void
data_bb(png_structp p1, png_infop i1, png_structp p2, png_infop i2, int *bb) {
  int xmax = png_get_image_width(p1, i1), ymax = png_get_image_height(p1, i1);
  png_bytepp r1 = png_get_rows(p1, i1), r2 = png_get_rows(p2, i2);

  int stride = png_get_channels(p1, i1) * png_get_bit_depth(p1, i1) / 8;

  bb[0] = bb[1] = bb[2] = bb[3] = -1;

  int x, xs, y;
  for(y = 0; y < ymax; y++)
    for(x = 0, xs = 0; x < xmax; x++, xs += stride)
      if(memcmp(&r1[y][xs], &r2[y][xs], stride)) {
	if(bb[0] == -1) {
	  bb[0] = bb[2] = x;
	  bb[1] = bb[3] = y;
	} else {
	  bb[0] = MIN(bb[0], x);
	  bb[1] = MIN(bb[1], y);
	  bb[2] = MAX(bb[2], x);
	  bb[3] = MAX(bb[3], y);
	}
      }
}

static int
data_equal(png_structp p1, png_infop i1, png_structp p2, png_infop i2) {
  int xmax = png_get_rowbytes(p1, i1), ymax = png_get_image_height(p1, i1);
  png_bytepp r1 = png_get_rows(p1, i1), r2 = png_get_rows(p2, i2);

  int y;
  for(y = 0; y < ymax; y++)
    if(memcmp(r1[y], r2[y], xmax))
      return 1;
 
  return 0;
}

static int
params_equal(const char *file1, const char *file2, png_structp p1,
	     png_infop i1, png_structp p2, png_infop i2) {
  int rv = 0;

  if(png_get_color_type(p1, i1) != png_get_color_type(p1, i1)) {
    fprintf(stderr, "%s: %s %s: color type mismatch\n",
	    program_invocation_short_name, file1, file2);
    rv = 1;
  }

  if(png_get_channels(p1, i1) != png_get_channels(p1, i1)) {
    fprintf(stderr, "%s: %s %s: channel mismatch\n",
	    program_invocation_short_name, file1, file2);
    rv = 1;
  }

  if(png_get_bit_depth(p1, i1) != png_get_bit_depth(p1, i1)) {
    fprintf(stderr, "%s: %s %s: bit depth mismatch\n",
	    program_invocation_short_name, file1, file2);
    rv = 1;
  }

  if(png_get_image_width(p1, i1) != png_get_image_width(p2, i2) ||
     png_get_image_height(p1, i1) != png_get_image_height(p2, i2)) {
    fprintf(stderr, "%s: %s %s: size mismatch\n",
	    program_invocation_short_name, file1, file2);
    rv = 1;
  }

  if(png_get_rowbytes(p1, i1) != png_get_rowbytes(p2, i2)) {
    fprintf(stderr, "%s: %s %s: row bytes mismatch\n",
	    program_invocation_short_name, file1, file2);
    rv = 1;
  }

  return rv;
}

static int
png_cmp(const char *file1, const char *file2) {
  png_structp p1, p2;
  png_infop i1, i2;

  int rv = 1;

  if(read_png(file1, &p1, &i1))
    goto out_1;

  if(read_png(file2, &p2, &i2))
    goto out_2;

  if(params_equal(file1, file2, p1, i1, p2, i2))
    goto out_3;

  if(!data_equal(p1, i1, p2, i2)) {
    rv = 0;
    goto out_3;
  }

  int bb[4];
  data_bb(p1, i1, p2, i2, bb);

  fprintf(stderr, "%s: %s %s: differ, bounding box (%d, %d)-(%d, %d)\n",
	  program_invocation_short_name, file1, file2, bb[0], bb[1], bb[2],
	  bb[3]);

 out_3:
  png_destroy_read_struct(&p2, &i2, NULL);
 out_2:
  png_destroy_read_struct(&p1, &i1, NULL);
 out_1:
  return rv;
}

int
main(int argc, const char **argv) {
  if(argc != 3) {
    fprintf(stderr, "usage: %s file1.png file2.png\n",
	    program_invocation_short_name);
    return 1;
  }

  return png_cmp(argv[1], argv[2]);
}
