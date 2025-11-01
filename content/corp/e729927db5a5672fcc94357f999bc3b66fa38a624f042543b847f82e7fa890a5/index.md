---
title: ​Atlas corp
description: W:8 L:14 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 0 - 2 **Nebulae Traders**
date: 2024-12-03T18:52:21.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
We are active with white stars.We are a corporation with the goal of 
helping new players and creating a community where everyone can thriv
e together.Be active in chat and white stars for promotion
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/yeVYzgVS)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1133 🔻  (-21)|
| ELO Competitive | 1165 🔻  (-16)|
| Total Matches | 23 |
| Wins | 8 |
| Losses | 14 |
| Draws | 1 |
| Streak Record | 2 |
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
        let timestamps = [1732819941,1731601406,1730381975,1729274633,1728053247,1726971438,1726237395,1722863626,1719098028,1715264410,1711217011,1709930699,1709269352,1707454822,1706725035,1706075319,1705608921,1704609413,1704088021,1703433495,1702998126,1702508556,1702020454];

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
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/12/03 | 0-2 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/11/19 | 0-10 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2024/11/05 | 3-7 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/10/23 | 3-2 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ❌ | 2024/10/09 | 0-2 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2024/09/27 | 1-0 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/09/18 | 3-0 | [The Smeg Heads](https://ws.tsl.rocks/corp/4468352a700fed901168b249c273c37c4d32a032977d53e5261f9c596c1e5366/) |
| ❌ | 2024/08/10 | 0-2 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ✅ | 2024/06/27 | 3-0 | [j g f h me t y](https://ws.tsl.rocks/corp/47918aa8890d89fb5fc148ee9fdd940dd60ae73de3f7d05ccc54fabed17e1b5f/) |
| ❌ | 2024/05/14 | 2-3 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/03/28 | 5-7 | [Redd Armada](https://ws.tsl.rocks/corp/a4d427cc014d6a9fa6ea2b1411437bf933b471b6979d6f3f309e96fee2527b5c/) |
| ❌ | 2024/03/13 | 3-4 | [cyber\_dream](https://ws.tsl.rocks/corp/72357950e7f14c1d9e4dbb6df57e0d76f512cea722919c2a4765db03b90b8616/) |
| ↔️ | 2024/03/06 | 2-2 | [Forces of Light](https://ws.tsl.rocks/corp/0363a536567ae69573a7b0aa4b2c4119c5c14999f5bb2c7a68219b22b78f7903/) |
| ❌ | 2024/02/14 | 0-2 | [企鹅帝国](https://ws.tsl.rocks/corp/53f5c71ba84d7adb312f2f45919553d71769bce6acb74e18973f8c9127499807/) |
| ❌ | 2024/02/05 | 0-17 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2024/01/29 | 8-1 | [猎户座星云](https://ws.tsl.rocks/corp/6eb23240d8c185984cab8e829f9aba441b284c7a003241d3a521da840a6cbff4/) |
| ✅ | 2024/01/23 | 7-2 | [NEW HOLLAND](https://ws.tsl.rocks/corp/b080750b30e8c3b7a4c8bd483921bb8082a83d48c662683a07beba245f70c2a2/) |
| ❌ | 2024/01/12 | 2-16 | [Destroyers](https://ws.tsl.rocks/corp/3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23/) |
| ❌ | 2024/01/06 | 1-4 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2023/12/29 | 2-0 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ❌ | 2023/12/24 | 3-8 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2023/12/18 | 3-0 | [Goa'uld](https://ws.tsl.rocks/corp/6cfbe34768af3759518bfef230548e375dff664510e0670ea856313b90faec80/) |
| ❌ | 2023/12/13 | 1-7 | [Warriors union](https://ws.tsl.rocks/corp/414b486648e1871ce70a5ac9f1a65f02a15d6a38eebc99c23ab68016ba988ea8/) |

---
Corporation ID: e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1733251941"></span>
</div>