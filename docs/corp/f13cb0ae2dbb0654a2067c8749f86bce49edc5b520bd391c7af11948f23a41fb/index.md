---
layout: page
title: ​The X - Files
description: W:3 L:53 D:0 Bonus ❌
image: ./favicon.png
date: 1732302788
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head><img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 899 🔻  (1326)|
| ELO Competitive | 938 🔻  (1331)|
| Total Matches | 56 |
| Wins | 3 |
| Losses | 53 |
| Draws | 0 |

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
        let timestamps = [1731870788,1731268470,1730663851,1730059553,1729488899,1728872228,1728281344,1727650258,1727069099,1726431854,1725824234,1725223851,1724635455,1724010698,1723403346,1722798420,1722225649,1721618287,1720988704,1720400836,1719778151,1719172336,1718565598,1717977930,1717356935,1716761887,1716168775,1715543241,1714939030,1714358125,1713728978,1713124153,1712517191,1711960396,1711304459,1710729960,1710100475,1709493520,1708892253,1708283452,1707687259,1707100372,1706562158,1705895915,1705304202,1704731125,1704092226,1703444916,1702877614,1702318306,1701627950,1701020555,1700430580,1699811982,1699206687,1698690674];

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
| [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) | 0 | 2 | 0 | 2 |
| [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) | 0 | 3 | 0 | 3 |
| [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) | 0 | 3 | 0 | 3 |
| [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) | 0 | 8 | 0 | 8 |
| [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) | 0 | 4 | 0 | 4 |
| [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) | 0 | 2 | 0 | 2 |
| [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) | 1 | 1 | 0 | 2 |
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/11/22 | 9-21 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/11/15 | 7-34 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2024/11/08 | 10-41 | [Dacia Chill](https://ws.tsl.rocks/corp/b38c6a1ce87d3b7937da53dddc33cbdfc7152ab1e5023f2308ee9c81a1633208/) |
| ❌ | 2024/11/01 | 10-54 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2024/10/26 | 6-26 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2024/10/19 | 7-48 | [Space Donuts](https://ws.tsl.rocks/corp/50895e5bb0a19e8fde1c7f28e39fc0f170cbc2743a9f1ba45a88bce067d99152/) |
| ❌ | 2024/10/12 | 7-27 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2024/10/04 | 0-34 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2024/09/28 | 4-46 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2024/09/20 | 0-62 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/09/13 | 7-32 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ❌ | 2024/09/06 | 4-31 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2024/08/31 | 0-43 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ❌ | 2024/08/23 | 11-39 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/08/16 | 4-30 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ❌ | 2024/08/09 | 3-42 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2024/08/03 | 11-26 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/07/27 | 7-53 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2024/07/19 | 1-56 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/07/13 | 2-37 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ✅ | 2024/07/05 | 6-3 | [Anla'Shok](https://ws.tsl.rocks/corp/ee2d5a60dee46a98f5178e2807099ebca3c64db7a1fd052df34812d6d88e52a1/) |
| ❌ | 2024/06/28 | 0-54 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/06/21 | 3-33 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ❌ | 2024/06/15 | 0-38 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/06/07 | 0-53 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/05/31 | 2-26 | [Outland Ind\.](https://ws.tsl.rocks/corp/94cb8827caef9b4b1839113abd29145a128d0c1e108c3984bcf7620dd7fca464/) |
| ❌ | 2024/05/25 | 4-38 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/05/17 | 8-40 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ❌ | 2024/05/10 | 0-45 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2024/05/04 | 17-0 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/04/26 | 11-38 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ❌ | 2024/04/19 | 2-45 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/04/12 | 3-29 | [OntarioDestiny](https://ws.tsl.rocks/corp/806a86639b93c3a025e026bcedab96052be0e32b712c96217b3d5b330b3f5a6d/) |
| ❌ | 2024/04/06 | 7-35 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2024/03/29 | 5-37 | [Starsailors](https://ws.tsl.rocks/corp/1ffdd1012b5d4a4aca2e0e34e2653630706b779eead835c61c2c715e4df17a1f/) |
| ❌ | 2024/03/23 | 8-32 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/03/15 | 3-49 | [Imperium XIII](https://ws.tsl.rocks/corp/0d52edf77b0cdeaaea6ebc20a7f5b6a60372b535bf96f556b31e2243dc8ee75a/) |
| ❌ | 2024/03/08 | 4-48 | [the heavy](https://ws.tsl.rocks/corp/fc91552441e9553b76df7ca1870d63c6fd9e50f9c98a3d2bb9f6979b47bd845f/) |
| ❌ | 2024/03/01 | 3-55 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/02/23 | 9-33 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/02/16 | 8-32 | [Hermitage](https://ws.tsl.rocks/corp/b8b6a62ede93951a04bdabd85b532c38d42d8c8b95165f8d4b14e0fd48a021ee/) |
| ❌ | 2024/02/10 | 3-29 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/02/03 | 6-32 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ❌ | 2024/01/27 | 0-50 | [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) |
| ❌ | 2024/01/20 | 0-41 | [Space Penguins](https://ws.tsl.rocks/corp/6255ba7dab1bd2b150825874d1fea70b029dc79434f293d47518c27b0376e286/) |
| ❌ | 2024/01/13 | 3-31 | [Enigma](https://ws.tsl.rocks/corp/d901fe833fb2f84db2321a90a63d0466d4288c8c727fb177afdc6bf2c7c56f25/) |
| ❌ | 2024/01/06 | 0-40 | [Hand Of NOD\! ](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2023/12/29 | 6-44 | [KINETIC](https://ws.tsl.rocks/corp/8ca3f039e6be383f0ea4ebcb6314c8bcd82c93ef833974580f0f9b76d06ef069/) |
| ❌ | 2023/12/23 | 7-52 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2023/12/16 | 0-56 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2023/12/08 | 2-25 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2023/12/01 | 4-24 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2023/11/24 | 3-37 | [Austria ](https://ws.tsl.rocks/corp/96c96cc4b7bf2a41675990223afab3b7be9450dccd7d3cf7572a3991caa73a5f/) |
| ❌ | 2023/11/17 | 3-37 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ❌ | 2023/11/10 | 8-22 | [Галактика Зла](https://ws.tsl.rocks/corp/1495d852070d8182229d3cb26e828265d4525a9ef97a9b377415b803b01d6101/) |
| ✅ | 2023/11/04 | 12-0 | [Ten Forward](https://ws.tsl.rocks/corp/1dd2ea0ec346eac318541b002d2de1be9cab962eb176f2bc45336222b96e847d/) |

---
Corporation ID: f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>