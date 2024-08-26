---
layout: page
title: ​Stargate Corp
description: W:41 L:18 D:0 Bonus ✅
date: 1724557188
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1382 🔺  (49)|
| ELO Competitive | 1512 🔺  (28)|
| Total Matches | 59 |
| Wins | 41 |
| Losses | 18 |
| Draws | 0 |
| Streak | 3 |
| Streak Record | 12 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1724125188,1724098447,1723504319,1723481778,1723017487,1722999759,1722421874,1721752019,1721730378,1721236044,1721163326,1720608494,1720464847,1719917276,1719869504,1719342118,1719325888,1718893144,1718847171,1718203014,1718202713,1717617509,1717591352,1716994484,1716981559,1716472514,1716029060,1715735826,1715185996,1715128613,1714479215,1714396580,1713916453,1713254856,1712720912,1712077285,1711492552,1710926155,1710370293,1709828536,1709263644,1708625711,1708048159,1707235341,1706615944,1706035955,1705497728,1704892198,1704310105,1703742126,1703181651,1702563850,1702009035,1701479483,1700973964,1700452816,1699948131,1699398400,1698880939];

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
    
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) | 3 | 0 | 0 | 3 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 2 | 0 | 0 | 2 |
| [StarControl](https://ws.tsl.rocks/corp/ec38e4998a2ba7ec763a41d4bd33a2d027e94d6a4b9eace9b11e7d89674cc90c/) | 0 | 3 | 0 | 3 |
| [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) | 3 | 3 | 0 | 6 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 2 | 3 | 0 | 5 |
| [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) | 0 | 4 | 0 | 4 |
| [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) | 1 | 1 | 0 | 2 |
| [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) | 2 | 0 | 0 | 2 |
| [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) | 2 | 1 | 0 | 3 |
| [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) | 3 | 0 | 0 | 3 |
| [Titan Corp\.](https://ws.tsl.rocks/corp/c87b86a6baab08254d7226396a20c74fe0972f64fab6fee405914076e111193c/) | 1 | 1 | 0 | 2 |
| [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) | 3 | 0 | 0 | 3 |
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 1 | 1 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/08/25 | 22-18 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2024/08/24 | 53-17 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2024/08/17 | 24-8 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ❌ | 2024/08/17 | 27-30 | [StarControl](https://ws.tsl.rocks/corp/ec38e4998a2ba7ec763a41d4bd33a2d027e94d6a4b9eace9b11e7d89674cc90c/) |
| ✅ | 2024/08/12 | 38-1 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ✅ | 2024/08/12 | 42-29 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/08/05 | 32-56 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/07/28 | 4-57 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/07/28 | 41-28 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2024/07/22 | 66-4 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ✅ | 2024/07/21 | 29-17 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/07/15 | 72-6 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ❌ | 2024/07/13 | 19-54 | [StarControl](https://ws.tsl.rocks/corp/ec38e4998a2ba7ec763a41d4bd33a2d027e94d6a4b9eace9b11e7d89674cc90c/) |
| ❌ | 2024/07/07 | 31-44 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/07/06 | 42-30 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2024/06/30 | 35-17 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ❌ | 2024/06/30 | 21-57 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/06/25 | 64-56 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/06/25 | 34-13 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2024/06/17 | 34-29 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/06/17 | 43-23 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2024/06/10 | 19-32 | [StarControl](https://ws.tsl.rocks/corp/ec38e4998a2ba7ec763a41d4bd33a2d027e94d6a4b9eace9b11e7d89674cc90c/) |
| ❌ | 2024/06/10 | 23-26 | [Titan Corp\.](https://ws.tsl.rocks/corp/c87b86a6baab08254d7226396a20c74fe0972f64fab6fee405914076e111193c/) |
| ❌ | 2024/06/03 | 17-32 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/06/03 | 43-28 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/05/28 | 42-38 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2024/05/23 | 0-32 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ❌ | 2024/05/20 | 11-44 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/05/13 | 3-60 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/05/13 | 29-46 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/05/05 | 41-7 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ✅ | 2024/05/04 | 55-33 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ✅ | 2024/04/28 | 57-44 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2024/04/21 | 17-21 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/04/15 | 51-25 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/04/07 | 54-37 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2024/03/31 | 32-20 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/03/25 | 40-23 | [Titan Corp\.](https://ws.tsl.rocks/corp/c87b86a6baab08254d7226396a20c74fe0972f64fab6fee405914076e111193c/) |
| ✅ | 2024/03/18 | 52-28 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ✅ | 2024/03/12 | 46-34 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/03/06 | 42-11 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ✅ | 2024/02/27 | 56-6 | [The Watchers](https://ws.tsl.rocks/corp/62a08ec3521bd62e5c8fbfc03c7d99fbf3e30fd1df80716485c9b989b27771e6/) |
| ✅ | 2024/02/21 | 58-16 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ✅ | 2024/02/11 | 61-0 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ✅ | 2024/02/04 | 38-27 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ✅ | 2024/01/28 | 55-6 | [Dauntless](https://ws.tsl.rocks/corp/8313138d370b0b0f15dea3af851c836f9a1e1e838bf26c652c9a9831fb6b739a/) |
| ❌ | 2024/01/22 | 13-43 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/01/15 | 36-22 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2024/01/08 | 3-53 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/01/02 | 52-0 | [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) |
| ❌ | 2023/12/26 | 28-39 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ✅ | 2023/12/19 | 49-5 | [星舰地球](https://ws.tsl.rocks/corp/74f9da5a15ff27bf509892de095386a84ef43e8f68b96d1897acf9bcbd542f61/) |
| ✅ | 2023/12/13 | 52-12 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2023/12/07 | 28-8 | [Black Sun](https://ws.tsl.rocks/corp/696ca774d5aafa8bb17ba1f82e16b8751b9775c85e733177827be58093cd7b9e/) |
| ✅ | 2023/12/01 | 62-12 | [Rocket\-by Baby](https://ws.tsl.rocks/corp/a125ad1d27fcc4c18515810a32c12d2d9465565ef75fa08ca2947dee52538313/) |
| ✅ | 2023/11/25 | 60-11 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ✅ | 2023/11/19 | 47-27 | [OntarioDynasty](https://ws.tsl.rocks/corp/5ed105453b3d32e037ce6674e16aff8fb706ba299c62cbf3645fe9eb19e1b1d1/) |
| ❌ | 2023/11/12 | 31-39 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2023/11/06 | 37-24 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |

Corporation ID: b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>