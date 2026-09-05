---
title: ​九州·养老
description: W:20 L:23 D:1 Bonus ✅ 38%
image: ./favicon.png
Summary: ❌ 0 - 12 **无人深空**
date: 2026-09-03T09:05:40.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 38%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1210 🔻  (-13)|
| ELO Competitive | 1442 🔺  (22)|
| Total Matches | 44 |
| Wins | 20 |
| Losses | 23 |
| Draws | 1 |
| Streak Record | 3 |
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
        let timestamps = [1787994340,1787990134,1787552390,1787541658,1787106850,1787070792,1786624772,1786624604,1786189568,1786126777,1785744035,1785581785,1785287969,1785142249,1784823508,1784708145,1784288920,1784266792,1783834475,1783822760,1783389552,1783382944,1782916070,1782895942,1782478347,1782429876,1782037263,1781866595,1781543924,1781407499,1781100480,1780968895,1780667273,1780490333,1780168890,1780031890,1779712498,1779581550,1779252481,1779117899,1778808127,1778638769,1778337056,1777890589];

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
| [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) | 1 | 2 | 0 | 3 |
| [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) | 0 | 2 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/09/03 | 0-12 | [无人深空](https://ws.tsl.rocks/corp/932e5b765751f58f44617f33980535a067e92530b0243b0a983daa4f45dc03fc/) |
| ✅ | 2026/09/03 | 3-2 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ✅ | 2026/08/29 | 17-2 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2026/08/29 | 0-3 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2026/08/24 | 6-18 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2026/08/23 | 0-20 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2026/08/18 | 0-3 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ❌ | 2026/08/18 | 2-9 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ✅ | 2026/08/13 | 6-3 | [Hangout Spot](https://ws.tsl.rocks/corp/7e4b7aa18e4a302cbbac1e1b0b3118812bec5fb4846a495d2c3fb6d3dd4a8b13/) |
| ✅ | 2026/08/12 | 11-7 | [Jesus Followers](https://ws.tsl.rocks/corp/a2f43b4cf6c5241a87f465e98dd7b6414941bc4870171798297f6c834f16df41/) |
| ✅ | 2026/08/08 | 3-2 | [伪天星集团](https://ws.tsl.rocks/corp/53966bd236f5b18d9f651eff62ee3583704ef3016e1caa8ec7252ee1ed810231/) |
| ❌ | 2026/08/06 | 3-5 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ✅ | 2026/08/03 | 5-2 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ❌ | 2026/08/01 | 2-19 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ❌ | 2026/07/28 | 6-8 | [Ereboros](https://ws.tsl.rocks/corp/659c9483e8d58c64c3232eaad0b4f15ed93734dd2bef77a111251a4360163e55/) |
| ❌ | 2026/07/27 | 6-16 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ↔️ | 2026/07/22 | 0-0 | [星空夜](https://ws.tsl.rocks/corp/fcd78f9dbaf75929d1d9b88812f7f88e35491d7f5873406fedb47803c8d881b1/) |
| ❌ | 2026/07/22 | 7-17 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2026/07/17 | 3-34 | [Team Elite](https://ws.tsl.rocks/corp/61bb19b2ab1d13a5831808e0f06d417d74a87fc04d235e3ec7c429f89693465b/) |
| ✅ | 2026/07/17 | 9-3 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ✅ | 2026/07/12 | 6-2 | [白虹贯日](https://ws.tsl.rocks/corp/099d8a6a1a96f71e6880717b00f60408e602eee4a4c37ddab363966664b099f9/) |
| ❌ | 2026/07/12 | 3-30 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ✅ | 2026/07/06 | 6-5 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ✅ | 2026/07/06 | 6-3 | [肥橙子](https://ws.tsl.rocks/corp/89ea001d8666ade05d452a0f136622d2451e614c357e549a6d4dddc6d019ba9c/) |
| ❌ | 2026/07/01 | 0-34 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ✅ | 2026/06/30 | 5-0 | [Mogo](https://ws.tsl.rocks/corp/e441c29b121d5bd55267da6f880158bd37899d37af6830c019cc47f5bf634133/) |
| ❌ | 2026/06/26 | 2-36 | [Critical Mass](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2026/06/24 | 5-3 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2026/06/20 | 7-9 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ✅ | 2026/06/19 | 7-0 | [天之始](https://ws.tsl.rocks/corp/74f97ab890d598e052986c864057edf4f04537ea7e142a8dc3aebcf50de4adae/) |
| ✅ | 2026/06/15 | 10-1 | [Stella☆Grow](https://ws.tsl.rocks/corp/8767272985b99b3dffd4c8482b4e7faa1c462406acd8bf16ecffb552b91422ca/) |
| ✅ | 2026/06/14 | 5-1 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ❌ | 2026/06/10 | 0-16 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2026/06/08 | 10-5 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ❌ | 2026/06/04 | 3-43 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ✅ | 2026/06/03 | 6-0 | [Dinos and cats](https://ws.tsl.rocks/corp/b00b679ccca8f078dc9b7d04f4dadbc1b63daf2737795e6018774d689779d25f/) |
| ❌ | 2026/05/30 | 4-29 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ❌ | 2026/05/29 | 0-18 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/05/25 | 2-17 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2026/05/23 | 10-2 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |
| ❌ | 2026/05/20 | 3-29 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2026/05/18 | 0-5 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2026/05/14 | 19-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2026/05/09 | 6-3 | [TerraVision](https://ws.tsl.rocks/corp/8d997224e4a58600f48f5c399ac2ec8eb20ec7994c620ff95df892bc535e3ac8/) |

---
Corporation ID: 3b143b6fd40ce6bbe0369e63a8c4466f2baa4f5346d0bbfc8b9407e58d466763

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788426340"></span>
</div>