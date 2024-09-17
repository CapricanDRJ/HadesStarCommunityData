---
layout: page
title: ​Revólver
description: W:8 L:13 D:1 Bonus ❌
date: 1726332257
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1168 🔻  (927)|
| ELO Competitive | 1189 🔻  (672)|
| Total Matches | 22 |
| Wins | 8 |
| Losses | 13 |
| Draws | 1 |
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
        let timestamps = [1725900257,1725293859,1709359497,1708368793,1707763581,1707158782,1706624660,1705959929,1705168371,1704730223,1704123483,1703613204,1702910072,1702310189,1701706388,1701102301,1700514430,1700503306,1699891330,1699888924,1699287812,1698699397];

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
    
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) | 0 | 2 | 0 | 2 |
| [FreeSpcAlliance](https://ws.tsl.rocks/corp/96bea64334265762457ed1f5f2d255d54618ac74fcee63697cfe08ccf08d99ce/) | 1 | 1 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/14 | 3-22 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ↔️ | 2024/09/07 | 10-10 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2024/03/07 | 7-23 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/02/24 | 23-28 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/02/17 | 4-26 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/02/10 | 3-30 | [Order of Hades](https://ws.tsl.rocks/corp/2aeceaa4796794f014cd422b48bad9f5627e35a758de0255216a519db709ce81/) |
| ❌ | 2024/02/04 | 3-13 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ✅ | 2024/01/27 | 10-5 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2024/01/18 | 11-32 | [Lights Off ](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ✅ | 2024/01/13 | 26-0 | [Ten Forward](https://ws.tsl.rocks/corp/1dd2ea0ec346eac318541b002d2de1be9cab962eb176f2bc45336222b96e847d/) |
| ❌ | 2024/01/06 | 0-21 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2023/12/31 | 8-7 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |
| ✅ | 2023/12/23 | 24-0 | [Peak Extraction](https://ws.tsl.rocks/corp/b656a84b60d6de62745eb9059a703b44cca76b6247beeceef5f856f89e4c2d0d/) |
| ✅ | 2023/12/16 | 11-9 | [FreeSpcAlliance](https://ws.tsl.rocks/corp/96bea64334265762457ed1f5f2d255d54618ac74fcee63697cfe08ccf08d99ce/) |
| ❌ | 2023/12/09 | 0-51 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ❌ | 2023/12/02 | 7-24 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2023/11/25 | 8-10 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ❌ | 2023/11/25 | 4-24 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2023/11/18 | 17-6 | [SALTARDIS](https://ws.tsl.rocks/corp/e7d1a6a546271de114cce5f2d8e71b59c4e8bea66352110bf94a1c91a5993898/) |
| ❌ | 2023/11/18 | 1-22 | [FreeSpcAlliance](https://ws.tsl.rocks/corp/96bea64334265762457ed1f5f2d255d54618ac74fcee63697cfe08ccf08d99ce/) |
| ✅ | 2023/11/11 | 6-4 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2023/11/04 | 20-4 | [CSI](https://ws.tsl.rocks/corp/8943af3db9ef34a38f004d6f574b33784a179f4ee83d9a1f71e85b1d8700d315/) |

Corporation ID: 2560247b1d9fc0ccccf6a9740f3e7cd5d0ebb66444a27e2a259906a476903a45

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>