---
title: ​The Galxey █
description: W:5 L:29 D:2 Bonus ❌ 5%
image: ./favicon.png
Summary: ↔️ 0 - 0 **喵喵喵喵喵喵喵**
date: 2024-04-20T18:05:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Bye Bye - ryan
```
<br>

### [Discord](https://discord.gg/Galaxy █哦郭聪明莫)
### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1000 🔺  (4)|
| ELO Competitive | 1078 🔺  (3)|
| Total Matches | 36 |
| Wins | 5 |
| Losses | 29 |
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
        let timestamps = [1713204340,1710852092,1709595380,1709156201,1708525646,1708485082,1708063782,1707521834,1707093462,1707087453,1706602529,1706599417,1706164570,1705718906,1705717703,1705253444,1704819975,1704468171,1704308001,1704018217,1703813353,1703495997,1703119385,1702962966,1702673364,1702444835,1702094091,1701961550,1701574150,1701504122,1701061944,1701034986,1700566715,1700065946,1699620481,1699182044];

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
| [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) | 0 | 2 | 0 | 2 |
| [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) | 0 | 2 | 0 | 2 |
| [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2024/04/20 | 0-0 | [喵喵喵喵喵喵喵](https://ws.tsl.rocks/corp/6f70ed81f6b0fd95da417ce3a268db3bbd0cd3b6e9e188a0e922db3d7f8ac968/) |
| ❌ | 2024/03/24 | 0-4 | [数字星际集团](https://ws.tsl.rocks/corp/ccbf6be33652cb1b91bc9047b966ffdd6b313cc569d1e0a9fb832e6e8dc1d361/) |
| ❌ | 2024/03/09 | 0-8 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ❌ | 2024/03/04 | 0-1 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ❌ | 2024/02/26 | 0-3 | [星际集团](https://ws.tsl.rocks/corp/5487e6c91bbb3348790aa90be274a471189edab52d1567d86412023e0e501871/) |
| ❌ | 2024/02/26 | 0-20 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ❌ | 2024/02/21 | 0-14 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ✅ | 2024/02/14 | 4-0 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ❌ | 2024/02/10 | 0-11 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ✅ | 2024/02/09 | 4-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |
| ❌ | 2024/02/04 | 0-35 | [Nova Time](https://ws.tsl.rocks/corp/0f1c182652387799cfc3a59082f52a2b01201b13336d84760eab107fb1934ce0/) |
| ❌ | 2024/02/04 | 2-8 | [Ul'Adri](https://ws.tsl.rocks/corp/d44796a95a2cc6f93a92af4d701a9c6325eff22633f874f43945a1b1d77b5fe7/) |
| ❌ | 2024/01/30 | 0-2 | [CCCP](https://ws.tsl.rocks/corp/34cd422237fc59472ea900588e5416892c4cceeae033e28f8352b61524a92ac7/) |
| ❌ | 2024/01/25 | 0-6 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/01/25 | 0-12 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ❌ | 2024/01/19 | 0-7 | [Nueva Hyperion](https://ws.tsl.rocks/corp/f24b80c3fe753053bd3914fb8921f08ca134d9deba33bf17c73726fe3829ea75/) |
| ❌ | 2024/01/14 | 1-2 | [Kötbrüder](https://ws.tsl.rocks/corp/3bc45b26e12a26f4a564473f04ec6d044b2fe0dd52486e45348dfd8a10340fe7/) |
| ❌ | 2024/01/10 | 0-10 | [STRVS233～](https://ws.tsl.rocks/corp/727f6b88132c5850b1ef7ad02101bab3f97fc5dd191307dffca64181bf41e614/) |
| ❌ | 2024/01/08 | 0-3 | [Richthofen](https://ws.tsl.rocks/corp/e0208115ff38526d361b427f8dbd68002d9f4707960809ce5ec4ffc8d2389a18/) |
| ❌ | 2024/01/05 | 0-1 | [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) |
| ❌ | 2024/01/03 | 0-4 | [Redd Armada](https://ws.tsl.rocks/corp/a4d427cc014d6a9fa6ea2b1411437bf933b471b6979d6f3f309e96fee2527b5c/) |
| ❌ | 2023/12/30 | 0-8 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2023/12/26 | 0-2 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ❌ | 2023/12/24 | 0-9 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ↔️ | 2023/12/20 | 0-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2023/12/18 | 0-5 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ❌ | 2023/12/14 | 0-3 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2023/12/12 | 3-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2023/12/08 | 0-2 | [Cowboys](https://ws.tsl.rocks/corp/f461f65e85a43e0b855a525f6995505fc1cc5ae6f85be50470c9dacbb955fc21/) |
| ❌ | 2023/12/07 | 1-5 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ❌ | 2023/12/02 | 0-5 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ✅ | 2023/12/01 | 4-0 | [NASA Air base](https://ws.tsl.rocks/corp/6b63a6d22b94297e25c5815e1d096edd489543d2a443677f58d7e6aec1d00016/) |
| ❌ | 2023/11/26 | 1-3 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ✅ | 2023/11/20 | 4-0 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ❌ | 2023/11/15 | 1-9 | [新纪元舰队](https://ws.tsl.rocks/corp/d36af8af2f097f561de219867c4bfcc83f266642293429cf3fda159792008277/) |
| ❌ | 2023/11/10 | 0-2 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |

---
Corporation ID: d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1713636340"></span>
</div>