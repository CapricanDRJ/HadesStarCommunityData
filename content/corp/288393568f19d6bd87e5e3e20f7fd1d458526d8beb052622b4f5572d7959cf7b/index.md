---
title: ​Sentencia
description: W:45 L:6 D:0 Bonus ❌ 10%
image: ./favicon.png
Summary: ✅ 29 - 3 **VoidRunners**
date: 2026-02-09T03:02:21.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<size=90><b><color=white>Estrellas Blancas</color></b></size><br><siz
e=50><b>Enterrados <color=red><b>200.000 $ </color></b>en Sad Hill.<b
r><b>En La tumba sin nombre junto a la de Arch Stanton.
```
<br>

### Whitestar Bonus ❌ 10%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1540 🔺  (2)|
| ELO Competitive | 1648 🔺  (12)|
| Total Matches | 51 |
| Wins | 45 |
| Losses | 6 |
| Draws | 0 |
| Streak | 8 |
| Streak Record | 14 |
| Flagship | 7 |

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
        let timestamps = [1770174141,1768665804,1763848877,1761681725,1758490107,1756943296,1755380388,1754623734,1754437430,1752229781,1752202739,1751054000,1749618391,1748538835,1747744621,1747276157,1746096710,1745521948,1744768286,1744716598,1743792163,1743003912,1742248995,1740709536,1738859034,1736768384,1734325344,1733474978,1731312338,1729038121,1728350160,1727429379,1725975075,1725149058,1723627221,1722818853,1720130371,1718414732,1716477923,1715025558,1714234934,1713652665,1713211592,1712438461,1711979328,1710759701,1709396461,1706320537,1705874883,1705361003,1704365995];

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
| [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) | 2 | 0 | 0 | 2 |
| [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) | 3 | 0 | 0 | 3 |
| [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) | 2 | 0 | 0 | 2 |
| [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) | 0 | 2 | 0 | 2 |
| [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2026/02/09 | 29-3 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2026/01/22 | 18-0 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2025/11/27 | 18-2 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2025/11/02 | 14-6 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ✅ | 2025/09/26 | 24-0 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ✅ | 2025/09/08 | 38-3 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2025/08/21 | 27-5 | [Peace Keepers](https://ws.tsl.rocks/corp/7ac71c394c017639785b3ecaa8087bd3b9a9d134e05d22703a3e18217da3380d/) |
| ✅ | 2025/08/13 | 40-1 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/08/10 | 7-22 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ✅ | 2025/07/16 | 20-9 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ✅ | 2025/07/16 | 22-3 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ✅ | 2025/07/02 | 26-14 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/06/16 | 18-10 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ✅ | 2025/06/03 | 23-3 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ✅ | 2025/05/25 | 47-6 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2025/05/20 | 24-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2025/05/06 | 33-5 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2025/04/29 | 6-23 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/04/21 | 16-14 | [Blazing Stars](https://ws.tsl.rocks/corp/f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff/) |
| ✅ | 2025/04/20 | 1-0 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2025/04/09 | 58-0 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ✅ | 2025/03/31 | 24-8 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2025/03/22 | 31-8 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2025/03/05 | 50-0 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ✅ | 2025/02/11 | 38-9 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2025/01/18 | 36-20 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2024/12/21 | 48-0 | [Sternenflotte](https://ws.tsl.rocks/corp/6273be8c33cae6938fe5608aa5cf5a78e740f71dd888477b437e47ec106c0a0d/) |
| ✅ | 2024/12/11 | 21-17 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2024/11/16 | 55-7 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ✅ | 2024/10/21 | 21-3 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2024/10/13 | 21-11 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ✅ | 2024/10/02 | 43-9 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ❌ | 2024/09/15 | 16-20 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2024/09/06 | 19-4 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/08/19 | 44-3 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ✅ | 2024/08/10 | 50-0 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/07/09 | 12-35 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2024/06/20 | 18-34 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ✅ | 2024/05/28 | 32-2 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2024/05/11 | 28-3 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2024/05/02 | 26-6 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2024/04/25 | 28-11 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2024/04/20 | 36-3 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/04/11 | 34-0 | [Lacuna Holdings](https://ws.tsl.rocks/corp/17f4ece94ed033805ed258868416020d302254e2e3becbd1e25381be7933be76/) |
| ✅ | 2024/04/06 | 36-2 | [Укр інтроверти](https://ws.tsl.rocks/corp/d572c676473ca035b64333d3b419fb4da007677b96f6a401710c4b9249a193d5/) |
| ✅ | 2024/03/23 | 36-2 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ❌ | 2024/03/07 | 2-8 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ✅ | 2024/02/01 | 11-6 | [Regulus](https://ws.tsl.rocks/corp/2ac7f4a924f351d9e8a57c7bd7cb88bb810dd028acab61baf5f38f0ffc7cf559/) |
| ✅ | 2024/01/26 | 29-3 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2024/01/20 | 28-0 | [CODEX IMPERIUS](https://ws.tsl.rocks/corp/3ccc674105e16aced0c61db9965dbb8f479196700e695527054cd35787a5eeb7/) |
| ✅ | 2024/01/09 | 31-5 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |

---
Corporation ID: 288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1770606141"></span>
</div>