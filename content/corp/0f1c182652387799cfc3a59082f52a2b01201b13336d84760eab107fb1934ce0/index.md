---
title: ​Nova Time
description: W:15 L:3 D:0 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 1 - 14 **HUN TERS**
date: 2025-12-22T07:05:27.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
There is only one clock that matters.
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1323 🔻  (-13)|
| ELO Competitive | 1353 🔻  (-8)|
| Total Matches | 18 |
| Wins | 15 |
| Losses | 3 |
| Draws | 0 |
| Streak Record | 11 |
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
        let timestamps = [1765955127,1764375885,1742843138,1741577086,1712067667,1706602529,1706075920,1704238886,1703737619,1703187637,1702742973,1702260602,1701754475,1701285635,1700816167,1700354536,1699902345,1699277894];

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
| ❌ | 2025/12/22 | 1-14 | [HUN TERS](https://ws.tsl.rocks/corp/99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1/) |
| ✅ | 2025/12/04 | 12-9 | [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ✅ | 2025/03/29 | 19-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2025/03/15 | 23-32 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/04/07 | 38-2 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ✅ | 2024/02/04 | 35-0 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |
| ✅ | 2024/01/29 | 32-3 | [한국우주연합](https://ws.tsl.rocks/corp/c5eef27852b12a8242ae92571d4bdaa16b3360e45fb47820da574211a095ccce/) |
| ✅ | 2024/01/07 | 30-4 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2024/01/02 | 24-1 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ✅ | 2023/12/26 | 27-1 | [Antioch](https://ws.tsl.rocks/corp/6cf52926568f845a630c3fba8370e8afa3a75d315af0f6d0bd891085e6e4425f/) |
| ✅ | 2023/12/21 | 34-2 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ✅ | 2023/12/16 | 22-5 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2023/12/10 | 28-1 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ✅ | 2023/12/04 | 27-2 | [FėniX•](https://ws.tsl.rocks/corp/8307d1da2d91b1b6f2cdf365b891741a148ac78d385e34734a0e083d318248b2/) |
| ✅ | 2023/11/29 | 36-0 | [O\.P\.S](https://ws.tsl.rocks/corp/773c648be3ddc94c260a45172334f3575ca7b893cba266d3a744b7bc5ce07f0d/) |
| ❌ | 2023/11/24 | 0-3 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2023/11/18 | 21-0 | [Anarchy G13](https://ws.tsl.rocks/corp/59b3aa9bf4f8cf4944a729f7f72218416d173a0a02ff8e3e2945985eaccf52a4/) |
| ✅ | 2023/11/11 | 16-4 | [萌新港](https://ws.tsl.rocks/corp/7b4125f2900eb0184722a2a53528bb21dd165ea3612dfa8de6ca0ebf2aea0861/) |

---
Corporation ID: 0f1c182652387799cfc3a59082f52a2b01201b13336d84760eab107fb1934ce0

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1766387127"></span>
</div>