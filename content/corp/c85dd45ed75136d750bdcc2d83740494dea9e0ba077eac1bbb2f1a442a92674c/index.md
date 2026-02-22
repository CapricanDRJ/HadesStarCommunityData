---
title: ​Gemini Ind\.
description: W:38 L:9 D:0 Bonus ❌ 10%
image: ./favicon.png
Summary: ❌ 0 - 26 **three kitties**
date: 2025-12-20T19:32:25.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<color=yellow>U.I.H. Corp.</color>
Corvus Ind 🤍 

New players welcomed!

Join via Discord: <color=yellow> https://discord.gg/vPsNNxs </color>

Discord MANDATORY.
We have awesome queue for rs runs!
```
<br>

### [Discord](https://discord.gg/vPsNNxs)
### Whitestar Bonus ❌ 10%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1399 🔻  (-18)|
| ELO Competitive | 1475 🔻  (-8)|
| Total Matches | 47 |
| Wins | 38 |
| Losses | 9 |
| Draws | 0 |
| Streak Record | 16 |
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
        let timestamps = [1765827145,1751953037,1747220561,1744734630,1741587000,1739132504,1731315642,1728902576,1725830846,1720983418,1720368378,1719797381,1719152494,1718560187,1717942164,1717342504,1716742950,1716185297,1715537531,1714316960,1713699229,1713119043,1712489838,1711894891,1711279812,1710684583,1710100475,1709501034,1708882635,1708281949,1707677941,1707080842,1706471701,1705863761,1705277463,1704652092,1704384329,1704049863,1703462946,1702837044,1702232050,1701634264,1701041598,1700420658,1699813184,1699213299,1698687065];

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
| [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) | 2 | 0 | 0 | 2 |
| [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) | 1 | 1 | 0 | 2 |
| [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) | 1 | 1 | 0 | 2 |
| [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) | 2 | 0 | 0 | 2 |
| [Minutemen](https://ws.tsl.rocks/corp/9c909737404c072239b33c57ec002c06c45552ec1b97fe1d07eb95090e2346a8/) | 3 | 0 | 0 | 3 |
| [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) | 2 | 0 | 0 | 2 |
| [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/12/20 | 0-26 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2025/07/13 | 19-9 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2025/05/19 | 8-13 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2025/04/20 | 16-0 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ✅ | 2025/03/15 | 30-4 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2025/02/14 | 24-0 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ✅ | 2024/11/16 | 34-5 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2024/10/19 | 20-36 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ✅ | 2024/09/13 | 30-0 | [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) |
| ✅ | 2024/07/19 | 24-2 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2024/07/12 | 4-33 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2024/07/06 | 1-32 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/06/28 | 25-2 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2024/06/21 | 32-1 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2024/06/14 | 3-14 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/06/07 | 29-0 | [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ✅ | 2024/05/31 | 22-4 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2024/05/25 | 28-0 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/05/17 | 33-7 | [Minutemen](https://ws.tsl.rocks/corp/9c909737404c072239b33c57ec002c06c45552ec1b97fe1d07eb95090e2346a8/) |
| ❌ | 2024/05/03 | 3-35 | [Медведи](https://ws.tsl.rocks/corp/b3b0cac2c48761153afa1dcad7a4048103ffc3ec2ca6d477a6bd744922fce075/) |
| ✅ | 2024/04/26 | 24-2 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ✅ | 2024/04/19 | 40-1 | [РОДНЫЕ\.](https://ws.tsl.rocks/corp/64c5cb7cd357c68809a13e9a1f99c7e8b29bdb1f448796c8262cec88b825aabb/) |
| ✅ | 2024/04/12 | 18-6 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ✅ | 2024/04/05 | 35-1 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2024/03/29 | 31-3 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/03/22 | 31-4 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/03/15 | 12-4 | [Minutemen](https://ws.tsl.rocks/corp/9c909737404c072239b33c57ec002c06c45552ec1b97fe1d07eb95090e2346a8/) |
| ✅ | 2024/03/08 | 31-4 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2024/03/01 | 34-2 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ✅ | 2024/02/23 | 30-2 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/02/16 | 29-8 | [Minutemen](https://ws.tsl.rocks/corp/9c909737404c072239b33c57ec002c06c45552ec1b97fe1d07eb95090e2346a8/) |
| ✅ | 2024/02/09 | 34-0 | [Blue Space](https://ws.tsl.rocks/corp/1c4f64c1450ab5cb621676c9a130c187b8ba9a8059253310ae02642cd84e3446/) |
| ✅ | 2024/02/02 | 26-0 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/01/26 | 34-0 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/01/20 | 34-1 | [Nebula](https://ws.tsl.rocks/corp/38bd8c92bc5f2d4ff240d58da260855d87eb4c2c4a241735c5d72215d4a191fb/) |
| ✅ | 2024/01/12 | 13-3 | [Highland Ind\.](https://ws.tsl.rocks/corp/ba78f9ff67f8944bf4b0152d98968e0ad6c9c86cc2fc518284c0745060e90e2c/) |
| ❌ | 2024/01/09 | 0-15 | [夢幻之星\*分盟\*](https://ws.tsl.rocks/corp/25ac58a842783eb85413a2cb4896100bd1bdad3b64dbbc3b2d2c9bdf3f878c96/) |
| ✅ | 2024/01/05 | 32-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2023/12/30 | 28-27 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ✅ | 2023/12/22 | 21-0 | [Alpha](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ✅ | 2023/12/15 | 29-0 | [Int\. Trading Co](https://ws.tsl.rocks/corp/6978edb31cfa5778f4e28d2477e5db050fd8bf44105dc25871490d0cffaf4bf7/) |
| ✅ | 2023/12/08 | 12-3 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ✅ | 2023/12/01 | 27-3 | [꿀벌왕국](https://ws.tsl.rocks/corp/5835926ee3d1861cbc6fc002291ee3a4b537c1a3a0aef8ea187dfe857505bebc/) |
| ✅ | 2023/11/24 | 29-1 | [SveaEmpire](https://ws.tsl.rocks/corp/0b7b0db6324bd57c90679186bee968ca5a59c7d4662630bf60d7e97691af2bed/) |
| ✅ | 2023/11/17 | 17-5 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ❌ | 2023/11/10 | 14-15 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2023/11/04 | 23-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |

---
Corporation ID: c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1766259145"></span>
</div>