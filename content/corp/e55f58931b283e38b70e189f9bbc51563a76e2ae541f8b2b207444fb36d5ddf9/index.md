---
title: ​Cydonia Order
description: W:28 L:16 D:3 Bonus ✅ 36%
image: ./favicon.png
Summary: ✅ 23 - 8 **Gold Star**
date: 2025-04-25T14:32:21.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
THE CYDONIAN EMPIRE™
```
<br>

### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1346 🔺  (119)|
| ELO Competitive | 1405 🔺  (171)|
| Total Matches | 47 |
| Wins | 28 |
| Losses | 16 |
| Draws | 3 |
| Streak | 2 |
| Streak Record | 11 |
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
        let timestamps = [1745159541,1744580782,1744145054,1743557815,1742947419,1742340048,1741843010,1741218587,1740775947,1740185774,1739572420,1738959406,1738336426,1737739337,1737123610,1736472051,1735776908,1735237855,1734690106,1734141150,1733609913,1732930216,1732399222,1731963217,1731394371,1730666556,1729989527,1729274633,1728563228,1727977213,1726879489,1725753910,1725738886,1723798809,1723517539,1719105011,1717580232,1711957692,1711172235,1709704144,1709189726,1708492593,1703325601,1702073657,1701215312,1700102076,1699282702];

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
| [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) | 2 | 0 | 0 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 3 | 0 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/04/25 | 23-8 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2025/04/18 | 24-4 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2025/04/13 | 4-13 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ✅ | 2025/04/07 | 29-0 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/03/31 | 18-0 | [Seila](https://ws.tsl.rocks/corp/8749ed87cb9e85c88599f3bb9f9159e00561229eb1690cb36d565a054638cc52/) |
| ✅ | 2025/03/23 | 22-3 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ❌ | 2025/03/18 | 6-30 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ✅ | 2025/03/10 | 19-16 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ↔️ | 2025/03/05 | 2-2 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2025/02/27 | 17-3 | [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) |
| ✅ | 2025/02/19 | 16-1 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2025/02/12 | 13-5 | [united unicorn](https://ws.tsl.rocks/corp/c4293f281cc7b1b07b39d9f146cf1dc843b7e22cdb34d9ab8762b07f5db3e276/) |
| ✅ | 2025/02/05 | 20-2 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2025/01/29 | 13-0 | [KhaOSs](https://ws.tsl.rocks/corp/95c40ecac6f4ca7ecd66a5c1e79c568a9486ba450cf71becee48329599573c88/) |
| ✅ | 2025/01/22 | 21-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/01/15 | 11-5 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ✅ | 2025/01/07 | 7-0 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ✅ | 2024/12/31 | 8-6 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/12/25 | 16-3 | [星际联盟（中国）](https://ws.tsl.rocks/corp/1deb8ab45257a86051f9c285bbbe06652a56d93118d8e442a0a30ddd179f4256/) |
| ✅ | 2024/12/19 | 20-0 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ↔️ | 2024/12/12 | 3-3 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/12/05 | 7-5 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2024/11/28 | 3-20 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ✅ | 2024/11/23 | 10-3 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/11/17 | 7-3 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2024/11/08 | 8-0 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ✅ | 2024/11/01 | 11-3 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/10/23 | 2-3 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ❌ | 2024/10/15 | 3-30 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2024/10/08 | 9-0 | [REY DE REYES](https://ws.tsl.rocks/corp/3400c8c832317ae214792a1e1ce914867af247bc0b4f021bd71a18e977cb60cb/) |
| ✅ | 2024/09/26 | 12-2 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/09/13 | 0-2 | [AntiCerberus](https://ws.tsl.rocks/corp/05549095de4dbbeb78175abda32e043bd7c0afada2bba974c17c41674469da29/) |
| ✅ | 2024/09/12 | 7-6 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2024/08/21 | 8-3 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ↔️ | 2024/08/18 | 0-0 | [𝖕𝖎𝖗𝖆𝖙𝖊𝖘](https://ws.tsl.rocks/corp/dfa303324f73956393169d9ab02646eb1f9492b8ec55b01c604befbd33461821/) |
| ❌ | 2024/06/28 | 0-6 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/06/10 | 0-3 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ❌ | 2024/04/06 | 0-9 | [Ul'Adri](https://ws.tsl.rocks/corp/d44796a95a2cc6f93a92af4d701a9c6325eff22633f874f43945a1b1d77b5fe7/) |
| ❌ | 2024/03/28 | 0-28 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/03/11 | 10-1 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/03/05 | 2-11 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/02/26 | 5-0 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ❌ | 2023/12/28 | 5-19 | [火洋之心](https://ws.tsl.rocks/corp/99cb105316e2715545c205443c4e331cd11832753eac1c21e11ae3d532e36bcb/) |
| ❌ | 2023/12/13 | 7-28 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ❌ | 2023/12/03 | 1-24 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ❌ | 2023/11/21 | 0-18 | [TITANS](https://ws.tsl.rocks/corp/99cb7335e71fb4b435cc1929b77308ae522773aee201cf5fdfc4b8e6edf54f36/) |
| ❌ | 2023/11/11 | 0-23 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |

---
Corporation ID: e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1745591541"></span>
</div>