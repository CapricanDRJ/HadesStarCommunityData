---
layout: page
title: ​＊Alfa y Omega＊
description: W:9 L:4 D:0 Bonus ✅
date: 1722389866
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1281 🔺  (157)|
| ELO Competitive | 1311 🔺  (190)|
| Total Matches | 13 |
| Wins | 9 |
| Losses | 4 |
| Draws | 0 |
| Streak Record | 5 |

### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) | 2 | 0 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/07/31 | 23-3 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2024/07/25 | 1-10 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ✅ | 2024/07/25 | 18-3 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2024/07/20 | 16-5 | [Pixies](https://ws.tsl.rocks/corp/fe3875cc3bc7cd97ee3d418bb35d69d8ec90da355cbec2dfb7a364387e021240/) |
| ✅ | 2024/07/18 | 17-1 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/07/13 | 18-1 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ✅ | 2024/07/08 | 13-0 | [RPFD\-DNR\-RWPB](https://ws.tsl.rocks/corp/0b44b93ba4150cc49e8bc5e489bd0f381cac46064d18e6929011011e0aaaf48c/) |
| ❌ | 2024/07/07 | 3-13 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/07/01 | 16-2 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ✅ | 2024/06/25 | 10-0 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2024/06/18 | 8-5 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ❌ | 2024/06/02 | 1-20 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2023/11/18 | 1-8 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |

Corporation ID: b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

# Corporation Whitestar match day frequency

This chart shows the frequency of days of the week when whitestars were found.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1721957866,1721452100,1721437678,1721012742,1720907551,1720466951,1719967560,1719958154,1719440986,1718912682,1718309099,1716912746,1699916881];

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
    