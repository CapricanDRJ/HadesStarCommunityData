---
title: ​New YuGiOh
description: W:22 L:2 D:2 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 3 - 1 **pérola negra **
date: 2025-04-30T20:35:00.000Z
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
| ELO Regular | 1394 🔺  (68)|
| ELO Competitive | 1427 🔺  (151)|
| Total Matches | 26 |
| Wins | 22 |
| Losses | 2 |
| Draws | 2 |
| Streak Record | 7 |
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
        let timestamps = [1745613300,1745610595,1745140606,1744929054,1744628252,1744461772,1744110187,1743924749,1743596876,1743463158,1742746369,1742042536,1741438548,1740837854,1740243772,1739644542,1739638230,1739194401,1739192898,1738758363,1738752353,1738320195,1737737534,1737294308,1736788827,1734971054];

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
| ✅ | 2025/04/30 | 3-1 | [pérola negra ](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ❌ | 2025/04/30 | 0-8 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/25 | 5-2 | [KEPLER\-442  b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ✅ | 2025/04/22 | 14-0 | [Space explorers](https://ws.tsl.rocks/corp/8a387e84dad1e95c4c6181396a9e8c08c485f35eba5ca1e35f89a5530ca5b8a5/) |
| ✅ | 2025/04/19 | 3-2 | [G\.02](https://ws.tsl.rocks/corp/3d66e65d60badaec626f25167e924ca012f6a859eee35b41a49a6e00ded7c124/) |
| ✅ | 2025/04/17 | 10-0 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ✅ | 2025/04/13 | 3-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ✅ | 2025/04/11 | 9-0 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ↔️ | 2025/04/07 | 4-4 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2025/04/05 | 16-0 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2025/03/28 | 15-4 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/03/20 | 20-2 | [中央山脈礦工勞動部](https://ws.tsl.rocks/corp/c76c16c18a4d8c5a2d28b213f59db208dec670f2f230700e69fd411c8f962ea2/) |
| ✅ | 2025/03/13 | 17-2 | [星际造梦](https://ws.tsl.rocks/corp/aa25ebf7f012818b7ee0d4ed4bef10a7f6c2a22b528584e91d5b3a78355eeabd/) |
| ✅ | 2025/03/06 | 16-0 | [百万繁星](https://ws.tsl.rocks/corp/4ddca7117df39403f5055b55a86d5a97490a720792aa5efc7d35c5356fbdd4c8/) |
| ✅ | 2025/02/27 | 15-0 | [RDR2](https://ws.tsl.rocks/corp/5deea0e4b08770c5b17ceff812d58a60a03c2734dc65de38966b4801fa8a14dd/) |
| ✅ | 2025/02/20 | 5-0 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2025/02/20 | 0-2 | [萌新集团](https://ws.tsl.rocks/corp/cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224/) |
| ✅ | 2025/02/15 | 10-0 | [方星集团](https://ws.tsl.rocks/corp/6e29868db27043e07c83b3dbde6f5982a9bad1b7857a5ee1ef05e8b9a6d245c0/) |
| ✅ | 2025/02/15 | 15-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/02/10 | 14-0 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ↔️ | 2025/02/10 | 0-0 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2025/02/05 | 13-0 | [U\.Y\.E\.U\.](https://ws.tsl.rocks/corp/504f779e55c2d1bc5ff35b4540c0bb60421bd8bce70c3eb0caf45fd73915ec86/) |
| ✅ | 2025/01/29 | 15-0 | [RED STAR CORP](https://ws.tsl.rocks/corp/cac02bd33337307b124bc868304cfc75cf4f0148d825518b2f24f1236431cf75/) |
| ✅ | 2025/01/24 | 10-0 | [StarFun](https://ws.tsl.rocks/corp/641dbdde520393710db56ceb7acd0035160eb5cba4e3cc41a956b7c147600d5c/) |
| ✅ | 2025/01/18 | 18-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2024/12/28 | 9-3 | [华夏联盟](https://ws.tsl.rocks/corp/2c648f8c6a0963f1a86b1a1ca787f67c02ee58838a809427b68d3546b89078ac/) |

---
Corporation ID: 14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1746045300"></span>
</div>