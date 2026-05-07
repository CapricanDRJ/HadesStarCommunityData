---
title: ​何为真理
description: W:18 L:19 D:2 Bonus ✅ 
image: ./favicon.png
Summary: ✅ 13 - 1 **欢迎新手**
date: 2026-05-05T11:41:39.000Z
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
| ELO Regular | 1268 🔺  (13)|
| ELO Competitive | 1362 🔺  (9)|
| Total Matches | 39 |
| Wins | 18 |
| Losses | 19 |
| Draws | 2 |
| Streak | 6 |
| Streak Record | 6 |
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
        let timestamps = [1777549299,1777113948,1776678305,1776177188,1775661937,1775655326,1775221478,1775219676,1773868589,1773409811,1773405904,1772969385,1772533486,1772469799,1772035946,1771961299,1771466489,1771456297,1770906312,1770901504,1769958116,1769577458,1768932612,1768622535,1767980455,1767969034,1766873622,1766845078,1766315370,1765541406,1765537200,1764976235,1764960008,1764478848,1764429075,1763989782,1763988880,1763519263,1763037964];

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
| [中华五千年](https://ws.tsl.rocks/corp/c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3/) | 2 | 0 | 0 | 2 |
| [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) | 1 | 1 | 0 | 2 |
| [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/05/05 | 13-1 | [欢迎新手](https://ws.tsl.rocks/corp/5fcb133e23f1fc536e7a6e39d93263f8fba2f6a425cf65ae9afc1d7da4d3fc5b/) |
| ✅ | 2026/04/30 | 16-0 | [Starline Order](https://ws.tsl.rocks/corp/e4c87e4aa0a50c38ba319a71a67493cdb31462ce6647f26a4cfeb3bcaac7eaba/) |
| ✅ | 2026/04/25 | 17-1 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ✅ | 2026/04/19 | 13-0 | [pegaso](https://ws.tsl.rocks/corp/b704373fcf3fd41b81214bd5802cc28b31cab2e01bafd23e0fc199cbce934109/) |
| ✅ | 2026/04/13 | 17-0 | [Экватор](https://ws.tsl.rocks/corp/53fa2893f5be7a758b9acc7250a6d1fc6becb145e24287ab980c841f61b0312d/) |
| ✅ | 2026/04/13 | 3-1 | [中华五千年](https://ws.tsl.rocks/corp/c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3/) |
| ❌ | 2026/04/08 | 2-18 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ✅ | 2026/04/08 | 19-4 | [Star Hunters](https://ws.tsl.rocks/corp/55caab6fc860d293950fbff3b0ec848a38a19bea2c3c637c110790f7cb8706e5/) |
| ❌ | 2026/03/23 | 0-3 | [The Howlers](https://ws.tsl.rocks/corp/f340524c85b89f1c62bba68156ba169e8f45fedd4b1be29c6ccb461a32f23189/) |
| ✅ | 2026/03/18 | 16-9 | [中华五千年](https://ws.tsl.rocks/corp/c386df71c7dd8a60eec01472189e0b470eeeed5ac48646cd153516aa4349aee3/) |
| ✅ | 2026/03/18 | 4-0 | [Deez Space Nuts](https://ws.tsl.rocks/corp/8eb6d3c95e954b446d792be07de3ae75465cac50c7965ad87a7df821f034ebcb/) |
| ✅ | 2026/03/13 | 5-0 | [b贵物大街/b](https://ws.tsl.rocks/corp/04dc67a7ee042a36ca250a8b19ec79718c9f627b2f5ba75caea6ad0b21fa0770/) |
| ❌ | 2026/03/08 | 2-11 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2026/03/07 | 5-0 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ✅ | 2026/03/02 | 14-2 | [WEEEEEEE](https://ws.tsl.rocks/corp/2be07031a642cf694b27101fe95d257b8a3fb6a181629e3f1c4746482841f641/) |
| ❌ | 2026/03/01 | 0-4 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ❌ | 2026/02/24 | 0-3 | [Ordo Malleus](https://ws.tsl.rocks/corp/07c83a89ba8d4165f71961ebd88351c19ebe3da1688e4fd36b132975883ab794/) |
| ✅ | 2026/02/23 | 14-0 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ✅ | 2026/02/17 | 7-6 | [星际联邦](https://ws.tsl.rocks/corp/0bb74a94853e3ab96f3ca32d214b5fd677a1fb87db48d8a833d8a279ee6b33d3/) |
| ❌ | 2026/02/17 | 0-14 | [第五星际](https://ws.tsl.rocks/corp/8f0d25fe4c802f32f4d3d4ad1a84583c5ae98e4a788a1fa260ef9bd70268818b/) |
| ❌ | 2026/02/06 | 1-2 | [Argos](https://ws.tsl.rocks/corp/5a69decd163742c002619268f3472d1d2603fa6b65d8599403a357e8630cbc83/) |
| ❌ | 2026/02/02 | 3-9 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ❌ | 2026/01/25 | 2-3 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ❌ | 2026/01/22 | 0-18 | [Light Monarchs](https://ws.tsl.rocks/corp/9e5a1015dea6cad04fa65c669a3c7e03751ac4908a2068278fe1e5d168a9470e/) |
| ↔️ | 2026/01/14 | 0-0 | [Critical Mass](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ❌ | 2026/01/14 | 3-5 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ✅ | 2026/01/01 | 11-0 | [Star War School](https://ws.tsl.rocks/corp/bc547471cfb7aa2682ad1959c806ce65b7b97b8f8749723998cce3c740734a54/) |
| ❌ | 2026/01/01 | 0-7 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ↔️ | 2025/12/26 | 3-3 | [传说之下3](https://ws.tsl.rocks/corp/32a328c15e959a5349e4de24b126a4f8fa7e71fd5683e5d9f2074dde87d36a30/) |
| ❌ | 2025/12/17 | 3-5 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/12/17 | 0-6 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ✅ | 2025/12/10 | 5-2 | [Страж Галактики](https://ws.tsl.rocks/corp/ab4f340d0afdb0896e9ea68431795c811edc1afc130d1e15d53b78abfaf1bace/) |
| ❌ | 2025/12/10 | 0-11 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/12/05 | 0-29 | [DOMOVINA](https://ws.tsl.rocks/corp/00af6c9318ddf16a1bb684310776fee9681a22f01c1649941b799556a0bb6fb6/) |
| ❌ | 2025/12/04 | 2-3 | [边域](https://ws.tsl.rocks/corp/b982530486b86a4944af4474183f3fa6aca9db7a2a4195c018930f68d6ede865/) |
| ❌ | 2025/11/29 | 0-25 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2025/11/29 | 3-14 | [Solar Corp](https://ws.tsl.rocks/corp/48dd63558cbd127dff205a3b4ae83bcd3885cf35d1797c558dd1ec0339e04264/) |
| ✅ | 2025/11/24 | 6-0 | [The Gladiators](https://ws.tsl.rocks/corp/4aa9000c49c8a988df27932c5a5840800303bdb713ef35f9d207a4da7f6b0337/) |
| ✅ | 2025/11/18 | 5-0 | [WAATECH](https://ws.tsl.rocks/corp/6b60ddbd9b747814d2ac07cbadb1febf489814714f746dff140be654e430cc88/) |

---
Corporation ID: 862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1777981299"></span>
</div>