---
layout: page
title: ​NEW HOLLAND
description: W:1 L:8 D:1 Bonus ❌
date: 1708785058
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1116 🔻  (1084)|
| ELO Competitive | 1139 🔻  (1100)|
| Total Matches | 10 |
| Wins | 1 |
| Losses | 8 |
| Draws | 1 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/02/24 | 1-11 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/02/17 | 0-11 | [<a\>超越®</a\>光速℡](https://ws.tsl.rocks/corp/771c827eb591813e3b88ff38b0031d09519b0f3d5fe01666aa4711bfd5052857/) |
| ❌ | 2024/01/31 | 0-9 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/01/23 | 2-7 | [Atlas corp](https://ws.tsl.rocks/corp/e729927db5a5672fcc94357f999bc3b66fa38a624f042543b847f82e7fa890a5/) |
| ✅ | 2024/01/09 | 3-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2023/12/22 | 0-7 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2023/12/19 | 0-11 | [Warriors union](https://ws.tsl.rocks/corp/414b486648e1871ce70a5ac9f1a65f02a15d6a38eebc99c23ab68016ba988ea8/) |
| ❌ | 2023/12/13 | 0-3 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ↔️ | 2023/12/11 | 1-1 | [TRAPSTAR¹](https://ws.tsl.rocks/corp/41cff3569548da10a9cf4c36b91a525ec982349fa4a35a59b047ea22dcf0f48f/) |
| ❌ | 2023/12/08 | 2-4 | [Prometheus](https://ws.tsl.rocks/corp/b8bbef86e5b1f72bf9c827f0497871ab0363769ac4fef563fd56f96ac88c85a6/) |

Corporation ID: b080750b30e8c3b7a4c8bd483921bb8082a83d48c662683a07beba245f70c2a2

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
        let timestamps = [1708353058,1707733226,1706289884,1705608921,1704348868,1702854364,1702564451,1702074859,1701897843,1701597590];

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
    