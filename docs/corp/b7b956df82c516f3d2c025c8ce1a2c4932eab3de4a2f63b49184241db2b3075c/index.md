---
layout: page
title: ​The Witness
description: W:14 L:3 D:0 Bonus ❌
date: 1729144896
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1328 🔺  (110)|
| ELO Competitive | 1328 🔺  (203)|
| Total Matches | 17 |
| Wins | 14 |
| Losses | 3 |
| Draws | 0 |
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
        let timestamps = [1728712896,1728698473,1727967893,1727959474,1727509618,1727445008,1726916748,1726897215,1726361281,1726346492,1725864192,1725859385,1725361461,1724873154,1724401648,1723902493,1723397033];

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
| [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) | 3 | 0 | 0 | 3 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/10/17 | 11-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ❌ | 2024/10/17 | 5-12 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ✅ | 2024/10/08 | 5-1 | [星舰国际](https://ws.tsl.rocks/corp/2142b75cc6d1c522c423a860fbda7616d7745f8fee25121ec3a8f26068b0f3b5/) |
| ✅ | 2024/10/08 | 11-0 | [风云集团](https://ws.tsl.rocks/corp/3ca747bf4a1e2d8605f7b6e8dd589c2fa5856ae2e3050355378b49fd64a86c1f/) |
| ✅ | 2024/10/03 | 5-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/10/02 | 6-0 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ✅ | 2024/09/26 | 8-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ✅ | 2024/09/26 | 13-3 | [代代守护你的神明](https://ws.tsl.rocks/corp/6960f4c6ded90a45fd53df8d3d1b3cf4576ceb471ab4dc9b6931f04c6ea5ac9c/) |
| ✅ | 2024/09/20 | 5-0 | [UFSG](https://ws.tsl.rocks/corp/9c9b98c2bfcf5411f6bc5502ed3163b92c8733b540071e4b70dc0bf8b0701a97/) |
| ✅ | 2024/09/19 | 6-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/09/14 | 4-1 | [tropa \(BR\)](https://ws.tsl.rocks/corp/c5b272089230f78a35d3bee9ed1eb0cc2b3a65703f2452b603286e889efa74c9/) |
| ✅ | 2024/09/14 | 8-2 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ✅ | 2024/09/08 | 5-0 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2024/09/02 | 3-0 | [Castellón ](https://ws.tsl.rocks/corp/fb37feb3f3a25067b78ab399c4596445451b0e856913d5588ca613bdd5a0456a/) |
| ❌ | 2024/08/28 | 2-3 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ✅ | 2024/08/22 | 1-0 | [The Belters](https://ws.tsl.rocks/corp/1cd5dde249c27c1353d5526f2b41bdaa54d289a3d5eeba035a7a49f382f10a7b/) |
| ❌ | 2024/08/16 | 1-8 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |

Corporation ID: b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>