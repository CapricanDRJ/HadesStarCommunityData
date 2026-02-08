---
title: ​一根飞机
description: W:10 L:21 D:3 Bonus ❌ 7%
image: ./favicon.png
Summary: ❌ 0 - 6 **Arik**
date: 2025-12-07T09:02:34.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
欢迎大佬和萌新加入！本集团是非常自由的，每个人都可以当干事，一周内至少会送人2次R6神器，还有更多福利等着你！可以捐旗舰，但是自己发育才是
最重要的。本团规则：1. 不可以乱骂人！2. 不能乱踢刚进团的人(除黑名单外)如有发现极时发出，轻则降为成员3天即以上，重则踢出并拉入黑名
单。创建于2024.10.14    首席:一根飞机   黑名单：
```
<br>

### Whitestar Bonus ❌ 7%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1090 🔻  (-8)|
| ELO Competitive | 1182 🔻  (-10)|
| Total Matches | 34 |
| Wins | 10 |
| Losses | 21 |
| Draws | 3 |
| Streak Record | 3 |
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
        let timestamps = [1764666154,1764209592,1762904583,1761129278,1747524066,1738658895,1738587676,1738115566,1737442168,1737434341,1736941014,1736910715,1736437487,1735996284,1735492963,1735051573,1735051272,1734576488,1734105389,1733633648,1733631764,1733189998,1733144461,1732711125,1732629997,1732205099,1732122168,1731769086,1731683437,1731327962,1731158760,1730821005,1730724843,1730385883];

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
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/12/07 | 0-6 | [Arik](https://ws.tsl.rocks/corp/9b96b5e086b44903b4c36c63247b93641d99a9e7419d9a6e7dc19dd2b9923086/) |
| ↔️ | 2025/12/02 | 0-0 | [Gwws](https://ws.tsl.rocks/corp/ddee24c75eaf842cbe8f3b2830b43f4d1053677289e3af09ac93ec5eb0c0cf5a/) |
| ❌ | 2025/11/16 | 0-13 | [Star Union](https://ws.tsl.rocks/corp/16aeed26660a5028dc9e88424937008a88a424b3220afac0731d6fd85d4746be/) |
| ❌ | 2025/10/27 | 0-14 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ❌ | 2025/05/22 | 3-8 | [BrbroZ](https://ws.tsl.rocks/corp/30b4148a5831c38d4e258cd0a3e21598dcb3cab51ae585e7035c8900b836d2ba/) |
| ✅ | 2025/02/09 | 6-1 | [莫比乌斯\-星环](https://ws.tsl.rocks/corp/f880db6adc517a83cc7c539551b160f5a90ac67a8ac62f8ae1edcbb40fff043c/) |
| ❌ | 2025/02/08 | 2-21 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2025/02/03 | 3-22 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2025/01/26 | 3-5 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ❌ | 2025/01/26 | 0-18 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ❌ | 2025/01/20 | 0-3 | [星系联盟](https://ws.tsl.rocks/corp/701707befdc5df7661af18b4d249ef83b62ca47ad90084d24cfb776112ee4a36/) |
| ❌ | 2025/01/20 | 0-2 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2025/01/14 | 2-20 | [The Syndicate](https://ws.tsl.rocks/corp/a7da1f6bd313248b8b6e68a1826bffb463c0e4977776708b28d97199f878b88c/) |
| ❌ | 2025/01/09 | 6-8 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ↔️ | 2025/01/03 | 0-0 | [SiriusStrawMoo](https://ws.tsl.rocks/corp/c83a5744ea256d2c1fa59660bc0e18e8d01a2a467bc13fec27a8b30f689e220b/) |
| ❌ | 2024/12/29 | 0-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/12/29 | 1-15 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/12/24 | 10-0 | [闲散人员](https://ws.tsl.rocks/corp/4f0fa774b66e4f744a305525f92e7252205ae754df0f3982b577b32caf32cdbc/) |
| ✅ | 2024/12/18 | 5-3 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ❌ | 2024/12/13 | 2-3 | [萌新集团](https://ws.tsl.rocks/corp/cda6bb5c1bf595967bd6f4a2e94f7c7fcc50df3774ccee7939822c252b9cd224/) |
| ❌ | 2024/12/13 | 0-16 | [蓝星集团](https://ws.tsl.rocks/corp/9d718b80beaf9682ccde175169372b72f70b75bb593770762dfc9e990cbd098a/) |
| ✅ | 2024/12/08 | 3-0 | [Devourers](https://ws.tsl.rocks/corp/8b11fb529b6388e78677d5025d5973063a49ee25a297a52cda3859faa20ee5ca/) |
| ❌ | 2024/12/07 | 0-1 | [中团一建](https://ws.tsl.rocks/corp/3c82f48d57e8ce1b8fa5b4bc7b22c7e2dafa9a227fa0ab95f1ccb95bd1994f6b/) |
| ✅ | 2024/12/02 | 5-0 | [星约组织：基地分团](https://ws.tsl.rocks/corp/65d5754facd0f6a7ee7bd84567ea263d8002e24a754d36c982598d5552b1830b/) |
| ❌ | 2024/12/01 | 0-5 | [方星集团](https://ws.tsl.rocks/corp/6e29868db27043e07c83b3dbde6f5982a9bad1b7857a5ee1ef05e8b9a6d245c0/) |
| ❌ | 2024/11/26 | 3-10 | [星落苑](https://ws.tsl.rocks/corp/6f9fa67d0699c2b71d30145d66e2765594c160992a9fe79a3fb0738eaab2e78c/) |
| ❌ | 2024/11/25 | 0-10 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ✅ | 2024/11/21 | 8-3 | [Final Space](https://ws.tsl.rocks/corp/762914fc1846e6b284609274f8f9515959110b5db098a53be8048ffd45d98fdd/) |
| ✅ | 2024/11/20 | 2-1 | [Alpha to Omega](https://ws.tsl.rocks/corp/2b3694014264240c8c0d1bb6a20e9d120dff2b6680c98b4e06e34bfd489f9da6/) |
| ✅ | 2024/11/16 | 7-0 | [StargateCommand](https://ws.tsl.rocks/corp/b378193d0b158ce0513a666f0c19da1599421d036e3fd12c0f287d02cac78ccb/) |
| ❌ | 2024/11/14 | 0-6 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ✅ | 2024/11/10 | 10-0 | [BAB](https://ws.tsl.rocks/corp/d17895c8b0b7003682ed6441ed0a2040355c3b53e6e4609302acccab6a0deaea/) |
| ↔️ | 2024/11/09 | 0-0 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2024/11/05 | 9-6 | [斯比纳兰](https://ws.tsl.rocks/corp/ce756ff97542e6fa8d518319e6575aae1d01eb23dd906fee3e3cbb98b442b68f/) |

---
Corporation ID: 459077a8d857a7bd7ee9caafa2c5ed27ac2416d2280965dd22d4293302cb9de0

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1765098154"></span>
</div>