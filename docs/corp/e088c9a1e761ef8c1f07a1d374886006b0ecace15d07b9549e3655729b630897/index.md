---
layout: page
title: ​Germania
description: W:19 L:37 D:4 Bonus ❌ 8%
image: ./favicon.png
date: 1737283030
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Aktive Allianz
Offen für alle, die Spaß am gemeinsamen Spiel haben und das ganze nic
ht so ernst nehmen.
-Beleidigung, Rassismus ect, 14 Tage Inaktivität ohne Abmeldung führt
 zum Bann 
```
### Whitestar Bonus ❌ 8%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1046 🔻  (1351)|
| ELO Competitive | 1117 🔻  (1334)|
| Total Matches | 60 |
| Wins | 19 |
| Losses | 37 |
| Draws | 4 |
| Streak Record | 4 |
| Flagship | 5 |

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
        let timestamps = [1736851030,1736309466,1735777208,1735123374,1734646848,1734203351,1733735814,1733261652,1732828356,1732368565,1731747746,1731019030,1730113334,1729409263,1728827437,1728201405,1727682403,1727186587,1726317932,1722594663,1722128873,1721548863,1721044298,1720524346,1719948536,1719481847,1718992310,1718469429,1717481957,1716476421,1715938021,1715407118,1714937828,1714422430,1713967225,1713521974,1713044519,1712589259,1712152400,1711719706,1711287326,1710848637,1710402736,1709928294,1709492017,1709045799,1708600766,1708119377,1707667121,1707214372,1706737659,1706302509,1705856247,1705392850,1704924060,1704365995,1703254977,1702768222,1699393893,1698753200];

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
    
---
### Recurring Opponents

| Opponent | Wins | Losses | Draws | Total Matches |
| --- | --- | --- | --- | --- |
| [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) | 0 | 1 | 1 | 2 |
| [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) | 1 | 2 | 0 | 3 |
| [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) | 0 | 2 | 0 | 2 |
| [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) | 1 | 1 | 0 | 2 |
| [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) | 1 | 1 | 0 | 2 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 0 | 2 | 0 | 2 |
| [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/01/19 | 0-23 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/01/13 | 9-0 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ❌ | 2025/01/07 | 7-21 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2024/12/30 | 3-16 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ❌ | 2024/12/24 | 3-21 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/12/19 | 2-27 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2024/12/14 | 4-23 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/12/08 | 14-0 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/12/03 | 8-42 | [Эдем](https://ws.tsl.rocks/corp/a61dc2c639a91f5b725d43d306ba2eebe1770c92499d7d92086b7a097f939c0d/) |
| ❌ | 2024/11/28 | 4-22 | [" Возрождение "](https://ws.tsl.rocks/corp/4422f581b40217ac99ee97df59d8d887249c4cdc51d2d5fe901f438ab720d26d/) |
| ↔️ | 2024/11/21 | 4-4 | [绛紫星云](https://ws.tsl.rocks/corp/5a3a9602bef85f5409788b6ae18f372599736e4be470dee01f373a17865f07d9/) |
| ❌ | 2024/11/12 | 3-7 | [\(\_\(\_Vossk\_\)\_\)](https://ws.tsl.rocks/corp/6db23201f00670abe532f02a8fc28e109f95d673ef31ca1df7362c0a6c45dd2f/) |
| ❌ | 2024/11/02 | 3-32 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/10/25 | 8-12 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ❌ | 2024/10/18 | 7-14 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2024/10/11 | 5-19 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ↔️ | 2024/10/05 | 3-3 | [Interstellar](https://ws.tsl.rocks/corp/8ee0ed32118ac719ca2a2b84e6a8c79637fc8642f194482a3ac240d2b133911f/) |
| ❌ | 2024/09/29 | 0-18 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/09/19 | 9-8 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2024/08/07 | 3-12 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ❌ | 2024/08/02 | 3-4 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/07/26 | 21-0 | [КОРПОРАЦИЯ ЗЛА](https://ws.tsl.rocks/corp/a62e0c19a9f2c6c172eaf34ce61be29e3e248e7cf2c0cbfe93bcb2f03a7501da/) |
| ❌ | 2024/07/20 | 3-29 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ❌ | 2024/07/14 | 4-5 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ❌ | 2024/07/07 | 5-14 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2024/07/02 | 7-28 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/06/26 | 3-9 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/06/20 | 19-0 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/06/09 | 6-31 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2024/05/28 | 0-20 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2024/05/22 | 3-16 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ❌ | 2024/05/16 | 3-34 | [Corporation](https://ws.tsl.rocks/corp/51bbfdd5693e8227e63dbd5161e8fb1a5fa3e93d1f67c7d565d82f080bbeb007/) |
| ❌ | 2024/05/10 | 9-15 | [Галактика Зла](https://ws.tsl.rocks/corp/1495d852070d8182229d3cb26e828265d4525a9ef97a9b377415b803b01d6101/) |
| ❌ | 2024/05/04 | 16-26 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/04/29 | 29-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ❌ | 2024/04/24 | 3-23 | [Galaxian](https://ws.tsl.rocks/corp/5dcf6b30fe7412dfe10c7f88aacc5e5ec1d63a2ea3df0084c393b9e20c34ee97/) |
| ❌ | 2024/04/18 | 8-10 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/04/13 | 25-3 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/04/08 | 4-27 | [Stella☆Glow](https://ws.tsl.rocks/corp/86a894b97d55e4f65a3cec65d26d528341d8e70b186bcffa2e89f5f681e48396/) |
| ✅ | 2024/04/03 | 31-3 | [Veteran's Haven](https://ws.tsl.rocks/corp/254fdc629bae81f3b0ca69160e0b6e34bd81993e755e4fb5ddedd1533038a683/) |
| ✅ | 2024/03/29 | 29-7 | [Starlancer](https://ws.tsl.rocks/corp/ef3681f4433ada2b05c563519c377662b1755fed13e8c6cbae8f4af3249d5bda/) |
| ✅ | 2024/03/24 | 29-0 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ✅ | 2024/03/19 | 33-0 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2024/03/13 | 11-28 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ✅ | 2024/03/08 | 27-3 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ↔️ | 2024/03/03 | 17-17 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/02/27 | 3-23 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ❌ | 2024/02/21 | 5-13 | [Nebula](https://ws.tsl.rocks/corp/38bd8c92bc5f2d4ff240d58da260855d87eb4c2c4a241735c5d72215d4a191fb/) |
| ❌ | 2024/02/16 | 7-18 | [SpaceCowboys](https://ws.tsl.rocks/corp/e6bb3b9dcc40ad7f7c82fd0f7164a99fa6264c05a186ed9f33011a7f315ca507/) |
| ✅ | 2024/02/11 | 20-1 | [神圣罗马帝国](https://ws.tsl.rocks/corp/2a71af44aaef82175cd8dfd86c9e3f218a438a7c7e748bae20d8a0d964a984ab/) |
| ↔️ | 2024/02/05 | 8-8 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ✅ | 2024/01/31 | 15-14 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/01/26 | 23-0 | [美丽新世界](https://ws.tsl.rocks/corp/237f60ced9a11f8d992fe2158784705710b2ff412544679b218d86ef44d230ef/) |
| ❌ | 2024/01/21 | 3-23 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2024/01/15 | 21-2 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ❌ | 2024/01/09 | 5-31 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ❌ | 2023/12/27 | 17-31 | [Wompwompway ](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2023/12/21 | 12-0 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ✅ | 2023/11/12 | 13-10 | [Anti union](https://ws.tsl.rocks/corp/e0cbb56db982e302ce8b5a1f462def486b0986d978ba6702ca4db2fa6e4cdffb/) |
| ✅ | 2023/11/05 | 5-0 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |

---
Corporation ID: e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>