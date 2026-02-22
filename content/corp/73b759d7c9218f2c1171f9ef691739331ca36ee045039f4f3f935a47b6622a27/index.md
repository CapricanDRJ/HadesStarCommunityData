---
title: ​AAAA
description: W:21 L:20 D:3 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 0 - 30 **RUFORS**
date: 2025-02-19T15:27:51.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1222 🔻  (-13)|
| ELO Competitive | 1289 🔻  (-14)|
| Total Matches | 44 |
| Wins | 21 |
| Losses | 20 |
| Draws | 3 |
| Streak Record | 5 |
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
        let timestamps = [1739546871,1739081705,1738616531,1738173152,1737726681,1736944796,1736472051,1736035051,1735593024,1735158233,1734662769,1734214470,1733752341,1733293197,1732843377,1732392010,1731947588,1731489923,1731057485,1730589926,1730062558,1729612335,1729147807,1728687958,1728226991,1727753979,1727304984,1726836816,1726375938,1725942623,1725428471,1724906805,1724416673,1723698140,1723233853,1722627424,1721784774,1721230334,1720713845,1720059735,1719616476,1718317514,1717863724,1716056105];

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
| [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) | 1 | 1 | 0 | 2 |
| [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) | 2 | 0 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/02/19 | 0-30 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ❌ | 2025/02/14 | 1-9 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2025/02/08 | 3-6 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/02/03 | 14-2 | [星瀚协议](https://ws.tsl.rocks/corp/45e9a38e4ff4d5889385d94823a7d7ea0668830c377f38a777d1db51633716e1/) |
| ✅ | 2025/01/29 | 11-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/01/20 | 1-11 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ❌ | 2025/01/15 | 5-11 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/01/09 | 19-0 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/01/04 | 19-1 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/12/30 | 12-21 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2024/12/25 | 20-0 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2024/12/19 | 9-0 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ✅ | 2024/12/14 | 24-0 | [墨痕](https://ws.tsl.rocks/corp/1beef0498f07b07217c6e0727dffd066947edc54ee6d09dc63c031def52cdd60/) |
| ❌ | 2024/12/09 | 3-16 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/12/04 | 3-5 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/11/28 | 14-0 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ❌ | 2024/11/23 | 3-20 | [Т Е Н Ь](https://ws.tsl.rocks/corp/5f4b3004ce7e14488b409e8036d0f0b04b41aa63e245cb8e9f238b53780c5741/) |
| ✅ | 2024/11/18 | 19-5 | [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) |
| ✅ | 2024/11/13 | 10-2 | [边界](https://ws.tsl.rocks/corp/86c7d0216214bd3b9f3c7ca967ab1bd70d67faeb4792fe551863170ffc4e089a/) |
| ✅ | 2024/11/07 | 18-0 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ✅ | 2024/11/01 | 6-3 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2024/10/27 | 21-2 | [物竞天择，适者生存](https://ws.tsl.rocks/corp/37d348d8b1c6a4ff8594f28196a593a0ba8fb565b62b6bbcc6dae46c2de660cf/) |
| ❌ | 2024/10/22 | 4-5 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2024/10/16 | 4-7 | [哈迪斯之星，启动！](https://ws.tsl.rocks/corp/bc58305a02f7392f340d26a3becd4784de7360dd5264df9e85d73116b93496d8/) |
| ✅ | 2024/10/11 | 12-0 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ✅ | 2024/10/06 | 10-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/09/30 | 16-0 | [阿尔特拉太空港](https://ws.tsl.rocks/corp/e534fc2f753336290d411e489dcfbedb0e6e7e5608a9bcaa30edae8638595a9d/) |
| ✅ | 2024/09/25 | 9-1 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ↔️ | 2024/09/20 | 3-3 | [太阳系集团](https://ws.tsl.rocks/corp/50f5e0a888ce2f21c0980be0cbb1e444e1d7eeb9dcb2095c3e428bd5bde7a9f6/) |
| ❌ | 2024/09/15 | 5-17 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ↔️ | 2024/09/09 | 11-11 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ✅ | 2024/09/03 | 12-0 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ❌ | 2024/08/28 | 0-9 | [Alterra Corp](https://ws.tsl.rocks/corp/2994ab783b4971d838bcc4741de8562ba674bf412d43f879bccadbc9f91eee2a/) |
| ✅ | 2024/08/20 | 11-3 | [Failures](https://ws.tsl.rocks/corp/0fefd8c33dd941c6dbab4c3251c94de4fbbc67c33dd0a9b5c82b07982c437b3c/) |
| ↔️ | 2024/08/14 | 8-8 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/08/07 | 2-6 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/07/29 | 1-15 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2024/07/22 | 3-12 | [游徒之家](https://ws.tsl.rocks/corp/7ab5f6970c8703095b0589da6e5d648dc64a94ca6d901ef09d4949409b2c44b9/) |
| ✅ | 2024/07/16 | 11-0 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/07/09 | 2-15 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/07/03 | 3-2 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2024/06/18 | 2-20 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2024/06/13 | 3-5 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ❌ | 2024/05/23 | 0-28 | [sk cz nebula](https://ws.tsl.rocks/corp/6ed29f74bee91a7aad75a64196918993de6cec070ce8c65d1132ed6b0e79005d/) |

---
Corporation ID: 73b759d7c9218f2c1171f9ef691739331ca36ee045039f4f3f935a47b6622a27

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1739978871"></span>
</div>