---
layout: page
title: ​Wompwompway 
description: W:26 L:8 D:0 Bonus ❌
date: 1722909171
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1357 🔺  (64)|
| ELO Competitive | 1387 🔺  (96)|
| Total Matches | 34 |
| Wins | 26 |
| Losses | 8 |
| Draws | 0 |
| Streak | 2 |
| Streak Record | 6 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1722477171,1721836160,1720644564,1719752301,1719120334,1718291363,1717720893,1717082232,1716544316,1715941326,1715107581,1714488832,1713199269,1712337496,1711563459,1711027707,1710059603,1709501034,1708963461,1708458039,1707359870,1706683863,1706214759,1705636866,1705056576,1704459755,1703904107,1703254977,1702484808,1701753273,1700415248,1699838434,1699323574,1698838860];

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
| ✅ | 2024/08/06 | 34-9 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ✅ | 2024/07/29 | 12-5 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ❌ | 2024/07/15 | 8-10 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/07/05 | 33-6 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/06/28 | 29-7 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ✅ | 2024/06/18 | 25-4 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ❌ | 2024/06/12 | 17-18 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ✅ | 2024/06/04 | 24-2 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2024/05/29 | 24-6 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/05/22 | 24-3 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ❌ | 2024/05/12 | 5-19 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2024/05/05 | 24-0 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2024/04/20 | 2-13 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ❌ | 2024/04/10 | 19-20 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ✅ | 2024/04/01 | 18-3 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/03/26 | 29-4 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2024/03/15 | 27-0 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ❌ | 2024/03/08 | 4-31 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ✅ | 2024/03/02 | 27-1 | [Алый Феникс](https://ws.tsl.rocks/corp/ef2a58ee1052c616143ee1bf5e380609a7c061c603d10775b81563869a44433f/) |
| ✅ | 2024/02/25 | 24-0 | [Star Raiders](https://ws.tsl.rocks/corp/42517e68f38edb2fc73bd661ea28b0bf3d3bcbc58e50dc68d7eea184dd80019c/) |
| ✅ | 2024/02/13 | 14-7 | [Grater T](https://ws.tsl.rocks/corp/2044ad2bb7831118aae299744191230a33d196c7997f9516a20c3d0a321ba669/) |
| ✅ | 2024/02/05 | 27-2 | [绛紫星](https://ws.tsl.rocks/corp/8c2109279ceb01bcca0aa5e85c151d5877831ac54199285743750e2ed343b407/) |
| ✅ | 2024/01/30 | 24-8 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ✅ | 2024/01/24 | 25-0 | [SALTARDIS](https://ws.tsl.rocks/corp/e7d1a6a546271de114cce5f2d8e71b59c4e8bea66352110bf94a1c91a5993898/) |
| ❌ | 2024/01/17 | 12-19 | [✡天启✡](https://ws.tsl.rocks/corp/f2d70a86d32ea3a8226afc6d465a6c6540acec572b1c7232994523cdfb299c53/) |
| ✅ | 2024/01/10 | 24-18 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ✅ | 2024/01/04 | 24-5 | [Regulus](https://ws.tsl.rocks/corp/2ac7f4a924f351d9e8a57c7bd7cb88bb810dd028acab61baf5f38f0ffc7cf559/) |
| ✅ | 2023/12/27 | 31-17 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2023/12/18 | 8-11 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2023/12/10 | 19-0 | [Новый ЭДЭМ](https://ws.tsl.rocks/corp/f1d15cb357f6e239e540971a84a8b7161bfb5a976716027dbccbbf8e77dac4b5/) |
| ✅ | 2023/11/24 | 25-7 | [SpaceCowboys](https://ws.tsl.rocks/corp/e6bb3b9dcc40ad7f7c82fd0f7164a99fa6264c05a186ed9f33011a7f315ca507/) |
| ✅ | 2023/11/18 | 22-3 | [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) |
| ✅ | 2023/11/12 | 8-3 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ✅ | 2023/11/06 | 12-3 | [Blue Space](https://ws.tsl.rocks/corp/1c4f64c1450ab5cb621676c9a130c187b8ba9a8059253310ae02642cd84e3446/) |

Corporation ID: f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>