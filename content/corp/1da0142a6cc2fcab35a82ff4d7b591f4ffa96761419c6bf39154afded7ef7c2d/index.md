---
title: ​Orden Estelar 
description: W:22 L:13 D:2 Bonus ✅ 36%
image: ./favicon.png
Summary: ❌ 8 - 13 **六大天神**
date: 2025-04-11T17:13:39.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Alianza: axolotls 

Ni retirada ni rendicion 
```
<br>

### Whitestar Bonus ✅ 36%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1328 🔻  (141)|
| ELO Competitive | 1402 🔺  (164)|
| Total Matches | 37 |
| Wins | 22 |
| Losses | 13 |
| Draws | 2 |
| Streak Record | 7 |
| Flagship | 4 |

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
        let timestamps = [1743959619,1743876068,1743510929,1743387725,1742761999,1742735545,1742128481,1741533512,1740308672,1739724780,1739184784,1737748055,1737116395,1736610601,1735992074,1734630620,1733868627,1733141088,1732604935,1732132087,1730889511,1730049633,1716227062,1715472326,1714349113,1709552708,1708958352,1706365913,1705345373,1704664254,1704135506,1703517335,1702917587,1701049109,1700538770,1699919585,1698691276];

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
| [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) | 1 | 1 | 0 | 2 |
| [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) | 2 | 0 | 0 | 2 |
| [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) | 2 | 0 | 0 | 2 |
| [Новый ЭДЭМ](https://ws.tsl.rocks/corp/f1d15cb357f6e239e540971a84a8b7161bfb5a976716027dbccbbf8e77dac4b5/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/04/11 | 8-13 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2025/04/10 | 31-2 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2025/04/06 | 16-2 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ✅ | 2025/04/05 | 28-0 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2025/03/28 | 21-4 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2025/03/28 | 7-3 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/03/21 | 22-5 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2025/03/14 | 12-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2025/02/28 | 17-23 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ✅ | 2025/02/21 | 24-5 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2025/02/15 | 17-7 | [DeutschlandGmbH](https://ws.tsl.rocks/corp/7f4550924e4740a47b7d66c9ddf38d65c37590507caab29eecc74f81a4ae2895/) |
| ❌ | 2025/01/29 | 0-28 | [nuevo mundo](https://ws.tsl.rocks/corp/5675df73364d8b031e9541d8aa8d5a9e55649ef419ad87c0b21dec77a0ed6044/) |
| ✅ | 2025/01/22 | 25-16 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ✅ | 2025/01/16 | 27-5 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/01/09 | 28-0 | [M4\-Valhalla](https://ws.tsl.rocks/corp/40886172a1ee54e8b5cbd91b5bcf06cb4af03726ad8fe6aba585bde03d4b6bf1/) |
| ✅ | 2024/12/24 | 24-15 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2024/12/15 | 3-12 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2024/12/07 | 3-20 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/12/01 | 25-1 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2024/11/25 | 21-6 | [QONQR ](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ↔️ | 2024/11/11 | 9-9 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2024/11/01 | 11-23 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ↔️ | 2024/05/25 | 3-3 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ❌ | 2024/05/17 | 4-30 | [Free Ag3nts](https://ws.tsl.rocks/corp/66c873438b165344dbdac371b45825f9c818ee1e77e128f101f2660f4b0c7b70/) |
| ❌ | 2024/05/04 | 6-23 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2024/03/09 | 3-22 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/03/02 | 27-0 | [loveboat](https://ws.tsl.rocks/corp/907db5d6144e9b75e27fd21eccb86092d956c30f562fa2a2c3e09cb34bacc957/) |
| ❌ | 2024/02/01 | 2-12 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ❌ | 2024/01/20 | 0-27 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2024/01/12 | 16-0 | [Toxic](https://ws.tsl.rocks/corp/6fd41dbfe23fef41eedbc7b3cd8651f24735f62594a817d28e88676f68ce3198/) |
| ✅ | 2024/01/06 | 23-5 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ✅ | 2023/12/30 | 23-0 | [Новый ЭДЭМ](https://ws.tsl.rocks/corp/f1d15cb357f6e239e540971a84a8b7161bfb5a976716027dbccbbf8e77dac4b5/) |
| ✅ | 2023/12/23 | 17-15 | [the Rubber Duck](https://ws.tsl.rocks/corp/bfd6a197d72d0b643c6693e66b9a10db61f75ae242a0bd7c09bdd553ae951ee6/) |
| ❌ | 2023/12/02 | 6-23 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ✅ | 2023/11/26 | 5-3 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2023/11/18 | 11-0 | [Новый ЭДЭМ](https://ws.tsl.rocks/corp/f1d15cb357f6e239e540971a84a8b7161bfb5a976716027dbccbbf8e77dac4b5/) |
| ❌ | 2023/11/04 | 1-8 | [Corp\. Estelar 2](https://ws.tsl.rocks/corp/6dc3ed66c1c5c48a88912d686edd55b65123c8fe685858c605cf404be090ef62/) |

---
Corporation ID: 1da0142a6cc2fcab35a82ff4d7b591f4ffa96761419c6bf39154afded7ef7c2d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1744391619"></span>
</div>