---
title: ​S.U.N
description: W:10 L:6 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 2 - 11 **Lololol**
date: 2025-04-27T00:10:51.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1244 🔻  (307)|
| ELO Competitive | 1273 🔻  (387)|
| Total Matches | 17 |
| Wins | 10 |
| Losses | 6 |
| Draws | 1 |
| Streak Record | 4 |
| Flagship | 3 |

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
        let timestamps = [1745280651,1743822268,1743064318,1742064780,1741119731,1740392509,1739632819,1738781806,1738152522,1737457476,1736276710,1735206900,1734105389,1732558788,1732106839,1731474902,1731030746];

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
| ❌ | 2025/04/27 | 2-11 | [Lololol](https://ws.tsl.rocks/corp/38d38bd656b1fe9bad738f05bbe6779f5bd57bf4420e737a65292da9da037531/) |
| ✅ | 2025/04/10 | 13-3 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ✅ | 2025/04/01 | 19-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/03/20 | 15-1 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/03/09 | 10-4 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2025/03/01 | 3-11 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ✅ | 2025/02/20 | 10-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2025/02/10 | 12-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/02/03 | 23-0 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2025/01/26 | 12-7 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2025/01/12 | 8-26 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ❌ | 2024/12/31 | 0-8 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2024/12/18 | 3-5 | [一根飞机](https://ws.tsl.rocks/corp/459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0/) |
| ↔️ | 2024/11/30 | 5-5 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2024/11/25 | 17-0 | [ 墨痕 ](https://ws.tsl.rocks/corp/1beef0498f07b07217c6e0727dffd066947edc54ee6d09dc63c031def52cdd60/) |
| ✅ | 2024/11/18 | 5-4 | [Planet Express](https://ws.tsl.rocks/corp/6076486f3dce07118a180607ff9893eb5686dc57f65f7ed66d5e473007bd838c/) |
| ❌ | 2024/11/13 | 0-3 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |

---
Corporation ID: 916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1745712651"></span>
</div>