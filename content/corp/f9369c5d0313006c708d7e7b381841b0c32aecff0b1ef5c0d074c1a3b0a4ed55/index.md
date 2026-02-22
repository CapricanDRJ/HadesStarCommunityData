---
title: ​龙的传人
description: W:15 L:18 D:2 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 13 - 1 **Свободный флот**
date: 2026-02-18T09:44:22.000Z
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
| ELO Regular | 1222 🔺  (16)|
| ELO Competitive | 1387 🔺  (24)|
| Total Matches | 35 |
| Wins | 15 |
| Losses | 18 |
| Draws | 2 |
| Streak | 2 |
| Streak Record | 2 |
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
        let timestamps = [1770975862,1770953484,1770381442,1770354404,1769760830,1769747167,1769178075,1769110251,1768554328,1768520385,1767917964,1767914960,1767224219,1767191174,1766708377,1766702367,1766110161,1766104755,1765523080,1765493041,1764895413,1764888203,1764283011,1764282294,1763702250,1763677919,1763110066,1763072517,1762472815,1762468009,1761834349,1761820527,1761322975,1761307949,1760856838];

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
| [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) | 0 | 1 | 1 | 2 |
| [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) | 0 | 2 | 0 | 2 |
| [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) | 0 | 2 | 0 | 2 |
| [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/18 | 13-1 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2026/02/18 | 15-0 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ↔️ | 2026/02/11 | 10-10 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2026/02/11 | 0-23 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2026/02/04 | 1-6 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ❌ | 2026/02/04 | 0-19 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2026/01/28 | 11-2 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2026/01/27 | 1-29 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2026/01/21 | 0-33 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2026/01/20 | 8-16 | [Grand Mechanism](https://ws.tsl.rocks/corp/cdae35a4dff3b9b84fa6e79966de8f58259e9ea95a366abeaa8a103815dfa7b3/) |
| ❌ | 2026/01/14 | 4-15 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2026/01/13 | 2-16 | [Crucible](https://ws.tsl.rocks/corp/778178a7255ba7f4c8e2fdeb41fb777fb90ecf6e84a3ba79431f055f869521c6/) |
| ❌ | 2026/01/05 | 4-15 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ✅ | 2026/01/05 | 18-0 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ✅ | 2025/12/31 | 32-3 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/12/30 | 1-27 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ❌ | 2025/12/24 | 5-6 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/12/24 | 14-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/12/17 | 9-0 | [아베노노](https://ws.tsl.rocks/corp/b6a4ffffbabc8bf90d3ae19467aa6ce98c4a3ceb136af04fd24a43406f8f830f/) |
| ❌ | 2025/12/16 | 4-20 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/12/10 | 40-0 | [星空漫游者\-GR](https://ws.tsl.rocks/corp/4c0218d564bcccb3d451212b7c22ebb3c4bead385379deb4aae2d816d2521a0e/) |
| ✅ | 2025/12/09 | 20-0 | [Экватор](https://ws.tsl.rocks/corp/53fa2893f5be7a758b9acc7250a6d1fc6becb145e24287ab980c841f61b0312d/) |
| ❌ | 2025/12/02 | 6-7 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/12/02 | 11-0 | [U\.N\.S\.C](https://ws.tsl.rocks/corp/70dea9b99e388e4ecc15b483cde11adecf8126fc5fd8976564ee112bd466c1ac/) |
| ✅ | 2025/11/26 | 21-9 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/11/25 | 0-3 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ✅ | 2025/11/19 | 5-3 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2025/11/18 | 0-11 | [Stargate Sg7](https://ws.tsl.rocks/corp/f0fadd303b5cb5e09aa473359c0f11f4e077acf35ab94cef2c850d3fa8162e81/) |
| ✅ | 2025/11/11 | 25-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ↔️ | 2025/11/11 | 3-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/11/04 | 9-0 | [Space Invaders](https://ws.tsl.rocks/corp/aad5929a4d7c718c994b2c0d8de9becca4653d6e22d5b9b66aef4fb88a6caced/) |
| ❌ | 2025/11/04 | 0-23 | [DOMOVINA](https://ws.tsl.rocks/corp/00af6c9318ddf16a1bb684310776fee9681a22f01c1649941b799556a0bb6fb6/) |
| ❌ | 2025/10/29 | 0-6 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ✅ | 2025/10/29 | 19-1 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ❌ | 2025/10/24 | 0-11 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |

---
Corporation ID: f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771407862"></span>
</div>