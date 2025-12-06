---
title: ​RED STAR
description: W:22 L:10 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 23 - 0 **The Killers**
date: 2025-12-06T12:55:40.000Z
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
| ELO Regular | 1327 🔺  (11)|
| ELO Competitive | 1357 🔺  (10)|
| Total Matches | 33 |
| Wins | 22 |
| Losses | 10 |
| Draws | 1 |
| Streak Record | 9 |
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
        let timestamps = [1764593740,1764132490,1763682245,1763572762,1763218230,1763057494,1762770283,1762336703,1762200610,1761854721,1761711166,1761385767,1760934959,1760809757,1760502902,1760133316,1760067513,1759659194,1759613914,1759167621,1759136069,1758685392,1758520746,1758212408,1758041760,1757777957,1757544506,1757332390,1757064376,1756878996,1756623302,1756446488,1756010514];

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
| [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) | 0 | 2 | 0 | 2 |
| [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/12/06 | 23-0 | [The Killers](https://ws.tsl.rocks/corp/67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512/) |
| ❌ | 2025/12/01 | 1-36 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ✅ | 2025/11/25 | 17-0 | [Defiant wolfs](https://ws.tsl.rocks/corp/558bd74298307780e4bf116e0a0ba7ca75cfff625006c3fb24bca431d5b10363/) |
| ✅ | 2025/11/24 | 11-3 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2025/11/20 | 9-3 | [U\.N\.S\.C](https://ws.tsl.rocks/corp/70dea9b99e388e4ecc15b483cde11adecf8126fc5fd8976564ee112bd466c1ac/) |
| ↔️ | 2025/11/18 | 3-3 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ✅ | 2025/11/15 | 9-0 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ✅ | 2025/11/10 | 4-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/11/08 | 8-0 | [Zeon](https://ws.tsl.rocks/corp/c77313bb3ebd322f7b4da9e2247e3b95fb1c75ff54c2e7846f9c2d6a2cd02846/) |
| ✅ | 2025/11/04 | 9-0 | [W\.A\.L\.R\.U\.S\.](https://ws.tsl.rocks/corp/3360cfbc27ced65ef69f7de87380357cd8d4a316d8701e67b93a624d481bf313/) |
| ✅ | 2025/11/03 | 6-0 | [出入り自由](https://ws.tsl.rocks/corp/daf4851a492fbf57ed1ab085e686bf23827078a6a11ce78cd1ea77d355668704/) |
| ✅ | 2025/10/30 | 4-0 | [蓝星集团](https://ws.tsl.rocks/corp/9d718b80beaf9682ccde175169372b72f70b75bb593770762dfc9e990cbd098a/) |
| ✅ | 2025/10/25 | 12-0 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ✅ | 2025/10/23 | 10-0 | [Disintegrators](https://ws.tsl.rocks/corp/cbdef8da60308e24e459a21944778e7c06fa40927f67ecbbf136e3c899f717ae/) |
| ✅ | 2025/10/20 | 12-0 | [хранилище](https://ws.tsl.rocks/corp/2bfe6c20be9914b41035d73d5d57975a69b4b1cac238eae823033fc12846fa05/) |
| ❌ | 2025/10/15 | 2-6 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ✅ | 2025/10/15 | 8-0 | [银河帝国（GE）](https://ws.tsl.rocks/corp/09414c731b95eefa36b6408f61d483856d4cc0a4bf786e651c0c1f564fac5c1a/) |
| ✅ | 2025/10/10 | 13-0 | [U\.Y\.E\.U\.](https://ws.tsl.rocks/corp/504f779e55c2d1bc5ff35b4540c0bb60421bd8bce70c3eb0caf45fd73915ec86/) |
| ✅ | 2025/10/09 | 6-3 | [Aeon](https://ws.tsl.rocks/corp/5e4b3d6d6f08dee95abbb170211af935c564afdbc3039ee0a6f333070688724e/) |
| ✅ | 2025/10/04 | 6-1 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ❌ | 2025/10/04 | 0-6 | [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) |
| ❌ | 2025/09/29 | 3-9 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ✅ | 2025/09/27 | 11-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2025/09/23 | 2-40 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ✅ | 2025/09/21 | 5-0 | [Star Hunters](https://ws.tsl.rocks/corp/55caab6fc860d293950fbff3b0ec848a38a19bea2c3c637c110790f7cb8706e5/) |
| ✅ | 2025/09/18 | 9-6 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ❌ | 2025/09/15 | 1-2 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2025/09/13 | 8-0 | [Red Star Order](https://ws.tsl.rocks/corp/e7ddc9a9ee70dc16ae297eae8cf6846d40ad548753203d079480d2abee66d9a7/) |
| ❌ | 2025/09/10 | 2-12 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/09/08 | 3-10 | [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) |
| ❌ | 2025/09/05 | 0-16 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/09/03 | 14-0 | [仙女座星雲红活壹号](https://ws.tsl.rocks/corp/bee285778d7210bbaca39c7a461392ab7cf3495b5afef61fd9ef64a4709416aa/) |
| ❌ | 2025/08/29 | 2-13 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |

---
Corporation ID: 245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1765025740"></span>
</div>