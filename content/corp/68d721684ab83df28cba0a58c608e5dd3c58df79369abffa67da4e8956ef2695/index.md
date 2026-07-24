---
title: ​koalition
description: W:11 L:9 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ❌ 0 - 5 **Air/Free\_ziyou**
date: 2025-02-17T15:13:13.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
we are looking for new recruitements!!
```
<br>

### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1216 🔻  (-14)|
| ELO Competitive | 1233 🔻  (-14)|
| Total Matches | 21 |
| Wins | 11 |
| Losses | 9 |
| Draws | 1 |
| Streak Record | 8 |
| Flagship | 2 |

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
        let timestamps = [1739373193,1735185570,1727474205,1725483411,1724675332,1724112269,1722703673,1722254194,1721717758,1721129957,1720560037,1719745689,1719087560,1718487336,1717929537,1717445900,1716925122,1716123104,1713447160,1706916461,1705854143];

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
| ❌ | 2025/02/17 | 0-5 | [Air/Free\_ziyou](https://ws.tsl.rocks/corp/97e261fb0c1a22ab5190f97566b57c72921c78dfc9021709ee50d11ac5e1955b/) |
| ❌ | 2024/12/31 | 0-7 | [🌪TORNADO](https://ws.tsl.rocks/corp/df15d02d32c67d60995e68d6c4197c23b340a0a985f04280563d8d07bd4536fa/) |
| ✅ | 2024/10/02 | 10-0 | [Betelgeuse](https://ws.tsl.rocks/corp/fdd9da8c45ea525e6dd825eede02253ebe322523e06a0e1c30ccb0401c60e081/) |
| ❌ | 2024/09/09 | 0-13 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2024/08/31 | 0-7 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/08/25 | 8-14 | [P\!RAT£ SHIP](https://ws.tsl.rocks/corp/edee949826201f74f57f45c101789757954710e3d075602dfdda7765a69a7e7c/) |
| ❌ | 2024/08/08 | 0-4 | [萌新的收留所](https://ws.tsl.rocks/corp/1dd3f70c959e32c27cb4c010162be3799b7c0732115d5c2b7ca5979f48b10f7f/) |
| ✅ | 2024/08/03 | 7-6 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/07/28 | 7-0 | [Orion](https://ws.tsl.rocks/corp/7c0851ebb511881954f862d0a9c0e83978c708f123d2059a6fd3bcc6b9faa813/) |
| ✅ | 2024/07/21 | 9-2 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ✅ | 2024/07/14 | 7-0 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/07/05 | 7-1 | [德意志联邦集团](https://ws.tsl.rocks/corp/2ee580123f8c46103f61a4e5edc43e8c3379d17cc2280c935a0a62c6ee81e50c/) |
| ✅ | 2024/06/27 | 9-0 | [Hands Of God](https://ws.tsl.rocks/corp/737612566d1b11dd779660de211c576dcb421c49df9eb55390e082f496924c9b/) |
| ✅ | 2024/06/20 | 7-0 | [Imperio Nova](https://ws.tsl.rocks/corp/ec0e2d5a65f1b573cfd22d339ec3db6b1b3c0984f24a9b2f488ed14ace0634b7/) |
| ✅ | 2024/06/14 | 8-0 | [HerronCorp](https://ws.tsl.rocks/corp/220742540e6deb9741f787e95b338302d66b4d9f0ac35aab435bff0ee4d946ca/) |
| ↔️ | 2024/06/08 | 2-2 | [Quantum Web](https://ws.tsl.rocks/corp/5f0fb485dfc36997fd3fbec2b4f854ed3bd25b16e2500626b9348a1e12d2b796/) |
| ❌ | 2024/06/02 | 0-5 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/05/24 | 7-2 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ❌ | 2024/04/23 | 3-4 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/02/07 | 6-17 | [Lacuna Academy](https://ws.tsl.rocks/corp/ed67ca44432a8fad3aec6fab3e7f305d394d2b41844391fd29e1ce2b316b336b/) |
| ✅ | 2024/01/26 | 7-1 | [Sector7](https://ws.tsl.rocks/corp/2608118ec348769a1cdc34c18b3198903677007199f1d6feec34de0d74d2944f/) |

---
Corporation ID: 68d721684ab83df28cba0a58c608e5dd3c58df79369abffa67da4e8956ef2695

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1739805193"></span>
</div>