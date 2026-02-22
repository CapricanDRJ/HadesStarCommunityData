---
title: ​\.\.D\.E\.I\.T\.Co\.\.
description: W:6 L:6 D:0 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 8 - 17 **六大天神**
date: 2024-04-16T09:21:11.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Welcome to Year 2 of the Great Conquest! We love to WIN! We can not a
ccept new members during a WS match. If rejected, join our Discord & 
we will happily arrange your arrival after the match!
```
<br>

### [Discord](https://discord.gg/ZxWsQDeHKm)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1190 🔻  (-14)|
| ELO Competitive | 1200 🔻  (-7)|
| Total Matches | 12 |
| Wins | 6 |
| Losses | 6 |
| Draws | 0 |
| Streak Record | 5 |
| Flagship | 5 |

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
        let timestamps = [1712827271,1711326396,1708278041,1705858351,1703014557,1702572868,1702027966,1701577455,1700841415,1700351531,1699849852,1699351516];

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
| ❌ | 2024/04/16 | 8-17 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/03/30 | 14-28 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2024/02/23 | 18-22 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2024/01/26 | 14-15 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ❌ | 2023/12/24 | 5-11 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2023/12/19 | 26-0 | [Das Imperium](https://ws.tsl.rocks/corp/bf80902e944e3605f5f2fe70f245c1442fa4094414322964da8200dc57c58ef0/) |
| ❌ | 2023/12/13 | 5-17 | [Outland Ind\.](https://ws.tsl.rocks/corp/94cb8827caef9b4b1839113abd29145a128d0c1e108c3984bcf7620dd7fca464/) |
| ✅ | 2023/12/08 | 24-8 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ✅ | 2023/11/29 | 31-3 | [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) |
| ✅ | 2023/11/23 | 23-2 | [Russia](https://ws.tsl.rocks/corp/8a6254c757d7124a5a23df1b60ae058486cc79ca0c2c006241d319b8d5d815db/) |
| ✅ | 2023/11/18 | 23-9 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2023/11/12 | 17-0 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |

---
Corporation ID: 59b15e2c8e6b94f918d86a75ed857c47c1d12726a67bfbc314828e5d25fbbbc9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1713259271"></span>
</div>