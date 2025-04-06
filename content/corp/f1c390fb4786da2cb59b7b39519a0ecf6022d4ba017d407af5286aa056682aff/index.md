---
title: ​Blazing Stars
description: W:18 L:3 D:1 Bonus ✅ 32%
image: ./favicon.png
Summary: ✅ 19 - 1 **DarkSide**
date: 2025-03-31T19:25:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
 <color=green>A juvenile corporation, deemed for both growth and enjo
yment. <color=yellow>Welcomes both newbies and veterans throughout th
e Hades Galaxy. Join us and have fun 
```
<br>

### [Discord](https://discord.gg/aCU5VZGc)
### Whitestar Bonus ✅ 32%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1356 🔺  (103)|
| ELO Competitive | 1410 🔺  (152)|
| Total Matches | 22 |
| Wins | 18 |
| Losses | 3 |
| Draws | 1 |
| Streak | 3 |
| Streak Record | 11 |
| Flagship | 1 |

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
        let timestamps = [1743017140,1742915258,1742256835,1741789524,1741659119,1741200256,1740392509,1739811322,1739362974,1738673620,1738597294,1737981541,1737074631,1736210051,1734861679,1734427199,1734397460,1733875537,1733834367,1733039129,1732682281,1732592440];

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
| [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/03/31 | 19-1 | [DarkSide](https://ws.tsl.rocks/corp/557178dd3a3d43ff1751021bfc2d8c1d4261336a45f90d392f3dd275d8a0a941/) |
| ✅ | 2025/03/30 | 25-0 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2025/03/23 | 23-0 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2025/03/17 | 5-23 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/03/16 | 27-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/03/10 | 22-0 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ✅ | 2025/03/01 | 11-3 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ✅ | 2025/02/22 | 25-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/02/17 | 18-2 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2025/02/09 | 20-0 | [Air/Free\_ziyou](https://ws.tsl.rocks/corp/97e261fb0c1a22ab5190f97566b57c72921c78dfc9021709ee50d11ac5e1955b/) |
| ✅ | 2025/02/08 | 24-1 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/02/01 | 11-7 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/01/22 | 11-2 | [Aquiles ](https://ws.tsl.rocks/corp/303ab147f2fce882b5cb391c0b3006c76bc2222ee409fc17b157cb149bda3c9f/) |
| ✅ | 2025/01/12 | 20-0 | [pérola negra ](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ✅ | 2024/12/27 | 7-0 | [华夏三体\-阿拜多斯集团 ](https://ws.tsl.rocks/corp/78854ef22e7a0ed0424f4452ba62768664f785bcc2796bc04700c2f50683441f/) |
| ❌ | 2024/12/22 | 0-10 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ✅ | 2024/12/22 | 16-0 | [corporacion I\.A](https://ws.tsl.rocks/corp/df86dad6380843bf4a9cf1a50952d4ff723b40e5e84626918e35b39ec35a9ccf/) |
| ↔️ | 2024/12/16 | 0-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/12/15 | 11-0 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2024/12/06 | 6-4 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ✅ | 2024/12/02 | 3-1 | [Fairy tail ](https://ws.tsl.rocks/corp/44e6a82c06b84bc5579df0e42bc462f36313b0060861d25228856930f6c19eac/) |
| ❌ | 2024/12/01 | 0-8 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |

---
Corporation ID: f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1743449140"></span>
</div>