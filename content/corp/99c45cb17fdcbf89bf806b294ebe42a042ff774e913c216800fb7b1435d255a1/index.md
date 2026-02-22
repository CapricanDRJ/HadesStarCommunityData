---
title: ​HUN TERS
description: W:39 L:18 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 29 **Lupus Regnum**
date: 2026-02-22T07:20:15.000Z
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
| ELO Regular | 1314 🔻  (-19)|
| ELO Competitive | 1561 🔻  (-14)|
| Total Matches | 57 |
| Wins | 39 |
| Losses | 18 |
| Draws | 0 |
| Streak Record | 10 |
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
        let timestamps = [1771312815,1770790344,1769837013,1769750172,1769173266,1769150732,1768631848,1768627642,1767942300,1767931480,1767344692,1767333277,1766648578,1766639265,1765955127,1765868301,1765267097,1765260188,1764739058,1764653836,1764048970,1764048369,1763444774,1762854704,1762246572,1761643563,1761030283,1760416675,1759738807,1759727691,1759209683,1759206980,1758719040,1758692902,1758098838,1758094333,1757475403,1757475403,1756874489,1756871185,1756275219,1755658332,1755061250,1754452752,1753851489,1753253219,1752634476,1752012236,1751492097,1750867699,1750435576,1749903075,1749236570,1748708010,1747426404,1746816091,1746380983];

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
| [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) | 1 | 2 | 0 | 3 |
| [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) | 0 | 2 | 0 | 2 |
| [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) | 2 | 0 | 0 | 2 |
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 0-29 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2026/02/16 | 2-17 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ✅ | 2026/02/05 | 19-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2026/02/04 | 1-18 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2026/01/28 | 3-19 | [Кузня Лютых](https://ws.tsl.rocks/corp/21880047e3784360c3b26bda00dc7c59af15ee46a8b9531fa373d6bd618a7721/) |
| ✅ | 2026/01/28 | 22-3 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2026/01/22 | 14-6 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2026/01/22 | 6-9 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ✅ | 2026/01/14 | 21-0 | [帝国长青](https://ws.tsl.rocks/corp/4f2adf2f91d724aed6a934a014ab1cc284bbfb9dcc629b2abcd1605ba368b1f6/) |
| ✅ | 2026/01/14 | 14-6 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2026/01/07 | 9-23 | [地球联合](https://ws.tsl.rocks/corp/600f9edf51df1f1afe62db4c64e95b969ac6824a6a08d1a483beaec015ba2e25/) |
| ✅ | 2026/01/07 | 19-2 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/12/30 | 27-0 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ❌ | 2025/12/30 | 6-35 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2025/12/22 | 14-1 | [Nova Time](https://ws.tsl.rocks/corp/0f1c182652387799cfc3a59082f52a2b01201b13336d84760eab107fb1934ce0/) |
| ✅ | 2025/12/21 | 24-0 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2025/12/14 | 4-11 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/12/14 | 21-1 | [Primeval Forest](https://ws.tsl.rocks/corp/03e2d2cfa328322e0da6dba2d8c79f8a8ea838538e31476677ef08eab5f0398c/) |
| ✅ | 2025/12/08 | 26-3 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ✅ | 2025/12/07 | 21-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/11/30 | 15-7 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2025/11/30 | 5-30 | [星空漫游者\-GR](https://ws.tsl.rocks/corp/4c0218d564bcccb3d451212b7c22ebb3c4bead385379deb4aae2d816d2521a0e/) |
| ✅ | 2025/11/23 | 26-6 | [WALRUS](https://ws.tsl.rocks/corp/6a6f8dddc019ed7feb25ee8e5152e3137ab79d3a60b1057a398b7282a0613e6b/) |
| ✅ | 2025/11/16 | 26-1 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2025/11/09 | 19-3 | [Сварожичи](https://ws.tsl.rocks/corp/756e76b1fa697e8ab2f40b1c5c5c93f69beeee26898a3ca128da2a7b69589093/) |
| ✅ | 2025/11/02 | 35-0 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/10/26 | 13-0 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ✅ | 2025/10/19 | 11-4 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2025/10/11 | 9-5 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2025/10/11 | 6-8 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ❌ | 2025/10/05 | 5-26 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/10/05 | 0-20 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/09/29 | 2-8 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ❌ | 2025/09/29 | 6-10 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/09/22 | 10-3 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2025/09/22 | 3-30 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/09/15 | 8-1 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/09/15 | 21-1 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/09/08 | 3-21 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/09/08 | 10-0 | [Sky](https://ws.tsl.rocks/corp/9285f76649b8d3ca4faf9a9991522efc7f51d7545a60bc8d12a65e23d548a6f1/) |
| ✅ | 2025/09/01 | 23-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2025/08/25 | 15-8 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/08/18 | 13-4 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/08/11 | 21-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/08/04 | 20-4 | [BlankBoosters](https://ws.tsl.rocks/corp/4785b4fb166ccb4b23d12d1041a31d9b52b59e5284bdf5965805338cbc1c2e33/) |
| ✅ | 2025/07/28 | 21-3 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/07/21 | 18-1 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ✅ | 2025/07/13 | 14-0 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2025/07/07 | 22-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2025/06/30 | 4-20 | [Destroyer](https://ws.tsl.rocks/corp/a577b516f316e05c647ba59ea2ff3d4b0f0980f1f2dd329bc71e48f08460a613/) |
| ❌ | 2025/06/25 | 0-24 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2025/06/19 | 20-2 | [银河帝国（GE）](https://ws.tsl.rocks/corp/09414c731b95eefa36b6408f61d483856d4cc0a4bf786e651c0c1f564fac5c1a/) |
| ✅ | 2025/06/11 | 19-0 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ✅ | 2025/06/05 | 19-0 | [暗类星座](https://ws.tsl.rocks/corp/6a471fe651abb6143cd4912e1be8133443bc06f6b530e8675163edf5f635f46b/) |
| ✅ | 2025/05/21 | 3-1 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ✅ | 2025/05/14 | 15-0 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2025/05/09 | 15-0 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |

---
Corporation ID: 99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771744815"></span>
</div>