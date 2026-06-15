---
title: ​中华五千年
description: W:15 L:12 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ❌ 0 - 13 **Эдем**
date: 2026-06-14T06:25:16.000Z
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
| ELO Regular | 1202 🔻  (-15)|
| ELO Competitive | 1313 🔻  (-8)|
| Total Matches | 27 |
| Wins | 15 |
| Losses | 12 |
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
        let timestamps = [1780986316,1780496042,1778672630,1778148350,1777692005,1777637928,1777174879,1777167435,1776609510,1776607406,1776165470,1776163066,1775718418,1775655326,1775235602,1774853440,1774788855,1774344791,1774066411,1773847555,1773409811,1773325692,1772720640,1772278995,1771838268,1771405946,1770973310];

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
| [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) | 0 | 2 | 0 | 2 |
| [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/06/14 | 0-13 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2026/06/08 | 11-0 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2026/05/18 | 0-11 | [Небула Рока](https://ws.tsl.rocks/corp/22875f3ae77efabcd56b4683dee31b7e35d927cb86876f8f587b5f048dfe68f9/) |
| ❌ | 2026/05/12 | 0-3 | [W\.A\.L\.R\.U\.S\.](https://ws.tsl.rocks/corp/3360cfbc27ced65ef69f7de87380357cd8d4a316d8701e67b93a624d481bf313/) |
| ✅ | 2026/05/07 | 1-0 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ❌ | 2026/05/06 | 0-21 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2026/05/01 | 1-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2026/05/01 | 0-8 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ❌ | 2026/04/24 | 0-20 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ❌ | 2026/04/24 | 0-13 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ✅ | 2026/04/19 | 2-0 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ✅ | 2026/04/19 | 5-0 | [CERBERUS SYSTEM](https://ws.tsl.rocks/corp/84ca35f0e6e24150613333f78670b8bb6e27010a69920dd6ee7cf671087a3976/) |
| ❌ | 2026/04/14 | 0-3 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ❌ | 2026/04/13 | 1-3 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ✅ | 2026/04/08 | 13-3 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ✅ | 2026/04/04 | 3-0 | [Stelar Corp](https://ws.tsl.rocks/corp/3ad65490b2227f2f622d048f37a6b60ac1c46f34edec2e4562c22ddcc8705a45/) |
| ✅ | 2026/04/03 | 6-2 | [维埃星云氮氢钨钽](https://ws.tsl.rocks/corp/4f76f07e3376e9848983a4effbb2deca1f3d4602a1ed8c0346183dc7a589c40a/) |
| ✅ | 2026/03/29 | 4-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2026/03/26 | 2-0 | [启示空间](https://ws.tsl.rocks/corp/92581941aa4cb7fce206e45a4bbd748a9eb5ae0fb8041a08d0fb28546a40d455/) |
| ✅ | 2026/03/23 | 7-3 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2026/03/18 | 9-16 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ❌ | 2026/03/17 | 0-5 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ❌ | 2026/03/10 | 1-10 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2026/03/05 | 15-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2026/02/28 | 14-0 | [underdogs\#1](https://ws.tsl.rocks/corp/c2867d5124babe48531c992919ea294cf2f97472e6619d917dae2071fe738fff/) |
| ✅ | 2026/02/23 | 13-0 | [Onaka Gang](https://ws.tsl.rocks/corp/ad0c0977768d3d0781594cf90c5946a58f19d088b47183d2eac245cb9b768b31/) |
| ✅ | 2026/02/18 | 7-0 | [Argos](https://ws.tsl.rocks/corp/5a69decd163742c002619268f3472d1d2603fa6b65d8599403a357e8630cbc83/) |

---
Corporation ID: c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1781418316"></span>
</div>