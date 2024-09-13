---
layout: page
title: ​共产国际
description: W:5 L:3 D:2 Bonus ✅
date: 1726060293
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1216 🔺  (358)|
| ELO Competitive | 1267 🔺  (300)|
| Total Matches | 10 |
| Wins | 5 |
| Losses | 3 |
| Draws | 2 |
| Streak Record | 3 |


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
        let timestamps = [1725628293,1725625888,1725156996,1725022801,1724494208,1724221949,1723871533,1723385612,1722757542,1722307686];

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
| ✅ | 2024/09/11 | 5-3 | [情谊永存](https://ws.tsl.rocks/corp/a3fee40ae9e62b95f50c653b7acf4990fee7b21461807dc90da90d429063a98c/) |
| ❌ | 2024/09/11 | 2-3 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ↔️ | 2024/09/06 | 0-0 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ❌ | 2024/09/04 | 2-4 | [CORP GHOST ](https://ws.tsl.rocks/corp/debe8e3a9e01d09c70ef6398b51fa3ee55ebe6506c71fed4987d7595d6265ec3/) |
| ✅ | 2024/08/29 | 5-2 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2024/08/26 | 3-11 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ✅ | 2024/08/22 | 10-1 | [舰队联邦\[FF\]](https://ws.tsl.rocks/corp/a416c5b53512093490461bf0dab583fbb401f5850470774f6de02dafe6ca3655/) |
| ✅ | 2024/08/16 | 8-0 | [凛冬重工](https://ws.tsl.rocks/corp/513d81e0236600883fae60f5ad8bc4b54fe7b9787479dd96fb7e0b4dea3ca5eb/) |
| ✅ | 2024/08/09 | 5-3 | [Nox Imperium](https://ws.tsl.rocks/corp/b60fb003fae650d1de18e7bca4fad04f9805501f4568d07ceb47bffdfeb613c1/) |
| ↔️ | 2024/08/04 | 2-2 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |

Corporation ID: 375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>