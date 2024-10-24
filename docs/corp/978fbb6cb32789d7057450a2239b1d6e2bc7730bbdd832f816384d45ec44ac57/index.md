---
layout: page
title: ​Зелёная корпа
description: W:4 L:4 D:0 Bonus ❌
date: 1710012656
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1202 🔻  (460)|
| ELO Competitive | 1217 🔻  (475)|
| Total Matches | 8 |
| Wins | 4 |
| Losses | 4 |
| Draws | 0 |
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
        let timestamps = [1709580656,1709056919,1701376097,1701364118,1700928580,1700462431,1699781315,1699275190];

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
| ❌ | 2024/03/09 | 16-31 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ✅ | 2024/03/03 | 5-2 | [Solysis](https://ws.tsl.rocks/corp/1dd3b30d4fba97df035310d43fa05c50aa4f77867aa67090be08e245b840b1cf/) |
| ❌ | 2023/12/05 | 0-36 | [Proteus Tech](https://ws.tsl.rocks/corp/a9abf464e4301045ae4dbba7a5889a4e49d10e7e21f2e1011d9507cc5c45012b/) |
| ❌ | 2023/12/05 | 10-15 | [Madison Holding](https://ws.tsl.rocks/corp/94722af3fa4392e52b6bb7af15c2225968543a3de313ace4aa939d138600dd17/) |
| ✅ | 2023/11/30 | 13-3 | [Elite](https://ws.tsl.rocks/corp/4ef70b4cf666928ffd82d4e5278e42bb9edc22aa4a1e9d4e3c08ce9865d59fd9/) |
| ✅ | 2023/11/25 | 30-2 | [Dansk](https://ws.tsl.rocks/corp/6c06d5bbfd511f773338e49569cea4f952af347df4bfe875778a0ccf574f65d7/) |
| ✅ | 2023/11/17 | 29-3 | [Star Dust](https://ws.tsl.rocks/corp/b533dfd525b3f3f64aeec35ea69fb8c8ffe7d067243f58e16bc1280ade45fb4f/) |
| ❌ | 2023/11/11 | 10-39 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |

Corporation ID: 978fbb6cb32789d7057450a2239b1d6e2bc7730bbdd832f816384d45ec44ac57

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>