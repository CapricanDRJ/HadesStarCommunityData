---
title: ​Space Force
description: W:1 L:4 D:2 Bonus ❌ 3%
image: ./favicon.png
Summary: ❌ 0 - 14 **骊珠洞天**
date: 2025-03-26T06:39:32.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 3%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1156 🔻  (-14)|
| ELO Competitive | 1175 🔻  (-14)|
| Total Matches | 7 |
| Wins | 1 |
| Losses | 4 |
| Draws | 2 |
| Flagship | 2 |

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
        let timestamps = [1742539172,1713561924,1712931533,1712827571,1712357930,1712291223,1711911121];

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

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/03/26 | 0-14 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ❌ | 2024/04/24 | 0-2 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ❌ | 2024/04/17 | 3-4 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |
| ❌ | 2024/04/16 | 0-102 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/04/10 | 3-1 | [中国星际联盟·第一自治州](https://ws.tsl.rocks/corp/545ee3872db51731b8d4a941a5c88e0b8f5dcc68b5a26e1a39133cc7dc0b6c18/) |
| ↔️ | 2024/04/10 | 0-0 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ↔️ | 2024/04/05 | 3-3 | [德意志第三帝国奥米加分部](https://ws.tsl.rocks/corp/b5f35e30b2dea2621e854b5011a9f9d07ca3585cd26bd9ac92aa7b06c0a522b1/) |

---
Corporation ID: 3b211025fcbe576d520e8578c3401eada522804972c60553a3e2d04224fcb214

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1742971172"></span>
</div>