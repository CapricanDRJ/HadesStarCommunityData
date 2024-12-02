---
layout: page
title: ​Corp. Luminá
description: W:5 L:0 D:0 Bonus ✅
image: ./favicon.png
date: 1732718826
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
 Bɪᴇɴᴠᴇɴɪᴅᴏs 👾ᴄᴏʀᴘᴏʀᴀᴄɪᴏɴ ᴇɴ Cʀᴇᴄɪᴍɪᴇɴᴛᴏ ᴇɴ ᴄᴏɴᴊᴜᴛᴏ ᴄᴏɴ Sᴘʀɪᴛᴇ!    •Dᴀᴍᴏs ᴀʀᴛᴇғᴀᴄᴛᴏs     •Aʏᴜᴅᴀᴍᴏs ᴇɴ Eʀ ʏ Eʀᴏs   •EB sᴇᴍᴀɴᴀʟ        •Gʀᴜᴘᴏ ᴅᴇ WʜᴀᴛsAᴘᴘ          •Eᴠᴇɴᴛᴏs Axᴏʟᴏᴛʟ Bᴜsᴄᴀᴍᴏs Cʀᴇᴄᴇʀ✨
```

<iframe style="display:block;border:none;width:100%;max-width:800px;height:auto;overflow:hidden;margin:1em 0;background-color:transparent;color:inherit;" srcdoc="<!DOCTYPE html><html><head><style>body{all:unset;line-height:1.5;white-space:pre-wrap;margin:0;padding:10px;color:inherit;background-color:transparent;}</style></head><body>Bɪᴇɴᴠᴇɴɪᴅᴏs 👾ᴄᴏʀᴘᴏʀᴀᴄɪᴏɴ ᴇɴ Cʀᴇᴄɪᴍɪᴇɴᴛᴏ ᴇɴ ᴄᴏɴᴊᴜᴛᴏ ᴄᴏɴ Sᴘʀɪᴛᴇ!    •Dᴀᴍᴏs ᴀʀᴛᴇғᴀᴄᴛᴏs     •Aʏᴜᴅᴀᴍᴏs ᴇɴ Eʀ ʏ Eʀᴏs   •EB sᴇᴍᴀɴᴀʟ        •Gʀᴜᴘᴏ ᴅᴇ WʜᴀᴛsAᴘᴘ          •Eᴠᴇɴᴛᴏs Axᴏʟᴏᴛʟ Bᴜsᴄᴀᴍᴏs Cʀᴇᴄᴇʀ✨</body></html>"></iframe>

### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1271 🔺  (198)|
| ELO Competitive | 1274 🔺  (311)|
| Total Matches | 5 |
| Wins | 5 |
| Losses | 0 |
| Draws | 0 |
| Streak | 5 |
| Streak Record | 5 |
| Flagship | 3 |

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
        let timestamps = [1732286826,1731682235,1730912953,1730126260,1729444430];

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
| ✅ | 2024/11/27 | 19-1 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/11/20 | 17-0 | [新星汇聚](https://ws.tsl.rocks/corp/7e61cd500818e2d3a3714d8a775a407e2ce8d9bf1ece36171778536aa8ca7078/) |
| ✅ | 2024/11/11 | 14-2 | [Snack Empire](https://ws.tsl.rocks/corp/e7b912cdbd535c7bae1a2176819caef605c402607aa368b529db6b36d746036b/) |
| ✅ | 2024/11/02 | 24-0 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ✅ | 2024/10/25 | 10-5 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |

---
Corporation ID: a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>