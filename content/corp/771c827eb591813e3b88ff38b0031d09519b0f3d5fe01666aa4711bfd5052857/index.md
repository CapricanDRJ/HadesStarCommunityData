---
title: ​a超越®/a光速℡
description: W:16 L:10 D:0 Bonus ❌ 12%
image: ./favicon.png
Summary: ❌ 6 - 38 **Death Star llc\.**
date: 2025-12-23T00:22:05.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
不如黑神话悟空
```
<br>

### Whitestar Bonus ❌ 12%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1231 🔻  (-13)|
| ELO Competitive | 1296 🔻  (-9)|
| Total Matches | 26 |
| Wins | 16 |
| Losses | 10 |
| Draws | 0 |
| Streak Record | 12 |
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
        let timestamps = [1766017325,1765247871,1761785384,1739966973,1738516457,1718845369,1718843566,1718132697,1717209344,1715059205,1714740619,1714611424,1714154110,1713708544,1713274688,1712018996,1708646588,1708189391,1707733226,1707263434,1705856848,1701343936,1700882594,1700428175,1699971873,1699293221];

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
| [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/12/23 | 6-38 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2025/12/14 | 22-23 | [洛神峰](https://ws.tsl.rocks/corp/69e75c04e1e97e3e1e943a1b8bb5ebd468da38c5daf44840707bdcd1d4823540/) |
| ✅ | 2025/11/04 | 24-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ❌ | 2025/02/24 | 0-48 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2025/02/07 | 0-48 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2024/06/25 | 0-46 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/06/25 | 0-26 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2024/06/16 | 7-3 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/06/06 | 12-2 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2024/05/12 | 0-11 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2024/05/08 | 0-19 | [Dauntless](https://ws.tsl.rocks/corp/8313138d370b0b0f15dea3af851c836f9a1e1e838bf26c652c9a9831fb6b739a/) |
| ❌ | 2024/05/07 | 0-15 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/05/01 | 22-4 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ❌ | 2024/04/26 | 10-14 | [Dacia Chill](https://ws.tsl.rocks/corp/b38c6a1ce87d3b7937da53dddc33cbdfc7152ab1e5023f2308ee9c81a1633208/) |
| ✅ | 2024/04/21 | 8-0 | [喵喵喵喵喵喵喵](https://ws.tsl.rocks/corp/6b0f781319f88b96c64aa4c425eb3f834d80a1f0c3ee00918430fd71b2e5b913/) |
| ✅ | 2024/04/07 | 28-0 | [Quantum Jumpers](https://ws.tsl.rocks/corp/2c5d82b8370a36c30a396c7a1b894f347a4698e2393f9e0d31e9ad6c465e2ae2/) |
| ✅ | 2024/02/28 | 3-0 | [666](https://ws.tsl.rocks/corp/73c85bc4afbc97eb34c80ffca01f209245cad5abd35ba7ee20994ab748794e2d/) |
| ✅ | 2024/02/22 | 20-0 | [α阿尔法](https://ws.tsl.rocks/corp/0051cb18cf31f6d75dff8017ba8658dd87c5b87d0a7380e447eb68487f30dc27/) |
| ✅ | 2024/02/17 | 11-0 | [NEW HOLLAND](https://ws.tsl.rocks/corp/b080750b30e8c3b7a4c8bd483921bb8082a83d48c662683a07beba245f70c2a2/) |
| ✅ | 2024/02/11 | 18-1 | [USAR@Hadesstar](https://ws.tsl.rocks/corp/f9078ab279bc09e07910475611036038dcd3afd7840597abb5b738afbb32db33/) |
| ✅ | 2024/01/26 | 16-0 | [Goblin Squad](https://ws.tsl.rocks/corp/8157fdbc504136281be1becade034cac02082d8e81459a1ec1190bbe7a9f5331/) |
| ✅ | 2023/12/05 | 54-0 | [夢幻之星\*分盟\*](https://ws.tsl.rocks/corp/25ac58a842783eb85413a2cb4896100bd1bdad3b64dbbc3b2d2c9bdf3f878c96/) |
| ✅ | 2023/11/30 | 46-2 | [Free Star](https://ws.tsl.rocks/corp/3970e813bec9126438bee62e337f181cf80eef7babc4a233b5b3df6003a3b9cf/) |
| ✅ | 2023/11/24 | 28-0 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ✅ | 2023/11/19 | 38-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2023/11/11 | 31-3 | [纸鸢台](https://ws.tsl.rocks/corp/c4be34dcc0fcf9c2c0cef9c6f2ce31798d5435dadefaccbcb2502e65252ae677/) |

---
Corporation ID: 771c827eb591813e3b88ff38b0031d09519b0f3d5fe01666aa4711bfd5052857

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1766449325"></span>
</div>