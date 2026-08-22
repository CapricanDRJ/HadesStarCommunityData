---
title: ​Space Rangers
description: W:17 L:9 D:0 Bonus ❌ 6%
image: ./favicon.png
Summary: ✅ 21 - 0 **101**
date: 2024-03-31T23:30:57.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
For the friends and normies
```
<br>

### [Discord](https://discord.gg/GYem3jEagg)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1295 🔺  (11)|
| ELO Competitive | 1347 🔺  (15)|
| Total Matches | 26 |
| Wins | 17 |
| Losses | 9 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1711495857,1710913538,1709770250,1709040691,1708210947,1707654196,1707017128,1707003608,1706444046,1705665111,1705025028,1704501530,1703926643,1703883974,1703325901,1703307270,1702837945,1702797068,1702189065,1702175543,1701637571,1701635466,1700785218,1700777404,1700305842,1699916881];

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
| [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) | 0 | 2 | 0 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/03/31 | 21-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/03/25 | 6-11 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2024/03/12 | 15-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2024/03/03 | 17-0 | [Axioma](https://ws.tsl.rocks/corp/2ec904c87d0183a49e22dc53508fa5c75d6e638e3a152a30336831697c60e91e/) |
| ✅ | 2024/02/22 | 18-0 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ✅ | 2024/02/16 | 26-2 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ❌ | 2024/02/09 | 0-10 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2024/02/08 | 6-3 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ❌ | 2024/02/02 | 4-11 | [中国星系集团](https://ws.tsl.rocks/corp/8521b52d3ab48b0685dcdae05e757436301fff9ecc1b4e9e96d1dba5736f894a/) |
| ✅ | 2024/01/24 | 20-3 | [Венерский Союз](https://ws.tsl.rocks/corp/6d869628a64fc11a17264dacfd741e7d603069d526d32a166c48ff7fd9499bf6/) |
| ✅ | 2024/01/17 | 18-0 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/01/11 | 13-0 | [Uchiha](https://ws.tsl.rocks/corp/84cbfdcf65b61cfbc76fd507cdad0278bd1469742b77cd098a372506d8f50dbd/) |
| ✅ | 2024/01/04 | 13-7 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/01/03 | 0-9 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2023/12/28 | 11-0 | [AwA](https://ws.tsl.rocks/corp/9e1ba6b6db84b30e4d5cc2ff2933e0472d2e943670f25b712564f1cc01a63feb/) |
| ❌ | 2023/12/28 | 0-13 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2023/12/22 | 3-12 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2023/12/22 | 12-0 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ✅ | 2023/12/15 | 10-1 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |
| ✅ | 2023/12/15 | 1-0 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2023/12/08 | 7-2 | [СССР 2\.0](https://ws.tsl.rocks/corp/2a77c0d4e05f31ab26b8c73af7f6d0b6ac40368b06a702e4a912edbf09eab65b/) |
| ❌ | 2023/12/08 | 0-19 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ✅ | 2023/11/29 | 1-0 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ❌ | 2023/11/28 | 1-9 | [РусКорп](https://ws.tsl.rocks/corp/7994b4a10a625b21deff136a17c63d096a4ba2f5cdd9eb9dedd7d0bd21b53d16/) |
| ❌ | 2023/11/23 | 1-6 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2023/11/18 | 8-1 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |

---
Corporation ID: da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1711927857"></span>
</div>