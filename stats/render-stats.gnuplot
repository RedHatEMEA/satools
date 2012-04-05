set terminal png medium size 800,600
set border 3
set xtics nomirror
set ytics nomirror

set output "1-unique_ips.png"
set title "SA tools: unique IPs accessing per day, 29/03/12"
plot "stats.csv" using 4:xticlabels(1) with linespoints title columnhead(4), "stats.csv" using 3:xticlabels(1) with linespoints title columnhead(3), "stats.csv" using 2:xticlabels(1) with linespoints title columnhead(2)

set output "2-detail.png"
set title "SA tools: operations carried out per day, 29/03/12"
plot "stats.csv" using 6:xticlabels(1) with linespoints title columnhead(6), "stats.csv" using 5:xticlabels(1) with linespoints title columnhead(5)

set output "3-detail.png"
set yrange [0:20]
set title "SA tools: operations carried out per day, 29/03/12"
plot "stats.csv" using 7:xticlabels(1) with linespoints title columnhead(7), "stats.csv" using 8:xticlabels(1) with linespoints title columnhead(8), "stats.csv" using 9:xticlabels(1) with linespoints title columnhead(9)
