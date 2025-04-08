---
title: ​Свободный флот
description: W:55 L:65 D:2 Bonus ✅ 40%
image: ./favicon.png
Summary: ❌ 0 - 12 **Black Pearl FR**
date: 2025-04-02T12:49:53.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Добро пожаловать! Активно развиваемся и помогаем с кз и советами,регу
лярно играем бз,общаемся. Присоединяйтесь к нашей большой семье 😄. Т
елеграм: https://t.me/FreeFleetHadesStar
```
<br>

### [Discord](https://discord.gg/6zQ97TaFpS)
### Whitestar Bonus ✅ 40%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1154 🔻  (1166)|
| ELO Competitive | 1465 🔺  (107)|
| Total Matches | 122 |
| Wins | 55 |
| Losses | 65 |
| Draws | 2 |
| Streak Record | 10 |
| Flagship | 6 |

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
        let timestamps = [1743166193,1743161084,1742717812,1742717812,1741588502,1741587000,1741075255,1741065040,1740565748,1740562598,1739691718,1739686310,1739185084,1738680833,1738178971,1738178971,1737472804,1736255368,1735499574,1735498973,1734973386,1734971956,1734536874,1734534168,1733852700,1733850296,1732464432,1732000469,1732000169,1731488722,1731477906,1730963732,1730958926,1730463105,1730455893,1730013264,1730008155,1729502419,1729080488,1729069670,1728592690,1728592389,1728152127,1728148220,1727683605,1727683305,1727158042,1727157441,1726691394,1726672937,1726246114,1726237996,1725655645,1725650235,1725169149,1725149058,1724657991,1724220747,1724183791,1723726989,1723717372,1723216422,1722244579,1722242475,1720955332,1720950824,1719662750,1719657040,1719222813,1719215602,1718526824,1718521414,1717365052,1717362046,1716858050,1716848736,1716415739,1716395906,1715850892,1715850592,1715251789,1715235566,1714697355,1714696754,1714197675,1714197675,1713764125,1713762323,1713179132,1713176428,1712699283,1712689366,1712121153,1712116045,1711662914,1711659608,1711221519,1711216110,1710727859,1710711333,1709970959,1709401270,1708863099,1708386224,1707304520,1706779424,1706302509,1705824087,1705389845,1704875370,1704442026,1703998170,1703543485,1703098707,1702586996,1702088982,1701373091,1700856146,1700276523,1699738937,1699251155,1698748991];

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
| [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) | 0 | 2 | 0 | 2 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 1 | 1 | 0 | 2 |
| [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) | 2 | 0 | 0 | 2 |
| [Hexwood](https://ws.tsl.rocks/corp/b10084235f689f555f99efd52d9d4ea86dabf662e57f64dd9d86bbdc31b9c3e1/) | 0 | 2 | 0 | 2 |
| [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) | 0 | 2 | 0 | 2 |
| [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) | 1 | 1 | 0 | 2 |
| [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) | 0 | 3 | 0 | 3 |
| [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) | 0 | 2 | 0 | 2 |
| [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) | 4 | 0 | 0 | 4 |
| [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) | 1 | 1 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 1 | 1 | 0 | 2 |
| [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) | 2 | 0 | 0 | 2 |
| [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) | 2 | 0 | 0 | 2 |
| [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) | 1 | 1 | 0 | 2 |
| [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) | 3 | 0 | 0 | 3 |
| [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) | 2 | 1 | 0 | 3 |
| [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) | 1 | 1 | 0 | 2 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 0 | 2 | 0 | 2 |
| [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) | 0 | 2 | 0 | 2 |
| [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) | 1 | 2 | 0 | 3 |
| [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/04/02 | 0-12 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/04/02 | 26-1 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/03/28 | 22-24 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2025/03/28 | 3-0 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2025/03/15 | 0-26 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2025/03/15 | 4-30 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ❌ | 2025/03/09 | 0-28 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ↔️ | 2025/03/09 | 25-25 | [Tormenta](https://ws.tsl.rocks/corp/537807f41149f54b040d4f2bc983c7f1fbfa2242ec5566371330e4996e33a195/) |
| ✅ | 2025/03/03 | 2-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/03/03 | 24-4 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ❌ | 2025/02/21 | 0-3 | [无人之境](https://ws.tsl.rocks/corp/8da17f25a8fa2ee58845f6f1d7dbdcfee0c9c26d3c6e99eba26d8b50d8c079de/) |
| ✅ | 2025/02/21 | 22-5 | [United Stars ](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ❌ | 2025/02/15 | 26-39 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2025/02/09 | 43-9 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2025/02/03 | 32-14 | [Greek Warriors](https://ws.tsl.rocks/corp/0ebbf2228c6b86ec5117c216d8909c8e6f32f1a59b8f9b586bcdbbb85f603bc6/) |
| ❌ | 2025/02/03 | 0-27 | [Hexwood](https://ws.tsl.rocks/corp/b10084235f689f555f99efd52d9d4ea86dabf662e57f64dd9d86bbdc31b9c3e1/) |
| ❌ | 2025/01/26 | 3-21 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2025/01/12 | 41-0 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/01/03 | 0-24 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2025/01/03 | 4-21 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2024/12/28 | 0-26 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/12/28 | 12-18 | [On en a Gros \! ](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2024/12/23 | 12-21 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ❌ | 2024/12/23 | 0-40 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ❌ | 2024/12/15 | 17-31 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ❌ | 2024/12/15 | 0-41 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/11/29 | 34-54 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/11/24 | 22-0 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/11/24 | 0-36 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/11/18 | 3-5 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/11/18 | 22-12 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ✅ | 2024/11/12 | 21-0 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2024/11/12 | 0-10 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/11/06 | 22-10 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/11/06 | 0-25 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2024/11/01 | 0-34 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/11/01 | 16-4 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/10/26 | 28-4 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/10/21 | 0-39 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2024/10/21 | 23-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/10/15 | 23-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ❌ | 2024/10/15 | 0-27 | [Axiom](https://ws.tsl.rocks/corp/4000a010c205d318c766ba14fe1836eaab6652f1738a88cce8a8c69d0283e1b0/) |
| ✅ | 2024/10/10 | 2-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/10/10 | 11-3 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/10/05 | 27-3 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2024/10/05 | 0-36 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/09/29 | 19-4 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/09/29 | 1-25 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/09/23 | 18-5 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ✅ | 2024/09/23 | 15-12 | [Wompwompway ](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ❌ | 2024/09/18 | 0-23 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2024/09/18 | 26-0 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/09/11 | 2-25 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2024/09/11 | 28-3 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2024/09/06 | 3-33 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/09/06 | 4-19 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ❌ | 2024/08/31 | 7-27 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/08/26 | 3-26 | [UK Armada](https://ws.tsl.rocks/corp/2e3b65146fc90421a8e65a738a443ed67c756396af15a641475928091cb261a4/) |
| ✅ | 2024/08/25 | 29-1 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2024/08/20 | 8-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/08/20 | 22-7 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ✅ | 2024/08/14 | 13-9 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2024/08/03 | 19-26 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/08/03 | 0-19 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2024/07/19 | 0-25 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2024/07/19 | 1-25 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2024/07/04 | 24-6 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2024/07/04 | 0-38 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/06/29 | 34-0 | [Galactic Empire](https://ws.tsl.rocks/corp/72dcb83d090873cff1d27d191205e6a484c8c5b057f4b55f138e631f33037248/) |
| ❌ | 2024/06/29 | 0-22 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2024/06/21 | 9-17 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2024/06/21 | 0-41 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/06/07 | 0-11 | [Hexwood](https://ws.tsl.rocks/corp/b10084235f689f555f99efd52d9d4ea86dabf662e57f64dd9d86bbdc31b9c3e1/) |
| ❌ | 2024/06/07 | 13-21 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ❌ | 2024/06/02 | 3-22 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ✅ | 2024/06/01 | 22-9 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ✅ | 2024/05/27 | 14-2 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/05/27 | 3-28 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/05/21 | 0-28 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/05/21 | 4-20 | [battlesquadron](https://ws.tsl.rocks/corp/e45c27c77c0f1d82749ccc884b8fb5f4ea76c1b0d063321a7a860504a73365ff/) |
| ❌ | 2024/05/14 | 0-37 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/05/14 | 29-8 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/05/08 | 11-19 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2024/05/08 | 0-48 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2024/05/02 | 12-0 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/05/02 | 9-13 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/04/27 | 3-27 | [THE BENDERA](https://ws.tsl.rocks/corp/4c9acd27de08822b8670167ae6bc94f7ecd2786d5beed82c68ad61600fc318d3/) |
| ❌ | 2024/04/27 | 5-26 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ✅ | 2024/04/20 | 11-3 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2024/04/20 | 0-23 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ✅ | 2024/04/14 | 15-10 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2024/04/14 | 0-34 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2024/04/08 | 0-29 | [✡天启✡](https://ws.tsl.rocks/corp/f2d70a86d32ea3a8226afc6d465a6c6540acec572b1c7232994523cdfb299c53/) |
| ❌ | 2024/04/08 | 6-26 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/04/02 | 28-9 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/04/02 | 0-20 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/03/28 | 1-32 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ✅ | 2024/03/28 | 19-1 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ❌ | 2024/03/23 | 0-33 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ✅ | 2024/03/22 | 16-2 | [Red Star Corp\.](https://ws.tsl.rocks/corp/7ac87486823e26635a2f3887927b19b3a14a7875d38042200045204c418d9ac1/) |
| ✅ | 2024/03/14 | 19-9 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2024/03/07 | 19-25 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/03/01 | 23-0 | [绛紫星](https://ws.tsl.rocks/corp/8c2109279ceb01bcca0aa5e85c151d5877831ac54199285743750e2ed343b407/) |
| ✅ | 2024/02/24 | 25-3 | [РусКорп](https://ws.tsl.rocks/corp/7994b4a10a625b21deff136a17c63d096a4ba2f5cdd9eb9dedd7d0bd21b53d16/) |
| ❌ | 2024/02/12 | 3-31 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ❌ | 2024/02/06 | 2-23 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/01/31 | 14-15 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2024/01/26 | 7-18 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2024/01/21 | 8-0 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/01/15 | 18-3 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/01/10 | 22-0 | [The 501st](https://ws.tsl.rocks/corp/68cfedff28062f13b5219478e5360e5eb0ffae19528e9545c597f73ceb2443b8/) |
| ↔️ | 2024/01/05 | 8-8 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2023/12/30 | 23-0 | [ITA](https://ws.tsl.rocks/corp/4b7ed90565c5e7d463f7a7dcecab17ae3f6c93cd6b75b77bece4bfad9cfe9626/) |
| ✅ | 2023/12/25 | 22-3 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2023/12/19 | 20-0 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2023/12/14 | 25-0 | [Star Raiders](https://ws.tsl.rocks/corp/42517e68f38edb2fc73bd661ea28b0bf3d3bcbc58e50dc68d7eea184dd80019c/) |
| ✅ | 2023/12/05 | 17-3 | [Алый Феникс](https://ws.tsl.rocks/corp/ef2a58ee1052c616143ee1bf5e380609a7c061c603d10775b81563869a44433f/) |
| ✅ | 2023/11/29 | 13-2 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2023/11/23 | 18-0 | [Imperio Galacti](https://ws.tsl.rocks/corp/95f1c11e4823279fa171bfd0e76a03db2e35eb4c88e28b70e51e83ff2d767d4c/) |
| ✅ | 2023/11/16 | 16-0 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ✅ | 2023/11/11 | 11-3 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ✅ | 2023/11/05 | 7-0 | [自由星际联盟](https://ws.tsl.rocks/corp/933277ff64041b32fe12e4e564e2064071377343596c7944fb8c145165e2ab04/) |

---
Corporation ID: 48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1743598193"></span>
</div>