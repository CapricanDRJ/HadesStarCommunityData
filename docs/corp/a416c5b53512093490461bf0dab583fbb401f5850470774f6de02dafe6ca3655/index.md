---
layout: page
title: ​舰队联邦[FF]
description: W:1 L:6 D:2 Bonus ❌
date: 1729790180
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1135 🔻  (1124)|
| ELO Competitive | 1146 🔻  (1184)|
| Total Matches | 9 |
| Wins | 1 |
| Losses | 6 |
| Draws | 2 |


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
        let timestamps = [1729358180,1727891861,1724835416,1724634716,1724304888,1724135103,1723871533,1723436697,1722843792];

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
| ❌ | 2024/10/24 | 0-3 | [Bon Ariens](https://ws.tsl.rocks/corp/1d0aa6d0fbc5e35422544e47ebd18d2fe21749780594630982f96fa08a850574/) |
| ❌ | 2024/10/07 | 0-5 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ❌ | 2024/09/02 | 0-4 | [UFSG](https://ws.tsl.rocks/corp/9c9b98c2bfcf5411f6bc5502ed3163b92c8733b540071e4b70dc0bf8b0701a97/) |
| ✅ | 2024/08/31 | 1-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ↔️ | 2024/08/27 | 0-0 | [永恒之梦](https://ws.tsl.rocks/corp/51524c100011292acfff96dc47f5b506950922c6e467b1586d5c571cc281fd4d/) |
| ↔️ | 2024/08/25 | 2-2 | [Failures](https://ws.tsl.rocks/corp/0fefd8c33dd941c6dbab4c3251c94de4fbbc67c33dd0a9b5c82b07982c437b3c/) |
| ❌ | 2024/08/22 | 1-10 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ❌ | 2024/08/17 | 0-5 | [DeutschlandGmbH](https://ws.tsl.rocks/corp/7f4550924e4740a47b7d66c9ddf38d65c37590507caab29eecc74f81a4ae2895/) |
| ❌ | 2024/08/10 | 0-5 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |

Corporation ID: a416c5b53512093490461bf0dab583fbb401f5850470774f6de02dafe6ca3655

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>