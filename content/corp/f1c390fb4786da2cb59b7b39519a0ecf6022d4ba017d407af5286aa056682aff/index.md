---
title: ​Blazing Stars
description: W:33 L:16 D:1 Bonus ❌ 9%
image: ./favicon.png
Summary: ❌ 3 - 24 **资助会**
date: 2026-02-21T10:53:26.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
 <color=green>A juvenile corporation, deemed for both growth and enjo
yment. <color=yellow>Welcomes both newbies and veterans throughout th
e Hades Galaxy. Join us and have fun 
```
<br>

### [Discord](https://discord.gg/aCU5VZGc)
### Whitestar Bonus ❌ 9%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1319 🔻  (-19)|
| ELO Competitive | 1450 🔻  (-23)|
| Total Matches | 50 |
| Wins | 33 |
| Losses | 16 |
| Draws | 1 |
| Streak Record | 11 |
| Flagship | 1 |

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
        let timestamps = [1771239206,1761835251,1761376152,1760735756,1758101242,1756332314,1755611758,1754642063,1754637913,1754011042,1753178696,1751942272,1751938916,1749621502,1749557794,1749046965,1748444783,1747322131,1747317622,1746605447,1745461847,1745430897,1744768286,1744701875,1744171491,1744160075,1743588253,1743562322,1743017140,1742915258,1742256835,1741789524,1741659119,1741200256,1740392509,1739811322,1739362974,1738673620,1738597294,1737981541,1737074631,1736210051,1734861679,1734427199,1734397460,1733875537,1733834367,1733039129,1732682281,1732592440];

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
| [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) | 1 | 1 | 0 | 2 |
| [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) | 2 | 0 | 0 | 2 |
| [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/21 | 3-24 | [资助会](https://ws.tsl.rocks/corp/4d36e1b3853444f7789e6142230ba93f3968baffc18bfad598c3d450c6b247e2/) |
| ❌ | 2025/11/04 | 2-3 | [White Star Inc\.](https://ws.tsl.rocks/corp/b5bdfb5e81eac1263ce48131806cc733ec699336043c0f7af090fbe8ff21d26e/) |
| ❌ | 2025/10/30 | 6-21 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ❌ | 2025/10/22 | 3-10 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2025/09/22 | 12-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/09/01 | 21-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2025/08/24 | 16-4 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/08/13 | 0-7 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ❌ | 2025/08/13 | 0-27 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ✅ | 2025/08/06 | 10-2 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ✅ | 2025/07/27 | 29-7 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ❌ | 2025/07/13 | 0-17 | [UGSS](https://ws.tsl.rocks/corp/06eb95447520936bc87ea4f7c64539563c77a74948291fc7a65b190f2752b4c7/) |
| ❌ | 2025/07/13 | 3-22 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2025/06/16 | 3-22 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/06/15 | 2-20 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ✅ | 2025/06/09 | 34-2 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ❌ | 2025/06/02 | 0-19 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/05/20 | 8-4 | [💮問鼎無垠💮](https://ws.tsl.rocks/corp/2f0bef5235ddb5e700f0e9c9a195a9ca7c81b50e5ff90c22931f3f462080bed2/) |
| ✅ | 2025/05/20 | 9-2 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ✅ | 2025/05/12 | 14-2 | [viCIOus](https://ws.tsl.rocks/corp/910b93255c2b748443e55624583e16ee14d84a577cd7b8e3127f0d1fcb363fbb/) |
| ✅ | 2025/04/29 | 8-3 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ✅ | 2025/04/28 | 12-0 | [探索舰队](https://ws.tsl.rocks/corp/8c465701390ed74d4d115e58d66289afb2eeef6247ca351a4cf88a0046e6fe55/) |
| ❌ | 2025/04/21 | 14-16 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ❌ | 2025/04/20 | 0-13 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ✅ | 2025/04/14 | 7-1 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/04/14 | 26-1 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2025/04/07 | 15-3 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ✅ | 2025/04/07 | 31-0 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2025/03/31 | 19-1 | [DarkSide](https://ws.tsl.rocks/corp/557178dd3a3d43ff1751021bfc2d8c1d4261336a45f90d392f3dd275d8a0a941/) |
| ✅ | 2025/03/30 | 25-0 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2025/03/23 | 23-0 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2025/03/17 | 5-23 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/03/16 | 27-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/03/10 | 22-0 | [AlyTec Sys\.](https://ws.tsl.rocks/corp/4f98eeb43077d5c00a32f9810352931d8778fb5b24d8b49c318953d489f07df0/) |
| ✅ | 2025/03/01 | 11-3 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ✅ | 2025/02/22 | 25-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/02/17 | 18-2 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2025/02/09 | 20-0 | [Air/Free\_ziyou](https://ws.tsl.rocks/corp/97e261fb0c1a22ab5190f97566b57c72921c78dfc9021709ee50d11ac5e1955b/) |
| ✅ | 2025/02/08 | 24-1 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ✅ | 2025/02/01 | 11-7 | [蓝色星系二号分盟](https://ws.tsl.rocks/corp/40ffb900f40aefc1fa4fddd4d036e0466577312c7fb8e16ae315cd8868015297/) |
| ✅ | 2025/01/22 | 11-2 | [Aquiles](https://ws.tsl.rocks/corp/303ab147f2fce882b5cb391c0b3006c76bc2222ee409fc17b157cb149bda3c9f/) |
| ✅ | 2025/01/12 | 20-0 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ✅ | 2024/12/27 | 7-0 | [华夏三体\-阿拜多斯集团](https://ws.tsl.rocks/corp/78854ef22e7a0ed0424f4452ba62768664f785bcc2796bc04700c2f50683441f/) |
| ❌ | 2024/12/22 | 0-10 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ✅ | 2024/12/22 | 16-0 | [corporacion I\.A](https://ws.tsl.rocks/corp/df86dad6380843bf4a9cf1a50952d4ff723b40e5e84626918e35b39ec35a9ccf/) |
| ↔️ | 2024/12/16 | 0-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/12/15 | 11-0 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ✅ | 2024/12/06 | 6-4 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ✅ | 2024/12/02 | 3-1 | [Fairy tail](https://ws.tsl.rocks/corp/44e6a82c06b84bc5579df0e42bc462f36313b0060861d25228856930f6c19eac/) |
| ❌ | 2024/12/01 | 0-8 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |

---
Corporation ID: f1c390fb4786da2cb59b7b39519a0ecf6022d4ba017d407af5286aa056682aff

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771671206"></span>
</div>