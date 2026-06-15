---
title: ​Ainz ooal gown
description: W:17 L:3 D:0 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 24 - 0 **Страж Галактики**
date: 2026-06-10T11:47:43.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1378 🔺  (5)|
| ELO Competitive | 1418 🔺  (5)|
| Total Matches | 20 |
| Wins | 17 |
| Losses | 3 |
| Draws | 0 |
| Streak | 17 |
| Streak Record | 17 |
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
        let timestamps = [1780660063,1780223221,1779762432,1779314682,1778799116,1778354788,1777918533,1777485913,1777052655,1776609510,1776166973,1775716616,1775273756,1774815606,1774376942,1773941292,1773492434,1773049699,1766905160,1765149245];

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
| ✅ | 2026/06/10 | 24-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ✅ | 2026/06/05 | 23-0 | [龙的传人分团](https://ws.tsl.rocks/corp/fece9fd0a3d132703f79a07d06b758e02f808f5ca3c915b0874253d307021adc/) |
| ✅ | 2026/05/31 | 25-2 | [CERBERUS SYSTEM](https://ws.tsl.rocks/corp/84ca35f0e6e24150613333f78670b8bb6e27010a69920dd6ee7cf671087a3976/) |
| ✅ | 2026/05/25 | 26-0 | [Southall 1](https://ws.tsl.rocks/corp/b615ea00c3e44a9d96f23866b145a9523aa4915b68b2d8852edc202d67dea0da/) |
| ✅ | 2026/05/19 | 11-0 | [九州·白星](https://ws.tsl.rocks/corp/1ece3c742f5a63f10019098583abc17ef0a392394933e56e5c657f4f0b920820/) |
| ✅ | 2026/05/14 | 23-0 | [REY DE REYES](https://ws.tsl.rocks/corp/3400c8c832317ae214792a1e1ce914867af247bc0b4f021bd71a18e977cb60cb/) |
| ✅ | 2026/05/09 | 24-2 | [星月挽歌](https://ws.tsl.rocks/corp/f3dbc8d3257aec31c5f963b5c07b2b5a6a0f96f06f5d797ba5d791a2a4c0e109/) |
| ✅ | 2026/05/04 | 24-0 | [LOS DESTERRADOS](https://ws.tsl.rocks/corp/1d4e7036b8369f2ee8e5c2dda469c98a151f95026d458bc7ef7f154ff50d0127/) |
| ✅ | 2026/04/29 | 15-0 | [REAPERS](https://ws.tsl.rocks/corp/002d1cec93c525f87fb91bba57f25d636bf977c73b34f16b2eedc4cf04d26ebb/) |
| ✅ | 2026/04/24 | 20-0 | [中华五千年](https://ws.tsl.rocks/corp/c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3/) |
| ✅ | 2026/04/19 | 23-2 | [龙的传人](https://ws.tsl.rocks/corp/f9369c5d0313006c708d7e7b381841b0c32aecff0b1ef5c0d074c1a3b0a4ed55/) |
| ✅ | 2026/04/14 | 12-0 | [Wolf Hunters](https://ws.tsl.rocks/corp/a760896a66a9a99c4645eda30f3f5ac5da834e6b5a6c61da7866cf789ef6ec50/) |
| ✅ | 2026/04/09 | 21-0 | [新星帝国属－涵空阁集团](https://ws.tsl.rocks/corp/dc506c25c6cee7986f8f1ee7474f9cdbaa70ecd1c627f8f89cb0a478e66d087c/) |
| ✅ | 2026/04/03 | 15-0 | [Новички](https://ws.tsl.rocks/corp/972be02f6d0b8abd990454b2ae98e12181668ba96252a4747a4899744a7d9dc6/) |
| ✅ | 2026/03/29 | 6-0 | [Deathwatch](https://ws.tsl.rocks/corp/721ab2f79e826f2b11873555f03672f2e792d867532b453e179dc4dd9cf24704/) |
| ✅ | 2026/03/24 | 10-0 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2026/03/19 | 6-0 | [星空社会主义共和国](https://ws.tsl.rocks/corp/38c08f04a2ca92d80139f8b0461c7dc786c257fe8072260c4a128313c1b54c5e/) |
| ❌ | 2026/03/14 | 3-12 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ❌ | 2026/01/02 | 0-10 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/12/12 | 0-6 | [Prodexus Domino](https://ws.tsl.rocks/corp/85917429bb52fbc2dac3f7310ca739f27cae6f39ad628c7d42e2985267005e77/) |

---
Corporation ID: 9ddbd46282a5ceb0dad9e05cf8434a9afe6398c4d2f3a4d54113fa6298ae6f2d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1781092063"></span>
</div>