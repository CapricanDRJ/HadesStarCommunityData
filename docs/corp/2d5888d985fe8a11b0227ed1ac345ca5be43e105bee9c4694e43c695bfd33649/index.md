---
layout: page
title: ​ギャラクシー富士山
description: W:2 L:4 D:0 Bonus ❌
date: 1708471446
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1166 🔻  (910)|
| ELO Competitive | 1167 🔻  (992)|
| Total Matches | 6 |
| Wins | 2 |
| Losses | 4 |
| Draws | 0 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/02/20 | 2-12 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ❌ | 2023/12/16 | 0-26 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2023/12/09 | 3-8 | [the Rubber Duck](https://ws.tsl.rocks/corp/bfd6a197d72d0b643c6693e66b9a10db61f75ae242a0bd7c09bdd553ae951ee6/) |
| ✅ | 2023/11/30 | 5-0 | [E\.T\.A 二营](https://ws.tsl.rocks/corp/2f6b0bc6bf0f932bfd9c75dd559a659a45b515277f167f2cd9938a941769a093/) |
| ❌ | 2023/11/22 | 1-12 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2023/11/14 | 5-1 | [SEK\-SPACE ORDER](https://ws.tsl.rocks/corp/de889a16f8f6f7dbd3e87e8810f40b48608df199fe1286e8bf1a8043887e105d/) |

Corporation ID: 2d5888d985fe8a11b0227ed1ac345ca5be43e105bee9c4694e43c695bfd33649

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

# Dynamic Bar Chart Example

This example dynamically creates a bar chart based on Unix timestamps using Chart.js loaded from a CDN.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1708039446,1702264208,1701694665,1700887702,1700224993,1699520316];

        if (timestamps.length === 0) {
            // Handle empty data case, e.g., display a message
            document.getElementById('myChart').style.display = 'none';
            const message = document.createElement('p');
            message.textContent = 'No data available to display the chart.';
            document.body.appendChild(message);
            return;
        }

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
                label: 'Events by Day of the Week',
                data: dayCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    