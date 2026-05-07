---
title: ​REAPERS
description: W:29 L:6 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ↔️ 1 - 1 **星际联邦**
date: 2026-05-06T07:08:22.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1362 🔻  (-4)|
| ELO Competitive | 1454 🔻  (-5)|
| Total Matches | 36 |
| Wins | 29 |
| Losses | 6 |
| Draws | 1 |
| Streak Record | 20 |
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
        let timestamps = [1777619302,1777612993,1777109936,1777052655,1776573456,1776543419,1776083452,1776080447,1775569094,1775550467,1775084784,1775047826,1774609773,1774164827,1773671196,1773151445,1772616699,1772148911,1771715099,1771264448,1770829401,1770340286,1770098134,1769819586,1769312699,1768828350,1768331097,1767818586,1767349800,1766791905,1766263397,1765794691,1765268900,1764760201,1764240341,1763591092];

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
| [The Killers](https://ws.tsl.rocks/corp/67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512/) | 2 | 0 | 0 | 2 |
| [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) | 2 | 0 | 0 | 2 |
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ↔️ | 2026/05/06 | 1-1 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ❌ | 2026/05/06 | 3-6 | [民主团](https://ws.tsl.rocks/corp/900529bbc3b52d519c9af29a274b6bb263137509cbf25f73d82a2c0190d0bd53/) |
| ❌ | 2026/04/30 | 3-7 | [苏维埃社会主义共和国联盟](https://ws.tsl.rocks/corp/f301738ae929bb73b1a17302d79ee9b67c5d787d387af1be02194050f0390aa2/) |
| ❌ | 2026/04/29 | 0-15 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ✅ | 2026/04/24 | 11-0 | [Shadow Garden](https://ws.tsl.rocks/corp/28b4278640ec01588546df3037787f4428e677b2a320fa554f61dbf4bac4007d/) |
| ✅ | 2026/04/23 | 9-0 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |
| ✅ | 2026/04/18 | 3-1 | [The Killers](https://ws.tsl.rocks/corp/67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512/) |
| ✅ | 2026/04/18 | 14-5 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ✅ | 2026/04/12 | 9-0 | [中国人民联盟](https://ws.tsl.rocks/corp/4fadcca4df7e52a4824f29d77a657e86c6dac7d39f325d3e5ebe5d6128839e47/) |
| ✅ | 2026/04/12 | 21-0 | [Dominion](https://ws.tsl.rocks/corp/b21694860ba07663daf94aff0e0f35e80ab28f41fd94d70e3caee0aa6bacbb12/) |
| ❌ | 2026/04/06 | 3-5 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2026/04/06 | 24-0 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2026/04/01 | 20-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2026/03/27 | 18-0 | [銀河星际集团](https://ws.tsl.rocks/corp/c5e6943dbc9554726445e6a9361c6dee76ed322b9c4e8925e91c5aef05d60411/) |
| ✅ | 2026/03/21 | 24-0 | [Halcon español](https://ws.tsl.rocks/corp/ab9c3038dcf2b019ba662007ab1e50b2d80e0eb8e7a65e57dd5260a6d2e80ff9/) |
| ✅ | 2026/03/15 | 24-1 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ✅ | 2026/03/09 | 21-0 | [维埃星云氮氢钨钽](https://ws.tsl.rocks/corp/4f76f07e3376e9848983a4effbb2deca1f3d4602a1ed8c0346183dc7a589c40a/) |
| ✅ | 2026/03/03 | 20-0 | [Free Star](https://ws.tsl.rocks/corp/3970e813bec9126438bee62e337f181cf80eef7babc4a233b5b3df6003a3b9cf/) |
| ✅ | 2026/02/26 | 17-0 | [Star Hunters](https://ws.tsl.rocks/corp/55caab6fc860d293950fbff3b0ec848a38a19bea2c3c637c110790f7cb8706e5/) |
| ✅ | 2026/02/21 | 19-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ✅ | 2026/02/16 | 8-7 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |
| ✅ | 2026/02/11 | 6-0 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2026/02/08 | 2-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2026/02/05 | 8-0 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2026/01/30 | 5-1 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |
| ✅ | 2026/01/24 | 6-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2026/01/18 | 6-0 | [The Killers](https://ws.tsl.rocks/corp/67cc028d0db771a5c889d615f9746561896830087b7b26ff3557a88e16c6b512/) |
| ✅ | 2026/01/12 | 9-0 | [Selerium](https://ws.tsl.rocks/corp/fe891afa0c4737cff1e5e7b8cd019f384c5c886148577182a92ef575e56c2490/) |
| ✅ | 2026/01/07 | 9-0 | [Imperio Galacti](https://ws.tsl.rocks/corp/95f1c11e4823279fa171bfd0e76a03db2e35eb4c88e28b70e51e83ff2d767d4c/) |
| ✅ | 2025/12/31 | 8-0 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ✅ | 2025/12/25 | 6-0 | [彩虹神圣太空队](https://ws.tsl.rocks/corp/65a85756db048115b30d5db1f341e02c1efa0c8baf3a39ae6b57db8b0c52a0d9/) |
| ❌ | 2025/12/20 | 5-9 | [Deathwatch](https://ws.tsl.rocks/corp/721ab2f79e826f2b11873555f03672f2e792d867532b453e179dc4dd9cf24704/) |
| ✅ | 2025/12/14 | 4-0 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2025/12/08 | 5-0 | [End of day](https://ws.tsl.rocks/corp/677cda4ea456531f2241fddba358b021389738311f4b62e0275614728e0a19b2/) |
| ✅ | 2025/12/02 | 2-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2025/11/24 | 1-7 | [Onaka Gang](https://ws.tsl.rocks/corp/ad0c0977768d3d0781594cf90c5946a58f19d088b47183d2eac245cb9b768b31/) |

---
Corporation ID: 002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1778051302"></span>
</div>