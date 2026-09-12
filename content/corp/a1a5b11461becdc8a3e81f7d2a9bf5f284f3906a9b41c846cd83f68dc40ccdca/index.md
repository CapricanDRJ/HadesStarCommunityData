---
title: ​Cerberus
description: W:11 L:3 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ✅ 5 - 0 **11th Engineers**
date: 2025-12-24T03:24:26.000Z
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
| ELO Regular | 1290 🔺  (1)|
| ELO Competitive | 1339 🔺  (4)|
| Total Matches | 16 |
| Wins | 11 |
| Losses | 3 |
| Draws | 2 |
| Streak | 3 |
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
        let timestamps = [1766114666,1755019485,1753723183,1753124612,1752207726,1744700073,1744691059,1744057141,1744029034,1742226751,1741623360,1740414450,1739821542,1739202216,1735049769,1733703372];

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
| ✅ | 2025/12/24 | 5-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/08/17 | 9-1 | [Best UA West](https://ws.tsl.rocks/corp/4d9a4fb86f55f49b64d6170705b42f7a2c988cc389331425c13603b0ebce6146/) |
| ✅ | 2025/08/02 | 10-3 | [群星舰队](https://ws.tsl.rocks/corp/ddfc1c2c4548e736216c4c967100647f11ebc33e0a96a3e94c57143df67c8f2e/) |
| ❌ | 2025/07/26 | 3-6 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ↔️ | 2025/07/16 | 3-3 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2025/04/20 | 12-6 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/04/20 | 0-14 | [Splendid](https://ws.tsl.rocks/corp/8d0fd2cb62785c9876643edf419b241f0f86e339052e5d3e4fab40b0416828dd/) |
| ✅ | 2025/04/12 | 9-0 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ❌ | 2025/04/12 | 3-14 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/03/22 | 15-3 | [SPACING GUILD](https://ws.tsl.rocks/corp/e81af8fe50f976167d2ea644004ff2e4c9ce0e7b399b754c06c4c831934842fd/) |
| ✅ | 2025/03/15 | 16-0 | [Fairy tail](https://ws.tsl.rocks/corp/44e6a82c06b84bc5579df0e42bc462f36313b0060861d25228856930f6c19eac/) |
| ✅ | 2025/03/01 | 8-0 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ✅ | 2025/02/22 | 5-0 | [✨ Love Room✨](https://ws.tsl.rocks/corp/b450313304cec8103f820ba28f338518c4247a57d2035b582ac3c7b45becbe1b/) |
| ✅ | 2025/02/15 | 9-0 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ✅ | 2024/12/29 | 9-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ↔️ | 2024/12/14 | 2-2 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |

---
Corporation ID: a1a5b11461becdc8a3e81f7d2a9bf5f284f3906a9b41c846cd83f68dc40ccdca

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1766546666"></span>
</div>