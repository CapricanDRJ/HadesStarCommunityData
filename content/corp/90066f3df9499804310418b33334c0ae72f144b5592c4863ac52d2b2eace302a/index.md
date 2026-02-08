---
title: ​DarkMoon
description: W:106 L:21 D:2 Bonus ❌ 15%
image: ./favicon.png
Summary: ✅ 30 - 3 **Os Guild**
date: 2026-01-26T06:31:12.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
играем свободно, не превращаем игру в работу. Состоим в союзе с "Содр
ужеством", ссылка на дискорд ведет к ним.
```
<br>

### [Discord](https://discord.gg/Vaf5WV2QQs)
### Whitestar Bonus ❌ 15%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1572 🔺  (8)|
| ELO Competitive | 1776 🔺  (3)|
| Total Matches | 129 |
| Wins | 106 |
| Losses | 21 |
| Draws | 2 |
| Streak | 4 |
| Streak Record | 22 |
| Flagship | 7 |

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
        let timestamps = [1768977072,1768977072,1768408011,1768377063,1767800484,1767799582,1766575267,1766564149,1765971349,1765955127,1765354230,1765352127,1764750888,1764750888,1764146931,1764143003,1763536106,1763534604,1762936721,1762931916,1762325889,1762324988,1761720289,1761719878,1761119810,1761118308,1760520025,1760512515,1759907071,1759906770,1759303423,1759303122,1758707432,1758698009,1758103344,1758094333,1757495829,1757489521,1756978142,1756964925,1756488697,1756462711,1755845257,1755243948,1755242446,1754657689,1754639960,1754037274,1754020957,1753457064,1753422995,1752825588,1752813270,1752222322,1752207811,1751616788,1751609577,1751005320,1751002014,1750396812,1750392305,1749787399,1749787379,1749189990,1749182779,1748583641,1748578862,1747978697,1747973589,1747374716,1747370509,1746793899,1746773719,1746152458,1746151400,1745559505,1745558947,1744965708,1744956092,1744356294,1744348481,1743741727,1743741426,1743137345,1743137345,1742554613,1742540490,1741932848,1741924737,1741364020,1741355903,1740726361,1740716746,1740119059,1739476864,1739432165,1738792025,1737927460,1737313245,1723194180,1720067357,1720063291,1715999617,1715515290,1714870526,1714254165,1713669485,1713079972,1712416523,1710315001,1710315001,1709802994,1709795184,1709056018,1708623306,1708163544,1708130494,1707694770,1707682751,1707250437,1707248032,1706815489,1706803767,1706369220,1706368619,1705922056,1705433723,1704992271,1704559828];

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
| [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) | 3 | 0 | 0 | 3 |
| [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) | 1 | 1 | 0 | 2 |
| [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) | 4 | 0 | 0 | 4 |
| [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) | 4 | 0 | 0 | 4 |
| [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) | 2 | 0 | 0 | 2 |
| [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) | 1 | 2 | 0 | 3 |
| [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) | 1 | 1 | 0 | 2 |
| [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) | 4 | 0 | 0 | 4 |
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 2 | 0 | 0 | 2 |
| [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) | 1 | 1 | 0 | 2 |
| [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) | 2 | 0 | 0 | 2 |
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 8 | 0 | 0 | 8 |
| [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) | 2 | 0 | 0 | 2 |
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 2 | 0 | 0 | 2 |
| [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) | 2 | 0 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 2 | 0 | 0 | 2 |
| [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/01/26 | 30-3 | [Os Guild](https://ws.tsl.rocks/corp/95419ee3d00a8d81d84d6fdba1cc4478098c152940903bb6a203af8f646d4e13/) |
| ✅ | 2026/01/26 | 3-0 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ✅ | 2026/01/19 | 25-2 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2026/01/19 | 8-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2026/01/12 | 4-7 | [宇宙警察](https://ws.tsl.rocks/corp/e351af3589315207a50dad0eefdf5309943c39b25656f0870904e6be9302a082/) |
| ✅ | 2026/01/12 | 33-6 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/12/29 | 0-5 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2025/12/29 | 31-16 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/12/22 | 22-0 | [Spanish Apes](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2025/12/22 | 24-5 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2025/12/15 | 1-24 | [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) |
| ❌ | 2025/12/15 | 8-19 | [DOMOVINA](https://ws.tsl.rocks/corp/00af6c9318ddf16a1bb684310776fee9681a22f01c1649941b799556a0bb6fb6/) |
| ✅ | 2025/12/08 | 14-6 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/12/08 | 30-4 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/12/01 | 20-6 | [Ordo Malleus](https://ws.tsl.rocks/corp/07c83a89ba8d4165f71961ebd88351c19ebe3da1688e4fd36b132975883ab794/) |
| ❌ | 2025/12/01 | 5-25 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/11/24 | 4-0 | [Outcasts](https://ws.tsl.rocks/corp/a5d77400f5f6762d9c869428160b2f0bf115c23cba5a694f6c8e7b9cd71c2bf0/) |
| ✅ | 2025/11/24 | 40-3 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2025/11/17 | 36-0 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/11/17 | 9-0 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/11/10 | 28-5 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/11/10 | 30-9 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ✅ | 2025/11/03 | 12-0 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ✅ | 2025/11/03 | 28-5 | [ITALIA](https://ws.tsl.rocks/corp/50983e789fe433b3974f5e28fe71a160d7d15afecfc7f2b89595a1a52391fda2/) |
| ✅ | 2025/10/27 | 30-1 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2025/10/27 | 13-3 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/10/20 | 8-0 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/10/20 | 26-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/10/13 | 9-2 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/10/13 | 23-6 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/10/06 | 6-12 | [IA5](https://ws.tsl.rocks/corp/a86622f7625d40a3455992647e02c761e639c1b172e6f5c87ae6d31f6dda7223/) |
| ✅ | 2025/10/06 | 35-4 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ✅ | 2025/09/29 | 12-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/09/29 | 29-0 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2025/09/22 | 19-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2025/09/22 | 30-3 | [HUN TERS](https://ws.tsl.rocks/corp/99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1/) |
| ✅ | 2025/09/15 | 31-3 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/09/15 | 31-0 | [Sky](https://ws.tsl.rocks/corp/9285f76649b8d3ca4faf9a9991522efc7f51d7545a60bc8d12a65e23d548a6f1/) |
| ✅ | 2025/09/09 | 4-3 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/09/09 | 33-6 | [\-=FCA=\-](https://ws.tsl.rocks/corp/abf961b1887178d13f39fe99cedf32d0ce4a826f9088c36c6c7e68eb4d61337c/) |
| ✅ | 2025/09/03 | 8-6 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ✅ | 2025/09/03 | 8-2 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ✅ | 2025/08/27 | 24-3 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/08/20 | 8-20 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/08/20 | 24-0 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ❌ | 2025/08/13 | 3-8 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2025/08/13 | 31-3 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2025/08/06 | 27-8 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/08/06 | 22-3 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/07/30 | 8-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/07/30 | 36-0 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ✅ | 2025/07/23 | 45-32 | [\-=Содружество=\-](https://ws.tsl.rocks/corp/a9493d38afc250d1f8288ca320eb0e5fb1263b1854737d813cdbf575c0e0e2d3/) |
| ✅ | 2025/07/23 | 10-8 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/07/16 | 12-0 | [银河帝国（GE）](https://ws.tsl.rocks/corp/09414c731b95eefa36b6408f61d483856d4cc0a4bf786e651c0c1f564fac5c1a/) |
| ✅ | 2025/07/16 | 41-0 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2025/07/09 | 16-5 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/07/09 | 21-3 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2025/07/02 | 10-3 | [星月挽歌](https://ws.tsl.rocks/corp/f3dbc8d3257aec31c5f963b5c07b2b5a6a0f96f06f5d797ba5d791a2a4c0e109/) |
| ✅ | 2025/07/02 | 44-3 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2025/06/25 | 41-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/06/25 | 12-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/06/18 | 40-3 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2025/06/18 | 10-3 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ✅ | 2025/06/11 | 24-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/06/11 | 38-2 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2025/06/04 | 11-0 | [夜白星港](https://ws.tsl.rocks/corp/7a2947fddd38acd13704f18a307f50119ed747969fa35f8d8d92788dae008c36/) |
| ✅ | 2025/06/04 | 31-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/05/28 | 27-5 | [Widow Makers](https://ws.tsl.rocks/corp/ac1ddcbbd45ccdfa74185d7f40b3a67b0b5b477f7b0bd6f3d7a5a7821ee55bdd/) |
| ↔️ | 2025/05/28 | 6-6 | [PODER ETERNO](https://ws.tsl.rocks/corp/57d0f28e0092febc8df34805f3199249e0890faa0381ef2f14065fd3c39ec2b1/) |
| ✅ | 2025/05/21 | 30-3 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ✅ | 2025/05/21 | 20-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/05/14 | 44-0 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2025/05/14 | 15-3 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/05/07 | 33-0 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ✅ | 2025/05/07 | 5-2 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/04/30 | 27-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2025/04/30 | 36-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2025/04/23 | 4-8 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2025/04/23 | 47-3 | [柯伊伯带伊甸园](https://ws.tsl.rocks/corp/4eea992d73d29d14f33b0acc0b240ba7c71162f6e6a453f3771b7365d18616f6/) |
| ✅ | 2025/04/16 | 6-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ✅ | 2025/04/16 | 50-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/04/09 | 13-0 | [U\.P\.E](https://ws.tsl.rocks/corp/fc06e2f3477d57f180521828616b988b58c6e5f6359dcfdc34b2e1fea93d309d/) |
| ✅ | 2025/04/09 | 39-0 | [Yellow Dwarf](https://ws.tsl.rocks/corp/fe10da4425591ab699e78f02fbfbf1ffa3b132bce029a23d9df715b2d854a0da/) |
| ✅ | 2025/04/02 | 39-0 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/04/02 | 6-7 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ✅ | 2025/03/26 | 29-0 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2025/03/26 | 4-2 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/03/19 | 7-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/03/19 | 29-2 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2025/03/12 | 10-3 | [Alterra Corp](https://ws.tsl.rocks/corp/2994ab783b4971d838bcc4741de8562ba674bf412d43f879bccadbc9f91eee2a/) |
| ✅ | 2025/03/12 | 32-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2025/03/05 | 21-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/03/05 | 14-3 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/02/26 | 22-0 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ↔️ | 2025/02/18 | 3-3 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2025/02/18 | 33-3 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2025/02/10 | 11-3 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/01/31 | 20-10 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ✅ | 2025/01/24 | 16-5 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2024/08/14 | 3-14 | [sk cz nebula](https://ws.tsl.rocks/corp/6ed29f74bee91a7aad75a64196918993de6cec070ce8c65d1132ed6b0e79005d/) |
| ❌ | 2024/07/09 | 0-20 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/07/09 | 3-0 | [Copelius](https://ws.tsl.rocks/corp/5ccdfe71720f707dabd274b5bab6f84a443484f3e38ec1065ad5f5a20268649f/) |
| ✅ | 2024/05/23 | 30-7 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/05/17 | 30-0 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/05/10 | 28-3 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2024/05/02 | 12-5 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2024/04/26 | 8-9 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/04/19 | 20-0 | [Starlancer](https://ws.tsl.rocks/corp/ef3681f4433ada2b05c563519c377662b1755fed13e8c6cbae8f4af3249d5bda/) |
| ✅ | 2024/04/11 | 14-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/03/18 | 10-18 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2024/03/18 | 0-16 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/03/12 | 21-3 | [Void](https://ws.tsl.rocks/corp/d647d722a09f020b716e059ac7758172a560c7190ac4d7d306c4ede8be6c5e77/) |
| ❌ | 2024/03/12 | 1-16 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2024/03/03 | 24-11 | [Рейнджеры](https://ws.tsl.rocks/corp/be4fa226820fee3399eb064ac8c0d05395ffa93e1c21dbb47d4708dfb0bc9347/) |
| ✅ | 2024/02/27 | 8-0 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2024/02/22 | 0-35 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2024/02/22 | 24-0 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2024/02/16 | 2-21 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2024/02/16 | 16-1 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ✅ | 2024/02/11 | 10-0 | [美丽新世界](https://ws.tsl.rocks/corp/237f60ced9a11f8d992fe2158784705710b2ff412544679b218d86ef44d230ef/) |
| ❌ | 2024/02/11 | 3-25 | [Cerulean Nebula](https://ws.tsl.rocks/corp/b76233469d1b4590ef63daba47aeb4239d428cb0804768d58f7e891418b91f81/) |
| ❌ | 2024/02/06 | 2-31 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ✅ | 2024/02/06 | 12-3 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2024/02/01 | 8-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/02/01 | 11-0 | [United Stars](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ✅ | 2024/01/27 | 22-1 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/01/21 | 9-6 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/01/16 | 5-3 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2024/01/11 | 3-17 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |

---
Corporation ID: 90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769409072"></span>
</div>