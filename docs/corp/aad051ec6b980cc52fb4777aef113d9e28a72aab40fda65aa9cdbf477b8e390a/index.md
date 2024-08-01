---
layout: page
title: ​West Worlders
description: W:3 L:10 D:0 Bonus ✅
date: 1722410298
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1110 🔺  (1096)|
| ELO Competitive | 1141 🔺  (1095)|
| Total Matches | 13 |
| Wins | 3 |
| Losses | 10 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 2 |

### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 2 | 0 | 0 | 2 |
| [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) | 0 | 2 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/07/31 | 36-18 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ✅ | 2024/07/25 | 42-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/07/19 | 30-36 | [Winged Pheonix](https://ws.tsl.rocks/corp/6b9f3e0b419f79343ffd4a8134703379db0e4591879151cbc3ef6a3ff825a2d3/) |
| ❌ | 2024/07/11 | 14-33 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ❌ | 2024/07/01 | 13-60 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2024/06/23 | 29-41 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ✅ | 2024/06/12 | 21-4 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/05/20 | 5-43 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2024/01/26 | 5-41 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2024/01/12 | 4-22 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ❌ | 2023/12/07 | 7-26 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2023/11/13 | 3-5 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2023/11/07 | 7-19 | [Moon Catchers](https://ws.tsl.rocks/corp/0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43/) |

Corporation ID: aad051ec6b980cc52fb4777aef113d9e28a72aab40fda65aa9cdbf477b8e390a

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
        let timestamps = [1721978298,1721458711,1720937900,1720306473,1719377875,1718684596,1717739522,1715793511,1705826190,1704668023,1701507428,1699487944,1698948546];

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
    