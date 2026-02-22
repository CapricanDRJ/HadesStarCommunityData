---
title: ​数字星际集团
description: W:8 L:11 D:1 Bonus ❌ 5%
image: ./favicon.png
Summary: ❌ 0 - 2 **Red Alliance**
date: 2024-10-27T19:18:47.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=yellow><i><size=115>首席干事：郑少逸</i>   <color=green><size=95>代理首席：
cIz    等级到40为高级成员，等级到70为干事   友团：深空猫星人   黑名单：冰仙子<color=purple>  <size=
700>本团QQ福利群<b>763886797</b><color=red><size=920>不要捐旗舰
```
<br>

### [Discord](https://discord.gg/数)
### Whitestar Bonus ❌ 5%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1137 🔻  (-15)|
| ELO Competitive | 1157 🔻  (-12)|
| Total Matches | 20 |
| Wins | 8 |
| Losses | 11 |
| Draws | 1 |
| Streak Record | 3 |
| Flagship | 2 |

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
        let timestamps = [1729624727,1728739353,1728022039,1726044786,1725542750,1725087803,1718158428,1713691800,1713229618,1712765680,1712319656,1711856429,1711361242,1710852092,1710362480,1709804196,1709370966,1708679496,1708222230,1707126987];

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
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/10/27 | 0-2 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/10/17 | 0-8 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/10/09 | 2-4 | [•\|•](https://ws.tsl.rocks/corp/a3864fad7e4ba08611eda264a7934afe237a2f313a23b12dcce9db0a96a09daf/) |
| ❌ | 2024/09/16 | 0-8 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2024/09/10 | 6-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/09/05 | 4-1 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2024/06/17 | 0-19 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ❌ | 2024/04/26 | 0-7 | [中国星系集团](https://ws.tsl.rocks/corp/8521b52d3ab48b0685dcdae05e757436301fff9ecc1b4e9e96d1dba5736f894a/) |
| ❌ | 2024/04/21 | 0-4 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ✅ | 2024/04/15 | 7-2 | [Neutro Corpo](https://ws.tsl.rocks/corp/a6564507c74a5de54d9d1b3f6f3eef4018d03d6e858aa986831e1d8b4e6a6726/) |
| ✅ | 2024/04/10 | 6-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2024/04/05 | 5-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |
| ❌ | 2024/03/30 | 0-7 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2024/03/24 | 4-0 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |
| ❌ | 2024/03/18 | 1-3 | [Core Systems](https://ws.tsl.rocks/corp/66dfd39587403b544abf2908638162e60a09ff0dfdfebee6265d41ba2a6ab00a/) |
| ↔️ | 2024/03/12 | 3-3 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2024/03/07 | 3-0 | [星光禁卫](https://ws.tsl.rocks/corp/8a3e5d55227ad679805b549aca87a2bc5acb1215ccd2af913592418385eccd25/) |
| ❌ | 2024/02/28 | 2-3 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ❌ | 2024/02/23 | 0-5 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ✅ | 2024/02/10 | 1-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |

---
Corporation ID: ccbf6be33652cb1b91bc9047b966ffdd6b313cc569d1e0a9fb832e6e8dc1d361

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1730056727"></span>
</div>