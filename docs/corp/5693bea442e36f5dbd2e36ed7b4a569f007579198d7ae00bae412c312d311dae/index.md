---
layout: page
title: ​WhiteSTarfighte
description: W:2 L:2 D:0 Bonus ✅
date: 1728289614
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1204 🔺  (439)|
| ELO Competitive | 1212 🔺  (520)|
| Total Matches | 4 |
| Wins | 2 |
| Losses | 2 |
| Draws | 0 |


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
        let timestamps = [1727857614,1727366582,1726932677,1726471215];

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
| ✅ | 2024/10/07 | 8-0 | [代代守护你的神明](https://ws.tsl.rocks/corp/6960f4c6ded90a45fd53df8d3d1b3cf4576ceb471ab4dc9b6931f04c6ea5ac9c/) |
| ❌ | 2024/10/01 | 5-13 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ✅ | 2024/09/26 | 4-1 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ❌ | 2024/09/21 | 1-7 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |

Corporation ID: 5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>