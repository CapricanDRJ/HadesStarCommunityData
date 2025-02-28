---
layout: page
title: ​Lacuna Academy
description: W:15 L:2 D:0 Bonus ❌ 6%
image: ./favicon.png
date: 1718228706
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
<b>Lacuna Group's</b> entry corp.
-Geared for new players RS 1-4
<b>Discord:</b> discord.gg/BFfSkvu
RS 5-6 see Lacuna X
RS 7+ see Lacuna Holdings
RS 8-11 see Lacuna Ind.
```
### [Discord](https://discord.gg/BFfSkvu)
### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1345 🔺  (107)|
| ELO Competitive | 1353 🔺  (203)|
| Total Matches | 17 |
| Wins | 15 |
| Losses | 2 |
| Draws | 0 |
| Streak | 5 |
| Streak Record | 7 |
| Flagship | 1 |

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
        let timestamps = [1717796706,1717262848,1716595994,1716018547,1714781588,1714327780,1713020176,1712448676,1711772102,1711204989,1708745607,1708153328,1707569005,1706916461,1706384249,1705683746,1704492516];

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
    
---

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/06/12 | 14-0 | [共和服务器](https://ws.tsl.rocks/corp/4e0ba02fcf6a27709a0ba2cb1966d1dd8f36c8b2f9c1e98ac4fe5670e8f4a8cf/) |
| ✅ | 2024/06/06 | 16-0 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ✅ | 2024/05/30 | 6-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/05/23 | 1-0 | [新纪元舰队](https://ws.tsl.rocks/corp/d36af8af2f097f561de219867c4bfcc83f266642293429cf3fda159792008277/) |
| ✅ | 2024/05/09 | 11-0 | [The Red Dwarves](https://ws.tsl.rocks/corp/4cecdcd329a545deb9c2a292081f9220114f37e845dbea6dd1ec326390e296dd/) |
| ❌ | 2024/05/03 | 0-15 | [Z\. O\. V\. ](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2024/04/18 | 5-3 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2024/04/12 | 26-0 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ✅ | 2024/04/04 | 8-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/03/28 | 0-13 | [第六星际](https://ws.tsl.rocks/corp/b322db3cd473083ce32a0b274764dfecf2e77caa341610fc1e898563debc5087/) |
| ✅ | 2024/02/29 | 15-0 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ✅ | 2024/02/22 | 9-1 | [Nexland Ind\.](https://ws.tsl.rocks/corp/d944d7c48fcdf12fbe80bbfaec82482895285c344a643e8e679fc22617a2c44a/) |
| ✅ | 2024/02/15 | 20-1 | [春城阳关](https://ws.tsl.rocks/corp/bc27282881e1fe0acdf914d7d700f6722d74c173fd16d0bb446d345e7daa9ede/) |
| ✅ | 2024/02/07 | 17-6 | [koalition](https://ws.tsl.rocks/corp/68d721684ab83df28cba0a58c608e5dd3c58df79369abffa67da4e8956ef2695/) |
| ✅ | 2024/02/01 | 17-0 | [Ukr alliance ](https://ws.tsl.rocks/corp/0eb13755b8906344c0af35f3d63b7cc0ecebf80877f327f78b1e40aded41ca7c/) |
| ✅ | 2024/01/24 | 14-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/01/10 | 19-0 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |

---
Corporation ID: ed67ca44432a8fad3aec6fab3e7f305d394d2b41844391fd29e1ce2b316b336b

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>