---
title: ​SUN OF 3LANDS
description: W:11 L:4 D:1 Bonus ❌ 6%
image: ./favicon.png
Summary: ✅ 16 - 5 **Pyke Syndicate**
date: 2024-11-06T12:51:50.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=#FFFFFF>WELCOME TO <color=#FFD700>SUN OF <color=#FFFF00>3<colo
r=#FFD700>LANDS <color=#FFFFFF>We Warmly welcome Newcomer here. Sa mg
a gustong sumali sa WsRaid DM nyo lang Ako at my GC kami sa MS
```
<br>

### Whitestar Bonus ❌ 6%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1282 🔺  (6)|
| ELO Competitive | 1307 🔺  (7)|
| Total Matches | 16 |
| Wins | 11 |
| Losses | 4 |
| Draws | 1 |
| Streak | 3 |
| Streak Record | 3 |
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
        let timestamps = [1730465510,1729853389,1729212426,1728740556,1722378764,1721558204,1720440799,1719113423,1718471233,1717547182,1716632352,1716199117,1706673647,1705635664,1705063187,1704105448];

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
| ✅ | 2024/11/06 | 16-5 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ✅ | 2024/10/30 | 16-5 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/10/23 | 4-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/10/17 | 5-12 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2024/08/04 | 4-14 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/07/26 | 21-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/07/13 | 18-2 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/06/28 | 27-16 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2024/06/20 | 11-17 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/06/10 | 14-2 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ✅ | 2024/05/30 | 9-7 | [Prometheus](https://ws.tsl.rocks/corp/b8bbef86e5b1f72bf9c827f0497871ab0363769ac4fef563fd56f96ac88c85a6/) |
| ✅ | 2024/05/25 | 5-1 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ❌ | 2024/02/05 | 1-8 | [korea](https://ws.tsl.rocks/corp/2071b0b6ab886c36f36fb357ab33234b4d364e79aae36f5d3387e8ada44962ac/) |
| ✅ | 2024/01/24 | 12-1 | [猎户座星云](https://ws.tsl.rocks/corp/6eb23240d8c185984cab8e829f9aba441b284c7a003241d3a521da840a6cbff4/) |
| ↔️ | 2024/01/17 | 5-5 | [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) |
| ✅ | 2024/01/06 | 9-0 | [地球星际集团](https://ws.tsl.rocks/corp/05094116a999d8e077c5e53dc2241a870c7dc2e68e016455c606ada0dcb40b62/) |

---
Corporation ID: 874f472303f6616789f5df41609dba8d64b95e8b9291aaf23a05e4c397a2f44a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1730897510"></span>
</div>