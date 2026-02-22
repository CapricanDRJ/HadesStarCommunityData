---
title: ​对，进就进人少的（分团）
description: W:46 L:28 D:1 Bonus ❌ 10%
image: ./favicon.png
Summary: ✅ 3 - 0 **新?的星际集团?**
date: 2026-01-27T13:44:02.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
此团直接隶属总团，和总团制度无区别，直接管辖，并不是自治，我们沿用总团制度，自由民主，集团聊天内字体设置不准超过100大小，活人升高级  
  /当前目标：到达100级集团，白星节假日开，正在招人中，欢迎萌新前来（ 3天以上不上踢 ）/首席：yori /黑名单：探秘天梯 vah
o华浩 QQ767311697
```
<br>

### Whitestar Bonus ❌ 10%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1328 🔺  (10)|
| ELO Competitive | 1465 🔺  (12)|
| Total Matches | 75 |
| Wins | 46 |
| Losses | 28 |
| Draws | 1 |
| Streak | 2 |
| Streak Record | 10 |
| Flagship | 4 |

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
        let timestamps = [1769089442,1768659492,1768580771,1768135495,1767904143,1767632555,1767360015,1766843575,1765395395,1764698009,1752771803,1752767595,1752160069,1752159467,1751561855,1751551887,1750976179,1750950633,1750339115,1750339115,1749738094,1749738094,1749132000,1749131398,1748568281,1748527114,1747934528,1747925212,1747317923,1746712721,1745965099,1745504815,1744892386,1744335863,1743662689,1743084154,1742470466,1741811765,1741306026,1740700523,1740064659,1739576626,1739127106,1737014217,1736577236,1735824678,1735256498,1734656161,1734008635,1733413084,1732854191,1732020299,1731575560,1731128705,1730373560,1729240092,1728349860,1727672489,1726871377,1726406296,1725958653,1725461825,1725021598,1724575347,1724115574,1723663887,1723178855,1722738912,1720250268,1719797381,1719350535,1718759126,1717484962,1716615524,1714711174];

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
| [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) | 2 | 0 | 0 | 2 |
| [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) | 1 | 1 | 0 | 2 |
| [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) | 1 | 1 | 0 | 2 |
| [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) | 3 | 0 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/01/27 | 3-0 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2026/01/22 | 12-0 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ❌ | 2026/01/21 | 8-20 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ❌ | 2026/01/16 | 1-11 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ❌ | 2026/01/13 | 3-31 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ❌ | 2026/01/10 | 0-30 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2026/01/07 | 8-0 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2026/01/01 | 3-2 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2025/12/15 | 10-1 | [Pirates](https://ws.tsl.rocks/corp/f8f512b60340c7aa66e3a646e0da8cdc44ff5b190d31b7c211a91b7e3a3da583/) |
| ✅ | 2025/12/07 | 7-3 | [W\.A\.L\.R\.U\.S\.](https://ws.tsl.rocks/corp/3360cfbc27ced65ef69f7de87380357cd8d4a316d8701e67b93a624d481bf313/) |
| ❌ | 2025/07/22 | 0-9 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ❌ | 2025/07/22 | 8-14 | [DrunkenMiningCo](https://ws.tsl.rocks/corp/1a156e07acaab026bac031e9dcd275d128fa8c26bca53b12a6f16046075c5536/) |
| ❌ | 2025/07/15 | 3-5 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ✅ | 2025/07/15 | 17-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2025/07/08 | 11-0 | [Hamle Wala Room](https://ws.tsl.rocks/corp/6239aba8ec24742788b4e083cc5afe3643f09fd9fcc6560f1330a9bdb7585848/) |
| ✅ | 2025/07/08 | 11-2 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2025/07/01 | 15-8 | [Quantum Pioneer](https://ws.tsl.rocks/corp/fe4e5b559382124e9a6e83ce04fc490dbfb51a1f3ad7377fe9c69c8d239c25da/) |
| ✅ | 2025/07/01 | 6-2 | [暗类星座](https://ws.tsl.rocks/corp/6a471fe651abb6143cd4912e1be8133443bc06f6b530e8675163edf5f635f46b/) |
| ✅ | 2025/06/24 | 3-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ✅ | 2025/06/24 | 17-0 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2025/06/17 | 6-3 | [Clube Jogatico](https://ws.tsl.rocks/corp/b7fa1d6ba9752f3526daf60acb3f70f9daaf33a9e81bb5d9c78015c805b74ef4/) |
| ✅ | 2025/06/17 | 8-3 | [The Syndicate](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ✅ | 2025/06/10 | 3-1 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ❌ | 2025/06/10 | 0-10 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ✅ | 2025/06/04 | 22-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ✅ | 2025/06/03 | 2-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ❌ | 2025/05/27 | 1-7 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/05/27 | 5-0 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/05/20 | 16-0 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/05/13 | 2-3 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2025/05/04 | 21-3 | [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) |
| ✅ | 2025/04/29 | 23-0 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2025/04/22 | 17-3 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ❌ | 2025/04/16 | 10-16 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ❌ | 2025/04/08 | 2-10 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/04/01 | 15-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/055ceda7fb2db39f514b2d21704cf6cc8ff5dcdd22807d3d7f18f0c3e9d776e9/) |
| ✅ | 2025/03/25 | 12-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/03/17 | 15-0 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ✅ | 2025/03/12 | 13-1 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2025/03/04 | 3-6 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ❌ | 2025/02/25 | 1-10 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ❌ | 2025/02/19 | 3-11 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ✅ | 2025/02/14 | 4-0 | [VD Redux](https://ws.tsl.rocks/corp/4c01d685744a017bb7d4799959ee348598a769d8919e005542cc71d67e2e6cf7/) |
| ❌ | 2025/01/21 | 2-16 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ✅ | 2025/01/16 | 7-2 | [天琴座联邦](https://ws.tsl.rocks/corp/3928bc72ac4a6520e6d501a9b13f0595b3401845fb184b605fa521b90cd01fe9/) |
| ✅ | 2025/01/07 | 23-0 | [莫比乌斯\-星环](https://ws.tsl.rocks/corp/f880db6adc517a83cc7c539551b160f5a90ac67a8ac62f8ae1edcbb40fff043c/) |
| ❌ | 2024/12/31 | 8-11 | [新星汇聚](https://ws.tsl.rocks/corp/7e61cd500818e2d3a3714d8a775a407e2ce8d9bf1ece36171778536aa8ca7078/) |
| ✅ | 2024/12/25 | 16-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/12/17 | 14-4 | [ℬlackStar Order](https://ws.tsl.rocks/corp/03620dd2b01d0a0c2c7b03cb570214cd6c5872eb043bac01dcadeb6244f8d861/) |
| ✅ | 2024/12/10 | 12-7 | [Forces of Light](https://ws.tsl.rocks/corp/0363a536567ae69573a7b0aa4b2c4119c5c14999f5bb2c7a68219b22b78f7903/) |
| ✅ | 2024/12/04 | 18-1 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ❌ | 2024/11/24 | 1-7 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2024/11/19 | 5-4 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/11/14 | 3-33 | [Lofty Mountain](https://ws.tsl.rocks/corp/1cfc6606e17d524ba0388b273ad6a9e86b23838eb529a2659f03a40702affbf7/) |
| ✅ | 2024/11/05 | 11-0 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ❌ | 2024/10/23 | 2-6 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ↔️ | 2024/10/13 | 3-3 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ❌ | 2024/10/05 | 3-20 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2024/09/25 | 0-16 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/09/20 | 7-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/09/15 | 22-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2024/09/09 | 13-3 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2024/09/04 | 15-4 | [Darkest Hour](https://ws.tsl.rocks/corp/0e253fa2fd0fda884dc5576e478434ebac89a568cb59a79a3ce94fa4b067dfc9/) |
| ❌ | 2024/08/30 | 3-13 | [边界](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2024/08/25 | 18-0 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ✅ | 2024/08/19 | 8-1 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ✅ | 2024/08/14 | 10-5 | [Out landers](https://ws.tsl.rocks/corp/4d949404db40dec4e95e786811959954fc9e2b1361f3bf0d33af2279ff86d23a/) |
| ❌ | 2024/08/09 | 1-3 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ✅ | 2024/07/11 | 8-2 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ✅ | 2024/07/06 | 13-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ❌ | 2024/06/30 | 3-12 | [BoomTech](https://ws.tsl.rocks/corp/97c4db179d3ea995d3a56227f87c501f4baa4abbece2b25e09b636f0aa264bd7/) |
| ✅ | 2024/06/24 | 5-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ❌ | 2024/06/09 | 1-8 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/05/30 | 3-4 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/05/08 | 0-8 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |

---
Corporation ID: 69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769521442"></span>
</div>