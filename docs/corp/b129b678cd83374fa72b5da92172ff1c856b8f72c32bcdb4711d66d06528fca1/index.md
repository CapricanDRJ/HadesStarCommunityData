---
layout: page
title: ​1st/Ave/Junkie2
description: W:21 L:27 D:1 Bonus ❌
image: ./favicon.png
date: 1733511265
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Welcome! We are looking for new and experienced players interested in
 Red Star/White Star, and we have decent Blue Star tips! Please stay 
active! We are actively looking for White Star Players
```
### [Discord](https://discord.gg/m9xzuMbpqS)
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1186 🔻  (672)|
| ELO Competitive | 1226 🔻  (465)|
| Total Matches | 49 |
| Wins | 21 |
| Losses | 27 |
| Draws | 1 |
| Streak Record | 4 |
| Flagship | 5 |

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
        let timestamps = [1733079265,1730806579,1730219114,1729637649,1729106944,1728512320,1727912596,1725271618,1724613520,1723906703,1723317097,1722774372,1720647870,1719758313,1718986631,1718488964,1717968015,1717456118,1716944303,1716483333,1715938021,1715427851,1714991902,1714517078,1714033324,1713314655,1712835683,1712317963,1711825482,1710848637,1710404538,1709080359,1708257001,1707822779,1707343947,1706885805,1706403481,1705943997,1705508848,1704972434,1704470876,1703989758,1703265499,1702605328,1702005129,1701532074,1700765078,1700165491,1699585003];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) | 1 | 1 | 0 | 2 |
| [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) | 0 | 2 | 0 | 2 |
| [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) | 1 | 1 | 0 | 2 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/12/06 | 1-23 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2024/11/10 | 0-18 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/11/03 | 2-18 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/10/27 | 24-3 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2024/10/21 | 26-2 | [Spaceforce](https://ws.tsl.rocks/corp/24c4541d371aa6efad58f5141355ec6ad643e45d05957800075cdefc583cb805/) |
| ✅ | 2024/10/14 | 21-0 | [Укр інтроверти](https://ws.tsl.rocks/corp/d572c676473ca035b64333d3b419fb4da007677b96f6a401710c4b9249a193d5/) |
| ✅ | 2024/10/07 | 3-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/09/07 | 1-22 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2024/08/30 | 5-4 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/08/22 | 1-26 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ❌ | 2024/08/15 | 4-20 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/08/09 | 1-31 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ❌ | 2024/07/15 | 0-13 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2024/07/05 | 0-32 | [GalaxyNova](https://ws.tsl.rocks/corp/d3df4ca63632d4113f93581cd3629f93a8b06733db25c5ea94da3e7889cd8b94/) |
| ❌ | 2024/06/26 | 0-31 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ✅ | 2024/06/20 | 13-8 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2024/06/14 | 7-11 | [Галактика Зла](https://ws.tsl.rocks/corp/1495d852070d8182229d3cb26e828265d4525a9ef97a9b377415b803b01d6101/) |
| ❌ | 2024/06/08 | 10-13 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/06/03 | 1-34 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2024/05/28 | 0-27 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ✅ | 2024/05/22 | 16-3 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ✅ | 2024/05/16 | 18-4 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ❌ | 2024/05/11 | 8-12 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ✅ | 2024/05/05 | 4-3 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2024/04/30 | 11-5 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ↔️ | 2024/04/22 | 19-19 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ✅ | 2024/04/16 | 7-3 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2024/04/10 | 24-4 | [Los Unidos ](https://ws.tsl.rocks/corp/963d98b9a64c86c9edc86daabe201f5d7e1f42bbeb0f45671b44a87e0b288e91/) |
| ✅ | 2024/04/04 | 16-2 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ❌ | 2024/03/24 | 0-29 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2024/03/19 | 3-9 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ❌ | 2024/03/04 | 5-12 | [Jesus Followers](https://ws.tsl.rocks/corp/a2f43b4cf6c5241a87f465e98dd7b6414941bc4870171798297f6c834f16df41/) |
| ❌ | 2024/02/23 | 0-38 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ✅ | 2024/02/18 | 16-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2024/02/12 | 22-5 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2024/02/07 | 3-21 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/02/02 | 14-3 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/01/27 | 0-13 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ✅ | 2024/01/22 | 11-9 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ✅ | 2024/01/16 | 16-0 | [深空补给港](https://ws.tsl.rocks/corp/6113fcbe4739d68f06b6a167df2788aa4582546dd0e0de38a088dd7797e0b501/) |
| ❌ | 2024/01/10 | 3-33 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/01/05 | 11-0 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ❌ | 2023/12/27 | 0-13 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ❌ | 2023/12/20 | 5-9 | [exirium](https://ws.tsl.rocks/corp/4981522e08ce38bcec7b2a189b3bfba9c072a615eea490a55c645344ac975f54/) |
| ❌ | 2023/12/13 | 16-20 | [BSO Academy](https://ws.tsl.rocks/corp/d032f0193d9b3acb579e4e6525a5c8b68f5ec9526dd9644bd45fda747013e876/) |
| ❌ | 2023/12/07 | 6-7 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2023/11/28 | 10-8 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2023/11/21 | 2-11 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2023/11/15 | 17-1 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |

---
Corporation ID: b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>