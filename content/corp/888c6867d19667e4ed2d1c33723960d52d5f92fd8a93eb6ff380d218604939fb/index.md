---
title: ​ДИВЕРСАНТЫ
description: W:167 L:40 D:1 Bonus ❌ 17%
image: ./favicon.png
Summary: ❌ 10 - 15 **Kobol**
date: 2026-02-22T06:10:11.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=red>БЗ без выходных, арты, прокачка.</color>

<color=yellow>Основана в марте 2021г.</color>

<color=red>Telegram(<color=red>ОБЯЗАТЕЛЬНО или КИК</color>)
+79105072411 @lavrusha23</color>
```
<br>

### Whitestar Bonus ❌ 17%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1540 🔻  (-26)|
| ELO Competitive | 1943 🔻  (-21)|
| Total Matches | 208 |
| Wins | 167 |
| Losses | 40 |
| Draws | 1 |
| Streak Record | 23 |
| Flagship | 11 |

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
        let timestamps = [1771308611,1771308009,1770721542,1770713432,1770279893,1770274186,1769783825,1769781121,1769346953,1769338840,1768903763,1768890546,1768402601,1768391483,1767950404,1767944998,1767473910,1767472408,1767000395,1766993486,1766561446,1766559343,1766075909,1766074707,1765638159,1765633650,1765178763,1765173055,1764708829,1764689894,1764256567,1764254764,1763813115,1763811011,1763314079,1763301157,1762858910,1762854404,1762345715,1762339707,1761851178,1761838858,1761396584,1761390875,1760943670,1760941568,1760437402,1760422382,1759927802,1759918187,1759464774,1759430524,1759027611,1758985548,1758522248,1758454043,1758012014,1757524676,1757513556,1757065878,1757062874,1756589956,1756566215,1756052581,1756031244,1755504794,1755003557,1754565131,1754558821,1754124921,1754120414,1753561521,1753538379,1753083740,1752504965,1752487533,1751954840,1751954239,1751470159,1751459940,1751017938,1750520928,1750501387,1750060850,1750054840,1749543673,1749541569,1749109463,1749089636,1748647308,1748631383,1748183962,1748167429,1747578453,1747561323,1747115091,1747114791,1746429659,1746306760,1745850119,1745757557,1745308291,1744874958,1744718100,1744385744,1743940979,1743935569,1743502214,1743070027,1743000005,1742554012,1742038328,1741513075,1741434341,1740984513,1740552383,1740053535,1739621397,1739616589,1739096732,1738562135,1738069286,1737635667,1737199340,1736756665,1736324188,1735891085,1735284421,1734851764,1734183816,1733739719,1733306715,1732864405,1732370068,1731834294,1731396474,1730958024,1730373560,1729867514,1729414973,1728899570,1728466753,1728031905,1727599466,1727087125,1726652201,1726219365,1725784859,1725254192,1724504728,1724059375,1723627221,1723187570,1722754837,1722228954,1721793788,1721304254,1720855549,1720423071,1719985198,1719550364,1719039788,1718604357,1718125182,1717678210,1717230081,1716793130,1716361056,1715926005,1715492754,1714805624,1714299529,1713865072,1713432137,1712995235,1712562860,1712488035,1712053243,1711618740,1711096514,1710662945,1710230271,1710225163,1709792179,1709359497,1708922596,1708419572,1707986854,1707546168,1707058900,1706624660,1706192516,1705756168,1705323432,1704889193,1704456449,1704022812,1703580141,1703142279,1702709009,1702200787,1701767395,1701332216,1700895815,1700452215,1699970972,1699522493,1699075073];

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
| [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) | 0 | 2 | 0 | 2 |
| [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) | 7 | 1 | 0 | 8 |
| [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) | 4 | 0 | 0 | 4 |
| [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) | 3 | 0 | 0 | 3 |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 2 | 0 | 0 | 2 |
| [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) | 3 | 0 | 0 | 3 |
| [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) | 4 | 0 | 0 | 4 |
| [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) | 2 | 0 | 0 | 2 |
| [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) | 2 | 1 | 0 | 3 |
| [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) | 2 | 0 | 0 | 2 |
| [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) | 3 | 0 | 0 | 3 |
| [Quilliance](https://ws.tsl.rocks/corp/6a4f8febc4066842f85c0373a0d33b6501860f2cc4f61b64761d31ff472c28fe/) | 1 | 1 | 0 | 2 |
| [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) | 2 | 0 | 0 | 2 |
| [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) | 2 | 0 | 0 | 2 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 3 | 0 | 0 | 3 |
| [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) | 2 | 0 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 3 | 0 | 0 | 3 |
| [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) | 1 | 1 | 0 | 2 |
| [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) | 5 | 0 | 0 | 5 |
| [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) | 2 | 2 | 0 | 4 |
| [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) | 4 | 0 | 0 | 4 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 6 | 1 | 0 | 7 |
| [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) | 2 | 0 | 0 | 2 |
| [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) | 1 | 2 | 0 | 3 |
| [Battlestar Fr](https://ws.tsl.rocks/corp/fa82ca5593a431614d1bf5f7c170fee2eeebb55354a86d2d7cd6dd48c4e05edc/) | 2 | 0 | 0 | 2 |
| [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) | 1 | 2 | 0 | 3 |
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 2 | 1 | 0 | 3 |
| [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) | 3 | 0 | 0 | 3 |
| [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) | 0 | 2 | 0 | 2 |
| [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) | 2 | 0 | 0 | 2 |
| [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) | 3 | 0 | 0 | 3 |
| [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) | 2 | 0 | 0 | 2 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 2 | 0 | 0 | 2 |
| [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) | 2 | 1 | 0 | 3 |
| [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) | 4 | 1 | 0 | 5 |
| [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) | 1 | 1 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 3 | 0 | 0 | 3 |
| [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) | 0 | 4 | 0 | 4 |
| [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) | 2 | 0 | 0 | 2 |
| [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) | 2 | 0 | 0 | 2 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 4 | 1 | 0 | 5 |
| [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) | 2 | 0 | 0 | 2 |
| [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) | 3 | 0 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 10-15 | [Kobol](https://ws.tsl.rocks/corp/cddf348d817603361afcf0dff01448937863b586e921963a8085f059a14b945a/) |
| ❌ | 2026/02/22 | 21-23 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2026/02/15 | 26-15 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2026/02/15 | 11-7 | [Auscorp](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ❌ | 2026/02/10 | 15-27 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2026/02/10 | 13-3 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2026/02/04 | 33-3 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ✅ | 2026/02/04 | 24-4 | [Society of Sin](https://ws.tsl.rocks/corp/2ab9513a45f8770aca94fcf9a693b6d756a83063d99d3ffabacb6523ff638cc1/) |
| ✅ | 2026/01/30 | 28-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2026/01/30 | 20-6 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2026/01/25 | 15-13 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2026/01/25 | 30-4 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ❌ | 2026/01/19 | 18-20 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2026/01/19 | 22-7 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ✅ | 2026/01/14 | 12-8 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2026/01/14 | 30-6 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ✅ | 2026/01/08 | 19-0 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2026/01/08 | 36-8 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ✅ | 2026/01/03 | 36-0 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ❌ | 2026/01/03 | 2-22 | [Got Nothing](https://ws.tsl.rocks/corp/ea7879fd9cbed37b260ec2bf39339786942fb34216036a90e107ba525f5924e1/) |
| ✅ | 2025/12/29 | 17-1 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2025/12/29 | 34-0 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ✅ | 2025/12/23 | 42-3 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ✅ | 2025/12/23 | 29-19 | [Quilliance](https://ws.tsl.rocks/corp/6a4f8febc4066842f85c0373a0d33b6501860f2cc4f61b64761d31ff472c28fe/) |
| ✅ | 2025/12/18 | 35-12 | [孤星长城](https://ws.tsl.rocks/corp/af057d9c6c59118dd1a58b74a8ec83db78962a17ae022269292a5fc05693ab83/) |
| ✅ | 2025/12/18 | 43-0 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ✅ | 2025/12/13 | 22-15 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/12/13 | 44-0 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2025/12/07 | 31-7 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2025/12/07 | 25-3 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ✅ | 2025/12/02 | 38-3 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/12/02 | 26-3 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ✅ | 2025/11/27 | 32-3 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ✅ | 2025/11/27 | 44-0 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2025/11/21 | 26-4 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2025/11/21 | 23-3 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2025/11/16 | 26-3 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ✅ | 2025/11/16 | 28-7 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/11/10 | 27-21 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2025/11/10 | 28-0 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/11/04 | 30-3 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ❌ | 2025/11/04 | 13-30 | [Quilliance](https://ws.tsl.rocks/corp/6a4f8febc4066842f85c0373a0d33b6501860f2cc4f61b64761d31ff472c28fe/) |
| ✅ | 2025/10/30 | 29-6 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ✅ | 2025/10/30 | 23-0 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/10/25 | 15-17 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/10/25 | 36-2 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/10/19 | 23-35 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ✅ | 2025/10/19 | 31-7 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/10/13 | 7-32 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2025/10/13 | 40-1 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2025/10/08 | 35-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/10/07 | 31-5 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ✅ | 2025/10/03 | 37-3 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/10/02 | 27-3 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/09/27 | 31-6 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/09/26 | 37-3 | [Battlestar Fr](https://ws.tsl.rocks/corp/fa82ca5593a431614d1bf5f7c170fee2eeebb55354a86d2d7cd6dd48c4e05edc/) |
| ❌ | 2025/09/21 | 13-18 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ✅ | 2025/09/15 | 33-16 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ❌ | 2025/09/15 | 13-29 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/09/10 | 26-9 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/09/10 | 3-36 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/09/04 | 41-3 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2025/09/04 | 30-1 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ✅ | 2025/08/29 | 30-3 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ✅ | 2025/08/29 | 25-19 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2025/08/23 | 29-14 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2025/08/17 | 46-10 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/08/12 | 28-25 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2025/08/12 | 32-5 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2025/08/07 | 44-2 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/08/07 | 23-28 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/07/31 | 27-3 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/07/31 | 26-48 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2025/07/26 | 34-1 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2025/07/19 | 23-46 | [Pure Toxicity](https://ws.tsl.rocks/corp/d7ea20b5bd9f74ebddf44f3cec6f9b105d5374b7c7cfe575253204c10ebdc0a1/) |
| ✅ | 2025/07/19 | 40-0 | [Зелёная корпа](https://ws.tsl.rocks/corp/978fbb6cb32789d7057450a2239b1d6e2bc7730bbdd832f816384d45ec44ac57/) |
| ❌ | 2025/07/13 | 27-33 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ✅ | 2025/07/13 | 37-28 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2025/07/07 | 31-3 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/07/07 | 35-4 | [United Stars](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ✅ | 2025/07/02 | 41-0 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2025/06/26 | 24-4 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/06/26 | 39-44 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ✅ | 2025/06/21 | 35-0 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2025/06/21 | 23-37 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ✅ | 2025/06/15 | 27-4 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2025/06/15 | 35-38 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2025/06/10 | 32-1 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ✅ | 2025/06/10 | 44-0 | [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) |
| ✅ | 2025/06/04 | 33-5 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2025/06/04 | 48-0 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/05/30 | 27-28 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ❌ | 2025/05/30 | 16-24 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2025/05/23 | 30-22 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2025/05/23 | 22-5 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2025/05/18 | 21-10 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ❌ | 2025/05/18 | 19-29 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ✅ | 2025/05/10 | 30-28 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/05/08 | 25-30 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ✅ | 2025/05/03 | 29-1 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2025/05/02 | 12-32 | [Polish Pirates](https://ws.tsl.rocks/corp/e73d410a73bca6a1161056891e484b32cac940c0d94d20c92ed085683524652b/) |
| ✅ | 2025/04/27 | 30-22 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2025/04/22 | 37-0 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2025/04/20 | 34-1 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ✅ | 2025/04/16 | 43-13 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ✅ | 2025/04/11 | 36-21 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2025/04/11 | 28-13 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/04/06 | 36-18 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2025/04/01 | 26-3 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2025/03/31 | 19-1 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2025/03/26 | 11-34 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ✅ | 2025/03/20 | 36-25 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2025/03/14 | 18-26 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ✅ | 2025/03/13 | 23-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/03/08 | 35-2 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2025/03/03 | 40-4 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2025/02/25 | 35-0 | [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) |
| ✅ | 2025/02/20 | 35-4 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2025/02/20 | 16-9 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/02/14 | 30-17 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ✅ | 2025/02/08 | 31-10 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ✅ | 2025/02/02 | 40-0 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2025/01/28 | 50-0 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ✅ | 2025/01/23 | 34-12 | [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) |
| ❌ | 2025/01/18 | 23-28 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2025/01/13 | 36-11 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/01/08 | 6-30 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2025/01/01 | 29-4 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ✅ | 2024/12/27 | 29-21 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/12/19 | 43-0 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/12/14 | 42-7 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/12/09 | 41-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/12/04 | 39-16 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/11/28 | 42-0 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/11/22 | 29-30 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2024/11/17 | 21-35 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2024/11/12 | 43-0 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/11/05 | 46-2 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ✅ | 2024/10/30 | 27-22 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/10/25 | 23-26 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ✅ | 2024/10/19 | 40-11 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2024/10/14 | 37-3 | [The trade pub](https://ws.tsl.rocks/corp/43689e4266357d8b8d3d66d371109d9aed82ee6df47dc6fa0a7c5da735b9863b/) |
| ✅ | 2024/10/09 | 32-8 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ✅ | 2024/10/04 | 32-15 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2024/09/28 | 2-6 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2024/09/23 | 34-3 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ✅ | 2024/09/18 | 42-17 | [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) |
| ✅ | 2024/09/13 | 28-14 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/09/07 | 26-12 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/08/29 | 27-16 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2024/08/24 | 8-16 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ✅ | 2024/08/19 | 43-3 | [Moon Catchers](https://ws.tsl.rocks/corp/0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43/) |
| ❌ | 2024/08/14 | 31-32 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/08/09 | 33-2 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ✅ | 2024/08/03 | 30-6 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/07/29 | 43-7 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ✅ | 2024/07/23 | 40-25 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2024/07/18 | 21-9 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2024/07/13 | 30-6 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2024/07/08 | 49-0 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ✅ | 2024/07/03 | 38-4 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ✅ | 2024/06/27 | 31-21 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2024/06/22 | 22-10 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/06/16 | 27-14 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2024/06/11 | 34-6 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2024/06/06 | 14-11 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ✅ | 2024/06/01 | 46-3 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2024/05/27 | 53-4 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2024/05/22 | 36-0 | [The Picard](https://ws.tsl.rocks/corp/e9a6cae99e308f9c70625e04162b887239bea0d52463d7a3ed53464fdd906d0b/) |
| ✅ | 2024/05/17 | 35-4 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2024/05/09 | 42-16 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/05/03 | 26-10 | [Dacia Chill](https://ws.tsl.rocks/corp/b38c6a1ce87d3b7937da53dddc33cbdfc7152ab1e5023f2308ee9c81a1633208/) |
| ✅ | 2024/04/28 | 40-0 | [Rogue Corp](https://ws.tsl.rocks/corp/6ad28ede21f9fa3aa044f0af41c7ed474fc432adf4ca1923fa02f6f9ded0028f/) |
| ✅ | 2024/04/23 | 29-1 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2024/04/18 | 32-17 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/04/13 | 26-18 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2024/04/12 | 19-41 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/04/07 | 30-0 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/04/02 | 26-12 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2024/03/27 | 27-3 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/03/22 | 16-3 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/03/17 | 23-20 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2024/03/17 | 3-37 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2024/03/12 | 27-7 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/03/07 | 23-7 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ✅ | 2024/03/02 | 20-0 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/02/25 | 23-0 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/02/20 | 17-13 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/02/15 | 23-3 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/02/09 | 19-3 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ✅ | 2024/02/04 | 13-3 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |
| ✅ | 2024/01/30 | 12-3 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ✅ | 2024/01/25 | 21-0 | [Battlestar Fr](https://ws.tsl.rocks/corp/fa82ca5593a431614d1bf5f7c170fee2eeebb55354a86d2d7cd6dd48c4e05edc/) |
| ✅ | 2024/01/20 | 10-4 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ✅ | 2024/01/15 | 25-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/01/10 | 18-0 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ↔️ | 2024/01/05 | 10-10 | [Highland Ind\.](https://ws.tsl.rocks/corp/ba78f9ff67f8944bf4b0152d98968e0ad6c9c86cc2fc518284c0745060e90e2c/) |
| ❌ | 2023/12/31 | 12-31 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2023/12/26 | 23-6 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ✅ | 2023/12/21 | 33-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2023/12/15 | 19-34 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2023/12/10 | 6-22 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2023/12/05 | 22-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2023/11/30 | 2-21 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2023/11/25 | 22-3 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2023/11/19 | 13-7 | [Astra Ultima](https://ws.tsl.rocks/corp/28f566291e90761f5c070cb9c53ba0381b2afd62e60f643e3be33288118ec4ff/) |
| ✅ | 2023/11/14 | 15-0 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ✅ | 2023/11/09 | 21-3 | [Hades' 420](https://ws.tsl.rocks/corp/e83b8d576f0efe37e0cdc115b709de051fc57c51a2183f4cb399421766660a73/) |

---
Corporation ID: 888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771740611"></span>
</div>