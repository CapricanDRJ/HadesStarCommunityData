---
title: ​Destroyers
description: W:16 L:18 D:0 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 3 - 7 **Interstellar**
date: 2024-10-20T22:36:52.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
We are here to play white stars. No bs afk players needed!!!
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1197 🔻  (-16)|
| ELO Competitive | 1229 🔻  (-8)|
| Total Matches | 34 |
| Wins | 16 |
| Losses | 18 |
| Draws | 0 |
| Streak Record | 6 |
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
        let timestamps = [1729031812,1728453234,1721334909,1720715794,1720110230,1718396403,1717428460,1716728521,1715779687,1714921601,1714234033,1713475109,1712710998,1712098021,1711490749,1710978739,1709922885,1709255232,1708745607,1708305687,1707803850,1707252842,1706737358,1706122501,1705564140,1705121487,1704609413,1704130397,1703443714,1702834639,1702231449,1701691960,1701194269,1700673409];

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
| [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) | 0 | 3 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/10/20 | 3-7 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2024/10/14 | 5-24 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/07/23 | 9-30 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/07/16 | 3-17 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2024/07/09 | 23-2 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/06/19 | 0-11 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2024/06/08 | 0-32 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2024/05/31 | 28-3 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/05/20 | 27-0 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ❌ | 2024/05/10 | 3-30 | [Медведи](https://ws.tsl.rocks/corp/b3b0cac2c48761153afa1dcad7a4048103ffc3ec2ca6d477a6bd744922fce075/) |
| ❌ | 2024/05/02 | 5-14 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2024/04/23 | 24-6 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/04/15 | 1-15 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ✅ | 2024/04/07 | 14-9 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2024/03/31 | 11-36 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/03/25 | 17-1 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/03/13 | 3-13 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2024/03/06 | 6-20 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/02/29 | 6-12 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2024/02/24 | 20-1 | [Eligius](https://ws.tsl.rocks/corp/13948b7eb67a9511aa63c250d6c965b3e15d71e2641d5909b11917a199e8312e/) |
| ❌ | 2024/02/18 | 3-23 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/02/11 | 24-0 | [黑色长城](https://ws.tsl.rocks/corp/8494a7ecc96c5cc06e4d9c7824f2c0cf9fde23e2878b0305b618382fb4068005/) |
| ✅ | 2024/02/05 | 22-3 | [Next Hyperion](https://ws.tsl.rocks/corp/a18302feedfddd2a6e918dd649a70ac1c2bd249622dbfc3a3c04c06ca8adaa22/) |
| ✅ | 2024/01/29 | 18-3 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/01/23 | 16-3 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ✅ | 2024/01/18 | 24-0 | [challenger corp](https://ws.tsl.rocks/corp/7c39adae75191c15a3bab070d08a4cf21efb3b5ec37d69363b7c1060f272d80d/) |
| ✅ | 2024/01/12 | 16-2 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ❌ | 2024/01/06 | 4-15 | [共产主义舰队](https://ws.tsl.rocks/corp/120341cde0726631443dbaa98c1192b6703daad0119e6c18061f443d2897831e/) |
| ❌ | 2023/12/29 | 1-4 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2023/12/22 | 11-0 | [mijael siuuuuuu](https://ws.tsl.rocks/corp/45ca23a78c96de3dd53a33f7c9f029b7dc5edf0fb7f15e5d46f1893c68d28334/) |
| ❌ | 2023/12/15 | 3-6 | [Thunderbears](https://ws.tsl.rocks/corp/904c85a40298fe616763ce7bc9ac0534ab1d9dd69151c63308a3906f2eb07d54/) |
| ❌ | 2023/12/09 | 0-19 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ✅ | 2023/12/03 | 3-0 | [Troy](https://ws.tsl.rocks/corp/eab7cf569ca39b6889d9c7b558abe94f4f5861ad6cdfea0cf167f5769f45315c/) |
| ✅ | 2023/11/27 | 3-0 | [🌪TORNADO](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |

---
Corporation ID: 3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1729463812"></span>
</div>