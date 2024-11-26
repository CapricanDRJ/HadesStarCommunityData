---
layout: page
title: ​FreeSpcAlliance
description: W:3 L:3 D:0 Bonus ❌
date: 1702742189
---
<img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1197 🔻  (521)|
| ELO Competitive | 1199 🔻  (628)|
| Total Matches | 6 |
| Wins | 3 |
| Losses | 3 |
| Draws | 0 |
| Streak Record | 2 |

---

## Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1702310189,1701726830,1701132961,1700492484,1699888924,1699250554];

        // Function to convert Unix timestamps to day of the week (0=Sunday, 6=Saturday)
        function getDayOfWeek(timestamp) {
            return new Date(timestamp * 1000).getDay();
        }

        // Initialize an array to count occurrences for each day of the week
        let dayCounts = [0, 0, 0, 0, 0, 0, 0];

        // Populate the dayCounts array based on the scanTime data
        timestamps.forEach(ts => {
            let dayOfWeek = getDayOfWeek(ts);
            dayCounts[dayOfWeek]++;
        });

        // Chart.js configuration for the bar chart
        const data = {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
            data: dayCounts,
                backgroundColor: [
                    'rgba(0, 191, 255, 0.2)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
                ],
                borderWidth: 1,
                minBarLength: 5
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            display: false 
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    
---
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2023/12/16 | 9-11 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ✅ | 2023/12/09 | 23-3 | [Dark Skai](https://ws.tsl.rocks/corp/97561ceb92954fb6430110c35337554b8a89fa52a7054f402b7e562a99ef48fd/) |
| ❌ | 2023/12/03 | 11-37 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ✅ | 2023/11/25 | 27-0 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ✅ | 2023/11/18 | 22-1 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ❌ | 2023/11/11 | 11-12 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |

---
Corporation ID: 96bea64334265762457ed1f5f2d255d54618ac74fcee63697cfe08ccf08d99ce

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>