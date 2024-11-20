---
layout: page
title: ​游徒之家
description: W:13 L:13 D:0 Bonus ❌
date: 1729837957
---
<div style="float: right; margin: 0 0 1em 1em; clear: right;">
<img src="./qr.png" alt="QR Code" style="width: 100px; height: auto;">
</div>

### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1176 🔻  (854)|
| ELO Competitive | 1272 🔻  (309)|
| Total Matches | 26 |
| Wins | 13 |
| Losses | 13 |
| Draws | 0 |
| Streak Record | 4 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1729405957,1728837963,1728831347,1728124774,1728112154,1727675493,1726310717,1725718448,1725701215,1725010179,1724653784,1724401648,1724198213,1723750734,1723733000,1723287342,1722839585,1722406852,1722243677,1721678081,1721230334,1720757268,1720311580,1719878217,1706353290,1705898318];

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
    

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/10/25 | 0-21 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ❌ | 2024/10/18 | 2-16 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2024/10/18 | 1-24 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/10/10 | 3-12 | [EMPIRE ](https://ws.tsl.rocks/corp/6ab64c49cd01e1f93deaf6424de653c91473fc84fa372cb0fe683f9e86dceaa2/) |
| ✅ | 2024/10/10 | 8-2 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/10/05 | 20-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/09/19 | 21-3 | [云霄宫](https://ws.tsl.rocks/corp/c319ac731957c1d658994ab5727dec3d0ccfdcd31b00ee66efbf07be25bdc3e1/) |
| ❌ | 2024/09/12 | 2-6 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ❌ | 2024/09/12 | 1-3 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ❌ | 2024/09/04 | 1-3 | [星舰国际](https://ws.tsl.rocks/corp/2142b75cc6d1c522c423a860fbda7616d7745f8fee25121ec3a8f26068b0f3b5/) |
| ✅ | 2024/08/31 | 19-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/08/28 | 3-2 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ✅ | 2024/08/25 | 15-1 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2024/08/20 | 30-1 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2024/08/20 | 0-13 | [hades star萌新指引站](https://ws.tsl.rocks/corp/06feef105195a4e2ec026c0e3e2c62fce31204dfe6be8e4b26863935efbf8a50/) |
| ❌ | 2024/08/15 | 7-16 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/08/10 | 24-0 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ✅ | 2024/08/05 | 14-0 | [REY DE REYES](https://ws.tsl.rocks/corp/3400c8c832317ae214792a1e1ce914867af247bc0b4f021bd71a18e977cb60cb/) |
| ❌ | 2024/08/03 | 25-35 | [AKA](https://ws.tsl.rocks/corp/5fde3f409facbda701cdf21de0895eb7c7e17e2d472ae52cc0aa178ce2db64d6/) |
| ✅ | 2024/07/27 | 17-9 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2024/07/22 | 12-3 | [AAAA](https://ws.tsl.rocks/corp/73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27/) |
| ✅ | 2024/07/17 | 13-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/07/12 | 17-0 | [Quin Armarda 2](https://ws.tsl.rocks/corp/529de2f6f4f84d776caefa1e49ce587d581b86c0659533f7fab2eb642b04a928/) |
| ❌ | 2024/07/06 | 3-14 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2024/02/01 | 0-11 | [Sektion 32](https://ws.tsl.rocks/corp/16e8d18e4c51a9154959f8d3cd2417d11695210bb12baf2773eb12dea2f5966e/) |
| ❌ | 2024/01/27 | 0-19 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |

Corporation ID: 7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>