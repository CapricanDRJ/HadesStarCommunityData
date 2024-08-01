---
layout: page
title: ​Quilliance
description: W:14 L:2 D:0 Bonus ❌
date: 1721745871
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1341 🔺  (74)|
| ELO Competitive | 1362 🔺  (122)|
| Total Matches | 16 |
| Wins | 14 |
| Losses | 2 |
| Draws | 0 |
| Streak | 3 |
| Streak Record | 9 |

### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) | 2 | 0 | 0 | 2 |
| [Inexorable](https://ws.tsl.rocks/corp/8343908ac19af8666d7765db00e5eb603d9e87bbbfe273c81d9b9b2329ca0827/) | 2 | 0 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/07/23 | 23-3 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ✅ | 2024/07/16 | 19-4 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ✅ | 2024/07/02 | 31-9 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ❌ | 2024/06/18 | 9-29 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/06/04 | 22-3 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ✅ | 2024/05/21 | 33-0 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ❌ | 2024/05/07 | 5-23 | [혁명군](https://ws.tsl.rocks/corp/712800536cbb3ef3357a2480d86cf971596950ac499e699bb3d99f94d1c65f5f/) |
| ✅ | 2024/04/09 | 24-18 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2024/03/26 | 16-9 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2024/03/12 | 15-0 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/02/27 | 16-14 | [Inexorable](https://ws.tsl.rocks/corp/8343908ac19af8666d7765db00e5eb603d9e87bbbfe273c81d9b9b2329ca0827/) |
| ✅ | 2024/02/13 | 23-7 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/01/30 | 24-4 | [СлАвЯнСкИй СоЮз](https://ws.tsl.rocks/corp/74a0e9ceb3b48af60580382b0ee5e8712d9a468b4f947302b81b999cfde3f86a/) |
| ✅ | 2024/01/16 | 19-4 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ✅ | 2023/12/19 | 18-6 | [Inexorable](https://ws.tsl.rocks/corp/8343908ac19af8666d7765db00e5eb603d9e87bbbfe273c81d9b9b2329ca0827/) |
| ✅ | 2023/12/05 | 25-4 | [Das Imperium](https://ws.tsl.rocks/corp/bf80902e944e3605f5f2fe70f245c1442fa4094414322964da8200dc57c58ef0/) |

Corporation ID: 6a4f8febc4066842f85c0373a0d33b6501860f2cc4f61b64761d31ff472c28fe

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
        let timestamps = [1721313871,1720697755,1719494469,1718276035,1717098463,1715863511,1714659195,1712232628,1711022298,1709815614,1708595658,1707383004,1706173583,1704970331,1702549122,1701338827];

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
                // Custom electric blue/white color scheme for a dark background
                data: dayCounts,
                backgroundColor: [
                    'rgba(0, 255, 255, 0.9)',   // Electric Cyan
                    'rgba(173, 216, 230, 0.9)', // Light Blue
                    'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
                    'rgba(0, 206, 209, 0.9)',   // Dark Turquoise
                    'rgba(135, 206, 250, 0.9)', // Light Sky Blue
                    'rgba(0, 255, 255, 0.9)',   // Cyan
                    'rgba(30, 144, 255, 0.9)'   // Dodger Blue
                ],
                borderColor: [
                    'rgba(0, 255, 255, 1)',     // Electric Cyan
                    'rgba(173, 216, 230, 1)',   // Light Blue
                    'rgba(0, 191, 255, 1)',     // Deep Sky Blue
                    'rgba(0, 206, 209, 1)',     // Dark Turquoise
                    'rgba(135, 206, 250, 1)',   // Light Sky Blue
                    'rgba(0, 255, 255, 1)',     // Cyan
                    'rgba(30, 144, 255, 1)'     // Dodger Blue
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
                        beginAtZero: true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    },
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)' // Light text for contrast
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)' // Light grid lines for contrast
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide the legend since we don't have a label
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    