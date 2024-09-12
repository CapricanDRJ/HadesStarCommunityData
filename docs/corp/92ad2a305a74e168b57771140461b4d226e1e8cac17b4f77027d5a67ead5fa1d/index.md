---
layout: page
title: ​星光万丈
description: W:16 L:24 D:1 Bonus ✅
date: 1726129540
---
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1184 🔻  (751)|
| ELO Competitive | 1280 🔺  (268)|
| Total Matches | 41 |
| Wins | 16 |
| Losses | 24 |
| Draws | 1 |
| Streak Record | 3 |


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
        let timestamps = [1725697540,1725616271,1725098035,1725079599,1724626142,1724599993,1724044052,1723952683,1723343238,1723302371,1722851304,1722774973,1722304382,1722282748,1721729476,1721729175,1721219212,1721193973,1720536368,1720530357,1719574401,1719440986,1718991431,1718443279,1717894377,1717166371,1713185743,1712301422,1712281008,1711844713,1711172976,1708438043,1707797041,1707132221,1706667938,1706164269,1705126295,1704540591,1699361733,1699131567,1698929312];

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
| [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) | 1 | 1 | 0 | 2 |
| [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) | 0 | 2 | 0 | 2 |
| [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) | 0 | 2 | 0 | 2 |
| [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) | 2 | 0 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/12 | 4-9 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ✅ | 2024/09/11 | 7-5 | [Kelebra](https://ws.tsl.rocks/corp/0b1ce787fadd83433c02fb7f56a905ea64f918c1396ac37b8591891adf232eb6/) |
| ❌ | 2024/09/05 | 3-5 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ✅ | 2024/09/05 | 16-7 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/08/30 | 7-5 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ✅ | 2024/08/30 | 20-7 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ❌ | 2024/08/24 | 3-4 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ❌ | 2024/08/23 | 0-27 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/08/16 | 0-6 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/08/15 | 0-24 | [落雨观花](https://ws.tsl.rocks/corp/565a6d89fc5107e86669d7f8910a1c4ae1fbb156fa0b5e81dbc917c341cc9ff0/) |
| ✅ | 2024/08/10 | 10-3 | [Nebulae Traders](https://ws.tsl.rocks/corp/bf2f9c50afbe2077dd734f484504f5167ee53a4c7f5315b9ab1cb0ee5620a39f/) |
| ✅ | 2024/08/09 | 14-0 | [Consortium](https://ws.tsl.rocks/corp/2d28d460f549084fa8f440de8a4da35728d64c0bb2f1a8ac30e07282c5210d89/) |
| ✅ | 2024/08/04 | 23-18 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/08/03 | 2-7 | [BoomTech](https://ws.tsl.rocks/corp/97c4db179d3ea995d3a56227f87c501f4baa4abbece2b25e09b636f0aa264bd7/) |
| ❌ | 2024/07/28 | 0-17 | [阿尔特拉集团](https://ws.tsl.rocks/corp/b44d9d872fc500197dc86de9d5038463acd771333da46a48b5b55cd33baea1cf/) |
| ✅ | 2024/07/28 | 9-3 | [<•\|•\>](https://ws.tsl.rocks/corp/a3864fad7e4ba08611eda264a7934afe237a2f313a23b12dcce9db0a96a09daf/) |
| ❌ | 2024/07/22 | 4-15 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2024/07/22 | 13-0 | [遨游星空  kdy分盟](https://ws.tsl.rocks/corp/74a42c9e5b716ea7c784243c029ad5dc1871f6b81692170099efdf8d3f94ba8f/) |
| ✅ | 2024/07/14 | 8-0 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ✅ | 2024/07/14 | 9-6 | [Sternenflotte](https://ws.tsl.rocks/corp/6273be8c33cae6938fe5608aa5cf5a78e740f71dd888477b437e47ec106c0a0d/) |
| ❌ | 2024/07/03 | 2-4 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ❌ | 2024/07/01 | 2-16 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ✅ | 2024/06/26 | 10-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/06/20 | 3-22 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2024/06/14 | 1-18 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/06/05 | 0-4 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2024/04/20 | 2-0 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ❌ | 2024/04/10 | 1-3 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ❌ | 2024/04/10 | 0-21 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ✅ | 2024/04/05 | 3-2 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ↔️ | 2024/03/28 | 0-0 | [FėniX•](https://ws.tsl.rocks/corp/8307d1da2d91b1b6f2cdf365b891741a148ac78d385e34734a0e083d318248b2/) |
| ❌ | 2024/02/25 | 0-5 | [Eternal empire ](https://ws.tsl.rocks/corp/c710661fec52581acc50c1f8a96dfb2dc3e582cf877080c41714526c98cd7193/) |
| ✅ | 2024/02/18 | 1-0 | [titan tv](https://ws.tsl.rocks/corp/30ba418a884a4c2f888c814c6adfd9f30d995c155ccdc8aafa74ae4dc30f1c39/) |
| ❌ | 2024/02/10 | 0-15 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ❌ | 2024/02/05 | 2-15 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2024/01/30 | 0-15 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2024/01/18 | 3-4 | [challenger corp](https://ws.tsl.rocks/corp/7c39adae75191c15a3bab070d08a4cf21efb3b5ec37d69363b7c1060f272d80d/) |
| ❌ | 2024/01/11 | 5-16 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ❌ | 2023/11/12 | 3-6 | [Free Star](https://ws.tsl.rocks/corp/3970e813bec9126438bee62e337f181cf80eef7babc4a233b5b3df6003a3b9cf/) |
| ❌ | 2023/11/09 | 0-13 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ✅ | 2023/11/07 | 3-2 | [Todesschwadron](https://ws.tsl.rocks/corp/2bcbf6c5a9cfee247983159b049a176d182486b00690372f13cc08e35203c047/) |

Corporation ID: 92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>