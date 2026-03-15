---
title: ​Hungary First
description: W:19 L:27 D:1 Bonus ❌ 8%
image: ./favicon.png
Summary: ❌ 2 - 7 **YU\-GI\-OH**
date: 2026-02-22T11:40:36.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
For Hungarians. Magyar játékosoknak, akik szeretik a csapatmunkàt! La
nguages: Hungarian, English.
```
<br>

### Whitestar Bonus ❌ 8%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1073 🔻  (-10)|
| ELO Competitive | 1131 🔻  (-12)|
| Total Matches | 47 |
| Wins | 19 |
| Losses | 27 |
| Draws | 1 |
| Streak Record | 7 |
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
        let timestamps = [1771328436,1765672561,1765024910,1763936011,1761508062,1759786970,1758457349,1757905663,1757299646,1756836936,1745605186,1745004779,1744480408,1743842403,1731658796,1730461324,1729246979,1728021388,1726834112,1726224172,1725604854,1725027912,1724407357,1723186368,1721985809,1720768088,1719571384,1718345154,1717140526,1715932313,1714980185,1711696869,1710658438,1709800591,1708950538,1707338537,1706623157,1706001092,1705309310,1704811362,1704111760,1703102013,1702455653,1701955538,1701369183,1700848930,1699867883];

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
| [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) | 0 | 2 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 0 | 2 | 0 | 2 |
| [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) | 1 | 2 | 0 | 3 |
| [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 2-7 | [YU\-GI\-OH](https://ws.tsl.rocks/corp/28f250641a870cb4c3bc77c2320c4892ec2c7006422ca4530475e1f3f372786a/) |
| ❌ | 2025/12/19 | 0-1 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ❌ | 2025/12/11 | 1-3 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ❌ | 2025/11/28 | 0-1 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2025/10/31 | 0-15 | [Popaiders](https://ws.tsl.rocks/corp/c90a11a6c361c99425799a4d25d76d71f4f7308739011a97a167c88780ea7779/) |
| ❌ | 2025/10/11 | 0-19 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2025/09/26 | 3-14 | [Spanish Apes](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ❌ | 2025/09/20 | 0-3 | [Untitled](https://ws.tsl.rocks/corp/305784e9338a041a730cb3abeb4244f9bfd32abf704e052a1920bf6fb7a11eb3/) |
| ❌ | 2025/09/13 | 0-12 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/09/07 | 3-15 | [\+\*Galaxia\*\+](https://ws.tsl.rocks/corp/2e0a8fa5ddc8ebd4d8f5cb5ffbe4710cb5fe62046e0b3923b3b4d8679fb6dace/) |
| ❌ | 2025/04/30 | 1-9 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/04/23 | 8-1 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ❌ | 2025/04/17 | 3-16 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ❌ | 2025/04/10 | 0-14 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/11/20 | 3-17 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/11/06 | 5-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/10/23 | 0-5 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ❌ | 2024/10/09 | 3-9 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ❌ | 2024/09/25 | 2-13 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ✅ | 2024/09/18 | 18-0 | [STRVS233～](https://ws.tsl.rocks/corp/727f6b88132c5850b1ef7ad02101bab3f97fc5dd191307dffca64181bf41e614/) |
| ❌ | 2024/09/11 | 3-13 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2024/09/04 | 3-11 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/08/28 | 14-4 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ✅ | 2024/08/14 | 16-3 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/07/31 | 18-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ✅ | 2024/07/17 | 13-0 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ✅ | 2024/07/03 | 12-0 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ✅ | 2024/06/19 | 6-1 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/06/05 | 8-0 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ❌ | 2024/05/22 | 7-15 | [L\.P\.A\.](https://ws.tsl.rocks/corp/fe807e994d6941c46300d24653a6bb63ea8082fbec1f8c6a2de46bdb797ae948/) |
| ✅ | 2024/05/11 | 5-0 | [深空补给港](https://ws.tsl.rocks/corp/6113fcbe4739d68f06b6a167df2788aa4582546dd0e0de38a088dd7797e0b501/) |
| ❌ | 2024/04/03 | 7-9 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2024/03/22 | 4-30 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ✅ | 2024/03/12 | 10-0 | [t 72 SwiftKey F](https://ws.tsl.rocks/corp/317c4e8eee128258999e74199d05d070892a652c3a65b84b26010f50ee0f8e22/) |
| ✅ | 2024/03/02 | 5-3 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ❌ | 2024/02/12 | 1-15 | [Hand of Legion](https://ws.tsl.rocks/corp/7545cead0b3b8e060a0987cc20eed24610a7dfd11dfef11c73a495e39eb07d14/) |
| ✅ | 2024/02/04 | 13-4 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ❌ | 2024/01/28 | 12-18 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2024/01/20 | 11-4 | [Aurora Burning](https://ws.tsl.rocks/corp/12563d832c8ee65cd0763789549a23ff034c54c9cb77edf2a70afb1cbd904870/) |
| ❌ | 2024/01/14 | 2-7 | [DYLAN](https://ws.tsl.rocks/corp/4c92ec3582be074db571dc198baad7b31951427215e09c4b95a597895406c6a3/) |
| ✅ | 2024/01/06 | 13-6 | [STARBLAZER](https://ws.tsl.rocks/corp/f7649968be86f892b511b45792945c0b5d262c5322586eba7482c3d61e28ac72/) |
| ❌ | 2023/12/25 | 1-17 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2023/12/18 | 12-3 | [Gregycool](https://ws.tsl.rocks/corp/f3d8710927bd368f1c3120cd4d2f0b3130f4ba478e4bdee0555ced460ba56b1a/) |
| ✅ | 2023/12/12 | 11-4 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2023/12/05 | 7-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2023/11/29 | 3-6 | [СлАвЯнСкИй СоЮз](https://ws.tsl.rocks/corp/74a0e9ceb3b48af60580382b0ee5e8712d9a468b4f947302b81b999cfde3f86a/) |
| ↔️ | 2023/11/18 | 0-0 | [Эдельвейс](https://ws.tsl.rocks/corp/457192accaef3d494cc5929e091f05ca560778729d99966d0ab04c2d741d18a7/) |

---
Corporation ID: d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771760436"></span>
</div>