---
title: ​The Seperatists
description: W:15 L:21 D:0 Bonus ❌ 11%
image: ./favicon.png
Summary: ❌ 9 - 32 **СССР**
date: 2024-09-06T04:44:03.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<b> Raiding other corp's bonuses from our secret clubhouse </b> Donat
ions to FS1 welcomed. <b> Discord required </b>
```
<br>

### [Discord](https://discord.gg/zXEp3p8)
### Whitestar Bonus ❌ 11%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1168 🔻  (-12)|
| ELO Competitive | 1251 🔻  (-9)|
| Total Matches | 36 |
| Wins | 15 |
| Losses | 21 |
| Draws | 0 |
| Streak Record | 3 |
| Flagship | 7 |

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
        let timestamps = [1725165843,1724674820,1720838421,1718487160,1716641067,1714060969,1712557152,1711868147,1711263584,1711248014,1710467937,1710034665,1709441531,1708991711,1706887909,1706670642,1706153152,1706072916,1705635964,1705031338,1704790025,1704598596,1704355778,1703990359,1703880668,1703417795,1703387213,1702785950,1702782645,1701970567,1701671525,1700677918,1700174208,1699674301,1699164017,1698687967];

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
| [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) | 1 | 1 | 0 | 2 |
| [Soylent Corp\.](https://ws.tsl.rocks/corp/9f978f9cca690b76981d538d63260cd39d51427e5d69412113ccad02cc7cac2d/) | 0 | 2 | 0 | 2 |
| [Lacuna Holdings](https://ws.tsl.rocks/corp/17f4ece94ed033805ed258868416020d302254e2e3becbd1e25381be7933be76/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/06 | 9-32 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2024/08/31 | 19-24 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/07/18 | 6-35 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2024/06/20 | 13-27 | [Tacitus](https://ws.tsl.rocks/corp/257625cedb6403e6979963e22a6ab809b81b08f41e868fa3498440abaf1780e0/) |
| ❌ | 2024/05/30 | 5-33 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2024/04/30 | 8-29 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/04/13 | 5-28 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/04/05 | 16-11 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/03/29 | 24-18 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2024/03/29 | 2-27 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ✅ | 2024/03/20 | 23-10 | [The Fracture](https://ws.tsl.rocks/corp/af9beeaef30e104c9bd98012952334a25239b6aba44191e736a52b5efa198a51/) |
| ❌ | 2024/03/15 | 4-39 | [Soylent Corp\.](https://ws.tsl.rocks/corp/9f978f9cca690b76981d538d63260cd39d51427e5d69412113ccad02cc7cac2d/) |
| ❌ | 2024/03/08 | 5-28 | [Axiom](https://ws.tsl.rocks/corp/4000a010c205d318c766ba14fe1836eaab6652f1738a88cce8a8c69d0283e1b0/) |
| ✅ | 2024/03/02 | 31-29 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/02/07 | 0-33 | [Lacuna Holdings](https://ws.tsl.rocks/corp/17f4ece94ed033805ed258868416020d302254e2e3becbd1e25381be7933be76/) |
| ✅ | 2024/02/05 | 33-10 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2024/01/30 | 35-7 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2024/01/29 | 0-30 | [Soylent Corp\.](https://ws.tsl.rocks/corp/9f978f9cca690b76981d538d63260cd39d51427e5d69412113ccad02cc7cac2d/) |
| ✅ | 2024/01/24 | 39-17 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2024/01/17 | 17-14 | [LANCE](https://ws.tsl.rocks/corp/f9d489fbbe222ff361139bfe234f235c1dfd82f2ccf38f7ecd929e6377408883/) |
| ❌ | 2024/01/14 | 0-32 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ✅ | 2024/01/12 | 40-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2024/01/09 | 0-17 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/01/05 | 34-6 | [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) |
| ❌ | 2024/01/03 | 10-33 | [Lacuna Holdings](https://ws.tsl.rocks/corp/17f4ece94ed033805ed258868416020d302254e2e3becbd1e25381be7933be76/) |
| ❌ | 2023/12/29 | 10-30 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2023/12/29 | 31-8 | [Rogue Corp](https://ws.tsl.rocks/corp/6ad28ede21f9fa3aa044f0af41c7ed474fc432adf4ca1923fa02f6f9ded0028f/) |
| ❌ | 2023/12/22 | 6-10 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2023/12/22 | 3-13 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2023/12/12 | 6-12 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2023/12/09 | 40-10 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |
| ❌ | 2023/11/27 | 9-24 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2023/11/21 | 9-31 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2023/11/16 | 47-3 | [НИФИГАСЕБЕ](https://ws.tsl.rocks/corp/a18fab78c26d983ee99c4cd3c7aaddcfac61283abb2122e9a8ccc44feb2b3196/) |
| ✅ | 2023/11/10 | 23-8 | [Рейнджеры](https://ws.tsl.rocks/corp/be4fa226820fee3399eb064ac8c0d05395ffa93e1c21dbb47d4708dfb0bc9347/) |
| ✅ | 2023/11/04 | 21-4 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |

---
Corporation ID: f7afefdba007366512764be38eb9c404704e5d4de919e7df2b17560324bbb56f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1725597843"></span>
</div>