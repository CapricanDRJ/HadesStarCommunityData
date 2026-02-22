---
title: ​星系联盟
description: W:12 L:17 D:1 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 0 - 23 **HIGH COMMAND**
date: 2025-10-31T06:33:45.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎萌新们加入，到了20级以上就可以去主团了，前三名加入的当干事，主团国际联盟，干事请不要随便把别人晋升成干事，最多晋升成高级成员，请大家
常驻。   不定期清红点
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1154 🔻  (-8)|
| ELO Competitive | 1233 🔻  (-7)|
| Total Matches | 30 |
| Wins | 12 |
| Losses | 17 |
| Draws | 1 |
| Streak Record | 5 |
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
        let timestamps = [1761460425,1760250506,1751555493,1750343324,1749976402,1749720362,1749221843,1748613952,1747805922,1747317622,1746804069,1746097309,1745592262,1745142385,1744378830,1743822268,1743163188,1742559723,1742045543,1741432838,1740807497,1740145502,1739116270,1736941014,1736422458,1735980206,1735364951,1734668777,1734141451,1732243561];

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
| ❌ | 2025/10/31 | 0-23 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ❌ | 2025/10/17 | 0-13 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/07/08 | 3-8 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2025/06/24 | 7-6 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2025/06/20 | 0-5 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/06/17 | 0-10 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ❌ | 2025/06/11 | 0-8 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ↔️ | 2025/06/04 | 5-5 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ❌ | 2025/05/26 | 1-12 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/05/20 | 2-9 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ❌ | 2025/05/14 | 18-23 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ✅ | 2025/05/06 | 14-0 | [Copelius](https://ws.tsl.rocks/corp/5ccdfe71720f707dabd274b5bab6f84a443484f3e38ec1065ad5f5a20268649f/) |
| ❌ | 2025/04/30 | 0-8 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/04/25 | 12-0 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ❌ | 2025/04/16 | 0-3 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/04/10 | 3-13 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ✅ | 2025/04/02 | 20-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/03/26 | 13-1 | [中国家民](https://ws.tsl.rocks/corp/af75be08923f73af2bd3821bcfbdef3e3abbcbc0b9aaeacfeae528cfbf972f5f/) |
| ✅ | 2025/03/20 | 8-1 | [DarkSide](https://ws.tsl.rocks/corp/557178dd3a3d43ff1751021bfc2d8c1d4261336a45f90d392f3dd275d8a0a941/) |
| ✅ | 2025/03/13 | 10-3 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/03/06 | 2-0 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ❌ | 2025/02/26 | 1-17 | [萌新集团](https://ws.tsl.rocks/corp/cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224/) |
| ❌ | 2025/02/14 | 2-12 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/01/20 | 3-0 | [一根飞机](https://ws.tsl.rocks/corp/459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0/) |
| ✅ | 2025/01/14 | 3-1 | [Stargroup](https://ws.tsl.rocks/corp/cf430206a6a585f302ac5d76adf50b780f002f52ebbb82b323f933f5a0a25c4f/) |
| ❌ | 2025/01/09 | 0-14 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2025/01/02 | 6-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ❌ | 2024/12/25 | 2-9 | [🌪TORNADO](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ❌ | 2024/12/19 | 1-6 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ✅ | 2024/11/27 | 1-0 | [Alpha to Omega](https://ws.tsl.rocks/corp/2b3694014264240c8c0d1bb6a20e9d120dff2b6680c98b4e06e34bfd489f9da6/) |

---
Corporation ID: 701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1761892425"></span>
</div>