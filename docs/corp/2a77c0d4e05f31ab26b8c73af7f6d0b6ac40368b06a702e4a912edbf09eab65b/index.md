---
layout: page
title: ​СССР 2.0
description: W:2 L:6 D:0 Bonus ❌
date: 1703584196
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1144 🔻  (1015)|
| ELO Competitive | 1146 🔻  (1075)|
| Total Matches | 8 |
| Wins | 2 |
| Losses | 6 |
| Draws | 0 |
| Streak Record | 2 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2023/12/26 | 0-5 | [Celtic Imperium](https://ws.tsl.rocks/corp/58d284836596e89b4f481066ae27a521175a632d88194574f08bf27baa1f9c7a/) |
| ❌ | 2023/12/20 | 3-16 | [РусКорп](https://ws.tsl.rocks/corp/7994b4a10a625b21deff136a17c63d096a4ba2f5cdd9eb9dedd7d0bd21b53d16/) |
| ❌ | 2023/12/14 | 5-10 | [Cyber Star](https://ws.tsl.rocks/corp/358bbbde0af23c5f41cdb4fde95bb713989c7812b5a0358f7c34ecceca19916c/) |
| ❌ | 2023/12/08 | 2-7 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2023/12/03 | 5-3 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2023/11/28 | 3-0 | [TearsWorld](https://ws.tsl.rocks/corp/f77df1f3b9d224e19c16927b6ba7ecc1d14ba903310aa1507608270184f68619/) |
| ❌ | 2023/11/23 | 0-9 | [Red Star Corp\.](https://ws.tsl.rocks/corp/7ac87486823e26635a2f3887927b19b3a14a7875d38042200045204c418d9ac1/) |
| ❌ | 2023/11/17 | 0-6 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |

Corporation ID: 2a77c0d4e05f31ab26b8c73af7f6d0b6ac40368b06a702e4a912edbf09eab65b

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
        let timestamps = [1703152196,1702637480,1702143083,1701637571,1701176533,1700730510,1700283001,1699802360];

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
    