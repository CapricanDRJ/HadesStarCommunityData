---
layout: page
title: ​Серебряная орда
description: W:56 L:44 D:2 Bonus ❌
image: ./favicon.png
date: 1733050275
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
У <color="yellow">монголов золотая🌕<color="lightblue">, а у <color="
white">нас серебряная🏐 🔘Регулярно БЗ. Ждём активных игроков😀 <colo
r="green">Русский, English
```
### [Discord](https://discord.gg/p6rrFevJbJ)
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1229 🔻  (320)|
| ELO Competitive | 1407 🔻  (128)|
| Total Matches | 102 |
| Wins | 56 |
| Losses | 44 |
| Draws | 2 |
| Streak Record | 6 |
| Flagship | 6 |

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
        let timestamps = [1732618275,1732028414,1731581570,1731320750,1730721236,1730113334,1729680611,1729170647,1729154818,1728540991,1728049037,1727931523,1727445609,1726850942,1726260840,1725782155,1725347942,1724741230,1724741230,1724147122,1724140812,1723449018,1723444511,1722843792,1722843792,1722410457,1722408654,1721938335,1721908879,1721474037,1721464721,1721030173,1720512325,1719906159,1719906159,1719397705,1719395602,1718958049,1718949937,1718441777,1718437569,1717921206,1717920521,1717406517,1717399906,1716884189,1716883288,1716401015,1716396808,1715850892,1715842181,1715342824,1715340721,1714728901,1714724394,1714128868,1714127967,1713672790,1713204078,1713167716,1712486532,1712041526,1711531305,1710960710,1710515105,1709934906,1709489913,1709486908,1709047602,1709045799,1708485983,1707948395,1707943098,1707470747,1707466240,1706997599,1706468695,1706042568,1706031447,1705598399,1705576459,1705153342,1705142522,1704689355,1704655399,1704205523,1703883974,1703766466,1703347243,1703297893,1702880018,1702837945,1702427407,1702397949,1701977781,1701960648,1701508029,1701004922,1700567917,1700119805,1699595526,1698796191];

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
| [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) | 1 | 2 | 0 | 3 |
| [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) | 1 | 0 | 1 | 2 |
| [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) | 1 | 1 | 0 | 2 |
| [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) | 1 | 1 | 0 | 2 |
| [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) | 0 | 2 | 0 | 2 |
| [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) | 3 | 0 | 0 | 3 |
| [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) | 2 | 0 | 0 | 2 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 1 | 1 | 0 | 2 |
| [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) | 1 | 1 | 0 | 2 |
| [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) | 2 | 0 | 0 | 2 |
| [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) | 1 | 1 | 0 | 2 |
| [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) | 0 | 2 | 0 | 2 |
| [death squadron ](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) | 2 | 0 | 0 | 2 |
| [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/12/01 | 8-14 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2024/11/24 | 3-27 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2024/11/19 | 0-43 | [Últimafronteira](https://ws.tsl.rocks/corp/27e96f432a078f197bb5e4c34480ccabc05a9ee48e7bb04d95288fda15e94d3c/) |
| ✅ | 2024/11/16 | 28-5 | [Jesus Followers](https://ws.tsl.rocks/corp/a2f43b4cf6c5241a87f465e98dd7b6414941bc4870171798297f6c834f16df41/) |
| ✅ | 2024/11/09 | 17-0 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2024/11/02 | 32-3 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ❌ | 2024/10/28 | 4-23 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ✅ | 2024/10/22 | 7-0 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ❌ | 2024/10/22 | 2-19 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/10/15 | 29-0 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ✅ | 2024/10/09 | 8-0 | [Decode](https://ws.tsl.rocks/corp/848408d1ee1a3c08302a936241ea5cbe170cb66dc343d3339ed3ae4baeb82e57/) |
| ✅ | 2024/10/08 | 7-6 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2024/10/02 | 0-32 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ✅ | 2024/09/25 | 36-0 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2024/09/18 | 3-16 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2024/09/13 | 4-39 | [Повстанцы Хаоса](https://ws.tsl.rocks/corp/1358877fcc123cef74de06c83a943f27a7fad0ab6d20989f767ce88d4d195ace/) |
| ❌ | 2024/09/08 | 8-19 | [Retarts](https://ws.tsl.rocks/corp/1556331f722d00268e3c524b12efedac51051cf48e46b2513675774b9315a155/) |
| ❌ | 2024/09/01 | 3-8 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2024/09/01 | 3-13 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ❌ | 2024/08/25 | 1-12 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/08/25 | 16-12 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2024/08/17 | 3-38 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2024/08/17 | 7-12 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/08/10 | 15-29 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2024/08/10 | 0-21 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/08/05 | 32-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/08/05 | 13-0 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2024/07/30 | 2-5 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ✅ | 2024/07/30 | 39-0 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ✅ | 2024/07/25 | 32-0 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2024/07/25 | 11-5 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ✅ | 2024/07/20 | 37-0 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ✅ | 2024/07/14 | 38-3 | [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) |
| ❌ | 2024/07/07 | 1-6 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/07/07 | 29-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/07/01 | 22-1 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ❌ | 2024/07/01 | 0-16 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ✅ | 2024/06/26 | 38-0 | [湖心亭看雪](https://ws.tsl.rocks/corp/eb4316c2fbedc2f03ed45e128c8c8d96376d1d1125790a9b9697481dacd002fb/) |
| ❌ | 2024/06/26 | 0-12 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2024/06/20 | 16-15 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2024/06/20 | 1-11 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ✅ | 2024/06/14 | 27-3 | [Galaxian](https://ws.tsl.rocks/corp/5dcf6b30fe7412dfe10c7f88aacc5e5ec1d63a2ea3df0084c393b9e20c34ee97/) |
| ❌ | 2024/06/14 | 1-30 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ✅ | 2024/06/08 | 7-3 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ✅ | 2024/06/08 | 5-0 | [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) |
| ❌ | 2024/06/02 | 0-32 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ✅ | 2024/06/02 | 18-7 | [Star Destroyers](https://ws.tsl.rocks/corp/32ba20918cd8720602fefb3bc676a6ba5195314479040f70eadc728fbbc2698d/) |
| ✅ | 2024/05/27 | 24-12 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/05/27 | 0-6 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ✅ | 2024/05/21 | 28-0 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2024/05/21 | 0-14 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2024/05/15 | 20-0 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ❌ | 2024/05/15 | 1-13 | [宇宙银河帝国](https://ws.tsl.rocks/corp/afb9817e45c3c79048d2be30be3b635704485d260ae7b474b579a019d56d3c2d/) |
| ✅ | 2024/05/08 | 23-9 | [\-=Содружество=\-](https://ws.tsl.rocks/corp/a9493d38afc250d1f8288ca320eb0e5fb1263b1854737d813cdbf575c0e0e2d3/) |
| ❌ | 2024/05/08 | 0-23 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ✅ | 2024/05/01 | 20-6 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ❌ | 2024/05/01 | 0-2 | [Alpha ](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ✅ | 2024/04/26 | 22-0 | [云浪山庄↕](https://ws.tsl.rocks/corp/597bcb53e7f2e8f5bf2135602da30d76170ca6a5d950a0c60b5c617b6c32dead/) |
| ❌ | 2024/04/20 | 0-1 | [Utd\. Human Fed\.](https://ws.tsl.rocks/corp/265fd73116c2ec237c7a966adb401d54219dee49882ee9024025c697165397d6/) |
| ✅ | 2024/04/20 | 9-4 | [UK Armada](https://ws.tsl.rocks/corp/2e3b65146fc90421a8e65a738a443ed67c756396af15a641475928091cb261a4/) |
| ✅ | 2024/04/12 | 30-4 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ✅ | 2024/04/07 | 31-2 | [death squadron ](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ❌ | 2024/04/01 | 8-9 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ✅ | 2024/03/25 | 8-4 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/03/20 | 5-31 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ❌ | 2024/03/13 | 3-25 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2024/03/08 | 6-11 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2024/03/08 | 0-20 | [КРЫЛЯ ФЕНИКСА](https://ws.tsl.rocks/corp/a7852d9224a29d8a8b12b07f0985cf455ee57c9a7b5fed73f08ab733e8de733b/) |
| ❌ | 2024/03/03 | 0-3 | [Next Hyperion](https://ws.tsl.rocks/corp/a18302feedfddd2a6e918dd649a70ac1c2bd249622dbfc3a3c04c06ca8adaa22/) |
| ↔️ | 2024/03/03 | 17-17 | [Germania](https://ws.tsl.rocks/corp/e088c9a1e761ef8c1f07a1d374886006b0ecace15d07b9549e3655729b630897/) |
| ✅ | 2024/02/26 | 11-0 | [Bund von Lykon](https://ws.tsl.rocks/corp/b1a267bb80dd695c75c1996122ff32ca8296c07874376131618d18b4fee0aa5c/) |
| ❌ | 2024/02/19 | 0-15 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2024/02/19 | 19-0 | [death squadron ](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ✅ | 2024/02/14 | 16-0 | [The 501st](https://ws.tsl.rocks/corp/68cfedff28062f13b5219478e5360e5eb0ffae19528e9545c597f73ceb2443b8/) |
| ↔️ | 2024/02/14 | 2-2 | [Черное солнце](https://ws.tsl.rocks/corp/963c510edfd1a89603e4c253f389cc603a707689fab0617c954c3a5d1856e1b4/) |
| ❌ | 2024/02/08 | 4-12 | [Orphans Of Kos](https://ws.tsl.rocks/corp/f4fc42714515d58b6fabb87fd87c01baadb59e219e725bfdc6cf70b21a292054/) |
| ❌ | 2024/02/02 | 3-19 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ✅ | 2024/01/28 | 6-3 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/01/28 | 21-0 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ❌ | 2024/01/23 | 3-20 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/01/23 | 9-17 | [Призрачный Путь](https://ws.tsl.rocks/corp/c4cb268c3665e9b1d2250f72fb83c73e293536df6581cc087f195a049ca15528/) |
| ✅ | 2024/01/18 | 6-5 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2024/01/18 | 17-3 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2024/01/13 | 7-14 | [Cerulean Nebula](https://ws.tsl.rocks/corp/b76233469d1b4590ef63daba47aeb4239d428cb0804768d58f7e891418b91f81/) |
| ✅ | 2024/01/12 | 15-11 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ✅ | 2024/01/07 | 11-9 | [Spiritic Beacon](https://ws.tsl.rocks/corp/5167772c02384f567373d65a76da8399c74f305fcc5f228903614e8069445d2a/) |
| ✅ | 2024/01/03 | 9-0 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ❌ | 2024/01/02 | 0-21 | [共产星际](https://ws.tsl.rocks/corp/5cb42bdae108ad850e61479922e7d8cb4d5b7be7b8ac2f64fc828d3b88046737/) |
| ✅ | 2023/12/28 | 6-5 | [星海扬帆](https://ws.tsl.rocks/corp/9cf2d9a2c07a0b8030f9a8275f9ebd3973759c2b60bed95ccb9a3f152aa0b1e4/) |
| ✅ | 2023/12/28 | 21-0 | [Zeon](https://ws.tsl.rocks/corp/c77313bb3ebd322f7b4da9e2247e3b95fb1c75ff54c2e7846f9c2d6a2cd02846/) |
| ✅ | 2023/12/23 | 10-6 | [ЧВК "Котики"](https://ws.tsl.rocks/corp/b770b833fe257bc6accd1bbe82a887971291dd0038f8aa627a47f3ce063265c0/) |
| ✅ | 2023/12/22 | 12-3 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2023/12/18 | 7-1 | [Dark Sun](https://ws.tsl.rocks/corp/41ffd72a8eba70ea3f7f69ce602194b0ee84c7e65be6d2e08b87181de24cc9cf/) |
| ✅ | 2023/12/17 | 14-0 | [Survivors](https://ws.tsl.rocks/corp/10eb3bf190162d1f8373394a774ca9fe65faf64b1e98400cceadb7f37028d7b0/) |
| ❌ | 2023/12/12 | 4-8 | [JPR\. Pretorians](https://ws.tsl.rocks/corp/7144c7cdb9f369d9e56199379429b01172d00a5142f6ceda71031de9bf6e0d25/) |
| ✅ | 2023/12/12 | 19-0 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2023/12/07 | 17-0 | [Krasse Bros](https://ws.tsl.rocks/corp/ec8df719929b564225592da878034621da81f0c95a84a1afdee1b2c8389374fb/) |
| ✅ | 2023/12/01 | 9-3 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ✅ | 2023/11/26 | 14-0 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |
| ❌ | 2023/11/21 | 5-33 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2023/11/15 | 10-0 | [uDS](https://ws.tsl.rocks/corp/c120f3bc94740ef16cf2e075afe14212a63d35c19798ef6a191623fb76d4dd0f/) |
| ✅ | 2023/11/05 | 5-1 | [Бестрашный лиги](https://ws.tsl.rocks/corp/98a0925e094c54f400b76ad64a527b25adb4fe5aa1afc4b10368f072d3741d53/) |

---
Corporation ID: 8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>