---
layout: page
title: ​Новый ЭДЭМ
description: W:2 L:3 D:1 Bonus ❌
date: 1703949335
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1185 🔻  (696)|
| ELO Competitive | 1185 🔻  (757)|
| Total Matches | 6 |
| Wins | 2 |
| Losses | 3 |
| Draws | 1 |

### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Orden Estelar ](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) | 0 | 2 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2023/12/30 | 0-23 | [Orden Estelar ](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) |
| ❌ | 2023/12/10 | 0-19 | [Wompwompway ](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2023/12/03 | 2-1 | [UsualSuspects](https://ws.tsl.rocks/corp/0365f036a244e9e36ecaf6e16ddd9d18693104641bd0ca6a4a626a51e3eed853/) |
| ❌ | 2023/11/18 | 0-11 | [Orden Estelar ](https://ws.tsl.rocks/corp/1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d/) |
| ✅ | 2023/11/11 | 10-1 | [Space Monkeys](https://ws.tsl.rocks/corp/bf0f92381dd40d43b1326fd6cb3455bfd466b0f876fec8c6d9fa885d25d757f9/) |
| ↔️ | 2023/11/05 | 2-2 | [夢幻之星\*分盟\*](https://ws.tsl.rocks/corp/25ac58a842783eb85413a2cb4896100bd1bdad3b64dbbc3b2d2c9bdf3f878c96/) |

Corporation ID: f1d15cb357f6e239e540971a84a8b7161bfb5a976716027dbccbbf8e77dac4b5

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

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
        let timestamps = [1703517335,1701753273,1701135965,1699919585,1699301636,1698760716];

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
                // Custom electric blue/white color scheme for a dark background
                data: dayCounts,
                backgroundColor: [
                    'rgba(0, 255, 255, 0.9)',   // Electric Cyan
                    'rgba(173, 216, 230, 0.9)', // Light Blue
                    'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
                    'rgba(0, 206, 209, 0.9)',   // Dark Turquoise
                    'rgba(135, 206, 250, 0.9)', // Light Sky Blue
                    'rgba(0, 255, 255, 0.9)',   // Cyan
                    'rgba(30, 144, 255, 0.9)'   // Dodger Blue
                ],
                borderColor: [
                    'rgba(0, 255, 255, 1)',     // Electric Cyan
                    'rgba(173, 216, 230, 1)',   // Light Blue
                    'rgba(0, 191, 255, 1)',     // Deep Sky Blue
                    'rgba(0, 206, 209, 1)',     // Dark Turquoise
                    'rgba(135, 206, 250, 1)',   // Light Sky Blue
                    'rgba(0, 255, 255, 1)',     // Cyan
                    'rgba(30, 144, 255, 1)'     // Dodger Blue
                ],
                borderWidth: 1,
                minBarLength: 5 // Ensure bars have at least this many pixels in height
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
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide the legend since we don't have a label
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    