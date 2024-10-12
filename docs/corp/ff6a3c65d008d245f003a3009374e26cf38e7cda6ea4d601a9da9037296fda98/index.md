---
layout: page
title: ​YETI Collective
description: W:20 L:39 D:0 Bonus ❌
date: 1728164900
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1058 🔻  (1243)|
| ELO Competitive | 1159 🔻  (1115)|
| Total Matches | 59 |
| Wins | 20 |
| Losses | 39 |
| Draws | 0 |
| Streak Record | 7 |


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
        let timestamps = [1727732900,1727146626,1726530418,1725911679,1725339230,1724700670,1724094841,1723497107,1722901196,1722303179,1721681702,1721096599,1720476569,1719861991,1719253470,1718647935,1718058473,1717451611,1716860454,1716247495,1715628268,1715032469,1714414915,1713808894,1713808894,1713209187,1713204679,1712610644,1712600425,1712011787,1712010885,1711410525,1711401211,1710813789,1710797567,1710181599,1710181599,1709606166,1709589972,1708991711,1708982397,1708388026,1707777710,1707773502,1707181922,1706562158,1705970445,1705375423,1704745553,1704152337,1703567522,1702951248,1702345957,1701738851,1701118234,1700511724,1699918383,1699304343,1698780259];

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
| [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) | 0 | 2 | 0 | 2 |
| [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) | 1 | 2 | 0 | 3 |
| [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) | 2 | 0 | 0 | 2 |
| [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) | 0 | 2 | 0 | 2 |
| [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) | 0 | 2 | 0 | 2 |
| [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) | 0 | 2 | 0 | 2 |
| [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) | 2 | 0 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/10/05 | 10-38 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/09/29 | 10-32 | [Hinterm Mond](https://ws.tsl.rocks/corp/3a4286c6f512d1e0b6d9866b1a1bb0f29abc36fd4a82b7b2cb39df192fce125d/) |
| ❌ | 2024/09/21 | 12-26 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ❌ | 2024/09/14 | 12-29 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2024/09/08 | 5-20 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/08/31 | 3-20 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2024/08/24 | 17-2 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2024/08/17 | 2-22 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ❌ | 2024/08/10 | 5-29 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ✅ | 2024/08/04 | 20-9 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2024/07/27 | 3-22 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ❌ | 2024/07/21 | 2-28 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/07/13 | 23-47 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ✅ | 2024/07/06 | 25-5 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2024/06/29 | 11-51 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/06/22 | 19-4 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/06/15 | 35-1 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ❌ | 2024/06/08 | 14-32 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/06/02 | 0-21 | [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2024/05/25 | 12-27 | [Int\. Trading Co](https://ws.tsl.rocks/corp/6978edb31cfa5778f4e28d2477e5db050fd8bf44105dc25871490d0cffaf4bf7/) |
| ❌ | 2024/05/18 | 9-12 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2024/05/11 | 24-22 | [Soylent Corp\.](https://ws.tsl.rocks/corp/9f978f9cca690b76981d538d63260cd39d51427e5d69412113ccad02cc7cac2d/) |
| ❌ | 2024/05/04 | 0-28 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/04/27 | 8-17 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ❌ | 2024/04/27 | 0-6 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ❌ | 2024/04/20 | 24-27 | [The trade pub](https://ws.tsl.rocks/corp/43689e4266357d8b8d3d66d371109d9aed82ee6df47dc6fa0a7c5da735b9863b/) |
| ❌ | 2024/04/20 | 0-29 | [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2024/04/13 | 31-8 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/04/13 | 7-28 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/04/06 | 0-33 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/04/06 | 15-30 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2024/03/30 | 17-31 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ❌ | 2024/03/30 | 0-13 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2024/03/24 | 6-11 | [羽共和体](https://ws.tsl.rocks/corp/61b6e0502a087307a2ecf50e5d84f6123ad19984dc5790c997f16a676213aa7e/) |
| ❌ | 2024/03/23 | 11-29 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ❌ | 2024/03/16 | 0-21 | [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2024/03/16 | 12-33 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/03/10 | 6-8 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/03/09 | 9-24 | [Lights Off ](https://ws.tsl.rocks/corp/8a8b7e5b7a00ef709249daa4546d03bd85258cde01d35e1829a64ed95c3d6cca/) |
| ❌ | 2024/03/02 | 29-31 | [The Seperatists](https://ws.tsl.rocks/corp/f7afefdba007366512764be38eb9c404704e5d4de919e7df2b17560324bbb56f/) |
| ✅ | 2024/03/02 | 7-3 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ✅ | 2024/02/25 | 17-7 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ❌ | 2024/02/17 | 7-33 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ❌ | 2024/02/17 | 1-27 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/02/11 | 30-4 | [RUSSIAN TEAM](https://ws.tsl.rocks/corp/ddbe305c7b079ebdf054b4483e2d445276c9a95fb7beea61ba9e35cabdef0162/) |
| ✅ | 2024/02/03 | 32-6 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ✅ | 2024/01/28 | 48-2 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ❌ | 2024/01/21 | 21-53 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ✅ | 2024/01/13 | 27-20 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/01/06 | 5-14 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2023/12/31 | 5-12 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2023/12/24 | 12-43 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ✅ | 2023/12/17 | 27-6 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ✅ | 2023/12/10 | 36-3 | [Кулак](https://ws.tsl.rocks/corp/8690c5dbe16d9d069bed96f14a2f11a942c4259147f0623fa224dc50f4009b36/) |
| ✅ | 2023/12/02 | 15-2 | [Dark Skai](https://ws.tsl.rocks/corp/97561ceb92954fb6430110c35337554b8a89fa52a7054f402b7e562a99ef48fd/) |
| ✅ | 2023/11/25 | 28-7 | [Space Donuts](https://ws.tsl.rocks/corp/50895e5bb0a19e8fde1c7f28e39fc0f170cbc2743a9f1ba45a88bce067d99152/) |
| ✅ | 2023/11/18 | 30-6 | [UsualSuspects](https://ws.tsl.rocks/corp/0365f036a244e9e36ecaf6e16ddd9d18693104641bd0ca6a4a626a51e3eed853/) |
| ✅ | 2023/11/11 | 24-20 | [LossFarm No\.648](https://ws.tsl.rocks/corp/24a90af39014df515d72c65fe52b1b3669bad36e2abbc4d6c04a9eb2466ec4f2/) |
| ✅ | 2023/11/05 | 11-4 | [Les Chevaliers](https://ws.tsl.rocks/corp/5066bce563c093b32a01ddf6e9aba77a363d997bb3b5ae47465c13434af06853/) |

Corporation ID: ff6a3c65d008d245f003a3009374e26cf38e7cda6ea4d601a9da9037296fda98

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>