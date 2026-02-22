---
title: ​Dumpster Fire
description: W:39 L:98 D:0 Bonus ✅ 46%
image: ./favicon.png
Summary: ✅ 31 - 17 **E\.T\.A**
date: 2026-02-18T06:01:36.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
(\^/)/)^/)(\/)/)/)    
|\_____________\
|\|Dumpster Fire|
 \[|    0    ω     0    |]
 \|______________|™
Weekly Casual
Discord-Free White Star
```
<br>

### [Discord](https://discord.gg/FCWdtswtP5)
### Whitestar Bonus ✅ 46%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1028 🔺  (17)|
| ELO Competitive | 1270 🔺  (19)|
| Total Matches | 137 |
| Wins | 39 |
| Losses | 98 |
| Draws | 0 |
| Streak Record | 3 |
| Flagship | 8 |

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
        let timestamps = [1770962496,1770366420,1769757382,1769100560,1768502956,1768499350,1767725984,1767722679,1767166537,1766969758,1766430450,1766430151,1765858990,1765287228,1765286928,1764845832,1764189274,1764186570,1763753026,1763095045,1763089038,1762537707,1762516972,1761824132,1761819926,1761367740,1760803361,1759870419,1759436536,1758974127,1758541475,1758042962,1757273207,1756744395,1756227750,1755725042,1755259272,1754812445,1754355099,1753512234,1753059104,1752481824,1751809698,1751377310,1750824131,1750364965,1749919608,1749268119,1748803573,1748271710,1747627733,1746600640,1746136981,1745684529,1745247041,1744764982,1744165783,1743692441,1743226604,1742271527,1741659720,1741218587,1740777150,1740169548,1739644542,1739159545,1737168089,1736707083,1736064824,1735498524,1734994792,1734256231,1733527265,1732563897,1732034727,1731524185,1730431857,1729445031,1728782047,1728273231,1727627719,1725686291,1725035126,1724542296,1724006790,1723353153,1722750930,1722227752,1722216937,1721629105,1721620992,1720995316,1720994114,1720039603,1719462017,1718370095,1716701472,1716239084,1715735826,1715112690,1714637261,1714153209,1713715155,1713192656,1712741640,1712267490,1712255168,1711818270,1711308667,1711305962,1710791857,1710787950,1710324013,1710305688,1709859185,1709847468,1709253731,1708668980,1707929160,1707448516,1706981070,1706543221,1705160857,1704657503,1704219951,1703628834,1703196381,1702756801,1702267513,1701832620,1701368281,1700930985,1700492184,1700030180,1699595827,1699145389,1698707516];

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
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 3 | 0 | 0 | 3 |
| [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) | 1 | 1 | 0 | 2 |
| [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) | 0 | 2 | 0 | 2 |
| [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) | 0 | 2 | 0 | 2 |
| [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) | 0 | 5 | 0 | 5 |
| [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) | 0 | 2 | 0 | 2 |
| [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) | 0 | 2 | 0 | 2 |
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 0 | 2 | 0 | 2 |
| [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) | 0 | 2 | 0 | 2 |
| [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) | 0 | 2 | 0 | 2 |
| [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) | 1 | 1 | 0 | 2 |
| [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) | 0 | 2 | 0 | 2 |
| [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) | 0 | 2 | 0 | 2 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 0 | 2 | 0 | 2 |
| [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) | 0 | 2 | 0 | 2 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 3 | 0 | 3 |
| [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) | 1 | 1 | 0 | 2 |
| [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) | 0 | 2 | 0 | 2 |
| [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) | 1 | 1 | 0 | 2 |
| [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) | 0 | 2 | 0 | 2 |
| [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) | 0 | 2 | 0 | 2 |
| [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) | 2 | 0 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 1 | 1 | 0 | 2 |
| [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) | 1 | 1 | 0 | 2 |
| [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) | 0 | 2 | 0 | 2 |
| [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) | 0 | 2 | 0 | 2 |
| [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/18 | 31-17 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2026/02/11 | 7-29 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2026/02/04 | 38-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2026/01/27 | 3-9 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2026/01/20 | 0-30 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ❌ | 2026/01/20 | 3-39 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ❌ | 2026/01/11 | 1-37 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2026/01/11 | 29-0 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2026/01/05 | 3-36 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2026/01/03 | 6-9 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2025/12/27 | 10-3 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2025/12/27 | 1-15 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/12/21 | 6-35 | [Фобосята](https://ws.tsl.rocks/corp/f077ea4635fef4b0e2ae93e6238096d90a0d831bf41ca63d334d9535cc9c8c66/) |
| ❌ | 2025/12/14 | 8-16 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2025/12/14 | 3-35 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/12/09 | 6-32 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2025/12/01 | 6-33 | [WinterComes](https://ws.tsl.rocks/corp/a8f3bbc084fca4434869893ccbfca6c52960e64ee5db87ef257d706194a2f596/) |
| ❌ | 2025/12/01 | 0-29 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ❌ | 2025/11/26 | 4-36 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2025/11/19 | 3-30 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/11/19 | 5-40 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ❌ | 2025/11/12 | 6-34 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ❌ | 2025/11/12 | 0-16 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ❌ | 2025/11/04 | 9-24 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ❌ | 2025/11/04 | 0-20 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/10/30 | 4-29 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/10/23 | 19-1 | [우주미아](https://ws.tsl.rocks/corp/2e33086edccff7de82480157f7cfdec520a8472c46402842d4c88cb33b333ab3/) |
| ❌ | 2025/10/12 | 6-29 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2025/10/07 | 3-22 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ❌ | 2025/10/02 | 5-19 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/09/27 | 17-3 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2025/09/21 | 22-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2025/09/12 | 14-0 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ❌ | 2025/09/06 | 4-33 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2025/08/31 | 24-47 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2025/08/25 | 10-45 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2025/08/20 | 20-0 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2025/08/15 | 2-19 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/08/10 | 1-49 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/07/31 | 15-20 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2025/07/26 | 14-2 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2025/07/19 | 5-33 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2025/07/11 | 26-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2025/07/06 | 10-38 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/06/30 | 26-3 | [Veteran's Haven](https://ws.tsl.rocks/corp/254fdc629bae81f3b0ca69160e0b6e34bd81993e755e4fb5ddedd1533038a683/) |
| ❌ | 2025/06/24 | 4-27 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ❌ | 2025/06/19 | 16-24 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2025/06/12 | 8-52 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ❌ | 2025/06/06 | 13-25 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ❌ | 2025/05/31 | 12-42 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2025/05/24 | 9-36 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/05/12 | 11-32 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/05/06 | 1-34 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2025/05/01 | 3-24 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2025/04/26 | 23-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2025/04/21 | 7-29 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2025/04/14 | 12-7 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/04/08 | 1-23 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2025/04/03 | 4-20 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/03/23 | 4-8 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2025/03/16 | 8-28 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2025/03/10 | 23-2 | [BR Gear](https://ws.tsl.rocks/corp/8b23b08409bdebed03646b6e5e5d3c0a7a45d20e80f7c663ac21071310081ab8/) |
| ❌ | 2025/03/05 | 3-33 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2025/02/26 | 0-6 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2025/02/20 | 14-1 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2025/02/15 | 2-38 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2025/01/23 | 3-12 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ❌ | 2025/01/17 | 3-34 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/01/10 | 16-24 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2025/01/03 | 17-3 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2024/12/28 | 25-5 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2024/12/20 | 11-27 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/12/11 | 24-3 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/11/30 | 6-43 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ❌ | 2024/11/24 | 3-25 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2024/11/18 | 9-6 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/11/06 | 7-9 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/10/25 | 19-4 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/10/18 | 15-3 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ❌ | 2024/10/12 | 6-24 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2024/10/04 | 6-16 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2024/09/12 | 3-31 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/09/04 | 3-21 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/08/29 | 4-26 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/08/23 | 6-21 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ❌ | 2024/08/16 | 24-41 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ✅ | 2024/08/09 | 24-3 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ✅ | 2024/08/03 | 6-4 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/08/03 | 8-24 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/07/27 | 5-14 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ❌ | 2024/07/27 | 9-33 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/07/19 | 15-6 | [Nebula](https://ws.tsl.rocks/corp/38bd8c92bc5f2d4ff240d58da260855d87eb4c2c4a241735c5d72215d4a191fb/) |
| ❌ | 2024/07/19 | 0-29 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/07/08 | 5-37 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ❌ | 2024/07/02 | 0-45 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/06/19 | 3-22 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/05/31 | 7-48 | [Spica​](https://ws.tsl.rocks/corp/df96d6d34c4906312183050c8aa7a502678ab2902b7c23112aa9fda827bb4191/) |
| ❌ | 2024/05/25 | 2-36 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2024/05/20 | 6-29 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/05/12 | 5-14 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/05/07 | 21-5 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2024/05/01 | 4-10 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/04/26 | 15-16 | [OntarioDestiny](https://ws.tsl.rocks/corp/806a86639b93c3a025e026bcedab96052be0e32b712c96217b3d5b330b3f5a6d/) |
| ✅ | 2024/04/20 | 31-1 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ✅ | 2024/04/15 | 15-4 | [Moon Catchers](https://ws.tsl.rocks/corp/0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43/) |
| ❌ | 2024/04/09 | 3-22 | [Croce del Sud](https://ws.tsl.rocks/corp/d0899d3aea0aaed6c7d87de378c6c82274ff8dcdabad391d44c2f08f98039af1/) |
| ✅ | 2024/04/09 | 6-0 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2024/04/04 | 5-31 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/03/29 | 6-44 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/03/29 | 10-34 | [Minutemen](https://ws.tsl.rocks/corp/9c909737404c072239b33c57ec002c06c45552ec1b97fe1d07eb95090e2346a8/) |
| ✅ | 2024/03/23 | 17-7 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/03/23 | 4-51 | [ItBurnsWhenIEMP](https://ws.tsl.rocks/corp/1549586a8e69d1a5b1245b5cf33b7beb241b2343c07d1d800e5a2c4026c06438/) |
| ✅ | 2024/03/18 | 16-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/03/18 | 13-2 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/03/13 | 3-9 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ❌ | 2024/03/12 | 0-20 | [The Goonies](https://ws.tsl.rocks/corp/12ebe9e9a1c71d9a15f622670c299d2b2193e3e7a9ef18b1773c8b5965cb68ab/) |
| ❌ | 2024/03/06 | 11-25 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/02/28 | 5-30 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/02/19 | 5-19 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2024/02/14 | 27-3 | [Hades' 420](https://ws.tsl.rocks/corp/e83b8d576f0efe37e0cdc115b709de051fc57c51a2183f4cb399421766660a73/) |
| ❌ | 2024/02/08 | 3-19 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ❌ | 2024/02/03 | 4-9 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2024/01/18 | 2-34 | [Outland Ind\.](https://ws.tsl.rocks/corp/94cb8827caef9b4b1839113abd29145a128d0c1e108c3984bcf7620dd7fca464/) |
| ❌ | 2024/01/12 | 3-19 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2024/01/07 | 7-9 | [Int\. Trading Co](https://ws.tsl.rocks/corp/6978edb31cfa5778f4e28d2477e5db050fd8bf44105dc25871490d0cffaf4bf7/) |
| ✅ | 2023/12/31 | 17-3 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2023/12/26 | 4-14 | [Majapahit](https://ws.tsl.rocks/corp/6d6df740d7d7719ed95d71037f4266928dad222a578175c6836d7bf449f89e75/) |
| ✅ | 2023/12/21 | 23-0 | [DESERT DEMONS](https://ws.tsl.rocks/corp/ce3878648f3491267f61405d54a4c7c12ead91a34001335edfe9850e1d076915/) |
| ✅ | 2023/12/16 | 18-0 | [New Era](https://ws.tsl.rocks/corp/35d6bd86c90c3921a56e0659febcf142d976691aa591410ff1deac743162c1f4/) |
| ✅ | 2023/12/11 | 9-1 | [\(\_\(\_Vossk\_\)\_\)](https://ws.tsl.rocks/corp/6db23201f00670abe532f02a8fc28e109f95d673ef31ca1df7362c0a6c45dd2f/) |
| ❌ | 2023/12/05 | 5-8 | [Созидание 2\.0](https://ws.tsl.rocks/corp/ae8b8d247dbd93bebc2b77d48c1db6783a17ff8b16438f010c804b7ccf05b76a/) |
| ❌ | 2023/11/30 | 3-25 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2023/11/25 | 3-29 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ❌ | 2023/11/20 | 0-11 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2023/11/15 | 3-0 | [Тёмный Феникс](https://ws.tsl.rocks/corp/7558698da6213ab97789830842ad4baa89467edc584a6c8594ab04b521ae3488/) |
| ❌ | 2023/11/10 | 0-10 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ✅ | 2023/11/04 | 4-3 | [Peace Keepers](https://ws.tsl.rocks/corp/7ac71c394c017639785b3ecaa8087bd3b9a9d134e05d22703a3e18217da3380d/) |

---
Corporation ID: f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771394496"></span>
</div>