---
layout: page
title: ​水晶星际集团
description: W:5 L:22 D:0 Bonus ❌
date: 1723193148
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1053 🔻  (1171)|
| ELO Competitive | 1089 🔻  (1178)|
| Total Matches | 27 |
| Wins | 5 |
| Losses | 22 |
| Draws | 0 |
| Streak Record | 2 |


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
        let timestamps = [1722761148,1721129957,1721129657,1719657040,1717020333,1716008930,1715224751,1714396881,1713018973,1712578785,1712140980,1711284019,1710411447,1709978472,1709486721,1709035281,1708572824,1708095935,1707654196,1707141838,1706623157,1706176888,1705701779,1704546602,1703809146,1703314182,1702041491];

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
    

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/08/09 | 0-8 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/07/21 | 2-9 | [koalition](https://ws.tsl.rocks/corp/68d721684ab83df28cba0a58c608e5dd3c58df79369abffa67da4e8956ef2695/) |
| ❌ | 2024/07/21 | 3-18 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/07/04 | 8-23 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/06/03 | 12-1 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/05/23 | 10-1 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/05/14 | 0-14 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ❌ | 2024/05/04 | 2-17 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ✅ | 2024/04/18 | 9-2 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ❌ | 2024/04/13 | 3-9 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/04/08 | 0-29 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2024/03/29 | 1-8 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ❌ | 2024/03/19 | 3-11 | [Uchiha](https://ws.tsl.rocks/corp/84cbfdcf65b61cfbc76fd507cdad0278bd1469742b77cd098a372506d8f50dbd/) |
| ❌ | 2024/03/14 | 0-16 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/03/08 | 0-2 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ❌ | 2024/03/03 | 2-3 | [Aurora Burning](https://ws.tsl.rocks/corp/12563d832c8ee65cd0763789549a23ff034c54c9cb77edf2a70afb1cbd904870/) |
| ✅ | 2024/02/27 | 5-3 | [Los Unidos ](https://ws.tsl.rocks/corp/963d98b9a64c86c9edc86daabe201f5d7e1f42bbeb0f45671b44a87e0b288e91/) |
| ❌ | 2024/02/21 | 0-12 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ❌ | 2024/02/16 | 2-26 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ❌ | 2024/02/10 | 1-16 | [phoenix clan](https://ws.tsl.rocks/corp/e25bc73528b7029e9b908d920effef5e183928ad3f7b151987a29252d9052c79/) |
| ❌ | 2024/02/04 | 4-13 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ❌ | 2024/01/30 | 2-3 | [КМБ](https://ws.tsl.rocks/corp/9863510eb8d02a7be02ef6a2cf42499cbf1e7ec62df078fe82aaa791444445f4/) |
| ❌ | 2024/01/24 | 2-6 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/01/11 | 5-17 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ❌ | 2024/01/03 | 3-7 | [华夏航队](https://ws.tsl.rocks/corp/c63fe9c181dbac2833d2a4dbf3b050625128057c318b3b5a05bb54bd864f531c/) |
| ❌ | 2023/12/28 | 5-10 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ✅ | 2023/12/13 | 10-0 | [Cowboys](https://ws.tsl.rocks/corp/f461f65e85a43e0b855a525f6995505fc1cc5ae6f85be50470c9dacbb955fc21/) |

Corporation ID: 6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>