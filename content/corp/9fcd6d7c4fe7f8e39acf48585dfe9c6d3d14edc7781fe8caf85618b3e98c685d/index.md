---
title: ​Sich\.ua
description: W:31 L:34 D:5 Bonus ❌ 8%
image: ./favicon.png
Summary: ❌ 0 - 23 **毛绒团子**
date: 2025-02-25T12:52:20.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Раді всім, новачкам допомагаємо артефактами, ходимо в білі та червоні
 зірки
```
<br>

### Whitestar Bonus ❌ 8%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1108 🔻  (-7)|
| ELO Competitive | 1286 🔻  (-14)|
| Total Matches | 70 |
| Wins | 31 |
| Losses | 34 |
| Draws | 5 |
| Streak Record | 5 |
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
        let timestamps = [1740055940,1738850918,1734656161,1734097028,1733638755,1732651637,1732148613,1730435718,1730418641,1729911979,1729905080,1729312631,1729312477,1728712896,1728712896,1728085712,1728076697,1727515929,1727509618,1726937376,1726865067,1726350475,1726346492,1725779035,1725774046,1725249338,1725229259,1724728311,1724709985,1724206916,1724202419,1723672602,1723670080,1723188919,1723142198,1722194098,1721633312,1721073761,1720416855,1720408648,1719863794,1719862292,1719273432,1719270672,1718760673,1718748912,1718158428,1718140213,1717668291,1717630432,1717116746,1717107668,1716595994,1716578563,1716007646,1715990757,1715490666,1715468420,1714901469,1714366536,1713738293,1713229318,1712702888,1712119650,1711508474,1710987771,1710448108,1709971861,1706205741,1705727319];

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
| [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) | 2 | 0 | 0 | 2 |
| [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) | 0 | 3 | 0 | 3 |
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 2 | 0 | 0 | 2 |
| [星环建设集团](https://ws.tsl.rocks/corp/85422294545c4561b468821bbbbe277a0d7f09c6ab45fedb2a43cbaa36d32f63/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/02/25 | 0-23 | [毛绒团子](https://ws.tsl.rocks/corp/2942aee1275894a4c5b65352d707edd8c5d998365d58a3526868a70001605324/) |
| ❌ | 2025/02/11 | 4-8 | [GN星际联合](https://ws.tsl.rocks/corp/5c5e3fb05b422a65fb5ccf8f812dfe45d596f644d8a79d01a5889c9d476f20a7/) |
| ❌ | 2024/12/25 | 0-16 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2024/12/18 | 0-26 | [Winter Star llc](https://ws.tsl.rocks/corp/89b20821cb6e619dced74a6e153a1d3ceafa70b1035fb7d61a6920d375e49f50/) |
| ✅ | 2024/12/13 | 4-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2024/12/01 | 6-0 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ❌ | 2024/11/26 | 0-4 | [FoxTale](https://ws.tsl.rocks/corp/5c64a00667d690f695d9dd90c073b5113f126e33cbdaa03a3c3e62ceca843b2c/) |
| ↔️ | 2024/11/06 | 0-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ❌ | 2024/11/05 | 2-31 | [Últimafronteira](https://ws.tsl.rocks/corp/27e96f432a078f197bb5e4c34480ccabc05a9ee48e7bb04d95288fda15e94d3c/) |
| ❌ | 2024/10/31 | 0-10 | [Zeta Division](https://ws.tsl.rocks/corp/29335e52f4b0c4ae92db98c395d2f4969201d0ddc31bb7f112bd6d3eeb97182c/) |
| ❌ | 2024/10/31 | 3-25 | [P\!RAT£ SHIP](https://ws.tsl.rocks/corp/edee949826201f74f57f45c101789757954710e3d075602dfdda7765a69a7e7c/) |
| ❌ | 2024/10/24 | 0-12 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/10/24 | 17-3 | [拆迁大队](https://ws.tsl.rocks/corp/d8de6fa1ed53aeb856209de01d8a990a562d7438e0abe2cfe50776bb11345f17/) |
| ❌ | 2024/10/17 | 7-8 | [RUFORS](https://ws.tsl.rocks/corp/f1e7f82e284c8233985039ea19544dbfa937f38f2315e9ad6a1d037423071b6d/) |
| ❌ | 2024/10/17 | 0-11 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/10/09 | 0-12 | [Т Е Н Ь](https://ws.tsl.rocks/corp/5f4b3004ce7e14488b409e8036d0f0b04b41aa63e245cb8e9f238b53780c5741/) |
| ❌ | 2024/10/09 | 0-75 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/10/03 | 0-9 | [星河绮梦](https://ws.tsl.rocks/corp/ec0d7f12f69610e8f68f4ea0af9698755a0a1435e0845c27c47fcbec0b1b672a/) |
| ❌ | 2024/10/03 | 0-5 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/09/26 | 0-3 | [oen](https://ws.tsl.rocks/corp/33d062d54a7aaaa60ae11e07fba73e1b28f5c9f323ff4a98f5810933e7d2b41f/) |
| ✅ | 2024/09/25 | 8-0 | [Мертвый Космос](https://ws.tsl.rocks/corp/8bacd1eaca5711fdab180a944582a23351ca0b72caa5c2705b44a44b50f76b97/) |
| ✅ | 2024/09/19 | 17-3 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2024/09/19 | 0-6 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2024/09/13 | 0-1 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ✅ | 2024/09/13 | 11-3 | [ДИᏰEPℂДℍTᏰℓ](https://ws.tsl.rocks/corp/a1dad8a2a2c5ab935169d168bc19f8a1db7f12b099358e079cb7221a340345ed/) |
| ↔️ | 2024/09/07 | 0-0 | [BlackDawn](https://ws.tsl.rocks/corp/b12d5631f98a29cefd5c3fbacb19307ed0e64d58b58eb768856e5a22434676d9/) |
| ✅ | 2024/09/06 | 16-0 | [Тёмный Феникс](https://ws.tsl.rocks/corp/7558698da6213ab97789830842ad4baa89467edc584a6c8594ab04b521ae3488/) |
| ✅ | 2024/09/01 | 3-1 | [₩\.BRASIL\.₩](https://ws.tsl.rocks/corp/ff7f01b2f1db7b9c75e49da4c7367325905c020eba282a97f69f33d8c19419aa/) |
| ✅ | 2024/08/31 | 10-1 | [Omega corp](https://ws.tsl.rocks/corp/17140be6e5915edf2d09ebcf246a7c2650cf39def04823c9a04bdf81ff8fc38e/) |
| ↔️ | 2024/08/26 | 0-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/08/26 | 14-2 | [Kingdom Of Meow](https://ws.tsl.rocks/corp/bb7b30afd9a7e5c035d0ba19b9aa388cea55098d375174faf86523618929f856/) |
| ↔️ | 2024/08/19 | 5-5 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/08/19 | 0-6 | [蓝太阳](https://ws.tsl.rocks/corp/3d8bcfd3fe682016f1d82e28b9ad7ed8de9df1c1a81ceb6d63e35844660d2212/) |
| ❌ | 2024/08/14 | 0-2 | [UFSG](https://ws.tsl.rocks/corp/9c9b98c2bfcf5411f6bc5502ed3163b92c8733b540071e4b70dc0bf8b0701a97/) |
| ✅ | 2024/08/13 | 11-0 | [BoomTech](https://ws.tsl.rocks/corp/97c4db179d3ea995d3a56227f87c501f4baa4abbece2b25e09b636f0aa264bd7/) |
| ❌ | 2024/08/02 | 1-10 | [КРЫЛЯ ФЕНИКСА](https://ws.tsl.rocks/corp/a7852d9224a29d8a8b12b07f0985cf455ee57c9a7b5fed73f08ab733e8de733b/) |
| ✅ | 2024/07/27 | 4-3 | [华夏三体舰队](https://ws.tsl.rocks/corp/a457b1d7612cdff92b655d33cf4ffd72b38aa796525cf0432423cfd0d01c6cf9/) |
| ✅ | 2024/07/20 | 18-0 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ↔️ | 2024/07/13 | 0-0 | [PDC](https://ws.tsl.rocks/corp/3cfc5c94fb18b34d3a1018bfbf6d4211d3cfb18ebb02bf7784cebc1e3627de4a/) |
| ✅ | 2024/07/13 | 14-0 | [ZN•H2B](https://ws.tsl.rocks/corp/2db26f485dd1e772b0bf13ef6db7eb053b37270ef1e24804ebc12472adb0708d/) |
| ✅ | 2024/07/06 | 8-1 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2024/07/06 | 0-14 | [Czech Legion](https://ws.tsl.rocks/corp/b4453b41cf7b1c019648ed14db493a47c8a64347e689013b2c969bf97e251ec8/) |
| ✅ | 2024/06/29 | 6-3 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ❌ | 2024/06/29 | 0-3 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ✅ | 2024/06/24 | 15-0 | [Core Systems](https://ws.tsl.rocks/corp/66dfd39587403b544abf2908638162e60a09ff0dfdfebee6265d41ba2a6ab00a/) |
| ❌ | 2024/06/23 | 0-3 | [Armored Union](https://ws.tsl.rocks/corp/4dacc02ca314ab864578421db538b0eb10b0c8c81dc0edd91c5090717d087c7f/) |
| ✅ | 2024/06/17 | 19-0 | [数字星际集团](https://ws.tsl.rocks/corp/ccbf6be33652cb1b91bc9047b966ffdd6b313cc569d1e0a9fb832e6e8dc1d361/) |
| ❌ | 2024/06/16 | 0-1 | [Jalisco México](https://ws.tsl.rocks/corp/495236ab2171ccbcdad0da5529f080405b1ddd081eda98c7255a8cffe5b114e4/) |
| ✅ | 2024/06/11 | 10-2 | [星环建设集团](https://ws.tsl.rocks/corp/85422294545c4561b468821bbbbe277a0d7f09c6ab45fedb2a43cbaa36d32f63/) |
| ❌ | 2024/06/10 | 0-13 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ❌ | 2024/06/05 | 0-6 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/06/04 | 5-1 | [Red Suns](https://ws.tsl.rocks/corp/4723a7ddfdf84d63bb4a6e897d77183874e4abd0d5f04c8c6470cb3141dd8629/) |
| ❌ | 2024/05/30 | 0-6 | [Lacuna Academy](https://ws.tsl.rocks/corp/ed67ca44432a8fad3aec6fab3e7f305d394d2b41844391fd29e1ce2b316b336b/) |
| ❌ | 2024/05/29 | 2-6 | [避难所](https://ws.tsl.rocks/corp/e2cec33caaaef7f020ed5fb31cb29a2804d8b5ab3a781ab69b08fadac88f7102/) |
| ✅ | 2024/05/23 | 14-1 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ❌ | 2024/05/23 | 0-7 | [WSC\(no DISCORD\)](https://ws.tsl.rocks/corp/d15ca51c4f5ca0bf259101e7243117d8270dd8f264ecd4a7f6f694d2b98c7919/) |
| ✅ | 2024/05/17 | 19-0 | [Galactic Empire](https://ws.tsl.rocks/corp/b941fd6d79cbc203f95fa35048244cda4277fcd04025a739dc28c47562e6cbb8/) |
| ❌ | 2024/05/16 | 2-3 | [Weyland Yutani](https://ws.tsl.rocks/corp/9799c33a0ecdcf321ad446a18f4e7f520610d26ec5f13e0c6b7a411dec2e2e46/) |
| ✅ | 2024/05/10 | 5-0 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/05/04 | 16-0 | [星环建设集团](https://ws.tsl.rocks/corp/85422294545c4561b468821bbbbe277a0d7f09c6ab45fedb2a43cbaa36d32f63/) |
| ✅ | 2024/04/26 | 11-2 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/04/21 | 3-8 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/04/14 | 9-21 | [Star Field](https://ws.tsl.rocks/corp/7160932eb85654ce07649c2689bb5b3e5abcbe84175203e4668b2247c11ffb97/) |
| ✅ | 2024/04/08 | 6-1 | [империя тьмы](https://ws.tsl.rocks/corp/4eb22a1b793e5d03579cea15c873b1bef56fea02420a4e55edb18a200f7fc46a/) |
| ❌ | 2024/04/01 | 3-33 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/03/26 | 5-3 | [Red Dwarf](https://ws.tsl.rocks/corp/49202a011f1e2333a5cb54f3abd75ccc2514e568f1108edc968f13003720629e/) |
| ✅ | 2024/03/19 | 4-1 | [Thunderbears](https://ws.tsl.rocks/corp/904c85a40298fe616763ce7bc9ac0534ab1d9dd69151c63308a3906f2eb07d54/) |
| ✅ | 2024/03/14 | 7-0 | [Чистое Небо](https://ws.tsl.rocks/corp/82c64f0d4483d056037e3a43e597d4b1730ac0cd84bae8307fadef28fd6c202f/) |
| ✅ | 2024/01/30 | 7-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/01/25 | 6-0 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |

---
Corporation ID: 9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1740487940"></span>
</div>