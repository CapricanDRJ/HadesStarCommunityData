---
layout: page
title: ​星落苑
description: W:19 L:8 D:0 Bonus ✅ 34%
image: ./favicon.png
date: 1739462935
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
<size=50>2024.10.29<color=purple>     星星栖息的故乡<size=60><color=white>  
                    欢迎加入，本团为北极星联盟成员团  不定期送神器</color>  盟团：墨痕 <color=re
d>        勿捐旗舰         <color=white>    QQ: 914778570
```
### Whitestar Bonus ✅ 34%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1306 🔺  (159)|
| ELO Competitive | 1400 🔺  (149)|
| Total Matches | 27 |
| Wins | 19 |
| Losses | 8 |
| Draws | 0 |
| Streak | 2 |
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
        let timestamps = [1739030935,1739030925,1738597294,1738564839,1738119172,1738117068,1737646787,1737644684,1737036157,1736490079,1736481365,1735815962,1735809653,1735082726,1735056081,1734529660,1734528759,1733951253,1733925706,1733354197,1733322942,1732769741,1732766436,1732205099,1732198186,1731677125,1731061390];

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
| ✅ | 2025/02/13 | 7-2 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2025/02/13 | 26-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2025/02/08 | 1-24 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ❌ | 2025/02/08 | 5-24 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ✅ | 2025/02/03 | 26-15 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/02/03 | 11-12 | [HADE'S BR](https://ws.tsl.rocks/corp/c45eed113ca441bc97ea13701b324eef2a880f75a5de80044e11389b8cc67ae0/) |
| ❌ | 2025/01/28 | 10-11 | [火洋之心](https://ws.tsl.rocks/corp/99cb105316e2715545c205443c4e331cd11832753eac1c21e11ae3d532e36bcb/) |
| ✅ | 2025/01/28 | 13-3 | [The Syndicate ](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ✅ | 2025/01/21 | 25-2 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ❌ | 2025/01/15 | 1-8 | [清霄阁（防御协会）](https://ws.tsl.rocks/corp/a263c037c5b59f1816ad75738a21141c689baee193b386b2ddbbcf79e959612d/) |
| ✅ | 2025/01/15 | 27-7 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2025/01/07 | 10-3 | [碧海听潮阁](https://ws.tsl.rocks/corp/11d495c2f3535ba7b46e5ca06f9b86bd6069ab4384b7b3231b4cdce4a151dba1/) |
| ✅ | 2025/01/07 | 18-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/12/29 | 17-0 | [Phoenix Nest](https://ws.tsl.rocks/corp/e63d7fd60c26387fe662f9dc27945060df85b5e1ee07ca68033376e92ecc65b6/) |
| ❌ | 2024/12/29 | 1-19 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2024/12/23 | 15-2 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ✅ | 2024/12/23 | 11-3 | [Imperium](https://ws.tsl.rocks/corp/9e2ab6b52a6e6684059b31f08966101f380a17c9a782d2a39434093e835fb17d/) |
| ✅ | 2024/12/16 | 15-0 | [corporacion I\.A](https://ws.tsl.rocks/corp/df86dad6380843bf4a9cf1a50952d4ff723b40e5e84626918e35b39ec35a9ccf/) |
| ❌ | 2024/12/16 | 2-24 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ✅ | 2024/12/09 | 27-0 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2024/12/09 | 16-4 | [华夏三体\-基沃托斯集团](https://ws.tsl.rocks/corp/2a0e5e40c4264cc5c8543ba1f6f41772d2059010c0a58381251017412b294ef7/) |
| ✅ | 2024/12/03 | 17-0 | [藏锋府](https://ws.tsl.rocks/corp/8a6ebb9fc9c600eaff20a0c3412ffe6587128f871fcf51982046843ff4e7acc4/) |
| ✅ | 2024/12/03 | 20-0 | [无聊不过](https://ws.tsl.rocks/corp/6099bd39cf8510ea3ef2be0fe05df95266b12acfdcbe1bd58a4c33e9c3f25934/) |
| ✅ | 2024/11/26 | 10-3 | [一根飞机](https://ws.tsl.rocks/corp/459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0/) |
| ❌ | 2024/11/26 | 17-18 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ✅ | 2024/11/20 | 23-0 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2024/11/13 | 19-0 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |

---
Corporation ID: 6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>