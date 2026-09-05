---
title: ​РусКорп
description: W:11 L:9 D:0 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 0 - 15 **lesescargots**
date: 2024-02-25T04:42:00.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
работа на кз. и кач кораблей по возможности делимся артами.
```
<br>

### [Discord](https://discord.gg/8YnzVpct)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1218 🔻  (-10)|
| ELO Competitive | 1263 🔻  (-12)|
| Total Matches | 20 |
| Wins | 11 |
| Losses | 9 |
| Draws | 0 |
| Streak Record | 3 |
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
        let timestamps = [1708404120,1708386224,1707832998,1707092561,1707082645,1705812368,1705269477,1704813766,1704346765,1703793819,1703319289,1703236945,1702637480,1701894234,1701865375,1701415764,1701259785,1700777404,1700242127,1699796046];

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
| ❌ | 2024/02/25 | 0-15 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2024/02/24 | 3-25 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/02/18 | 5-6 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/02/10 | 18-16 | [꿀벌왕국](https://ws.tsl.rocks/corp/5835926ee3d1861cbc6fc002291ee3a4b537c1a3a0aef8ea187dfe857505bebc/) |
| ✅ | 2024/02/09 | 9-0 | [Blue Space](https://ws.tsl.rocks/corp/1c4f64c1450ab5cb621676c9a130c187b8ba9a8059253310ae02642cd84e3446/) |
| ❌ | 2024/01/26 | 6-14 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ✅ | 2024/01/19 | 23-1 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2024/01/14 | 6-8 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2024/01/09 | 20-1 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ✅ | 2024/01/02 | 17-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2023/12/28 | 0-11 | [Russia](https://ws.tsl.rocks/corp/14561981eba434af12062961e19345bd438ed10b7b630295db868067861e6bd6/) |
| ✅ | 2023/12/27 | 17-2 | [Free Star](https://ws.tsl.rocks/corp/3970e813bec9126438bee62e337f181cf80eef7babc4a233b5b3df6003a3b9cf/) |
| ✅ | 2023/12/20 | 16-3 | [СССР 2\.0](https://ws.tsl.rocks/corp/2a77c0d4e05f31ab26b8c73af7f6d0b6ac40368b06a702e4a912edbf09eab65b/) |
| ❌ | 2023/12/11 | 3-4 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2023/12/11 | 9-3 | [行星联合军](https://ws.tsl.rocks/corp/5afa03bdcf5439e267c7f2b358e6ae5d16030d3d52b527b58b37236ddfa7fe57/) |
| ❌ | 2023/12/06 | 3-14 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2023/12/04 | 13-0 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ✅ | 2023/11/28 | 9-1 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2023/11/22 | 11-3 | [JPR\. Pretorians](https://ws.tsl.rocks/corp/7144c7cdb9f369d9e56199379429b01172d00a5142f6ceda71031de9bf6e0d25/) |
| ❌ | 2023/11/17 | 3-14 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |

---
Corporation ID: 7994b4a10a625b21deff136a17c63d096a4ba2f5cdd9eb9dedd7d0bd21b53d16

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1708836120"></span>
</div>