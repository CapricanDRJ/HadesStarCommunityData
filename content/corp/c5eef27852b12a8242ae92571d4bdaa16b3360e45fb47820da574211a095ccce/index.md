---
title: ​한국우주연합
description: W:23 L:31 D:1 Bonus ❌ 9%
image: ./favicon.png
Summary: ❌ 0 - 31 **Drama Llama**
date: 2025-12-08T12:10:07.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
kor.cop 많이 들어와주세요
```
<br>

### Whitestar Bonus ❌ 9%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1185 🔻  (-15)|
| ELO Competitive | 1332 🔻  (-21)|
| Total Matches | 55 |
| Wins | 23 |
| Losses | 31 |
| Draws | 1 |
| Streak Record | 4 |
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
        let timestamps = [1764763807,1756390301,1756376176,1755129764,1755128862,1754553405,1754548606,1753888747,1753868913,1752991774,1752983661,1752507069,1752499554,1751895340,1751895340,1751331043,1751326838,1750836448,1750835547,1750339115,1750329498,1749545283,1749521139,1749023828,1749022626,1748416237,1747136723,1746003554,1746003253,1744965708,1742976862,1741523292,1740024685,1738889686,1732841274,1730884706,1716955418,1711857631,1710761203,1710239885,1709052712,1708515729,1708049360,1707604317,1707122306,1706658323,1706075920,1705236586,1704151736,1703514931,1703487883,1702998126,1702309287,1701864173,1701165413];

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
| [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) | 1 | 2 | 0 | 3 |
| [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) | 0 | 1 | 1 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/12/08 | 0-31 | [Drama Llama](https://ws.tsl.rocks/corp/93426bf45382d9e6effd51e6d6ebe819aba2b45584cf397ab529a6aaac84c2d3/) |
| ❌ | 2025/09/02 | 6-7 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ❌ | 2025/09/02 | 0-8 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ✅ | 2025/08/19 | 5-2 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2025/08/18 | 0-14 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2025/08/12 | 3-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2025/08/12 | 2-6 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ✅ | 2025/08/04 | 4-3 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/08/04 | 2-0 | [Sky](https://ws.tsl.rocks/corp/9285f76649b8d3ca4faf9a9991522efc7f51d7545a60bc8d12a65e23d548a6f1/) |
| ✅ | 2025/07/25 | 12-5 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/07/25 | 0-30 | [РARADISЕ](https://ws.tsl.rocks/corp/03c58fc5ec06999aae229fdff322b3b4e29ed65d445af279f69068d3f7180287/) |
| ✅ | 2025/07/19 | 24-3 | [Bey○nd](https://ws.tsl.rocks/corp/cdf595b5b26005e90eabaf16deb2b99a460c6ae1dcdadfd7e275352456bc440f/) |
| ❌ | 2025/07/19 | 0-15 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ❌ | 2025/07/12 | 0-6 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2025/07/12 | 19-3 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/07/06 | 17-2 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/07/05 | 0-31 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/06/30 | 4-19 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/06/30 | 1-15 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2025/06/24 | 0-17 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ✅ | 2025/06/24 | 13-0 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ❌ | 2025/06/15 | 0-4 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ❌ | 2025/06/15 | 2-12 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/06/09 | 8-5 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ✅ | 2025/06/09 | 5-0 | [BlankBoosters](https://ws.tsl.rocks/corp/4785b4fb166ccb4b23d12d1041a31d9b52b59e5284bdf5965805338cbc1c2e33/) |
| ↔️ | 2025/06/02 | 10-10 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/05/18 | 25-0 | [Крайний Космос2](https://ws.tsl.rocks/corp/ba7e7358d463c03df9ce606344c546237a79463b57a3ba82d10cfb2be770406e/) |
| ❌ | 2025/05/05 | 0-2 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/05/05 | 15-2 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/04/23 | 8-4 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ❌ | 2025/03/31 | 2-13 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/03/14 | 10-6 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/02/25 | 8-2 | [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) |
| ❌ | 2025/02/12 | 15-17 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2024/12/04 | 0-14 | [Lofty Mountain](https://ws.tsl.rocks/corp/1cfc6606e17d524ba0388b273ad6a9e86b23838eb529a2659f03a40702affbf7/) |
| ❌ | 2024/11/11 | 1-3 | [СНГ — РОССИЯ](https://ws.tsl.rocks/corp/075394144fa4e771dc8358886dc461b0ed87d948b46e5d817d29296adf2f11f2/) |
| ❌ | 2024/06/03 | 1-5 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ❌ | 2024/04/05 | 0-4 | [Los Unidos](https://ws.tsl.rocks/corp/963d98b9a64c86c9edc86daabe201f5d7e1f42bbeb0f45671b44a87e0b288e91/) |
| ❌ | 2024/03/23 | 0-6 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/03/17 | 0-4 | [新纪元舰队](https://ws.tsl.rocks/corp/d36af8af2f097f561de219867c4bfcc83f266642293429cf3fda159792008277/) |
| ❌ | 2024/03/03 | 0-16 | [Galaktika corp](https://ws.tsl.rocks/corp/c37872d1ea085402bf536c707a895610f72dafda4bede848405b7908b4523985/) |
| ❌ | 2024/02/26 | 1-3 | [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) |
| ❌ | 2024/02/21 | 3-26 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/02/15 | 0-15 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ✅ | 2024/02/10 | 12-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/02/04 | 5-0 | [公共星际集团](https://ws.tsl.rocks/corp/f57faccefed6ab561fa61ac8e6f60708928e3a8b5caa5172c97c2a29348aed37/) |
| ❌ | 2024/01/29 | 3-32 | [Nova Time](https://ws.tsl.rocks/corp/0f1c182652387799cfc3a59082f52a2b01201b13336d84760eab107fb1934ce0/) |
| ✅ | 2024/01/19 | 5-2 | [STARBLAZER](https://ws.tsl.rocks/corp/f7649968be86f892b511b45792945c0b5d262c5322586eba7482c3d61e28ac72/) |
| ❌ | 2024/01/06 | 5-7 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2023/12/30 | 0-8 | [Dark Sun](https://ws.tsl.rocks/corp/41ffd72a8eba70ea3f7f69ce602194b0ee84c7e65be6d2e08b87181de24cc9cf/) |
| ❌ | 2023/12/30 | 0-4 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2023/12/24 | 8-3 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ✅ | 2023/12/16 | 3-0 | [Br Stark Corps](https://ws.tsl.rocks/corp/bb363d47e9cd8710d6808f6dcc2d270bdf33614e63ea6e0943bb739cde625f27/) |
| ✅ | 2023/12/11 | 5-2 | [Space Scourge](https://ws.tsl.rocks/corp/04ad48264f0fcb63156d90f6ff6dfd55b1ab9321d56144f671a84c0253bccfc1/) |
| ✅ | 2023/12/03 | 5-4 | [Thunderbears](https://ws.tsl.rocks/corp/904c85a40298fe616763ce7bc9ac0534ab1d9dd69151c63308a3906f2eb07d54/) |

---
Corporation ID: c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1765195807"></span>
</div>