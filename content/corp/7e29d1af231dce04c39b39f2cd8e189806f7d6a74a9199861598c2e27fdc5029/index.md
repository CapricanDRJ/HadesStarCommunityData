---
title: ​One True Empire
description: W:46 L:30 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 0 - 6 **Небула Рока**
date: 2026-01-06T23:44:09.000Z
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
| ELO Regular | 1305 🔻  (-21)|
| ELO Competitive | 1456 🔻  (-25)|
| Total Matches | 78 |
| Wins | 46 |
| Losses | 30 |
| Draws | 2 |
| Streak Record | 14 |
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
        let timestamps = [1767311049,1766876626,1766439794,1766430450,1765981867,1765977959,1765474712,1765461489,1764991858,1764985548,1764488872,1764479859,1764031896,1764026442,1763579896,1763531000,1763047579,1763018137,1762540504,1762527790,1762093043,1762041894,1761566344,1761105091,1761074149,1760649821,1760145633,1759706560,1759488508,1759040348,1758940478,1758521947,1758492811,1758064088,1757990987,1757573343,1757555319,1757083607,1757043044,1756623302,1756609782,1756084129,1756081727,1755596734,1755588323,1755138776,1755128862,1754630044,1754541695,1754112300,1754091872,1753636641,1753633936,1753191509,1753156121,1752720586,1752713506,1752196430,1752196130,1751692206,1751689543,1751114672,1751081040,1750566306,1750560898,1750028101,1749976402,1749532255,1749490790,1748962533,1748923472,1748399113,1748321776,1747858812,1747799384,1747292982,1746756593,1746239443];

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
| [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) | 1 | 1 | 0 | 2 |
| [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) | 1 | 1 | 0 | 2 |
| [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) | 2 | 0 | 0 | 2 |
| [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) | 2 | 0 | 0 | 2 |
| [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) | 0 | 2 | 0 | 2 |
| [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) | 1 | 1 | 0 | 2 |
| [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) | 1 | 1 | 0 | 2 |
| [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) | 0 | 3 | 0 | 3 |
| [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) | 0 | 2 | 0 | 2 |
| [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/06 | 0-6 | [Небула Рока](https://ws.tsl.rocks/corp/22875f3ae77efabcd56b4683dee31b7e35d927cb86876f8f587b5f048dfe68f9/) |
| ❌ | 2026/01/01 | 4-16 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ❌ | 2025/12/27 | 0-3 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/12/27 | 19-0 | [Sky](https://ws.tsl.rocks/corp/9285f76649b8d3ca4faf9a9991522efc7f51d7545a60bc8d12a65e23d548a6f1/) |
| ❌ | 2025/12/22 | 0-6 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ✅ | 2025/12/22 | 4-0 | [Onaka Gang](https://ws.tsl.rocks/corp/ad0c0977768d3d0781594cf90c5946a58f19d088b47183d2eac245cb9b768b31/) |
| ❌ | 2025/12/16 | 0-5 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2025/12/16 | 6-3 | [亚斯特星际集团公司](https://ws.tsl.rocks/corp/b0bc70120c9a3105f31a71a9177edfb73785d4b86fb76655d1fd3acef0b7fcc2/) |
| ❌ | 2025/12/11 | 1-4 | [红色太阳](https://ws.tsl.rocks/corp/8090de72c41a6255b4ffbcbfc8d591d6972c059836eabe4f57ce55a28dfb41fb/) |
| ✅ | 2025/12/11 | 22-0 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ✅ | 2025/12/05 | 19-1 | [Grand Impire](https://ws.tsl.rocks/corp/951e0a6117eb48cf35f1928c5445d7d509d927d4c6883bcd5b5384430c2e206b/) |
| ✅ | 2025/12/05 | 3-0 | [the kings](https://ws.tsl.rocks/corp/e5401c31454641df970c76a211cb6fa604fcad47f1974d42db317169a796b1cc/) |
| ✅ | 2025/11/30 | 3-0 | [阿特拉斯](https://ws.tsl.rocks/corp/100eb9ada4da0f1abf6a3216aaf72cd173d3d2b114d827af8ad137a62de7c641/) |
| ✅ | 2025/11/29 | 20-0 | [GermanSpaceDuo](https://ws.tsl.rocks/corp/4845b9c456dec1856ed2c9bdcf6e1cf6d0d18460e78de1d40daf20df8ff99933/) |
| ✅ | 2025/11/24 | 4-0 | [Россия](https://ws.tsl.rocks/corp/d6fc6d0eb7471358a721a1de679c2c7ede670d778734bbe9e3f1b51828c67b88/) |
| ✅ | 2025/11/24 | 20-0 | [Empyre](https://ws.tsl.rocks/corp/b31247ca3aabadd1d2b099494ccc433c768f115c91677798d5b3dac380f90392/) |
| ✅ | 2025/11/18 | 4-0 | [The Lounge](https://ws.tsl.rocks/corp/e7d4b98cd4f8e9bfe6d99f504adda555611acc244420d9dfa3bd537c073de7fc/) |
| ✅ | 2025/11/18 | 18-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2025/11/12 | 2-0 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ✅ | 2025/11/12 | 14-0 | [Alpha to Omega](https://ws.tsl.rocks/corp/2b3694014264240c8c0d1bb6a20e9d120dff2b6680c98b4e06e34bfd489f9da6/) |
| ✅ | 2025/11/07 | 19-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/11/07 | 6-0 | [Space Cowboys](https://ws.tsl.rocks/corp/a74f3db1702305802ad35ee1224a8e6f4ee8dda05a38c700b192c765075416d3/) |
| ✅ | 2025/11/01 | 13-0 | [Бестрашный лиги](https://ws.tsl.rocks/corp/98a0925e094c54f400b76ad64a527b25adb4fe5aa1afc4b10368f072d3741d53/) |
| ❌ | 2025/10/27 | 6-27 | [Os Guild](https://ws.tsl.rocks/corp/95419ee3d00a8d81d84d6fdba1cc4478098c152940903bb6a203af8f646d4e13/) |
| ↔️ | 2025/10/26 | 0-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ✅ | 2025/10/21 | 4-3 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ✅ | 2025/10/16 | 16-0 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2025/10/10 | 2-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ❌ | 2025/10/08 | 6-25 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ✅ | 2025/10/03 | 8-3 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ❌ | 2025/10/02 | 1-11 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ❌ | 2025/09/27 | 9-16 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/09/26 | 5-1 | [Star Hunters](https://ws.tsl.rocks/corp/55caab6fc860d293950fbff3b0ec848a38a19bea2c3c637c110790f7cb8706e5/) |
| ✅ | 2025/09/21 | 16-0 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ✅ | 2025/09/21 | 9-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ✅ | 2025/09/16 | 22-0 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2025/09/16 | 0-3 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/09/10 | 3-8 | [SPACING GUILD](https://ws.tsl.rocks/corp/e81af8fe50f976167d2ea644004ff2e4c9ce0e7b399b754c06c4c831934842fd/) |
| ✅ | 2025/09/10 | 5-0 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ✅ | 2025/09/05 | 16-0 | [RED STAR](https://ws.tsl.rocks/corp/245570bf3017ea0f1817668a227abc12ee58025af3539a77e59b0bc0bbd1be10/) |
| ✅ | 2025/09/05 | 13-0 | [Aeon](https://ws.tsl.rocks/corp/5e4b3d6d6f08dee95abbb170211af935c564afdbc3039ee0a6f333070688724e/) |
| ✅ | 2025/08/30 | 6-0 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ❌ | 2025/08/30 | 6-7 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2025/08/24 | 8-1 | [jatnniel 团队](https://ws.tsl.rocks/corp/fb2a90ff4c918e808029246b88573a0b283bd3b67f1831aaab89f03720e9ebb2/) |
| ✅ | 2025/08/24 | 18-8 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/08/19 | 5-2 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2025/08/18 | 10-0 | [太阳系星盟·白星观测站](https://ws.tsl.rocks/corp/956fd97c2d6b7d9dc5c9859f2ca6e43bfdff0036065408f26bdd4bb179173499/) |
| ❌ | 2025/08/13 | 0-9 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/08/12 | 9-7 | [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) |
| ✅ | 2025/08/07 | 4-0 | [Chiasmus](https://ws.tsl.rocks/corp/5e1e520f8c04bfa18e2f0bdad432fd5788b965dbcbd47d9f351c3d3074aca34d/) |
| ✅ | 2025/08/06 | 11-2 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ❌ | 2025/08/01 | 0-7 | [Corellia Corp](https://ws.tsl.rocks/corp/d3813c9aa0d7db5581d7e4799a89837cd3bc6d47bbe2639a295b56f5afc1b93f/) |
| ↔️ | 2025/08/01 | 5-5 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |
| ❌ | 2025/07/27 | 0-13 | [вавилон 5](https://ws.tsl.rocks/corp/9fb82c905e6843abf36a6911b09a7bbe345d48e4e2a0073f1cfb65e8cc164ae5/) |
| ✅ | 2025/07/27 | 16-0 | [新星工程](https://ws.tsl.rocks/corp/22f9ba6fe47854adceeccbf19b9818b2338270bc2711f18dc2238d12e40f7b32/) |
| ✅ | 2025/07/22 | 17-0 | [白星集团](https://ws.tsl.rocks/corp/5105e807ad3498410d9cb7e583b7e4a87d3af1583f7e7209d1ccce58da37c581/) |
| ❌ | 2025/07/22 | 0-6 | [\.\- \.\-\.\. \.\-\.\. \.\-](https://ws.tsl.rocks/corp/f71612c31faaae770d61fd8b88f0fc3e0d2c13e7fc8851439ff4c12c0205fda6/) |
| ❌ | 2025/07/16 | 0-5 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2025/07/16 | 14-4 | [Delta WhiteStar](https://ws.tsl.rocks/corp/61577852c258138db2fc8ffe32eebc390b716925e10bf8b96f7922a85b3a9ac6/) |
| ✅ | 2025/07/10 | 8-4 | [Lemmejustwin\!](https://ws.tsl.rocks/corp/3df061e37044f80f90566ba046b4e65cf8aaa94927d03f0a134b25de37300899/) |
| ✅ | 2025/07/10 | 2-0 | [苏维埃联邦](https://ws.tsl.rocks/corp/4b067d39aa68bf846ec24a1af1a1038844cfa78699d1190f74a77b1745e148ac/) |
| ❌ | 2025/07/03 | 0-2 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ❌ | 2025/07/03 | 3-7 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2025/06/27 | 0-11 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ❌ | 2025/06/27 | 0-2 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |
| ❌ | 2025/06/20 | 0-2 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/06/20 | 5-0 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ❌ | 2025/06/15 | 0-7 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/06/14 | 5-3 | [\+SATELLITE•卫星联\+](https://ws.tsl.rocks/corp/0435e7afc53ca549df7205484bd692be15c4e4773b36a0cdebae12a40149efc9/) |
| ✅ | 2025/06/08 | 6-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ❌ | 2025/06/08 | 0-3 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/06/02 | 3-0 | [The Foundation](https://ws.tsl.rocks/corp/dc528cdac6ee1f7bf4a20eeb16e7eea80e03a004a5fea4cd97727f6d57c0e9fe/) |
| ❌ | 2025/06/01 | 0-20 | [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) |
| ❌ | 2025/05/26 | 3-21 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/05/26 | 1-4 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ❌ | 2025/05/20 | 2-19 | [星域](https://ws.tsl.rocks/corp/9dbe1728c2be44c8cfe8025f7ad859d31ee0c7012aca463d85de8c21953e814f/) |
| ✅ | 2025/05/14 | 5-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2025/05/08 | 3-5 | [KEPLER\-442 b](https://ws.tsl.rocks/corp/c9e8ef79747025d87acfcacbae38ece23cad9cc7da1d7e440fe4dc1419e6d374/) |

---
Corporation ID: 7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1767743049"></span>
</div>