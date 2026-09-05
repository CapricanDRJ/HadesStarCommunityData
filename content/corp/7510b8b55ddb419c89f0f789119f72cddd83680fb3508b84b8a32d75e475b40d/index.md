---
title: ​莱恩星际
description: W:4 L:8 D:1 Bonus ✅ 30%
image: ./favicon.png
Summary: ✅ 7 - 2 **新手村**
date: 2026-09-03T15:46:17.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 30%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1156 🔺  (16)|
| ELO Competitive | 1173 🔺  (16)|
| Total Matches | 13 |
| Wins | 4 |
| Losses | 8 |
| Draws | 1 |
| Flagship | 0 |

---

### Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1788018377,1787568612,1787114961,1786673736,1785501274,1784811790,1784152033,1783414182,1779937783,1779449206,1778686151,1778246000,1777794753];

        const fontColor = 'rgba(64, 128, 160, 1)';

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
                    'rgba(214, 236, 243, 0.2)', // Custom light blue (Wednesday)
                    'rgba(173, 216, 230, 0.2)', // Light Blue (Thursday)
                    'rgba(135, 206, 250, 0.2)', // Light Sky Blue (Friday)
                    'rgba(0, 191, 255, 0.2)'    // Deep Sky Blue (Saturday)
                ],
                borderColor: [
                    'rgba(0, 191, 255, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(214, 236, 243, 1)',
                    'rgba(173, 216, 230, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(0, 191, 255, 1)'
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
                            color: fontColor
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    x: {
                        ticks: {
                            color: fontColor
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
    
---
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [肥橙子](https://ws.tsl.rocks/corp/89ea001d8666ade05d452a0f136622d2451e614c357e549a6d4dddc6d019ba9c/) | 0 | 1 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/09/03 | 7-2 | [新手村](https://ws.tsl.rocks/corp/cbf6b36fe961a15bd7b120461660f584478561ffc203bc4735bbbc4e2fec5b89/) |
| ❌ | 2026/08/29 | 0-7 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ❌ | 2026/08/24 | 0-5 | [甜甜圈](https://ws.tsl.rocks/corp/b908aab2a29dfae88b897ba94f2fa7e506dd2c754e2fbc8389b8d54e22382557/) |
| ↔️ | 2026/08/19 | 0-0 | [肥橙子](https://ws.tsl.rocks/corp/89ea001d8666ade05d452a0f136622d2451e614c357e549a6d4dddc6d019ba9c/) |
| ❌ | 2026/08/05 | 0-3 | [亚洲团队](https://ws.tsl.rocks/corp/c9aff5770282e84fa982a70be0c45b952f62286b7635a13df63d1615267c653e/) |
| ✅ | 2026/07/28 | 6-0 | [\+SATELLITE•卫星联\+](https://ws.tsl.rocks/corp/0435e7afc53ca549df7205484bd692be15c4e4773b36a0cdebae12a40149efc9/) |
| ❌ | 2026/07/20 | 1-13 | [ༀᅗBAR ESTELARᅗༀ](https://ws.tsl.rocks/corp/874716e0cba92e65a541f6751246b0fa1d503d7ee2b00dcde1ab424af30190be/) |
| ❌ | 2026/07/12 | 2-4 | [肥橙子](https://ws.tsl.rocks/corp/89ea001d8666ade05d452a0f136622d2451e614c357e549a6d4dddc6d019ba9c/) |
| ❌ | 2026/06/02 | 0-8 | [The Covenant](https://ws.tsl.rocks/corp/e128a589a3c8d838fdaacc258e45df1a70ef6a182663fd6df027ae0d569ab50f/) |
| ✅ | 2026/05/27 | 1-0 | [testims](https://ws.tsl.rocks/corp/1cb3651e8214ab3df44120a8964983331aa3a6b101c1fa59119812b52f9b9f14/) |
| ❌ | 2026/05/18 | 0-23 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ❌ | 2026/05/13 | 0-8 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2026/05/08 | 3-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |

---
Corporation ID: 7510b8b55ddb419c89f0f789119f72cddd83680fb3508b84b8a32d75e475b40d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788450377"></span>
</div>