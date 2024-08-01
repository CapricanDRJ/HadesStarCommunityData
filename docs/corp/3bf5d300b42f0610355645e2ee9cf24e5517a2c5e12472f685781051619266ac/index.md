---
layout: page
title: ​Sprite
description: W:4 L:4 D:0 Bonus ✅
date: 1722034665
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1217 🔺  (334)|
| ELO Competitive | 1225 🔺  (386)|
| Total Matches | 8 |
| Wins | 4 |
| Losses | 4 |
| Draws | 0 |
| Streak Record | 2 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/07/26 | 16-8 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/07/19 | 5-23 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2024/07/11 | 23-0 | [Simply Uranus](https://ws.tsl.rocks/corp/951c4b2ef77de2b24b3e3b3cd962679643a8fae1131e289d4ed60482d10aff45/) |
| ✅ | 2024/07/06 | 21-0 | [Quin Armarda](https://ws.tsl.rocks/corp/281e5fa5950e49cecfe76d2adb80613499a0bb841567f92040bfeaea5f4ac218/) |
| ❌ | 2024/06/28 | 1-7 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/05/18 | 6-58 | [Lights Off ](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ❌ | 2024/02/17 | 9-26 | [Draco Ind\.](https://ws.tsl.rocks/corp/07f751e94c7a87c09df410c9cb7181139a112d9d50e36882a2e07f1e7e351a01/) |
| ✅ | 2023/11/25 | 10-8 | [Revólver](https://ws.tsl.rocks/corp/2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45/) |

Corporation ID: 3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac

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
        let timestamps = [1721602665,1720923175,1720298961,1719841551,1719105011,1715619252,1707759071,1700514430];

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
    