---
title: ​自由之地
description: W:17 L:11 D:0 Bonus ✅ 36%
image: ./favicon.png
Summary: ✅ 23 - 0 **STAR TERROR CZ**
date: 2026-09-04T18:38:39.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1253 🔺  (21)|
| ELO Competitive | 1369 🔺  (24)|
| Total Matches | 28 |
| Wins | 17 |
| Losses | 11 |
| Draws | 0 |
| Streak Record | 8 |
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
        let timestamps = [1788115119,1787672871,1787571016,1787107151,1786926586,1786598351,1786454568,1786137013,1786011117,1785632864,1785516296,1785160194,1785036502,1784694929,1784535394,1784252269,1784037259,1783715811,1783568003,1783250440,1783078598,1782481351,1781768353,1781209484,1780743576,1779977812,1779448076,1778992592];

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
| [星空夜](https://ws.tsl.rocks/corp/fcd78f9dbaf75929d1d9b88812f7f88e35491d7f5873406fedb47803c8d881b1/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/09/04 | 23-0 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ❌ | 2026/08/30 | 0-4 | [Imperial Navy](https://ws.tsl.rocks/corp/3e07bbe9ec60b90d6861b7ee28cf8803a8f175db765ab57bcc8c20b4dcd3dd09/) |
| ✅ | 2026/08/29 | 27-12 | [CubeTech](https://ws.tsl.rocks/corp/87982e2827e90c530babfa485c990438d2387f8999558eb306b678bdf0d11a95/) |
| ❌ | 2026/08/24 | 2-13 | [Brethren Court](https://ws.tsl.rocks/corp/58ce9bed114bde298d77f20adf5584e22292e24f89dd59298051b01d66212ad4/) |
| ❌ | 2026/08/22 | 1-15 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2026/08/18 | 2-8 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ❌ | 2026/08/16 | 22-31 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2026/08/12 | 3-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ❌ | 2026/08/11 | 0-7 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2026/08/07 | 3-0 | [G\.O\.D 星辰](https://ws.tsl.rocks/corp/10721e169e8b825969690b94dda985f366fb24b46e81dd3faa88ef9b7585ac6a/) |
| ✅ | 2026/08/05 | 22-0 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2026/08/01 | 6-0 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ✅ | 2026/07/31 | 27-20 | [亚洲团队](https://ws.tsl.rocks/corp/c9aff5770282e84fa982a70be0c45b952f62286b7635a13df63d1615267c653e/) |
| ✅ | 2026/07/27 | 3-1 | [无人深空](https://ws.tsl.rocks/corp/932e5b765751f58f44617f33980535a067e92530b0243b0a983daa4f45dc03fc/) |
| ✅ | 2026/07/25 | 6-3 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2026/07/22 | 5-0 | [testims](https://ws.tsl.rocks/corp/0566139abdeebaf89318c68c8d63f82a5782d57ea4b322d5dfbd78a1a557d48e/) |
| ✅ | 2026/07/19 | 18-0 | [Yishun CC](https://ws.tsl.rocks/corp/74e61ec5d74099cf9d2b44f45371203030d742671222f17f41300dc23594599b/) |
| ❌ | 2026/07/15 | 1-2 | [Knights of Solo](https://ws.tsl.rocks/corp/ca874c061d1c3941f5931bd0b184d1c32396462f0fad4751e2ae5a9b15b188e5/) |
| ✅ | 2026/07/14 | 23-0 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2026/07/10 | 0-3 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ✅ | 2026/07/08 | 23-3 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2026/07/01 | 0-22 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ✅ | 2026/06/23 | 15-0 | [星空夜](https://ws.tsl.rocks/corp/fcd78f9dbaf75929d1d9b88812f7f88e35491d7f5873406fedb47803c8d881b1/) |
| ✅ | 2026/06/16 | 15-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2026/06/11 | 13-0 | [先和先知](https://ws.tsl.rocks/corp/54c8fbf9e85f95a3e28c0b3d2833d49a40758d5340c6de6d6822c6c48aa070eb/) |
| ❌ | 2026/06/02 | 0-3 | [星空夜](https://ws.tsl.rocks/corp/fcd78f9dbaf75929d1d9b88812f7f88e35491d7f5873406fedb47803c8d881b1/) |
| ✅ | 2026/05/27 | 17-12 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2026/05/22 | 15-18 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |

---
Corporation ID: 9366527781b6e83e1878fe70435b599eca95f395c04484b7862688bfce716c75

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788547119"></span>
</div>