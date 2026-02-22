---
title: ​Terran empire
description: W:75 L:25 D:1 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 20 - 3 **47підрозділССП**
date: 2026-02-19T05:38:39.000Z
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
| ELO Regular | 1524 🔺  (5)|
| ELO Competitive | 1679 🔺  (5)|
| Total Matches | 101 |
| Wins | 75 |
| Losses | 25 |
| Draws | 1 |
| Streak | 15 |
| Streak Record | 15 |
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
        let timestamps = [1771047519,1771022286,1770559005,1770491410,1770037142,1770015811,1769562990,1769542857,1769110251,1769054891,1768523989,1768511371,1768070299,1767891522,1767621737,1767283404,1767138903,1766688544,1766636863,1766201495,1766163338,1765713872,1765661298,1765210613,1765197089,1764750888,1764731070,1764283011,1764029146,1763564348,1763385582,1762806943,1762779296,1762301558,1761819926,1761711767,1761206634,1761056419,1760521527,1760427489,1759937719,1759276861,1759256555,1758549890,1757491924,1756772341,1756245478,1756154742,1755527329,1755025496,1754479794,1754475587,1754037274,1754011042,1753379427,1753325338,1752837006,1752697883,1752277565,1752249919,1751845462,1751794371,1751295885,1751176591,1750790481,1750531149,1750210801,1749669285,1749640430,1749139513,1748932786,1748607941,1748107325,1747976593,1747482892,1747440524,1746999703,1746991588,1746461817,1746417641,1745791829,1745708876,1745163449,1745085617,1744634563,1744505048,1744133632,1743927340,1743543696,1743310839,1742997901,1742707292,1742473773,1741880570,1741370332,1740762298,1740080596,1739572420,1739031827,1738362872,1737920848];

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
| [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) | 2 | 0 | 0 | 2 |
| [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) | 3 | 0 | 0 | 3 |
| [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) | 2 | 0 | 0 | 2 |
| [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) | 1 | 1 | 0 | 2 |
| [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) | 0 | 2 | 0 | 2 |
| [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) | 2 | 1 | 0 | 3 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 2 | 0 | 0 | 2 |
| [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) | 0 | 2 | 0 | 2 |
| [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) | 1 | 1 | 0 | 2 |
| [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) | 0 | 1 | 1 | 2 |
| [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) | 3 | 0 | 0 | 3 |
| [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) | 0 | 3 | 0 | 3 |
| [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) | 2 | 0 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 2 | 0 | 0 | 2 |
| [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/19 | 20-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2026/02/18 | 24-0 | [TITANS](https://ws.tsl.rocks/corp/99cb7335e71fb4b435cc1929b77308ae522773aee201cf5fdfc4b8e6edf54f36/) |
| ✅ | 2026/02/13 | 23-11 | [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) |
| ✅ | 2026/02/12 | 19-0 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2026/02/07 | 11-2 | [\-=Содружество=\-](https://ws.tsl.rocks/corp/a9493d38afc250d1f8288ca320eb0e5fb1263b1854737d813cdbf575c0e0e2d3/) |
| ✅ | 2026/02/07 | 7-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2026/02/02 | 18-0 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2026/02/01 | 13-3 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ✅ | 2026/01/27 | 29-1 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ✅ | 2026/01/27 | 14-3 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ✅ | 2026/01/21 | 26-3 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ✅ | 2026/01/20 | 7-0 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2026/01/15 | 26-2 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2026/01/13 | 21-0 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2026/01/10 | 26-0 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2026/01/06 | 3-17 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ✅ | 2026/01/04 | 16-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/12/30 | 19-4 | [柯伊伯带伊甸园](https://ws.tsl.rocks/corp/4eea992d73d29d14f33b0acc0b240ba7c71162f6e6a453f3771b7365d18616f6/) |
| ✅ | 2025/12/30 | 9-5 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/12/25 | 21-0 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2025/12/24 | 24-0 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/12/19 | 25-8 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ✅ | 2025/12/18 | 12-3 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/12/13 | 31-0 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2025/12/13 | 11-3 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ❌ | 2025/12/08 | 4-30 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/12/08 | 40-0 | [We R Bad](https://ws.tsl.rocks/corp/f5cb2c2ba88483bac00f814e32a0d862e4f3a0a10cc614b33ecb9e846766aae0/) |
| ✅ | 2025/12/02 | 7-6 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ❌ | 2025/11/30 | 2-18 | [DOMOVINA](https://ws.tsl.rocks/corp/00af6c9318ddf16a1bb684310776fee9681a22f01c1649941b799556a0bb6fb6/) |
| ✅ | 2025/11/24 | 13-1 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/11/22 | 27-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ↔️ | 2025/11/15 | 11-11 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2025/11/15 | 3-22 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2025/11/10 | 4-8 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ✅ | 2025/11/04 | 20-0 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2025/11/03 | 4-5 | [Os Guild](https://ws.tsl.rocks/corp/95419ee3d00a8d81d84d6fdba1cc4478098c152940903bb6a203af8f646d4e13/) |
| ✅ | 2025/10/28 | 27-3 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/10/26 | 20-3 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/10/20 | 2-19 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2025/10/19 | 20-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/10/13 | 19-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/10/06 | 25-3 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ✅ | 2025/10/05 | 5-2 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/09/27 | 3-51 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ❌ | 2025/09/15 | 3-11 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/09/07 | 3-21 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/08/31 | 28-3 | [繁星一夢](https://ws.tsl.rocks/corp/aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764/) |
| ❌ | 2025/08/30 | 6-7 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2025/08/23 | 13-5 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ✅ | 2025/08/17 | 17-0 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/08/11 | 3-7 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ✅ | 2025/08/11 | 27-3 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2025/08/06 | 8-27 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2025/08/06 | 2-10 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ✅ | 2025/07/29 | 5-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/07/29 | 16-3 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/07/23 | 1-16 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/07/21 | 20-2 | [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) |
| ❌ | 2025/07/16 | 6-11 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ✅ | 2025/07/16 | 22-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ❌ | 2025/07/11 | 3-17 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ✅ | 2025/07/11 | 26-1 | [ALPHA SQUADRON](https://ws.tsl.rocks/corp/4094b09d12cf0e2a8ea4d956e09a22d832da882bddeabf25d9b674b68ce165ed/) |
| ❌ | 2025/07/05 | 3-6 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/07/04 | 30-4 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ✅ | 2025/06/29 | 20-3 | [Fairy tail](https://ws.tsl.rocks/corp/44e6a82c06b84bc5579df0e42bc462f36313b0060861d25228856930f6c19eac/) |
| ✅ | 2025/06/26 | 18-3 | [C'est pas faux\!](https://ws.tsl.rocks/corp/fa08ee3e0496d13b55f0058cc61560c3e8e5b91628ee583c9eca31ef10c7749b/) |
| ✅ | 2025/06/23 | 13-0 | [VD Redux](https://ws.tsl.rocks/corp/4c01d685744a017bb7d4799959ee348598a769d8919e005542cc71d67e2e6cf7/) |
| ✅ | 2025/06/16 | 27-0 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2025/06/16 | 16-2 | [Бакланы](https://ws.tsl.rocks/corp/185498d1915b9dae76f4b81423021419875e961b8cd4f1249364d5ada9845463/) |
| ❌ | 2025/06/10 | 0-12 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/06/08 | 22-2 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2025/06/04 | 7-0 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/05/29 | 23-0 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ✅ | 2025/05/28 | 9-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/05/22 | 0-16 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/05/22 | 0-7 | [PODER ETERNO](https://ws.tsl.rocks/corp/57d0f28e0092febc8df34805f3199249e0890faa0381ef2f14065fd3c39ec2b1/) |
| ✅ | 2025/05/16 | 7-6 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ✅ | 2025/05/16 | 15-0 | [Bow Down](https://ws.tsl.rocks/corp/402b459520fde5ca47dbb493e4f75201464ab1d46cc1b8dad2f321217265bef4/) |
| ✅ | 2025/05/10 | 17-3 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ❌ | 2025/05/10 | 3-29 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ✅ | 2025/05/02 | 28-2 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2025/05/01 | 20-0 | [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) |
| ❌ | 2025/04/25 | 1-7 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/24 | 22-2 | [Новички](https://ws.tsl.rocks/corp/972be02f6d0b8abd990454b2ae98e12181668ba96252a4747a4899744a7d9dc6/) |
| ✅ | 2025/04/19 | 22-1 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ✅ | 2025/04/18 | 17-8 | [DINASTÍA SOLAR](https://ws.tsl.rocks/corp/ad2fb0a499c4bed8883dbbb54af2585e84353be5ade52e585828b4d86c4f0994/) |
| ✅ | 2025/04/13 | 18-4 | [Starships](https://ws.tsl.rocks/corp/b75dd27a38d238b4d9cd11637820796c7df082496dc05190e61fc675f71b05db/) |
| ✅ | 2025/04/11 | 15-4 | [QVX](https://ws.tsl.rocks/corp/7332e0f84974c827954677fdba873fd8eaf407e07c4322f503b904a9456b2665/) |
| ✅ | 2025/04/06 | 10-0 | [The Gladiators](https://ws.tsl.rocks/corp/4aa9000c49c8a988df27932c5a5840800303bdb713ef35f9d207a4da7f6b0337/) |
| ✅ | 2025/04/04 | 9-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ✅ | 2025/03/31 | 18-0 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ✅ | 2025/03/28 | 15-0 | [SpaceTruckers](https://ws.tsl.rocks/corp/9197812744bb73a0e58aedeab5dc0be075f4e5584660a69db39da11b0c9e2c5f/) |
| ❌ | 2025/03/25 | 4-7 | [星际造梦](https://ws.tsl.rocks/corp/aa25ebf7f012818b7ee0d4ed4bef10a7f6c2a22b528584e91d5b3a78355eeabd/) |
| ✅ | 2025/03/18 | 13-2 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/03/12 | 13-2 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/03/05 | 17-0 | [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) |
| ✅ | 2025/02/25 | 20-2 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/02/19 | 4-8 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/02/13 | 5-1 | [复生会](https://ws.tsl.rocks/corp/34d924857b79c9e7dbbefad09df43c3752d80cee3153852a2af3ac365ad5e0f9/) |
| ✅ | 2025/02/05 | 18-0 | [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) |
| ✅ | 2025/01/31 | 7-0 | [Aquiles](https://ws.tsl.rocks/corp/303ab147f2fce882b5cb391c0b3006c76bc2222ee409fc17b157cb149bda3c9f/) |

---
Corporation ID: ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771479519"></span>
</div>