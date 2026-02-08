---
title: ​ProyectCorp
description: W:20 L:31 D:0 Bonus ❌ 8%
image: ./favicon.png
Summary: ❌ 6 - 24 **SternenStaub**
date: 2026-01-21T12:05:43.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Our leader is writing a good description, please join the corp, enjoy
 the company.
```
<br>

### [Discord](https://discord.gg/yddJSxbE72)
### Whitestar Bonus ❌ 8%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1096 🔻  (-20)|
| ELO Competitive | 1166 🔻  (-15)|
| Total Matches | 51 |
| Wins | 20 |
| Losses | 31 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1768565143,1767659593,1730373560,1729283049,1727956468,1727343739,1726747274,1726223571,1725708227,1724952184,1724394437,1723707456,1723113947,1722289960,1721478244,1720791231,1720139986,1719631498,1718909376,1718453498,1717706470,1717108680,1716525392,1716001119,1715342824,1715335614,1714105135,1713539103,1712843496,1712146690,1711248014,1710525322,1709673802,1708586044,1708075199,1707425979,1707420569,1706874083,1706273653,1705658801,1705067996,1704384930,1703803738,1703181651,1702577076,1702073657,1701577455,1700749444,1700133328,1699601840,1698940732];

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
| [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) | 1 | 1 | 0 | 2 |
| [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) | 0 | 3 | 0 | 3 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 2 | 0 | 2 |
| [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) | 2 | 0 | 0 | 2 |
| [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) | 2 | 0 | 0 | 2 |
| [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) | 1 | 1 | 0 | 2 |
| [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) | 0 | 2 | 0 | 2 |
| [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/21 | 6-24 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2026/01/11 | 3-26 | [Rising star](https://ws.tsl.rocks/corp/b7037efd74e829aa4ac6e49960fa44cebe1477e23d25cf1640594d9168d630db/) |
| ❌ | 2024/11/05 | 2-46 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/10/23 | 26-33 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2024/10/08 | 0-54 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/10/01 | 20-26 | [Widow Makers](https://ws.tsl.rocks/corp/ac1ddcbbd45ccdfa74185d7f40b3a67b0b5b477f7b0bd6f3d7a5a7821ee55bdd/) |
| ❌ | 2024/09/24 | 4-20 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2024/09/18 | 47-0 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ❌ | 2024/09/12 | 4-53 | [Emergence](https://ws.tsl.rocks/corp/1a1250d276bf9541252070bbee9c6b216c91b12a837aaa8a8e8a90f490940538/) |
| ❌ | 2024/09/03 | 27-37 | [Void](https://ws.tsl.rocks/corp/d647d722a09f020b716e059ac7758172a560c7190ac4d7d306c4ede8be6c5e77/) |
| ✅ | 2024/08/28 | 39-7 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ✅ | 2024/08/20 | 26-15 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2024/08/13 | 17-11 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2024/08/03 | 5-13 | [Торг\. федерация](https://ws.tsl.rocks/corp/915f197e5951f44128c2a3d3126141cd44b3c67a361158d2b220a5883e410310/) |
| ✅ | 2024/07/25 | 19-2 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ❌ | 2024/07/17 | 4-22 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/07/10 | 8-9 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/07/04 | 2-35 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2024/06/25 | 6-20 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/06/20 | 22-39 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/06/11 | 24-12 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ✅ | 2024/06/04 | 38-7 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2024/05/29 | 15-42 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ✅ | 2024/05/23 | 18-3 | [Veteran's Haven](https://ws.tsl.rocks/corp/254fdc629bae81f3b0ca69160e0b6e34bd81993e755e4fb5ddedd1533038a683/) |
| ❌ | 2024/05/15 | 0-20 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2024/05/15 | 26-0 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/05/01 | 2-35 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2024/04/24 | 8-13 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/04/16 | 4-21 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/04/08 | 16-30 | [Moon Catchers](https://ws.tsl.rocks/corp/0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43/) |
| ✅ | 2024/03/29 | 27-2 | [The Seperatists](https://ws.tsl.rocks/corp/f7afefdba007366512764be38eb9c404704e5d4de919e7df2b17560324bbb56f/) |
| ✅ | 2024/03/20 | 9-4 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/03/10 | 20-5 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ✅ | 2024/02/27 | 12-3 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2024/02/21 | 0-30 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ❌ | 2024/02/13 | 0-20 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/02/13 | 28-0 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |
| ❌ | 2024/02/07 | 5-33 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ✅ | 2024/01/31 | 29-2 | [Млечный путь](https://ws.tsl.rocks/corp/a9a3b102b3698bf7db8cd106adda02cee0033bfc03f681b667b2991e10049a25/) |
| ❌ | 2024/01/24 | 4-23 | [Corporation](https://ws.tsl.rocks/corp/51bbfdd5693e8227e63dbd5161e8fb1a5fa3e93d1f67c7d565d82f080bbeb007/) |
| ❌ | 2024/01/17 | 14-29 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2024/01/09 | 21-19 | [White Star Inc\.](https://ws.tsl.rocks/corp/b5bdfb5e81eac1263ce48131806cc733ec699336043c0f7af090fbe8ff21d26e/) |
| ❌ | 2024/01/02 | 4-31 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2023/12/26 | 32-3 | [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) |
| ✅ | 2023/12/19 | 20-19 | [Созидание 2\.0](https://ws.tsl.rocks/corp/ae8b8d247dbd93bebc2b77d48c1db6783a17ff8b16438f010c804b7ccf05b76a/) |
| ✅ | 2023/12/13 | 28-7 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ❌ | 2023/12/08 | 8-24 | [\.\.D\.E\.I\.T\.Co\.\.](https://ws.tsl.rocks/corp/59b15e2c8e6b94f918d86a75ed857c47c1d12726a67bfbc314828e5d25fbbbc9/) |
| ❌ | 2023/11/28 | 3-9 | [Inexorable](https://ws.tsl.rocks/corp/8343908ac19af8666d7765db00e5eb603d9e87bbbfe273c81d9b9b2329ca0827/) |
| ✅ | 2023/11/21 | 34-0 | [自由星际联盟](https://ws.tsl.rocks/corp/933277ff64041b32fe12e4e564e2064071377343596c7944fb8c145165e2ab04/) |
| ❌ | 2023/11/15 | 6-20 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ❌ | 2023/11/07 | 7-15 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |

---
Corporation ID: ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1768997143"></span>
</div>