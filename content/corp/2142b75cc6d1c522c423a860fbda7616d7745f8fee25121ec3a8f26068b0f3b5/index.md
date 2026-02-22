---
title: ​星舰国际
description: W:7 L:8 D:3 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 2 **AntiCerberus**
date: 2024-11-07T05:13:32.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Anyone can join. 谁都可以加入。      打白为常态，有钱捐钱给旗舰，最好捐给旗舰2号。欢迎各位光临
```
<br>

### [Discord](https://discord.gg/星舰国际集团)
### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1173 🔻  (-15)|
| ELO Competitive | 1199 🔻  (-16)|
| Total Matches | 18 |
| Wins | 7 |
| Losses | 8 |
| Draws | 3 |
| Streak Record | 4 |
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
        let timestamps = [1730524412,1727967893,1727349149,1726564970,1725956144,1725509583,1725010179,1724562424,1723841487,1723004867,1722362681,1721913688,1721302451,1721257418,1720787623,1720192874,1719658075,1719071743];

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
| ❌ | 2024/11/07 | 0-2 | [AntiCerberus](https://ws.tsl.rocks/corp/05549095de4dbbeb78175abda32e043bd7c0afada2bba974c17c41674469da29/) |
| ❌ | 2024/10/08 | 1-5 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/10/01 | 0-4 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/09/22 | 3-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2024/09/15 | 2-5 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ❌ | 2024/09/10 | 1-2 | [边界](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2024/09/04 | 3-1 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ↔️ | 2024/08/30 | 2-2 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/08/21 | 3-0 | [Goblin Squad](https://ws.tsl.rocks/corp/8157fdbc504136281be1becade034cac02082d8e81459a1ec1190bbe7a9f5331/) |
| ↔️ | 2024/08/12 | 0-0 | [永恒之梦](https://ws.tsl.rocks/corp/51524c100011292acfff96dc47f5b506950922c6e467b1586d5c571cc281fd4d/) |
| ❌ | 2024/08/04 | 3-5 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ↔️ | 2024/07/30 | 3-3 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ❌ | 2024/07/23 | 1-6 | [SEC](https://ws.tsl.rocks/corp/c36ee5a9ff1f148ada25e8402464cecd17ac847acf81dacd8ea25c29c8fd9bc1/) |
| ❌ | 2024/07/22 | 0-10 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ✅ | 2024/07/17 | 5-3 | [欢迎国人](https://ws.tsl.rocks/corp/f32abd112fe2b826948a3538a51097b9114815930ec77ad11ada1b24ce34578d/) |
| ✅ | 2024/07/10 | 3-0 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ✅ | 2024/07/04 | 6-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/06/27 | 3-0 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |

---
Corporation ID: 2142b75cc6d1c522c423a860fbda7616d7745f8fee25121ec3a8f26068b0f3b5

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1730956412"></span>
</div>