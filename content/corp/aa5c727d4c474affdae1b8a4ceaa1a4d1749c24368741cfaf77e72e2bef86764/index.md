---
title: ​繁星一夢
description: W:19 L:21 D:0 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 1 - 37 **Russian space 3**
date: 2026-02-22T06:14:52.000Z
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
| ELO Regular | 1158 🔻  (-2)|
| ELO Competitive | 1291 🔻  (-3)|
| Total Matches | 40 |
| Wins | 19 |
| Losses | 21 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1771308892,1770748288,1770284100,1769810273,1769348572,1768899332,1768419731,1767982347,1767524084,1767087524,1766611629,1766158831,1765722588,1765271303,1764789954,1764357251,1763902052,1763456188,1762990503,1762534402,1762094847,1761644275,1760978194,1760477886,1760035066,1759587666,1759454560,1759128688,1758683890,1758182061,1757712072,1757245756,1756793668,1756245478,1755765300,1755312544,1754844903,1754375527,1753774865,1753300881];

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
| [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) | 2 | 0 | 0 | 2 |
| [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) | 0 | 2 | 0 | 2 |
| [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 1-37 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2026/02/15 | 3-29 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2026/02/10 | 3-31 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ❌ | 2026/02/04 | 3-28 | [Quantum Cats](https://ws.tsl.rocks/corp/0b6309a414bde261db3ee5592ae72168ca48d02558f5bc597950f11e55f92ae6/) |
| ❌ | 2026/01/30 | 3-6 | [$TAR$](https://ws.tsl.rocks/corp/05ef16a2f175c0cb548193f16571a9c8285e16d0f0fb2dcd138ab632b57aa53f/) |
| ❌ | 2026/01/25 | 3-41 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2026/01/19 | 6-9 | [Veteran's Haven](https://ws.tsl.rocks/corp/254fdc629bae81f3b0ca69160e0b6e34bd81993e755e4fb5ddedd1533038a683/) |
| ✅ | 2026/01/14 | 15-1 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ❌ | 2026/01/09 | 1-42 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2026/01/04 | 3-18 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/12/29 | 16-2 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ✅ | 2025/12/24 | 7-4 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2025/12/19 | 6-13 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2025/12/14 | 9-3 | [Hexennacht](https://ws.tsl.rocks/corp/3fa15511879c2f420d8591bac7f8ac61d79ea28055962686156de3e86819a108/) |
| ❌ | 2025/12/08 | 3-23 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2025/12/03 | 6-21 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/11/28 | 3-5 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ❌ | 2025/11/23 | 3-8 | [Out landers](https://ws.tsl.rocks/corp/4d949404db40dec4e95e786811959954fc9e2b1361f3bf0d33af2279ff86d23a/) |
| ❌ | 2025/11/17 | 3-11 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/11/12 | 9-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2025/11/07 | 6-1 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2025/11/02 | 3-12 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2025/10/25 | 12-1 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2025/10/19 | 7-3 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2025/10/14 | 9-1 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ✅ | 2025/10/09 | 7-2 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/10/08 | 2-21 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2025/10/04 | 21-5 | [BRASIL ACADEMY](https://ws.tsl.rocks/corp/cabc8229ee9053cfa3496208bd29c60cd71cda89c5e723fc236fff61a95c2b83/) |
| ✅ | 2025/09/29 | 15-0 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2025/09/23 | 3-17 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ✅ | 2025/09/17 | 9-0 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2025/09/12 | 14-0 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/09/07 | 9-3 | [Stellaris](https://ws.tsl.rocks/corp/957f987a0920391d39769d5b2540f55eb7102778a12d395599ed7a4a7985e342/) |
| ❌ | 2025/08/31 | 3-28 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/08/26 | 16-3 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ❌ | 2025/08/21 | 2-11 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/08/15 | 0-27 | [Battle Academy](https://ws.tsl.rocks/corp/a4e315e22ea2a592f43efe95a9e53ab2cdbd9f0dc733c9fdde20079d8fabaddd/) |
| ✅ | 2025/08/10 | 11-3 | [Bastille FR](https://ws.tsl.rocks/corp/910f3de039463150a8be5828e846a65c435f5ee4a5ae8ec2d27ab040614e5aa8/) |
| ✅ | 2025/08/03 | 7-2 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2025/07/28 | 17-6 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |

---
Corporation ID: aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771740892"></span>
</div>