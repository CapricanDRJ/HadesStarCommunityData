---
title: ​Galactic Trade
description: W:2 L:6 D:0 Bonus ❌ 4%
image: ./favicon.png
Summary: ❌ 0 - 8 **Death Star llc\.**
date: 2023-12-19T18:49:42.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Advice, teaching and a friendly community aiming for victory, power a
nd fame in the galaxy. Applications will be processed in around 24 ho
urs and will accept new and old players. Founded 22/10/22
```
<br>

### Whitestar Bonus ❌ 4%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1150 🔻  (-10)|
| ELO Competitive | 1152 🔻  (-10)|
| Total Matches | 8 |
| Wins | 2 |
| Losses | 6 |
| Draws | 0 |
| Flagship | 3 |

---

### Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1702579782,1702053216,1701513248,1701016646,1700495791,1700044604,1699549838,1699071468];

        const fontColor = 'rgba(64, 128, 160, 1)';

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
                    'rgba(214, 236, 243, 0.2)', // Custom light blue (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(214, 236, 243, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(0, 191, 255, 1)'
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
                            color: fontColor
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: fontColor
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
| [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2023/12/19 | 0-8 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2023/12/13 | 1-3 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ❌ | 2023/12/07 | 2-8 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2023/12/01 | 2-13 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2023/11/25 | 4-6 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ✅ | 2023/11/20 | 5-2 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ❌ | 2023/11/14 | 3-4 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2023/11/09 | 2-0 | [萌新收留所（目标门集团）](https://ws.tsl.rocks/corp/2da742f44420592cb720952b293609aded2a2858e7458e692ec54fc989c017a8/) |

---
Corporation ID: 11f216ded6a66748fec41f81ff0eae46ed3f149e39301e31c7977db9897e7d21

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1703011782"></span>
</div>