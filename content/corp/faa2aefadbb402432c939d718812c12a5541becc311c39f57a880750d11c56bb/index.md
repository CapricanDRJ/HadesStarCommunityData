---
title: ​传说之下2
description: W:13 L:12 D:1 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 5 - 11 **Russian space 3**
date: 2025-10-11T11:50:27.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1202 🔻  (-7)|
| ELO Competitive | 1305 🔻  (-10)|
| Total Matches | 26 |
| Wins | 13 |
| Losses | 12 |
| Draws | 1 |
| Streak Record | 7 |
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
        let timestamps = [1759751427,1759750225,1759237623,1759234017,1757125973,1757122359,1756180276,1756125890,1755675457,1755670650,1755176637,1755175134,1754366514,1754366214,1753360192,1752616631,1752579182,1751972566,1751971965,1750985491,1750247758,1749641632,1748008744,1747350381,1746686578,1746014672];

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
| [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) | 1 | 1 | 0 | 2 |
| [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) | 0 | 2 | 0 | 2 |
| [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/10/11 | 5-11 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/10/11 | 1-8 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/10/05 | 0-5 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ✅ | 2025/10/05 | 26-1 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2025/09/11 | 0-5 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ❌ | 2025/09/11 | 3-13 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2025/08/31 | 0-15 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ❌ | 2025/08/30 | 3-12 | [沧海一星](https://ws.tsl.rocks/corp/c602c167d7f3c44a5d18b77cac44e8610981266a81b38b107cb2ed5961c73c1d/) |
| ❌ | 2025/08/25 | 0-19 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ✅ | 2025/08/25 | 22-8 | [Spanish Apes](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ✅ | 2025/08/19 | 1-0 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ✅ | 2025/08/19 | 14-4 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |
| ✅ | 2025/08/10 | 2-0 | [CAEDRUS \[<o\>\]](https://ws.tsl.rocks/corp/b3c982613964d8287b8f57e57ececf5b9497766670fc306d9827c85fbcdb2887/) |
| ✅ | 2025/08/10 | 27-0 | [泰拉瑞亚](https://ws.tsl.rocks/corp/a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a/) |
| ✅ | 2025/07/29 | 22-0 | [Blacksteel Tech](https://ws.tsl.rocks/corp/dfd6e8053747b0abe2de98bfe1d4b8521829fea58e48472835363ff3a0a5fc09/) |
| ✅ | 2025/07/20 | 17-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ❌ | 2025/07/20 | 0-22 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2025/07/13 | 2-4 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |
| ✅ | 2025/07/13 | 12-0 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ✅ | 2025/07/02 | 13-3 | [神圣群星帝国](https://ws.tsl.rocks/corp/055ceda7fb2db39f514b2d21704cf6cc8ff5dcdd22807d3d7f18f0c3e9d776e9/) |
| ✅ | 2025/06/23 | 10-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2025/06/16 | 7-3 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/05/28 | 14-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ❌ | 2025/05/20 | 7-9 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2025/05/13 | 3-7 | [NOVA STRATUM](https://ws.tsl.rocks/corp/93cb26bae33ac6da77da0e1bcb54e9d36ea4bb5e71b85c8fb0f45cd29702a349/) |
| ↔️ | 2025/05/05 | 10-10 | [中央山脈礦工勞動部](https://ws.tsl.rocks/corp/c76c16c18a4d8c5a2d28b213f59db208dec670f2f230700e69fd411c8f962ea2/) |

---
Corporation ID: faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1760183427"></span>
</div>