---
title: ​King's Guard
description: W:56 L:117 D:6 Bonus ❌ 12%
image: ./favicon.png
Summary: ❌ 18 - 27 **RGW**
date: 2026-02-17T16:45:27.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Corp. designed primarily for WS players of any level advanced to just
 starting. 
```
<br>

### [Discord](https://discord.gg/XQ4BnnSKvC)
### Whitestar Bonus ❌ 12%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1184 🔻  (-13)|
| ELO Competitive | 1323 🔻  (-11)|
| Total Matches | 179 |
| Wins | 56 |
| Losses | 117 |
| Draws | 6 |
| Streak Record | 9 |
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
        let timestamps = [1770914727,1770477887,1770041048,1769605650,1769133911,1768685337,1768239156,1767799282,1767366026,1766933702,1766499251,1766062085,1765619053,1765163442,1764719346,1764285715,1763848877,1763410226,1762977885,1762539810,1762099355,1761662794,1761229167,1760770905,1760319329,1759874925,1759429923,1758994563,1758547242,1758078413,1757646351,1757204399,1756758821,1756316088,1755868093,1755411934,1754959693,1754527575,1754088568,1753656475,1753221972,1752776011,1752340671,1751901953,1751469257,1751027253,1750565705,1750132374,1749677702,1749243782,1748810187,1748371473,1747936633,1747488303,1747027043,1746580511,1746144491,1745706172,1745201913,1744659511,1744152866,1743790413,1743584855,1743070027,1742614726,1741778066,1741257941,1740699021,1740181568,1739368968,1738755658,1738255592,1737731523,1736994297,1736437788,1735916935,1735090630,1734576236,1734023361,1733500522,1733007446,1731896804,1731435241,1730327292,1729826048,1729265014,1728791063,1727907790,1726882793,1726237996,1725774641,1725280032,1724406455,1723879348,1723440003,1722772869,1722176359,1721722265,1720865767,1720346736,1719836741,1719317170,1718788269,1718208425,1717744330,1717742226,1717251423,1717250822,1716728521,1716728521,1716223458,1716222255,1715772175,1715772175,1715326601,1715322996,1714884344,1714884344,1714418220,1714404697,1713944090,1713934777,1713461585,1713459481,1713006652,1713003347,1712557452,1712554448,1712115445,1712114243,1711663214,1711662914,1711150904,1711149101,1710684583,1710171681,1710160562,1709692128,1709680112,1709220374,1709218270,1708713756,1708713456,1708183680,1708178570,1707718203,1707716100,1707275377,1707270570,1706757790,1706757790,1706316031,1706316031,1705874883,1705872178,1705389845,1705384437,1704942387,1704940284,1704506338,1704049863,1703612904,1703606291,1703076463,1703073457,1702615844,1702145187,1702140077,1701663713,1701649291,1701216213,1701210965,1700765078,1700765078,1700246336,1700188932,1699732023,1699274889,1698835855];

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
| [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) | 0 | 2 | 0 | 2 |
| [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) | 1 | 1 | 0 | 2 |
| [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) | 2 | 1 | 0 | 3 |
| [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) | 0 | 2 | 0 | 2 |
| [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) | 1 | 2 | 0 | 3 |
| [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) | 0 | 2 | 0 | 2 |
| [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) | 1 | 1 | 0 | 2 |
| [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) | 1 | 1 | 0 | 2 |
| [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) | 2 | 0 | 0 | 2 |
| [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) | 1 | 1 | 0 | 2 |
| [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) | 2 | 1 | 0 | 3 |
| [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) | 2 | 0 | 0 | 2 |
| [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) | 2 | 0 | 0 | 2 |
| [Spica​](https://ws.tsl.rocks/corp/df96d6d34c4906312183050c8aa7a502678ab2902b7c23112aa9fda827bb4191/) | 0 | 2 | 0 | 2 |
| [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) | 0 | 2 | 0 | 2 |
| [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) | 0 | 2 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 2 | 1 | 0 | 3 |
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 1 | 1 | 0 | 2 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 0 | 2 | 0 | 2 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 1 | 1 | 0 | 2 |
| [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) | 0 | 2 | 0 | 2 |
| [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) | 0 | 2 | 0 | 2 |
| [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) | 0 | 3 | 0 | 3 |
| [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) | 0 | 3 | 0 | 3 |
| [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) | 0 | 2 | 0 | 2 |
| [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) | 0 | 3 | 0 | 3 |
| [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) | 0 | 2 | 0 | 2 |
| [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) | 1 | 1 | 0 | 2 |
| [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) | 0 | 1 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/17 | 18-27 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ✅ | 2026/02/12 | 21-0 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2026/02/07 | 3-22 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2026/02/02 | 5-28 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ❌ | 2026/01/28 | 4-13 | [S\.U\.N](https://ws.tsl.rocks/corp/916e7c076587bd3c3d88cd287f6003d619035871ba0f4291f341da901f0ef3f2/) |
| ❌ | 2026/01/22 | 14-17 | [Академия Д](https://ws.tsl.rocks/corp/b1abd18d521db3f91ca83e4b49f5ecc132514e77c54c875dc0d08b977292c470/) |
| ❌ | 2026/01/17 | 3-23 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ❌ | 2026/01/12 | 3-39 | [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) |
| ❌ | 2026/01/07 | 5-15 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2026/01/02 | 4-12 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ✅ | 2025/12/28 | 34-6 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ❌ | 2025/12/23 | 5-10 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ✅ | 2025/12/18 | 31-3 | [Deutsch Staat D](https://ws.tsl.rocks/corp/eb4e110fd6ccc4cb62b06f1d434d81a0262f7bc671d501a005c5890274de6560/) |
| ✅ | 2025/12/13 | 28-3 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2025/12/07 | 27-0 | [云霄宫](https://ws.tsl.rocks/corp/c319ac731957c1d658994ab5727dec3d0ccfdcd31b00ee66efbf07be25bdc3e1/) |
| ✅ | 2025/12/02 | 25-0 | [Corp\. Luminá](https://ws.tsl.rocks/corp/a90638cb4761b5ed889376762f6612c65407072ac9befa4530989c338be72862/) |
| ❌ | 2025/11/27 | 2-18 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ✅ | 2025/11/22 | 16-14 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ↔️ | 2025/11/17 | 14-14 | [First Squad](https://ws.tsl.rocks/corp/39bb6d19385b7eb6e2e71a979f21256463432b6e2e36ae4c55446abb1f6a0db1/) |
| ❌ | 2025/11/12 | 5-21 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2025/11/07 | 15-25 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ❌ | 2025/11/02 | 3-27 | [alienigenas](https://ws.tsl.rocks/corp/1c092f1b0e9645193eac68e27b29b2b9fef39474fd8924495abec6754857a8f9/) |
| ✅ | 2025/10/28 | 25-2 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/10/23 | 31-3 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ✅ | 2025/10/18 | 32-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2025/10/12 | 21-2 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2025/10/07 | 15-5 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ✅ | 2025/10/02 | 29-1 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ❌ | 2025/09/27 | 8-29 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ❌ | 2025/09/22 | 2-33 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2025/09/17 | 5-20 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/09/12 | 30-3 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2025/09/06 | 0-19 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/09/01 | 26-8 | [Sad Panda 2\.0](https://ws.tsl.rocks/corp/74aed8be82b78aae23f7cdb815f2124496aee03eb68115e20ce9073444d3430c/) |
| ❌ | 2025/08/27 | 10-29 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ✅ | 2025/08/22 | 5-4 | [Т Е Н Ь](https://ws.tsl.rocks/corp/5f4b3004ce7e14488b409e8036d0f0b04b41aa63e245cb8e9f238b53780c5741/) |
| ✅ | 2025/08/17 | 10-9 | [Red Star](https://ws.tsl.rocks/corp/779114322d677f05c7451cf2323327bd6ff62ec9513ba922e38578b0813f3bad/) |
| ✅ | 2025/08/12 | 25-12 | [Wompwompway](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2025/08/06 | 29-2 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ✅ | 2025/08/01 | 30-0 | [Eretria](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2025/07/27 | 7-0 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2025/07/22 | 16-3 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2025/07/17 | 11-0 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ✅ | 2025/07/12 | 19-3 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2025/07/07 | 14-43 | [Planet Express](https://ws.tsl.rocks/corp/be13b17a002cf203ab2a5a31d6c8024e7458b8eac569eb576be7f30844979c99/) |
| ❌ | 2025/07/02 | 11-14 | [Spica​](https://ws.tsl.rocks/corp/df96d6d34c4906312183050c8aa7a502678ab2902b7c23112aa9fda827bb4191/) |
| ❌ | 2025/06/27 | 3-9 | [MiddleOfNowhere](https://ws.tsl.rocks/corp/5533fe0fd0191ec67175c5e7330d8716ef0ce35fdbf47e4c07e41393dcf6eb42/) |
| ✅ | 2025/06/22 | 21-4 | [SQPT](https://ws.tsl.rocks/corp/eabbab0640b8da02ae167f315cf981b2a200e5444eb134a06747d8a84fa10805/) |
| ❌ | 2025/06/16 | 2-15 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2025/06/11 | 10-28 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ✅ | 2025/06/06 | 21-4 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ✅ | 2025/06/01 | 19-7 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ❌ | 2025/05/27 | 3-34 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2025/05/22 | 5-15 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/05/17 | 3-13 | [QONQR](https://ws.tsl.rocks/corp/5e23ade08a63b2c440a6a4c1a9ecfb6b1cfca34523c1a528d075bd06eaf5d019/) |
| ❌ | 2025/05/12 | 0-20 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2025/05/07 | 1-62 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ❌ | 2025/05/01 | 3-34 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ✅ | 2025/04/26 | 22-0 | [骊珠洞天](https://ws.tsl.rocks/corp/b4d7d82bf1a40a19c41bf51fdc6f938a1b111dfa8869d3008ae91d248485253c/) |
| ❌ | 2025/04/19 | 0-41 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2025/04/13 | 3-31 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/04/09 | 2-19 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ❌ | 2025/04/07 | 3-26 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ❌ | 2025/04/01 | 3-26 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2025/03/27 | 0-17 | [Greek Warriors](https://ws.tsl.rocks/corp/0ebbf2228c6b86ec5117c216d8909c8e6f32f1a59b8f9b586bcdbbb85f603bc6/) |
| ❌ | 2025/03/17 | 0-14 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2025/03/11 | 3-27 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/03/04 | 3-32 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/02/26 | 0-50 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2025/02/17 | 3-49 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2025/02/10 | 6-26 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2025/02/04 | 16-0 | [ТРУЛЯЛЯ](https://ws.tsl.rocks/corp/92466bf92d54290daae355c6e026bcd6c405a675ee5ce6bc1d146f9ad74d2341/) |
| ✅ | 2025/01/29 | 12-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2025/01/21 | 4-34 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ❌ | 2025/01/14 | 2-30 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ❌ | 2025/01/08 | 5-39 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2024/12/30 | 8-26 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ❌ | 2024/12/24 | 5-21 | [Quantum Cats](https://ws.tsl.rocks/corp/0b6309a414bde261db3ee5592ae72168ca48d02558f5bc597950f11e55f92ae6/) |
| ✅ | 2024/12/17 | 9-0 | [Curcubeu](https://ws.tsl.rocks/corp/a2bdd69ff0d73fcdb3bd9461684b2951dd4df9009b7ea8eae1592efff76e3c59/) |
| ❌ | 2024/12/11 | 1-28 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/12/05 | 7-20 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2024/11/23 | 3-28 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2024/11/17 | 2-14 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2024/11/04 | 0-36 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2024/10/30 | 3-26 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/10/23 | 3-34 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/10/18 | 3-29 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/10/07 | 0-25 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ❌ | 2024/09/26 | 1-20 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2024/09/18 | 0-26 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/09/13 | 0-46 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/09/07 | 3-29 | [ANDROMEDA INC\.](https://ws.tsl.rocks/corp/9d122968f1050c65cf6c741d5f018d932b3fdff8fc0a48144a4376b9fa18677b/) |
| ❌ | 2024/08/28 | 0-21 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2024/08/22 | 4-20 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2024/08/17 | 0-29 | [ZION](https://ws.tsl.rocks/corp/99ac8e5c0f22878b9a4458953d0c712ada17ef36ae195ccf39c7921dc996adfe/) |
| ❌ | 2024/08/09 | 0-22 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ❌ | 2024/08/02 | 4-17 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ✅ | 2024/07/28 | 15-0 | [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) |
| ❌ | 2024/07/18 | 1-23 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/07/12 | 7-12 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2024/07/06 | 3-25 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/06/30 | 6-32 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/06/24 | 1-13 | [Moon Catchers](https://ws.tsl.rocks/corp/0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43/) |
| ❌ | 2024/06/17 | 1-31 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ❌ | 2024/06/12 | 0-26 | [脉冲星际集团](https://ws.tsl.rocks/corp/a4c08cf63563563e9bfa1d35edb256e9bb8bcdca15103d646d2ff8ed9d17f480/) |
| ✅ | 2024/06/12 | 10-4 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/06/06 | 4-18 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/06/06 | 0-9 | [Red Star Corp\.](https://ws.tsl.rocks/corp/7ac87486823e26635a2f3887927b19b3a14a7875d38042200045204c418d9ac1/) |
| ❌ | 2024/05/31 | 3-28 | [Destroyers](https://ws.tsl.rocks/corp/3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23/) |
| ❌ | 2024/05/31 | 3-25 | [INFINITY STAR](https://ws.tsl.rocks/corp/e36eb12fc6bc8e4b826e6bcb46020cad3eb616497c4c14075e8b657715898a9f/) |
| ❌ | 2024/05/25 | 0-14 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ❌ | 2024/05/25 | 7-22 | [Bl@ck/Galaxy](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2024/05/20 | 0-33 | [death squadron](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ❌ | 2024/05/20 | 0-11 | [初始之音](https://ws.tsl.rocks/corp/79f48676f0ad15541a751311b97bae91c977d65480891a675585fc396c20bdb9/) |
| ✅ | 2024/05/15 | 4-3 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/05/15 | 5-19 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/05/10 | 3-23 | [Spica​](https://ws.tsl.rocks/corp/df96d6d34c4906312183050c8aa7a502678ab2902b7c23112aa9fda827bb4191/) |
| ❌ | 2024/05/10 | 4-28 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/05/04 | 0-25 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ✅ | 2024/05/04 | 14-0 | [Тихий Омут](https://ws.tsl.rocks/corp/4e8d4cb194326b25a28e388b58632db164a368d6dc7ed5a8f4cfcab7a54c239c/) |
| ❌ | 2024/04/29 | 3-24 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2024/04/29 | 5-32 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/04/23 | 4-29 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2024/04/23 | 13-20 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ✅ | 2024/04/18 | 14-0 | [the Rubber Duck](https://ws.tsl.rocks/corp/bfd6a197d72d0b643c6693e66b9a10db61f75ae242a0bd7c09bdd553ae951ee6/) |
| ❌ | 2024/04/18 | 2-14 | [Corporation](https://ws.tsl.rocks/corp/51bbfdd5693e8227e63dbd5161e8fb1a5fa3e93d1f67c7d565d82f080bbeb007/) |
| ✅ | 2024/04/13 | 26-9 | [Gardiens détoil](https://ws.tsl.rocks/corp/ffcc6297c99dffbf6c4a07d6920a50ad77eae7a0212a566237385ee1451beb8d/) |
| ❌ | 2024/04/13 | 3-9 | [Sternenflotte](https://ws.tsl.rocks/corp/c0e248ebf5fe5d7a10057e5c23341422b0d0bd0cc74c836d2d9835758cce6ec7/) |
| ❌ | 2024/04/08 | 5-13 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/04/08 | 1-24 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/04/02 | 3-22 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ❌ | 2024/04/02 | 9-28 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/03/27 | 5-27 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/03/27 | 3-29 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/03/22 | 4-31 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ❌ | 2024/03/16 | 3-35 | [Space Oddity](https://ws.tsl.rocks/corp/a6d7cf2a6e8e92b03bf941f153a423ecc9483e3acb878d8658a1ca7f33abad81/) |
| ❌ | 2024/03/16 | 0-8 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2024/03/11 | 5-4 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/03/10 | 22-0 | [RATAS](https://ws.tsl.rocks/corp/d1735017baebdc46be84fde565fc4554965b078e36a974f706eef623a932ea3d/) |
| ✅ | 2024/03/05 | 18-1 | [Stardust](https://ws.tsl.rocks/corp/304ad360ced8ec5a0e12a9955f3dd8f8ac2476f48d98a379beda41221e5a1c1c/) |
| ❌ | 2024/03/05 | 1-18 | [Equinox](https://ws.tsl.rocks/corp/666001c1d87fbfcf6a3d8614e2b5b9f0e4aa96fa4c098c004bea9fb92ed330c2/) |
| ↔️ | 2024/02/28 | 9-9 | [The Goonies](https://ws.tsl.rocks/corp/12ebe9e9a1c71d9a15f622670c299d2b2193e3e7a9ef18b1773c8b5965cb68ab/) |
| ❌ | 2024/02/28 | 5-12 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ↔️ | 2024/02/22 | 4-4 | [Seila](https://ws.tsl.rocks/corp/8749ed87cb9e85c88599f3bb9f9159e00561229eb1690cb36d565a054638cc52/) |
| ✅ | 2024/02/22 | 15-0 | [大舰队がな](https://ws.tsl.rocks/corp/31c613a73fedabefb27a1d68ac5b662b294e86a0afaaddec87084b04d7791dbc/) |
| ❌ | 2024/02/17 | 5-31 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ✅ | 2024/02/17 | 2-1 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/02/12 | 13-8 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/02/12 | 20-0 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ❌ | 2024/02/06 | 8-10 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ✅ | 2024/02/06 | 7-4 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ❌ | 2024/02/01 | 12-23 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ↔️ | 2024/02/01 | 1-1 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2024/01/26 | 3-29 | [Sentencia](https://ws.tsl.rocks/corp/288393568f19d6bd87e5e3e20f7fd1d458526d8beb052622b4f5572d7959cf7b/) |
| ❌ | 2024/01/26 | 2-14 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2024/01/21 | 0-8 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/01/21 | 20-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/01/16 | 19-0 | [湖心亭看雪](https://ws.tsl.rocks/corp/eb4316c2fbedc2f03ed45e128c8c8d96376d1d1125790a9b9697481dacd002fb/) |
| ✅ | 2024/01/16 | 7-0 | [元素联邦](https://ws.tsl.rocks/corp/e9d602d617d5c81270107c15a6d1f1717c5016abad802d3629f7f4301a58e95e/) |
| ✅ | 2024/01/11 | 12-0 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ❌ | 2024/01/05 | 5-32 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ↔️ | 2023/12/31 | 3-3 | [Celtic Imperium](https://ws.tsl.rocks/corp/58d284836596e89b4f481066ae27a521175a632d88194574f08bf27baa1f9c7a/) |
| ✅ | 2023/12/31 | 17-0 | [Скричеры](https://ws.tsl.rocks/corp/4e6e4f14ef6899f0d26f90dea584fecdc2d230059402af1d309ce71d87762b5c/) |
| ✅ | 2023/12/25 | 25-2 | [Starlancer](https://ws.tsl.rocks/corp/ef3681f4433ada2b05c563519c377662b1755fed13e8c6cbae8f4af3249d5bda/) |
| ❌ | 2023/12/25 | 3-13 | [墨痕](https://ws.tsl.rocks/corp/1beef0498f07b07217c6e0727dffd066947edc54ee6d09dc63c031def52cdd60/) |
| ✅ | 2023/12/20 | 16-1 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2023/12/14 | 7-12 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2023/12/14 | 5-21 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2023/12/09 | 1-18 | [Zeta LLC](https://ws.tsl.rocks/corp/5779c7241b1f516fefec667bf95a9d1e0db38d307d559e1491b4f3a7fcd720f8/) |
| ✅ | 2023/12/09 | 8-7 | [꿀벌왕국](https://ws.tsl.rocks/corp/5835926ee3d1861cbc6fc002291ee3a4b537c1a3a0aef8ea187dfe857505bebc/) |
| ❌ | 2023/12/04 | 2-18 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2023/12/03 | 12-0 | [THE ECHAPES BEL](https://ws.tsl.rocks/corp/e7191edf9f4ee14b8f64ec7fde8a927408f3b5c03e9bbf63026d6f3ac9d33259/) |
| ❌ | 2023/11/28 | 8-10 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ❌ | 2023/11/28 | 2-20 | [Созидание 2\.0](https://ws.tsl.rocks/corp/ae8b8d247dbd93bebc2b77d48c1db6783a17ff8b16438f010c804b7ccf05b76a/) |
| ❌ | 2023/11/22 | 3-7 | [云浪度假村↕](https://ws.tsl.rocks/corp/971e3a487a950dbde1067e4f0940bb1a0833adf91cdf11c73cef69b362b45c4a/) |
| ↔️ | 2023/11/22 | 5-5 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ✅ | 2023/11/16 | 10-4 | [Death knight](https://ws.tsl.rocks/corp/a41e9fa95ab5c960a50e9dd45cdfd779f3426298744d157d9eada9fbcca16d72/) |
| ❌ | 2023/11/11 | 4-7 | [Феникс](https://ws.tsl.rocks/corp/9d72ce9d08fb348fee814de50704adf887fe8aa81f0aaebf12fcc522c9030f63/) |
| ✅ | 2023/11/06 | 13-5 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |

---
Corporation ID: 39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771346727"></span>
</div>