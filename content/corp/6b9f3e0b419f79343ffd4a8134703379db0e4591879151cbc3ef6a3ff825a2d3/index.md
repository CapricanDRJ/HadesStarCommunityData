---
title: ​Winged Pheonix
description: W:18 L:28 D:1 Bonus ❌ 9%
image: ./favicon.png
Summary: ❌ 34 - 48 **New Horizons**
date: 2026-01-29T11:58:25.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
It's all about having fun. Experienced players at all levels helping 
and supporting each other to grow. 
Multiple daily RS
Bi-Weekly WS 
Beware of Viking
Discord: sqaDS62zfW
```
<br>

### Whitestar Bonus ❌ 9%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1121 🔻  (-12)|
| ELO Competitive | 1259 🔻  (-15)|
| Total Matches | 47 |
| Wins | 18 |
| Losses | 28 |
| Draws | 1 |
| Streak Record | 3 |
| Flagship | 8 |

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
        let timestamps = [1769255905,1768528195,1768092233,1768041447,1750689819,1749926822,1742389327,1741692284,1741186732,1740320996,1739724480,1739176371,1738656492,1737547323,1736774695,1736230727,1733121326,1732479160,1731915431,1731245622,1730619068,1729861804,1729249383,1728629347,1727844378,1727309490,1726821191,1726041481,1725571508,1725039334,1724218644,1723534967,1723086604,1722397236,1721906475,1721445187,1720937900,1720040505,1719463519,1718596544,1718121274,1717392995,1716545518,1716007428,1715248485,1714705767,1713772837];

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
| [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) | 0 | 3 | 0 | 3 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 1 | 1 | 0 | 2 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 2 | 0 | 0 | 2 |
| [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) | 1 | 1 | 0 | 2 |
| [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) | 0 | 2 | 0 | 2 |
| [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) | 0 | 2 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 3 | 0 | 0 | 3 |
| [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/29 | 34-48 | [New Horizons](https://ws.tsl.rocks/corp/35fd5f8a42c94496c737f097b09c66f0bcbdd0fe32fdf71009568e283922d37c/) |
| ❌ | 2026/01/21 | 32-33 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2026/01/16 | 0-17 | [Schwermetall](https://ws.tsl.rocks/corp/e1b124e8bdb48553b0276800acf15a530e72104b006bd4dd401f23bd87bdbbf0/) |
| ✅ | 2026/01/15 | 19-17 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ✅ | 2025/06/28 | 53-5 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/06/19 | 18-22 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/03/24 | 1-28 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2025/03/16 | 7-21 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ↔️ | 2025/03/10 | 23-23 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2025/02/28 | 52-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2025/02/21 | 35-55 | [No Orbit©](https://ws.tsl.rocks/corp/15831bc11de2a279f369118ffb2cd889844a6992e769889ad9e64f8ac15a410f/) |
| ✅ | 2025/02/15 | 28-8 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2025/02/09 | 34-2 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/01/27 | 51-0 | [大舰队がな](https://ws.tsl.rocks/corp/31c613a73fedabefb27a1d68ac5b662b294e86a0afaaddec87084b04d7791dbc/) |
| ❌ | 2025/01/18 | 17-26 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/01/12 | 22-46 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2024/12/07 | 3-27 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ❌ | 2024/11/29 | 8-41 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2024/11/23 | 25-13 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/11/15 | 4-15 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2024/11/08 | 3-20 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/10/30 | 33-20 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ✅ | 2024/10/23 | 26-21 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2024/10/16 | 26-5 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/10/07 | 7-36 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/10/01 | 15-53 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ✅ | 2024/09/25 | 16-3 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/09/16 | 16-37 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2024/09/10 | 12-42 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/09/04 | 49-3 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/08/26 | 4-35 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2024/08/18 | 15-34 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ✅ | 2024/08/13 | 19-9 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ✅ | 2024/08/05 | 39-3 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ✅ | 2024/07/30 | 47-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/07/25 | 22-35 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2024/07/19 | 36-30 | [West Worlders](https://ws.tsl.rocks/corp/aad051ec6b980cc52fb4777aef113d9e28a72aab40fda65aa9cdbf477b8e390a/) |
| ❌ | 2024/07/08 | 20-41 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2024/07/02 | 17-44 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/06/22 | 18-33 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ❌ | 2024/06/16 | 23-34 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ❌ | 2024/06/08 | 15-38 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2024/05/29 | 33-0 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/05/23 | 7-38 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2024/05/14 | 1-33 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ✅ | 2024/05/08 | 20-4 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/04/27 | 9-43 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |

---
Corporation ID: 6b9f3e0b419f79343ffd4a8134703379db0e4591879151cbc3ef6a3ff825a2d3

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769687905"></span>
</div>