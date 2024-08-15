---
layout: page
title: ​  边界  
description: W:8 L:3 D:0 Bonus ✅
date: 1723687188
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1273 🔺  (170)|
| ELO Competitive | 1273 🔺  (264)|
| Total Matches | 11 |
| Wins | 8 |
| Losses | 3 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 6 |


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
        let timestamps = [1723255188,1722818853,1722361478,1721642326,1721291333,1721203587,1720769290,1720232839,1719564786,1719130853,1717906095];

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
| ✅ | 2024/08/15 | 31-0 | [\*ВОИТЕЛИ\*](https://ws.tsl.rocks/corp/13f23d956b5cd2af502efa23a1c3640106a8af639b2b1ec422496fbb41a91545/) |
| ✅ | 2024/08/10 | 29-4 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ❌ | 2024/08/04 | 6-8 | [P\!RAT£ SHIP](https://ws.tsl.rocks/corp/edee949826201f74f57f45c101789757954710e3d075602dfdda7765a69a7e7c/) |
| ❌ | 2024/07/27 | 13-24 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ✅ | 2024/07/23 | 13-0 | [United Artists](https://ws.tsl.rocks/corp/93a82bb8d95632fd7f9abd3f024e8e9ff678aa31dec4c91872c8a4464b660686/) |
| ✅ | 2024/07/22 | 22-4 | [永恒之梦](https://ws.tsl.rocks/corp/51524c100011292acfff96dc47f5b506950922c6e467b1586d5c571cc281fd4d/) |
| ✅ | 2024/07/17 | 17-1 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/07/11 | 24-18 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ✅ | 2024/07/03 | 11-6 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ✅ | 2024/06/28 | 13-0 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ❌ | 2024/06/14 | 3-35 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |

Corporation ID: 86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>