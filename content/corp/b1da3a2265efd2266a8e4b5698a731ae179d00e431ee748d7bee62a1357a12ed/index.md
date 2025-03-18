---
title: ​＊Alfa y Omega＊
description: W:30 L:13 D:2 Bonus ✅ 36%
image: ./favicon.png
Summary: ✅ 13 - 0 **碧海听潮阁**
date: 2025-03-14T20:04:05.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<b><color=green><size=70>*Alfa y Omega*</size></color></b><b><color=b
lue><size=50>                       🪐🌌..."El qué Persevera Alcanza"
...🌌🪐<b><color=purple><size=83>    "La Unión hace la Fuerza"
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/RsHKaexHNh)
### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1321 🔺  (146)|
| ELO Competitive | 1400 🔺  (153)|
| Total Matches | 45 |
| Wins | 30 |
| Losses | 13 |
| Draws | 2 |
| Streak Record | 5 |
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
        let timestamps = [1741550645,1740934331,1739991926,1739144825,1737988756,1737313245,1736808364,1736274306,1735701786,1735160337,1734465667,1733032081,1732468339,1731800643,1731233898,1730737168,1730062558,1729392135,1728864718,1728310793,1727738608,1727237968,1726766210,1726207949,1725604854,1725080801,1724600294,1723954185,1723401542,1723399438,1722868135,1722405650,1721957866,1721452100,1721437678,1721012742,1720907551,1720466951,1719967560,1719958154,1719440986,1718912682,1718309099,1716912746,1699916881];

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
                    'rgba(255, 255, 255, 0.2)', // White (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',   // Deep Sky Blue (Sunday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Monday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Tuesday)
                    'rgba(255, 255, 255, 1)', // White (Wednesday)
                    'rgba(173, 216, 230, 1)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 1)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 1)'    // Deep Sky Blue (Saturday)
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
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
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
| [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) | 1 | 1 | 0 | 2 |
| [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) | 2 | 0 | 0 | 2 |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 3 | 0 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2025/03/14 | 13-0 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ❌ | 2025/03/07 | 6-13 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/02/24 | 2-12 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ❌ | 2025/02/14 | 6-49 | [Ark Summit](https://ws.tsl.rocks/corp/5940b759f3f833f4c6b35733e1f642a64d5589c1c692e34d030383be08e95e02/) |
| ↔️ | 2025/02/01 | 5-5 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ❌ | 2025/01/24 | 5-16 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/01/18 | 11-2 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2025/01/12 | 6-1 | [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) |
| ✅ | 2025/01/06 | 10-2 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2024/12/30 | 22-0 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/12/22 | 11-3 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/12/06 | 3-20 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ✅ | 2024/11/29 | 12-0 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ✅ | 2024/11/21 | 10-3 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2024/11/15 | 14-11 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ✅ | 2024/11/09 | 18-5 | [Stardust](https://ws.tsl.rocks/corp/304ad360ced8ec5a0e12a9955f3dd8f8ac2476f48d98a379beda41221e5a1c1c/) |
| ❌ | 2024/11/01 | 3-6 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ❌ | 2024/10/25 | 0-14 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/10/19 | 18-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/10/12 | 24-11 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2024/10/05 | 13-5 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2024/09/30 | 6-8 | [" Возрождение "](https://ws.tsl.rocks/corp/4422f581b40217ac99ee97df59d8d887249c4cdc51d2d5fe901f438ab720d26d/) |
| ✅ | 2024/09/24 | 22-3 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ✅ | 2024/09/18 | 11-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/09/11 | 13-3 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ✅ | 2024/09/05 | 21-0 | [Axiom](https://ws.tsl.rocks/corp/4000a010c205d318c766ba14fe1836eaab6652f1738a88cce8a8c69d0283e1b0/) |
| ✅ | 2024/08/30 | 26-5 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ↔️ | 2024/08/23 | 4-4 | [Cydonia](https://ws.tsl.rocks/corp/d7b61bdd2b275833780d36a5bdf64fa64d7a1dbea9bde8bdcf54a7e37381214a/) |
| ❌ | 2024/08/16 | 5-17 | [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) |
| ✅ | 2024/08/16 | 4-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/08/10 | 26-0 | [C'est pas faux\!](https://ws.tsl.rocks/corp/fa08ee3e0496d13b55f0058cc61560c3e8e5b91628ee583c9eca31ef10c7749b/) |
| ✅ | 2024/08/05 | 25-3 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/07/31 | 23-3 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2024/07/25 | 1-10 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ✅ | 2024/07/25 | 18-3 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/07/20 | 16-5 | [Pixies](https://ws.tsl.rocks/corp/fe3875cc3bc7cd97ee3d418bb35d69d8ec90da355cbec2dfb7a364387e021240/) |
| ✅ | 2024/07/18 | 17-1 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/07/13 | 18-1 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2024/07/08 | 13-0 | [RPFD\-DNR\-RWPB](https://ws.tsl.rocks/corp/0b44b93ba4150cc49e8bc5e489bd0f381cac46064d18e6929011011e0aaaf48c/) |
| ❌ | 2024/07/07 | 3-13 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/07/01 | 16-2 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/06/25 | 10-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/06/18 | 8-5 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ❌ | 2024/06/02 | 1-20 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2023/11/18 | 1-8 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |

---
Corporation ID: b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1741982645"></span>
</div>