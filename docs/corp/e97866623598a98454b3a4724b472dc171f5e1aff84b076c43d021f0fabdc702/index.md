---
layout: page
title: ​2ND-R8 Corp.
description: W:27 L:14 D:0 Bonus ✅
date: 1726053680
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1371 🔺  (62)|
| ELO Competitive | 1424 🔺  (84)|
| Total Matches | 41 |
| Wins | 27 |
| Losses | 14 |
| Draws | 0 |
| Streak | 14 |
| Streak Record | 14 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1725621680,1724859328,1724408258,1723826159,1723201392,1722604281,1721989114,1721384185,1720707376,1720174540,1719578609,1718970669,1718366789,1717756350,1717149540,1716510072,1715906779,1715298364,1714691648,1714094621,1713918255,1713475109,1712879859,1712264486,1711670424,1711659608,1711051149,1710446605,1709845064,1709269953,1708659365,1708046957,1707530846,1706887608,1705671723,1704565839,1703476766,1702601723,1701970266,1701360466,1700496091];

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
    
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) | 1 | 1 | 0 | 2 |
| [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) | 0 | 2 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/09/11 | 17-3 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ✅ | 2024/09/02 | 20-4 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ✅ | 2024/08/28 | 11-2 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/08/21 | 14-2 | [sk cz nebula](https://ws.tsl.rocks/corp/6ed29f74bee91a7aad75a64196918993de6cec070ce8c65d1132ed6b0e79005d/) |
| ✅ | 2024/08/14 | 22-0 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2024/08/07 | 20-2 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/07/31 | 26-0 | [M4\-Valhalla](https://ws.tsl.rocks/corp/40886172a1ee54e8b5cbd91b5bcf06cb4af03726ad8fe6aba585bde03d4b6bf1/) |
| ✅ | 2024/07/24 | 16-14 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/07/16 | 10-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/07/10 | 25-1 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/07/03 | 25-8 | [Out landers](https://ws.tsl.rocks/corp/4d949404db40dec4e95e786811959954fc9e2b1361f3bf0d33af2279ff86d23a/) |
| ✅ | 2024/06/26 | 16-10 | [UK Armada](https://ws.tsl.rocks/corp/2e3b65146fc90421a8e65a738a443ed67c756396af15a641475928091cb261a4/) |
| ✅ | 2024/06/19 | 23-0 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ✅ | 2024/06/12 | 29-3 | [Axioma](https://ws.tsl.rocks/corp/2ec904c87d0183a49e22dc53508fa5c75d6e638e3a152a30336831697c60e91e/) |
| ❌ | 2024/06/05 | 15-17 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/05/29 | 9-22 | [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) |
| ❌ | 2024/05/22 | 6-20 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ✅ | 2024/05/14 | 16-0 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2024/05/07 | 9-0 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ❌ | 2024/05/01 | 6-16 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ✅ | 2024/04/29 | 7-1 | [星环建设集团](https://ws.tsl.rocks/corp/85422294545c4561b468821bbbbe277a0d7f09c6ab45fedb2a43cbaa36d32f63/) |
| ❌ | 2024/04/23 | 6-24 | [Destroyers](https://ws.tsl.rocks/corp/3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23/) |
| ❌ | 2024/04/16 | 5-25 | [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) |
| ❌ | 2024/04/09 | 4-32 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/04/03 | 0-18 | [Prometheus](https://ws.tsl.rocks/corp/b8bbef86e5b1f72bf9c827f0497871ab0363769ac4fef563fd56f96ac88c85a6/) |
| ✅ | 2024/04/02 | 20-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/03/26 | 11-14 | [КМБ](https://ws.tsl.rocks/corp/9863510eb8d02a7be02ef6a2cf42499cbf1e7ec62df078fe82aaa791444445f4/) |
| ✅ | 2024/03/19 | 20-0 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/03/12 | 14-5 | [Ul'Adri](https://ws.tsl.rocks/corp/d44796a95a2cc6f93a92af4d701a9c6325eff22633f874f43945a1b1d77b5fe7/) |
| ✅ | 2024/03/06 | 13-2 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ✅ | 2024/02/28 | 16-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/02/21 | 13-1 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ✅ | 2024/02/15 | 9-1 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/02/07 | 4-9 | [The Elite](https://ws.tsl.rocks/corp/a2df28ce949920025afb16d0229e0c14aed7832c217d142307a62622634d395c/) |
| ❌ | 2024/01/24 | 5-17 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ❌ | 2024/01/11 | 4-12 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2023/12/30 | 4-0 | [하데스 스타 코리아](https://ws.tsl.rocks/corp/36ae3ca01b555bd695500062530b53a2b19cc9d4bab087051ea8775124723e94/) |
| ❌ | 2023/12/20 | 0-9 | [MÉXICO INFINITO](https://ws.tsl.rocks/corp/a9fbdd48477b87a054dbd804eef12ae08bc6e02798cd8990b08c4a9803d8f9d8/) |
| ✅ | 2023/12/12 | 3-1 | [Aegis Shield](https://ws.tsl.rocks/corp/0c9788075ccdc94322bb96f7d98b4a8df010615893980ab0b4e5b7a987b13732/) |
| ❌ | 2023/12/05 | 3-4 | [challenger corp](https://ws.tsl.rocks/corp/7c39adae75191c15a3bab070d08a4cf21efb3b5ec37d69363b7c1060f272d80d/) |
| ✅ | 2023/11/25 | 3-0 | [Marvel](https://ws.tsl.rocks/corp/e5461f99ba9cca1fb4fe6f543dcfd1a7a7d5a147019c91b1af3cd5b57e69676c/) |

Corporation ID: e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>