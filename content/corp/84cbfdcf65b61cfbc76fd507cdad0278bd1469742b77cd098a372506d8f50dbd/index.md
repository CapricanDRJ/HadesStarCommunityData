---
title: ​Uchiha
description: W:3 L:12 D:1 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 5 **第四天灾**
date: 2024-05-28T17:30:36.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
New and old welcome have fun discord is.     http://discord.com/invit
e/38UnuWwp
```
<br>

### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1103 🔻  (-11)|
| ELO Competitive | 1181 🔻  (-15)|
| Total Matches | 16 |
| Wins | 3 |
| Losses | 12 |
| Draws | 1 |
| Flagship | 4 |

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
        let timestamps = [1716485436,1712332087,1712329082,1711759975,1711746754,1710411447,1710408143,1709089070,1709087268,1707178016,1707177115,1704501530,1704476287,1702550625,1702546117,1701747564];

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
| ❌ | 2024/05/28 | 0-5 | [第四天灾](https://ws.tsl.rocks/corp/4a95d21903a441f2a20c9e679a90b299942ceb1b304e21b11213de9bb14c17ce/) |
| ❌ | 2024/04/10 | 0-10 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2024/04/10 | 4-12 | [绛紫星](https://ws.tsl.rocks/corp/8c2109279ceb01bcca0aa5e85c151d5877831ac54199285743750e2ed343b407/) |
| ❌ | 2024/04/04 | 4-30 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2024/04/03 | 0-6 | [La orden real](https://ws.tsl.rocks/corp/14d84c93a9ad1b69678224944ea11f9090fbe9dc18cdb9a810839a88b35e1632/) |
| ✅ | 2024/03/19 | 11-3 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ❌ | 2024/03/19 | 1-10 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ❌ | 2024/03/04 | 0-20 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ❌ | 2024/03/04 | 5-21 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/02/11 | 2-14 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2024/02/10 | 8-0 | [КМБ](https://ws.tsl.rocks/corp/9863510eb8d02a7be02ef6a2cf42499cbf1e7ec62df078fe82aaa791444445f4/) |
| ❌ | 2024/01/11 | 0-13 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ↔️ | 2024/01/10 | 1-1 | [VENTORMENTA](https://ws.tsl.rocks/corp/0b64072b403ef687c83d4c04a4f5a20f8dd89befdaaf6ced9af64cacc2f46536/) |
| ❌ | 2023/12/19 | 2-13 | [Capibarius](https://ws.tsl.rocks/corp/9a46f3159020b842ed9bb062f7dbef2a5acb1337fbdc1c4a5374233c44a4ffab/) |
| ❌ | 2023/12/19 | 0-3 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ✅ | 2023/12/10 | 1-0 | [NASA Air base](https://ws.tsl.rocks/corp/6b63a6d22b94297e25c5815e1d096edd489543d2a443677f58d7e6aec1d00016/) |

---
Corporation ID: 84cbfdcf65b61cfbc76fd507cdad0278bd1469742b77cd098a372506d8f50dbd

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1716917436"></span>
</div>