---
layout: page
title: ​Ender
description: W:50 L:16 D:0 Bonus ✅
date: 1726041060
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1449 🔻  (22)|
| ELO Competitive | 1593 🔺  (10)|
| Total Matches | 66 |
| Wins | 50 |
| Losses | 16 |
| Draws | 0 |
| Streak Record | 22 |


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
        let timestamps = [1725609060,1725591335,1725139405,1725128586,1724674820,1724507734,1724110577,1723839984,1723335427,1722818668,1722272831,1721834657,1721330701,1720798748,1720310979,1719757712,1719253470,1718754320,1718226159,1717769578,1717306427,1716797337,1716179889,1715676934,1715185996,1714737614,1714280601,1713699529,1713181236,1712588403,1712112140,1711661411,1711051149,1710595034,1710105585,1709548802,1709071947,1708569820,1708092628,1707599509,1707119000,1706686567,1706232187,1705703883,1705267247,1704814968,1704382826,1703947681,1703804339,1703512226,1703251672,1703019667,1702586996,1702382018,1702009035,1701937506,1701459646,1701359565,1701010333,1700702264,1700570322,1700118001,1700016357,1699668290,1699222315,1698786272];

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
| [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) | 1 | 1 | 0 | 2 |
| [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) | 2 | 2 | 0 | 4 |
| [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) | 1 | 1 | 0 | 2 |
| [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) | 2 | 0 | 0 | 2 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 2 | 1 | 0 | 3 |
| [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) | 2 | 0 | 0 | 2 |
| [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) | 2 | 0 | 0 | 2 |
| [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) | 1 | 4 | 0 | 5 |
| [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) | 3 | 0 | 0 | 3 |
| [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) | 3 | 0 | 0 | 3 |
| [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) | 1 | 1 | 0 | 2 |
| [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) | 1 | 2 | 0 | 3 |
| [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) | 3 | 0 | 0 | 3 |
| [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) | 2 | 1 | 0 | 3 |
| [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) | 2 | 0 | 0 | 2 |
| [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) | 2 | 0 | 0 | 2 |
| [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) | 0 | 2 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/11 | 5-48 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/09/11 | 72-0 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2024/09/05 | 18-31 | [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ✅ | 2024/09/05 | 64-3 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ✅ | 2024/08/31 | 24-19 | [The Seperatists](https://ws.tsl.rocks/corp/f7afefdba007366512764be38eb9c404704e5d4de919e7df2b17560324bbb56f/) |
| ✅ | 2024/08/29 | 59-0 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ✅ | 2024/08/24 | 21-6 | [Торг\. федерация](https://ws.tsl.rocks/corp/915f197e5951f44128c2a3d3126141cd44b3c67a361158d2b220a5883e410310/) |
| ❌ | 2024/08/21 | 13-50 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/08/16 | 64-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/08/10 | 52-16 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2024/08/03 | 74-15 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2024/07/29 | 92-0 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ✅ | 2024/07/23 | 61-21 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ✅ | 2024/07/17 | 55-23 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2024/07/12 | 5-30 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/07/05 | 49-6 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2024/06/29 | 51-11 | [YETI Collective](https://ws.tsl.rocks/corp/ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98/) |
| ✅ | 2024/06/23 | 48-16 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/06/17 | 57-10 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2024/06/12 | 53-6 | [The trade pub](https://ws.tsl.rocks/corp/43689e4266357d8b8d3d66d371109d9aed82ee6df47dc6fa0a7c5da735b9863b/) |
| ✅ | 2024/06/07 | 54-8 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ✅ | 2024/06/01 | 58-10 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2024/05/25 | 57-0 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ✅ | 2024/05/19 | 53-3 | [Offshore Trash](https://ws.tsl.rocks/corp/cf394608a27d311fa1a0132e455097b2ddfb434fc4acd6d102deef0a390eed8e/) |
| ✅ | 2024/05/13 | 60-3 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ✅ | 2024/05/08 | 42-8 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ✅ | 2024/05/03 | 46-13 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ✅ | 2024/04/26 | 35-18 | [Gummibärenbande](https://ws.tsl.rocks/corp/7111d11716d236254b3fe2fdc0df09519cbed1ee9cc2c7691983534a3d8e1366/) |
| ✅ | 2024/04/20 | 55-25 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2024/04/13 | 49-28 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2024/04/08 | 42-19 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2024/04/02 | 57-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/03/26 | 55-18 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2024/03/21 | 48-19 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2024/03/15 | 42-14 | [ANZAC Warriors](https://ws.tsl.rocks/corp/dbb190c3127dbab2a3d6d58f1f8f63425f1dbd1949f6442fb2d162e66246b484/) |
| ✅ | 2024/03/09 | 36-13 | [Terranova](https://ws.tsl.rocks/corp/4eeaf112dd9983e997c8c9ec43e562763a8cd4a95f268b4bfeee5e39934f01de/) |
| ✅ | 2024/03/03 | 33-6 | [The Star League](https://ws.tsl.rocks/corp/f8b4a4ab48d0f4dc8e2d35c049289e4cd31960c34c0d114426164f223cdb5140/) |
| ❌ | 2024/02/27 | 20-42 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2024/02/21 | 60-18 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2024/02/15 | 49-9 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ✅ | 2024/02/10 | 41-16 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2024/02/05 | 54-9 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ✅ | 2024/01/31 | 72-0 | [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) |
| ✅ | 2024/01/24 | 30-25 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ✅ | 2024/01/19 | 30-5 | [Polish Pirates](https://ws.tsl.rocks/corp/e73d410a73bca6a1161056891e484b32cac940c0d94d20c92ed085683524652b/) |
| ✅ | 2024/01/14 | 22-17 | [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) |
| ✅ | 2024/01/09 | 16-13 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ✅ | 2024/01/04 | 24-0 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/01/02 | 11-60 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2023/12/30 | 34-4 | [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) |
| ❌ | 2023/12/27 | 11-26 | [龙门训练营](https://ws.tsl.rocks/corp/1409829bbf951ca641274ef39dad828f2b4989e603fbe05e5765204058c13923/) |
| ✅ | 2023/12/24 | 42-10 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ❌ | 2023/12/19 | 3-30 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ❌ | 2023/12/17 | 15-44 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2023/12/13 | 12-52 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2023/12/12 | 8-49 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2023/12/06 | 48-6 | [Regulus](https://ws.tsl.rocks/corp/2ac7f4a924f351d9e8a57c7bd7cb88bb810dd028acab61baf5f38f0ffc7cf559/) |
| ❌ | 2023/12/05 | 8-42 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2023/12/01 | 59-1 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ❌ | 2023/11/28 | 0-15 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ✅ | 2023/11/26 | 52-0 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2023/11/21 | 8-41 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2023/11/20 | 7-37 | [Auscorp ](https://ws.tsl.rocks/corp/a33256c155b161f595303ef4302912cc63ddfe306cad3f53457cf55508dcad75/) |
| ✅ | 2023/11/16 | 20-3 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2023/11/10 | 3-0 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ❌ | 2023/11/05 | 25-27 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |

Corporation ID: 71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>