---
title: ​imperio viltrum
description: W:10 L:10 D:2 Bonus ✅ 32%
image: ./favicon.png
Summary: ✅ 11 - 4 **契约\-璃月**
date: 2026-09-04T13:23:08.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ✅ 32%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1220 🔺  (21)|
| ELO Competitive | 1332 🔺  (25)|
| Total Matches | 22 |
| Wins | 10 |
| Losses | 10 |
| Draws | 2 |
| Streak | 2 |
| Streak Record | 2 |
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
        let timestamps = [1788096188,1787672871,1787578828,1787040447,1787028432,1786509852,1786506845,1786008113,1785988289,1785509387,1785475440,1784990835,1784952082,1784446761,1784365641,1783868727,1783570706,1783422292,1782866807,1782785387,1782107875,1781663201];

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
| [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) | 2 | 0 | 0 | 2 |
| [attraction\.F](https://ws.tsl.rocks/corp/b2358fac70c7c1072563046f11245b78c51ec7b9bdf54e329487b89dfa60c371/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/09/04 | 11-4 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ✅ | 2026/08/30 | 2-0 | [Imperial Navy](https://ws.tsl.rocks/corp/3e07bbe9ec60b90d6861b7ee28cf8803a8f175db765ab57bcc8c20b4dcd3dd09/) |
| ❌ | 2026/08/29 | 3-12 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2026/08/23 | 2-8 | [attraction\.F](https://ws.tsl.rocks/corp/b2358fac70c7c1072563046f11245b78c51ec7b9bdf54e329487b89dfa60c371/) |
| ❌ | 2026/08/23 | 0-7 | [第三十一序列一一辉光议会](https://ws.tsl.rocks/corp/01fe1c3b5db00f2d0b632a0e9840176c0544df074523bc55f815753b8fa45c56/) |
| ↔️ | 2026/08/17 | 0-0 | [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) |
| ✅ | 2026/08/17 | 12-0 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ✅ | 2026/08/11 | 12-0 | [亚洲团队](https://ws.tsl.rocks/corp/c9aff5770282e84fa982a70be0c45b952f62286b7635a13df63d1615267c653e/) |
| ❌ | 2026/08/11 | 0-1 | [ParalleL](https://ws.tsl.rocks/corp/b0d15e4f5192e204134729b5923bfc506025455da73f5f107bddc44e5d673b22/) |
| ✅ | 2026/08/05 | 6-1 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ❌ | 2026/08/05 | 2-5 | [神圣群星帝国](https://ws.tsl.rocks/corp/7c3cb9fed2932138322efbd8923aae086504c31685e36adf906dd4a83003569f/) |
| ✅ | 2026/07/30 | 13-0 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ❌ | 2026/07/30 | 0-10 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ✅ | 2026/07/24 | 6-3 | [肥橙子](https://ws.tsl.rocks/corp/89ea001d8666ade05d452a0f136622d2451e614c357e549a6d4dddc6d019ba9c/) |
| ❌ | 2026/07/23 | 0-14 | [白虹贯日](https://ws.tsl.rocks/corp/099d8a6a1a96f71e6880717b00f60408e602eee4a4c37ddab363966664b099f9/) |
| ✅ | 2026/07/17 | 9-0 | [The GrandEmpire](https://ws.tsl.rocks/corp/0d4252df331791965c93ff99c057aea397c7984feb074fe617bc8951245503fa/) |
| ❌ | 2026/07/14 | 0-6 | [无人深空](https://ws.tsl.rocks/corp/932e5b765751f58f44617f33980535a067e92530b0243b0a983daa4f45dc03fc/) |
| ❌ | 2026/07/12 | 0-16 | [Mantle](https://ws.tsl.rocks/corp/a76c018111dc02509e226bf5a45681157183211b818114c21fe78c1f30609eec/) |
| ↔️ | 2026/07/06 | 3-3 | [Space Catz](https://ws.tsl.rocks/corp/41f8b97252e726479ff8185f5f3be080a7d6b63477dd248727e2a7355c9f3807/) |
| ❌ | 2026/07/05 | 0-29 | [attraction\.F](https://ws.tsl.rocks/corp/b2358fac70c7c1072563046f11245b78c51ec7b9bdf54e329487b89dfa60c371/) |
| ✅ | 2026/06/27 | 3-0 | [DeepSeek](https://ws.tsl.rocks/corp/3b6cfa9066d6d41f2d411bfc69229f594a18dd7de31fc44eaff787f7153d0484/) |
| ✅ | 2026/06/22 | 5-3 | [共联·世界](https://ws.tsl.rocks/corp/27b93d92a4266844042e082f8205dd0007064f762a2559db1d45c09dde41d0bf/) |

---
Corporation ID: 1a05510a2d3a1b3ace3e9e8a00750bf17d53a3cd2d4c6d846f98d54658ffd17f

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1788528188"></span>
</div>