---
title: ​白虹贯日
description: W:14 L:3 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 9 - 2 **老哥最强集团**
date: 2026-08-20T09:20:48.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1321 🔺  (10)|
| ELO Competitive | 1324 🔺  (10)|
| Total Matches | 17 |
| Wins | 14 |
| Losses | 3 |
| Draws | 0 |
| Streak Record | 7 |
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
        let timestamps = [1786785648,1786330486,1785838674,1785822454,1785387113,1785372694,1784896801,1784879681,1784365641,1784311257,1783857907,1783845225,1783407273,1783389552,1782915770,1782898345,1782466029];

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
| [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/08/20 | 9-2 | [老哥最强集团](https://ws.tsl.rocks/corp/fe5c86f6244ba283f6eda53890266425eaac76718f542806046dfea045db20e9/) |
| ❌ | 2026/08/15 | 14-15 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2026/08/09 | 16-0 | [Star Field](https://ws.tsl.rocks/corp/7160932eb85654ce07649c2689bb5b3e5abcbe84175203e4668b2247c11ffb97/) |
| ✅ | 2026/08/09 | 7-0 | [The GrandEmpire](https://ws.tsl.rocks/corp/0d4252df331791965c93ff99c057aea397c7984feb074fe617bc8951245503fa/) |
| ✅ | 2026/08/04 | 6-0 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ✅ | 2026/08/04 | 13-0 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ✅ | 2026/07/29 | 7-0 | [Imperial Navy](https://ws.tsl.rocks/corp/3e07bbe9ec60b90d6861b7ee28cf8803a8f175db765ab57bcc8c20b4dcd3dd09/) |
| ✅ | 2026/07/29 | 11-0 | [The Killers](https://ws.tsl.rocks/corp/67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512/) |
| ✅ | 2026/07/23 | 14-0 | [imperio viltrum](https://ws.tsl.rocks/corp/1a05510a2d3a1b3ace3e9e8a00750bf17d53a3cd2d4c6d846f98d54658ffd17f/) |
| ❌ | 2026/07/22 | 2-13 | [Brethren Court](https://ws.tsl.rocks/corp/58ce9bed114bde298d77f20adf5584e22292e24f89dd59298051b01d66212ad4/) |
| ✅ | 2026/07/17 | 15-4 | [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) |
| ✅ | 2026/07/17 | 6-0 | [The Turtles](https://ws.tsl.rocks/corp/91b979bfc3c7fe8f6e58d58bd2feac8f8deba5a5bfb6c9ea60885c2b37fb2a0a/) |
| ✅ | 2026/07/12 | 21-0 | [Кулак академия](https://ws.tsl.rocks/corp/27cf79045603cd3d2f483ac4b4ea2dc03d978904db99c01f210bde42a90464ca/) |
| ❌ | 2026/07/12 | 2-6 | [九州·养老](https://ws.tsl.rocks/corp/3b143b6fd40ce6bbe0369e63a8c4466f2baa4f5346d0bbfc8b9407e58d466763/) |
| ✅ | 2026/07/06 | 10-4 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ✅ | 2026/07/06 | 21-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2026/07/01 | 19-12 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |

---
Corporation ID: 099d8a6a1a96f71e6880717b00f60408e602eee4a4c37ddab363966664b099f9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1787217648"></span>
</div>