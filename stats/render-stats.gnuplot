set terminal png medium size 800,600
set border 3
set xtics nomirror
set ytics nomirror

set output "1-unique_ips.png"
set title "SA tools: unique IPs accessing per month, 13/06/13"
plot "stats.csv" using 4:xticlabels(1) with linespoints title columnhead(4), "stats.csv" using 3:xticlabels(1) with linespoints title columnhead(3), "stats.csv" using 2:xticlabels(1) with linespoints title columnhead(2)

set output "2-unique_users.png"
set title "SA tools: unique users accessing per month, 13/06/13"
plot "stats.csv" using 12:xticlabels(1) with linespoints title columnhead(12), "stats.csv" using 11:xticlabels(1) with linespoints title columnhead(11), "stats.csv" using 10:xticlabels(1) with linespoints title columnhead(10)

set output "3-detail.png"
set title "SA tools: actions carried out per month, 13/06/13"
plot "stats.csv" using 6:xticlabels(1) with linespoints title columnhead(6), "stats.csv" using 5:xticlabels(1) with linespoints title columnhead(5)

set output "4-detail.png"
set title "SA tools: actions carried out per month, 13/06/13"
plot "stats.csv" using 7:xticlabels(1) with linespoints title columnhead(7), "stats.csv" using 8:xticlabels(1) with linespoints title columnhead(8), "stats.csv" using 9:xticlabels(1) with linespoints title columnhead(9)
