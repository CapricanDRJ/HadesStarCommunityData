---
layout: page
title: ​Бороская Имерия
description: W:10 L:5 D:0 Bonus ✅
image: ./favicon.png
date: 1734273580
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Мы Великая Империя Борос.                 Основана в 10.10.2022      
                      Играем в сонном режиме, телеграм или дс иметь н
е обязательно, иногда ходим на Белую Звезду.        
```
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1274 🔺  (197)|
| ELO Competitive | 1297 🔺  (271)|
| Total Matches | 15 |
| Wins | 10 |
| Losses | 5 |
| Draws | 0 |
| Streak Record | 6 |
| Flagship | 5 |

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
        let timestamps = [1733841580,1732959060,1732281417,1731681333,1731103766,1730630186,1730019899,1728812704,1727119286,1726493368,1726045987,1702214613,1701215312,1699612062,1699010444];

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
| ✅ | 2024/12/15 | 23-7 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ❌ | 2024/12/05 | 4-12 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/11/27 | 13-4 | [超越声速](https://ws.tsl.rocks/corp/c80951822ff08b108eaa885a614cb9d41079099683e9804b33647baa51574183/) |
| ✅ | 2024/11/20 | 19-0 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2024/11/13 | 24-3 | [exirium](https://ws.tsl.rocks/corp/4981522e08ce38bcec7b2a189b3bfba9c072a615eea490a55c645344ac975f54/) |
| ✅ | 2024/11/08 | 32-7 | [云深不知处](https://ws.tsl.rocks/corp/640f652e13ee5dfca289fcf00ddb7ac25abf9ff9c565bda6561c55ff62cae685/) |
| ✅ | 2024/11/01 | 18-5 | [Anarchy Nation ](https://ws.tsl.rocks/corp/9c456dbf32e22070620021bf0bea4d2ab9deb0ac7ad4be06a4067a9ced5f2f5b/) |
| ✅ | 2024/10/18 | 20-8 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2024/09/28 | 6-28 | [Z\. O\. V\. ](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ✅ | 2024/09/21 | 17-0 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2024/09/16 | 5-23 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ❌ | 2023/12/15 | 0-20 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ✅ | 2023/12/03 | 24-1 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ❌ | 2023/11/15 | 15-18 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2023/11/08 | 33-0 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |

---
Corporation ID: 13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>