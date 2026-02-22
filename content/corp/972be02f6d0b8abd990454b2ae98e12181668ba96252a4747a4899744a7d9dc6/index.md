---
title: ​Новички
description: W:9 L:2 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 2 - 4 **WEEEEEEE**
date: 2026-02-14T06:13:12.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1281 🔻  (-20)|
| ELO Competitive | 1290 🔻  (-20)|
| Total Matches | 11 |
| Wins | 9 |
| Losses | 2 |
| Draws | 0 |
| Streak Record | 6 |
| Flagship | 0 |

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
        let timestamps = [1770617592,1770104749,1769264621,1768364145,1767446259,1746013215,1745561007,1745085617,1741691264,1741004942,1739884940];

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
| ❌ | 2026/02/14 | 2-4 | [WEEEEEEE](https://ws.tsl.rocks/corp/2be07031a642cf694b27101fe95d257b8a3fb6a181629e3f1c4746482841f641/) |
| ✅ | 2026/02/08 | 3-0 | [星空社会主义共和国](https://ws.tsl.rocks/corp/38c08f04a2ca92d80139f8b0461c7dc786c257fe8072260c4a128313c1b54c5e/) |
| ✅ | 2026/01/29 | 3-1 | [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) |
| ✅ | 2026/01/19 | 5-0 | [Selerium](https://ws.tsl.rocks/corp/fe891afa0c4737cff1e5e7b8cd019f384c5c886148577182a92ef575e56c2490/) |
| ✅ | 2026/01/08 | 5-3 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2025/05/05 | 7-0 | [彩虹神圣太空队](https://ws.tsl.rocks/corp/65a85756db048115b30d5db1f341e02c1efa0c8baf3a39ae6b57db8b0c52a0d9/) |
| ✅ | 2025/04/30 | 5-2 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2025/04/24 | 2-22 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/03/16 | 3-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2025/03/08 | 5-0 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |
| ✅ | 2025/02/23 | 4-0 | [✨ Love Room✨](https://ws.tsl.rocks/corp/b450313304cec8103f820ba28f338518c4247a57d2035b582ac3c7b45becbe1b/) |

---
Corporation ID: 972be02f6d0b8abd990454b2ae98e12181668ba96252a4747a4899744a7d9dc6

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771049592"></span>
</div>