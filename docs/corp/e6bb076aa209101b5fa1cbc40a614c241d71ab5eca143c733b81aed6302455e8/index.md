---
layout: page
title: ​逐光起航
description: W:5 L:31 D:5 Bonus ❌
date: 1726657374
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1013 🔻  (1237)|
| ELO Competitive | 1058 🔻  (1245)|
| Total Matches | 41 |
| Wins | 5 |
| Losses | 31 |
| Draws | 5 |


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
        let timestamps = [1726225374,1725792973,1725359058,1724634716,1724494208,1724028127,1723361568,1723285839,1722840781,1722317602,1721359040,1720857653,1716897111,1716893204,1715859906,1715425447,1714903873,1714095522,1713507853,1713012632,1712301422,1711843083,1710881994,1710243490,1709726137,1708857088,1708373602,1707720907,1707283789,1706794449,1706285075,1705837610,1705395554,1704951101,1704348868,1703839266,1703254377,1702673364,1701754475,1701215011,1699956545];

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
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 0 | 2 | 0 | 2 |
| [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) | 0 | 1 | 1 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/18 | 1-4 | [Star Fleet](https://ws.tsl.rocks/corp/b50e0529c2b2e86bae23d0fb4cbcdc4bff7615c45efb95150747a89dd3ea0231/) |
| ❌ | 2024/09/13 | 0-21 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/09/08 | 1-6 | [Dark Halo](https://ws.tsl.rocks/corp/f6ed7c780faf133d3fe411b9ed88480608a56064328539891d1b4348242954f6/) |
| ❌ | 2024/08/31 | 0-1 | [舰队联邦\[FF\]](https://ws.tsl.rocks/corp/a416c5b53512093490461bf0dab583fbb401f5850470774f6de02dafe6ca3655/) |
| ❌ | 2024/08/29 | 2-5 | [共产国际](https://ws.tsl.rocks/corp/375b1efc576c9d15f93249680dcd6dccaf2ad07cd520b85242d0b704d3a494c6/) |
| ↔️ | 2024/08/24 | 4-4 | [梨山养老院](https://ws.tsl.rocks/corp/4b0da5a03088d82acb8566ed943c7737a389ee702df4473438eec3f77f2c20c1/) |
| ❌ | 2024/08/16 | 0-17 | [哈迪斯之星，启动！](https://ws.tsl.rocks/corp/bc58305a02f7392f340d26a3becd4784de7360dd5264df9e85d73116b93496d8/) |
| ❌ | 2024/08/15 | 3-7 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/08/10 | 3-0 | [小红色太阳](https://ws.tsl.rocks/corp/8821d9efed57f79a1c13d2755a543d4c7f598ad290ca699218f1e23c9718cd3d/) |
| ❌ | 2024/08/04 | 1-4 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ❌ | 2024/07/24 | 3-13 | [星际联盟（中国）](https://ws.tsl.rocks/corp/1deb8ab45257a86051f9c285bbbe06652a56d93118d8e442a0a30ddd179f4256/) |
| ❌ | 2024/07/18 | 1-2 | [<•\|•\>](https://ws.tsl.rocks/corp/a3864fad7e4ba08611eda264a7934afe237a2f313a23b12dcce9db0a96a09daf/) |
| ❌ | 2024/06/02 | 1-3 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ❌ | 2024/06/02 | 1-2 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/05/21 | 2-0 | [63SALVADORES36](https://ws.tsl.rocks/corp/ac4e1665a51bdd039d04798e56c3bd85b526c57cf7015fd400b6c8d8ccd959a3/) |
| ❌ | 2024/05/16 | 3-5 | [墨痕空域](https://ws.tsl.rocks/corp/54eb675d1e22011c21e5b0f2b026934ea19913b030c65570d1e1473693d4364c/) |
| ❌ | 2024/05/10 | 2-3 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ❌ | 2024/05/01 | 2-6 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/04/24 | 4-0 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ↔️ | 2024/04/18 | 1-1 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ✅ | 2024/04/10 | 3-1 | [星光万丈](https://ws.tsl.rocks/corp/92ad2a305a74e168b57771140461b4d226e1e8cac17b4f77027d5a67ead5fa1d/) |
| ❌ | 2024/04/04 | 0-10 | [Forces of Light](https://ws.tsl.rocks/corp/0363a536567ae69573a7b0aa4b2c4119c5c14999f5bb2c7a68219b22b78f7903/) |
| ❌ | 2024/03/24 | 3-9 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ❌ | 2024/03/17 | 3-6 | [Eternal empire ](https://ws.tsl.rocks/corp/c710661fec52581acc50c1f8a96dfb2dc3e582cf877080c41714526c98cd7193/) |
| ❌ | 2024/03/11 | 0-19 | [Призрачный Путь](https://ws.tsl.rocks/corp/c4cb268c3665e9b1d2250f72fb83c73e293536df6581cc087f195a049ca15528/) |
| ❌ | 2024/03/01 | 1-10 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2024/02/24 | 1-0 | [Los Unidos ](https://ws.tsl.rocks/corp/963d98b9a64c86c9edc86daabe201f5d7e1f42bbeb0f45671b44a87e0b288e91/) |
| ❌ | 2024/02/17 | 0-9 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ❌ | 2024/02/12 | 3-4 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ↔️ | 2024/02/06 | 3-3 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ❌ | 2024/01/31 | 0-30 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/01/26 | 0-2 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/01/21 | 0-22 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ↔️ | 2024/01/16 | 2-2 | [Warriors union](https://ws.tsl.rocks/corp/414b486648e1871ce70a5ac9f1a65f02a15d6a38eebc99c23ab68016ba988ea8/) |
| ❌ | 2024/01/09 | 0-3 | [NEW HOLLAND](https://ws.tsl.rocks/corp/b080750b30e8c3b7a4c8bd483921bb8082a83d48c662683a07beba245f70c2a2/) |
| ❌ | 2024/01/03 | 0-12 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ❌ | 2023/12/27 | 0-4 | [The Nerd Herd](https://ws.tsl.rocks/corp/1e8c6f561b78ffd1dafab5c6427d0d87f3ad6ca8631f538a38ec388c4b30aa41/) |
| ↔️ | 2023/12/20 | 0-0 | [The Galxey █](https://ws.tsl.rocks/corp/d52cda2701dd013db91403bab0ff5972e0d9f3a13f842daf8d633025835a6b19/) |
| ❌ | 2023/12/10 | 1-28 | [Nova Time](https://ws.tsl.rocks/corp/0f1c182652387799cfc3a59082f52a2b01201b13336d84760eab107fb1934ce0/) |
| ❌ | 2023/12/03 | 0-3 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ❌ | 2023/11/19 | 0-16 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |

Corporation ID: e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>