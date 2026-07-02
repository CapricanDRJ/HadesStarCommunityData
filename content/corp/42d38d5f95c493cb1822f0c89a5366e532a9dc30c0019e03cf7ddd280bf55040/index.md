---
title: ​第四星际
description: W:28 L:14 D:3 Bonus ❌ 8%
image: ./favicon.png
Summary: ❌ 0 - 28 **Повстанцы Хаоса**
date: 2024-10-06T05:23:59.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
本团秉承共产主义原则，互帮互助，欢迎各位加入。欢迎各位来到第四星际（绛紫星云）的朋友们！本团为绛紫星（共产星际）的萌新团，红活500水免费
开放集团福利极高、社区氛围好，欢迎各位大佬萌新加入绛紫星的大家庭禁止骂人、人身攻击，不定时开白
```
<br>

### Whitestar Bonus ❌ 8%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1287 🔻  (-8)|
| ELO Competitive | 1396 🔻  (-11)|
| Total Matches | 45 |
| Wins | 28 |
| Losses | 14 |
| Draws | 3 |
| Streak Record | 7 |
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
        let timestamps = [1727760239,1726496157,1725957646,1725511403,1725008977,1724245087,1723379599,1721896560,1721608673,1721382081,1721135069,1720852844,1720663796,1720250268,1720160117,1719588828,1719068646,1718635910,1718197603,1717713682,1717697450,1717262848,1717234288,1716822283,1716691857,1716290151,1716242688,1715210033,1715187498,1714599408,1714578373,1714127666,1713494334,1713345299,1712809313,1712337797,1711871752,1710077333,1709606496,1708689111,1708049961,1707412755,1706872281,1706120096,1705589382];

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
| [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) | 1 | 1 | 0 | 2 |
| [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/10/06 | 0-28 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2024/09/21 | 3-22 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2024/09/15 | 3-33 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/09/10 | 2-14 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ↔️ | 2024/09/04 | 15-15 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2024/08/26 | 17-1 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ✅ | 2024/08/16 | 10-4 | [Novana Gaming](https://ws.tsl.rocks/corp/073bc5604115e6eb4df318ba3c7a80d782d26f83d70723c5f15b6453ce690a08/) |
| ✅ | 2024/07/30 | 5-4 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/07/27 | 0-4 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/07/24 | 6-1 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ❌ | 2024/07/21 | 2-10 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ↔️ | 2024/07/18 | 3-3 | [PDC](https://ws.tsl.rocks/corp/3cfc5c94fb18b34d3a1018bfbf6d4211d3cfb18ebb02bf7784cebc1e3627de4a/) |
| ✅ | 2024/07/16 | 11-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2024/07/11 | 2-8 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ✅ | 2024/07/10 | 9-6 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2024/07/03 | 14-3 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2024/06/27 | 14-6 | [Pixies](https://ws.tsl.rocks/corp/fe3875cc3bc7cd97ee3d418bb35d69d8ec90da355cbec2dfb7a364387e021240/) |
| ✅ | 2024/06/22 | 17-3 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/06/17 | 14-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/06/11 | 1-8 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2024/06/11 | 16-0 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ❌ | 2024/06/06 | 0-16 | [Lacuna Academy](https://ws.tsl.rocks/corp/ed67ca44432a8fad3aec6fab3e7f305d394d2b41844391fd29e1ce2b316b336b/) |
| ❌ | 2024/06/06 | 0-8 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ✅ | 2024/06/01 | 7-1 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ✅ | 2024/05/31 | 11-0 | [Quantum Web](https://ws.tsl.rocks/corp/5f0fb485dfc36997fd3fbec2b4f854ed3bd25b16e2500626b9348a1e12d2b796/) |
| ↔️ | 2024/05/26 | 3-3 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2024/05/25 | 13-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/05/13 | 2-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ❌ | 2024/05/13 | 3-18 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2024/05/06 | 3-4 | [The Syndicate](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ✅ | 2024/05/06 | 6-5 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/05/01 | 3-8 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/04/24 | 7-0 | [星际集团](https://ws.tsl.rocks/corp/5487e6c91bbb3348790aa90be274a471189edab52d1567d86412023e0e501871/) |
| ✅ | 2024/04/22 | 4-0 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2024/04/16 | 12-0 | [Quantum Jumpers](https://ws.tsl.rocks/corp/2c5d82b8370a36c30a396c7a1b894f347a4698e2393f9e0d31e9ad6c465e2ae2/) |
| ✅ | 2024/04/10 | 15-4 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/04/05 | 13-0 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ❌ | 2024/03/15 | 0-6 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ✅ | 2024/03/10 | 10-0 | [🌪TORNADO](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ✅ | 2024/02/28 | 14-0 | [遨游星空 kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ✅ | 2024/02/21 | 9-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/02/13 | 9-0 | [mijael siuuuuuu](https://ws.tsl.rocks/corp/45ca23a78c96de3dd53a33f7c9f029b7dc5edf0fb7f15e5d46f1893c68d28334/) |
| ✅ | 2024/02/07 | 9-4 | [神仙'](https://ws.tsl.rocks/corp/2a865ec8658a1843c5442405aa7be1fd9e44cf058568802ca1de6610499fa973/) |
| ✅ | 2024/01/29 | 22-2 | [Richthofen](https://ws.tsl.rocks/corp/e0208115ff38526d361b427f8dbd68002d9f4707960809ce5ec4ffc8d2389a18/) |
| ✅ | 2024/01/23 | 27-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |

---
Corporation ID: 42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1728192239"></span>
</div>