---
title: ​新星帝国属－涵空阁集团
description: W:0 L:7 D:1 Bonus ❌ 2%
image: ./favicon.png
Summary: ❌ 0 - 16 **物竞天择，适者生存**
date: 2026-08-29T03:29:36.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 2%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1110 🔻  (-13)|
| ELO Competitive | 1117 🔻  (-10)|
| Total Matches | 8 |
| Wins | 0 |
| Losses | 7 |
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
        let timestamps = [1787542176,1786978255,1786545623,1785936611,1780640840,1779158858,1775273756,1771616014];

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

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/08/29 | 0-16 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ❌ | 2026/08/22 | 0-12 | [休闲、红、蓝、白养老集团。](https://ws.tsl.rocks/corp/fac6071b530004bf66357eb56cba721111e0a2ef159c0ff32e5ec2eea6574946/) |
| ❌ | 2026/08/17 | 0-2 | [请输入文本](https://ws.tsl.rocks/corp/dd9d972d90241532a87c021497f2f1bcab86dcc1c8ef7bcf718730bba133f5fb/) |
| ❌ | 2026/08/10 | 0-5 | [神圣群星帝国](https://ws.tsl.rocks/corp/7c3cb9fed2932138322efbd8923aae086504c31685e36adf906dd4a83003569f/) |
| ❌ | 2026/06/10 | 1-3 | [Hells Angels](https://ws.tsl.rocks/corp/01a0f9b4443ddba1497c97bc90959bc981586b396487f54baf35a3c5b534a8d8/) |
| ↔️ | 2026/05/24 | 0-0 | [Orion France](https://ws.tsl.rocks/corp/c2eb8d6062cc509695dd557961bcc9893a5bf7bc6312a0a954c13cfd00c0a6f2/) |
| ❌ | 2026/04/09 | 0-21 | [Ainz ooal gown](https://ws.tsl.rocks/corp/9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d/) |
| ❌ | 2026/02/25 | 1-6 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |

---
Corporation ID: dc506c25c6cee7986f8f1ee7474f9cdbaa70ecd1c627f8f89cb0a478e66d087c

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1787974176"></span>
</div>