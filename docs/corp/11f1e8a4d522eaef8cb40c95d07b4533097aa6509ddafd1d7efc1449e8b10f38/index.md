---
layout: page
title: ​SternenStaub
description: W:20 L:21 D:0 Bonus ❌
date: 1722599641
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1158 🔻  (955)|
| ELO Competitive | 1201 🔻  (528)|
| Total Matches | 41 |
| Wins | 20 |
| Losses | 21 |
| Draws | 0 |
| Streak Record | 4 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1722167641,1721581326,1720991108,1720535898,1719901953,1719419045,1718956547,1718174765,1717501490,1716791628,1716278436,1715571782,1715081737,1714461789,1714000580,1713462186,1712843797,1712115445,1711497058,1710791857,1710155755,1709673802,1709155177,1708643142,1708193599,1707656901,1707166898,1706733451,1706291988,1705851438,1705418995,1704970488,1704378919,1703886078,1703339727,1702819911,1702110618,1701586770,1701042800,1700428175,1699956545];

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
| [自由星际联盟](https://ws.tsl.rocks/corp/933277ff64041b32fe12e4e564e2064071377343596c7944fb8c145165e2ab04/) | 2 | 0 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/08/02 | 4-19 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/07/26 | 9-0 | [Nebula](https://ws.tsl.rocks/corp/38bd8c92bc5f2d4ff240d58da260855d87eb4c2c4a241735c5d72215d4a191fb/) |
| ❌ | 2024/07/19 | 3-13 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ✅ | 2024/07/14 | 24-0 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/07/07 | 31-3 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/07/01 | 1-29 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ❌ | 2024/06/26 | 3-34 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ✅ | 2024/06/17 | 17-0 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/06/09 | 1-43 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ❌ | 2024/06/01 | 0-25 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2024/05/26 | 6-31 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/05/18 | 8-36 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2024/05/12 | 26-0 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ✅ | 2024/05/05 | 24-0 | [自由星际联盟](https://ws.tsl.rocks/corp/933277ff64041b32fe12e4e564e2064071377343596c7944fb8c145165e2ab04/) |
| ✅ | 2024/04/29 | 17-5 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2024/04/23 | 3-16 | [Созидание 2\.0](https://ws.tsl.rocks/corp/ae8b8d247dbd93bebc2b77d48c1db6783a17ff8b16438f010c804b7ccf05b76a/) |
| ❌ | 2024/04/16 | 0-14 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ✅ | 2024/04/08 | 13-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/03/31 | 27-0 | [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) |
| ❌ | 2024/03/23 | 7-17 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ❌ | 2024/03/16 | 6-19 | [✡天启✡](https://ws.tsl.rocks/corp/f2d70a86d32ea3a8226afc6d465a6c6540acec572b1c7232994523cdfb299c53/) |
| ❌ | 2024/03/10 | 5-20 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ❌ | 2024/03/04 | 0-16 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/02/27 | 5-7 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2024/02/22 | 9-17 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2024/02/16 | 10-4 | [AKA](https://ws.tsl.rocks/corp/5fde3f409facbda701cdf21de0895eb7c7e17e2d472ae52cc0aa178ce2db64d6/) |
| ❌ | 2024/02/10 | 3-30 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/02/05 | 20-11 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2024/01/31 | 0-7 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ✅ | 2024/01/26 | 21-0 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/01/21 | 13-10 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2024/01/16 | 21-0 | [自由星际联盟](https://ws.tsl.rocks/corp/933277ff64041b32fe12e4e564e2064071377343596c7944fb8c145165e2ab04/) |
| ✅ | 2024/01/09 | 26-0 | [Скричеры](https://ws.tsl.rocks/corp/4e6e4f14ef6899f0d26f90dea584fecdc2d230059402af1d309ce71d87762b5c/) |
| ❌ | 2024/01/03 | 6-15 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2023/12/28 | 3-4 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ✅ | 2023/12/22 | 7-1 | [华夏航队](https://ws.tsl.rocks/corp/c63fe9c181dbac2833d2a4dbf3b050625128057c318b3b5a05bb54bd864f531c/) |
| ✅ | 2023/12/14 | 24-2 | [Dadsw/Daughterz](https://ws.tsl.rocks/corp/bb8c5e4620815c4e35eb2575adf4bf75ba6f74ed21f402e5dfebf3ea0d127229/) |
| ✅ | 2023/12/08 | 23-0 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ✅ | 2023/12/01 | 21-0 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ❌ | 2023/11/24 | 0-28 | [<a\>超越®</a\>光速℡](https://ws.tsl.rocks/corp/771c827eb591813e3b88ff38b0031d09519b0f3d5fe01666aa4711bfd5052857/) |
| ✅ | 2023/11/19 | 16-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |

Corporation ID: 11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>