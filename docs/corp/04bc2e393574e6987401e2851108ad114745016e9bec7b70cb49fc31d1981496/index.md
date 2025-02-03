---
layout: page
title: ​Октябристы
description: W:63 L:77 D:2 Bonus ✅ 40%
image: ./favicon.png
date: 1738560786
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
Умеренная правая политическая партия крупных землевладельцев России )
 мы в телеге https://t.me/+VA_QNsSwibFjY2Vi
```
### [Discord](https://discord.gg/XMAWRfxQcD)
### Whitestar Bonus ✅ 40%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1171 🔻  (951)|
| ELO Competitive | 1476 🔻  (81)|
| Total Matches | 142 |
| Wins | 63 |
| Losses | 77 |
| Draws | 2 |
| Streak Record | 5 |
| Flagship | 8 |

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
        let timestamps = [1738128786,1737695765,1737650694,1737134431,1737126315,1736407134,1736407134,1735736337,1735715002,1735275227,1735247772,1734792272,1734792272,1734299510,1734299510,1733762259,1733756548,1733066040,1733066040,1732596345,1732595443,1732163334,1732160930,1731702974,1731261255,1731260353,1730668911,1730664452,1730219114,1729794802,1729782778,1729346156,1728898669,1728895965,1728043325,1728032506,1727547788,1727534562,1726991571,1726531320,1726514494,1726065822,1726063718,1725618675,1725596742,1725112357,1725105143,1724654385,1724647775,1724161548,1724151329,1723499460,1723490195,1723057458,1723010877,1722349456,1722347051,1721908879,1721907978,1721265194,1721249270,1720635244,1720616908,1720007736,1720003829,1719261136,1719260083,1718622986,1718614872,1718112857,1718108048,1717627127,1717607288,1717052480,1717052179,1716419344,1716406725,1715864112,1715840078,1715291154,1715284243,1714640866,1714637561,1714161323,1714161323,1713719662,1713702834,1713259663,1713257560,1712823065,1712570071,1712388277,1711936061,1711883771,1711389189,1711279812,1710787048,1710597739,1710267531,1710112843,1709829738,1709662382,1709299400,1709155477,1708722472,1708722171,1708285856,1708281949,1707832998,1707830593,1707343947,1707325857,1706893920,1706893018,1706459076,1706457874,1706021528,1706011911,1705570750,1705567745,1705131704,1705089034,1704647583,1704216344,1703678112,1703615390,1703171733,1703064741,1702589702,1702586996,1702140377,1702140077,1701707591,1701707290,1701274513,1701262189,1700842317,1700829691,1700397211,1699960452,1699528201,1699080781];

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
| [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) | 1 | 0 | 1 | 2 |
| [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) | 2 | 0 | 0 | 2 |
| [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) | 0 | 2 | 0 | 2 |
| [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) | 0 | 2 | 0 | 2 |
| [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) | 1 | 1 | 0 | 2 |
| [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) | 1 | 1 | 0 | 2 |
| [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) | 0 | 4 | 0 | 4 |
| [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) | 1 | 1 | 0 | 2 |
| [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) | 3 | 0 | 0 | 3 |
| [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) | 3 | 0 | 0 | 3 |
| [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) | 0 | 2 | 0 | 2 |
| [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) | 1 | 3 | 0 | 4 |
| [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) | 0 | 2 | 0 | 2 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 0 | 2 | 0 | 2 |
| [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) | 0 | 2 | 0 | 2 |
| [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) | 1 | 1 | 0 | 2 |
| [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) | 2 | 1 | 0 | 3 |
| [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) | 0 | 2 | 0 | 2 |
| [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) | 0 | 2 | 0 | 2 |
| [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) | 0 | 2 | 0 | 2 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 2 | 0 | 2 |
| [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) | 0 | 2 | 0 | 2 |
| [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) | 3 | 0 | 0 | 3 |
| [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) | 1 | 1 | 0 | 2 |
| [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) | 1 | 1 | 0 | 2 |
| [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) | 0 | 2 | 0 | 2 |
| [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) | 0 | 3 | 0 | 3 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/02/03 | 7-31 | [" Возрождение "](https://ws.tsl.rocks/corp/4422f581b40217ac99ee97df59d8d887249c4cdc51d2d5fe901f438ab720d26d/) |
| ✅ | 2025/01/29 | 17-12 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2025/01/28 | 3-29 | [AKA](https://ws.tsl.rocks/corp/5fde3f409facbda701cdf21de0895eb7c7e17e2d472ae52cc0aa178ce2db64d6/) |
| ✅ | 2025/01/22 | 11-10 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2025/01/22 | 0-31 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2025/01/14 | 0-12 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2025/01/14 | 2-31 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2025/01/06 | 2-12 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ❌ | 2025/01/06 | 3-42 | [CTG](https://ws.tsl.rocks/corp/9647a8507dfa5637a217d2d6a0ad47aefb6a4563f910ad46376c228450cff43c/) |
| ✅ | 2025/01/01 | 5-0 | [From the Fire](https://ws.tsl.rocks/corp/df5d313a4fe6681f19a6d47d364e4611a1e9c840abf8f6978cfa2418cb0e37cf/) |
| ❌ | 2024/12/31 | 21-23 | [Greek Warriors](https://ws.tsl.rocks/corp/0ebbf2228c6b86ec5117c216d8909c8e6f32f1a59b8f9b586bcdbbb85f603bc6/) |
| ❌ | 2024/12/26 | 2-31 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2024/12/26 | 31-18 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/12/20 | 0-42 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ❌ | 2024/12/20 | 9-30 | [New Star](https://ws.tsl.rocks/corp/76701c008d6499f16ec942e61adc3d6d80e931ff9407f8281b492789f8fab908/) |
| ❌ | 2024/12/14 | 6-28 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ✅ | 2024/12/14 | 28-0 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2024/12/06 | 4-50 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ✅ | 2024/12/06 | 28-13 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ✅ | 2024/12/01 | 8-0 | [无人之境](https://ws.tsl.rocks/corp/8da17f25a8fa2ee58845f6f1d7dbdcfee0c9c26d3c6e99eba26d8b50d8c079de/) |
| ✅ | 2024/12/01 | 38-1 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ✅ | 2024/11/26 | 31-8 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2024/11/26 | 20-3 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ❌ | 2024/11/20 | 19-23 | [Team Rainbow](https://ws.tsl.rocks/corp/4dc7206b37101dba1bc2ec67ed48b3793706cddd737c19033c6498d485c6ab84/) |
| ❌ | 2024/11/15 | 2-31 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2024/11/15 | 18-20 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/11/08 | 3-9 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ✅ | 2024/11/08 | 18-14 | [STAR TERROR CZ](https://ws.tsl.rocks/corp/f9c3b5fe54cb33985284a6fe5351ab51fb691af909a2172570ee549050a93af2/) |
| ✅ | 2024/11/03 | 34-10 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/10/29 | 3-29 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ✅ | 2024/10/29 | 23-4 | [Bounty Hunters](https://ws.tsl.rocks/corp/d44b4a2b4a57fd50845c39abe5c6b0a38bab694941fed09d3ca164c1d78625ea/) |
| ✅ | 2024/10/24 | 19-7 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/10/19 | 3-23 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/10/19 | 4-12 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ❌ | 2024/10/09 | 5-21 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2024/10/09 | 13-17 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/10/03 | 51-1 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2024/10/03 | 10-20 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ✅ | 2024/09/27 | 16-9 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2024/09/22 | 3-27 | [Helion Prime](https://ws.tsl.rocks/corp/1a09ce5efe86add0a6f0344bc2a12e27c898c0d21641a3f29a450c6d4c4db3f2/) |
| ↔️ | 2024/09/21 | 16-16 | [BRASIL STAR](https://ws.tsl.rocks/corp/94fc4639f17e4503a11d4ac3878f3203bca3f21baebf285433ff39ad37f0fff2/) |
| ❌ | 2024/09/16 | 3-26 | [Wompwompway ](https://ws.tsl.rocks/corp/f7c3d7f512c4de3883e63b1a5771ab3ef3938054f98711e933bc7dd064fb8363/) |
| ✅ | 2024/09/16 | 26-1 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2024/09/11 | 34-0 | [Red Dawn](https://ws.tsl.rocks/corp/fee852a2530bc5e3cbe5b2a5fdb224d249eeceeb3688cfd71479344181831328/) |
| ❌ | 2024/09/11 | 3-28 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ❌ | 2024/09/05 | 0-14 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/09/05 | 24-6 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ✅ | 2024/08/31 | 24-2 | [АНДРОМЕДА ](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2024/08/31 | 6-30 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ✅ | 2024/08/25 | 24-21 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ❌ | 2024/08/25 | 3-35 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/0c33734edc95a1bac88a9df7e0853a3bd835ea682673f097db1c75d6bb14c8da/) |
| ❌ | 2024/08/17 | 0-30 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2024/08/17 | 19-21 | [Widow Makers](https://ws.tsl.rocks/corp/ac1ddcbbd45ccdfa74185d7f40b3a67b0b5b477f7b0bd6f3d7a5a7821ee55bdd/) |
| ❌ | 2024/08/12 | 0-23 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2024/08/12 | 34-5 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2024/08/04 | 3-15 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2024/08/04 | 0-32 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ❌ | 2024/07/30 | 0-39 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/07/30 | 0-44 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/07/23 | 11-10 | [Corporation](https://ws.tsl.rocks/corp/51bbfdd5693e8227e63dbd5161e8fb1a5fa3e93d1f67c7d565d82f080bbeb007/) |
| ❌ | 2024/07/22 | 0-27 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ❌ | 2024/07/15 | 3-13 | [Sussy Coloner](https://ws.tsl.rocks/corp/6e5807915020e273feb8068226c3017f946571428ad2b058a7ee8666d63faf21/) |
| ✅ | 2024/07/15 | 28-15 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ✅ | 2024/07/08 | 9-0 | [lost souls](https://ws.tsl.rocks/corp/64cf1f6ce9001bcd1d03fd1aaecafc1b7d88cd36316892a52a1b19d5e85bd793/) |
| ❌ | 2024/07/08 | 1-40 | [italian warrior](https://ws.tsl.rocks/corp/250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79/) |
| ❌ | 2024/06/29 | 3-30 | [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ✅ | 2024/06/29 | 24-12 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2024/06/22 | 2-26 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ✅ | 2024/06/22 | 26-6 | [Soylent Corp\.](https://ws.tsl.rocks/corp/9f978f9cca690b76981d538d63260cd39d51427e5d69412113ccad02cc7cac2d/) |
| ❌ | 2024/06/16 | 0-25 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ✅ | 2024/06/16 | 27-16 | [Galactic Empire](https://ws.tsl.rocks/corp/72dcb83d090873cff1d27d191205e6a484c8c5b057f4b55f138e631f33037248/) |
| ✅ | 2024/06/10 | 31-5 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/06/10 | 0-13 | [ༀᅗBAR ESTELARᅗༀ](https://ws.tsl.rocks/corp/874716e0cba92e65a541f6751246b0fa1d503d7ee2b00dcde1ab424af30190be/) |
| ✅ | 2024/06/04 | 30-0 | [Oficina Tuga](https://ws.tsl.rocks/corp/2fff67029125a29f7fa3252e0f8387f3ae93c6c59bd05d358723e02f3199db72/) |
| ❌ | 2024/06/04 | 3-14 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2024/05/27 | 15-3 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ❌ | 2024/05/27 | 1-28 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ✅ | 2024/05/21 | 4-2 | [萌新港\(大佬港\)](https://ws.tsl.rocks/corp/e6d9b9da7a037e3572cb594dfeba7b282b66509228c9f4f1b2138f873caa3cf3/) |
| ❌ | 2024/05/21 | 9-17 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/05/14 | 15-0 | [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) |
| ✅ | 2024/05/14 | 18-3 | [Alpha ](https://ws.tsl.rocks/corp/accb87a59c1f019d1be37fa2b19ae2aeb35c4a995d1d621a8e987065cd1328fe/) |
| ✅ | 2024/05/07 | 22-0 | [湖心亭看雪](https://ws.tsl.rocks/corp/eb4316c2fbedc2f03ed45e128c8c8d96376d1d1125790a9b9697481dacd002fb/) |
| ❌ | 2024/05/07 | 0-14 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2024/05/01 | 0-29 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ✅ | 2024/05/01 | 28-1 | [Pyke Syndicate](https://ws.tsl.rocks/corp/1761635d6aaf9c2caf7abc37130e2d9aa48e7b4cc753ae4b701fde4b48abd3e1/) |
| ❌ | 2024/04/26 | 0-14 | [Prometheus ESP](https://ws.tsl.rocks/corp/59ccf92b03fb4dbcd047d2425f6dd687367bd70088956249e0255554e81fe949/) |
| ✅ | 2024/04/26 | 19-3 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2024/04/21 | 4-21 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ✅ | 2024/04/21 | 8-6 | [Angel Dragon](https://ws.tsl.rocks/corp/2f2e44c159dc8f4e15e2dabda533d9db8697d2c6c06735d926d180b3aa056dcf/) |
| ✅ | 2024/04/16 | 10-9 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ❌ | 2024/04/13 | 0-17 | [Vega Conflict](https://ws.tsl.rocks/corp/396ceafad44127f2e9dfb94934dc27154c6f97f6bc60832af6cb17791fd7369b/) |
| ↔️ | 2024/04/11 | 12-12 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2024/04/06 | 0-27 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ❌ | 2024/04/05 | 3-10 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/03/30 | 10-3 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ❌ | 2024/03/29 | 3-31 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ❌ | 2024/03/23 | 6-20 | [Bl@ck/Galaxy ](https://ws.tsl.rocks/corp/76f8fe0dcd8b8c1cb8e0083f14c0b36c23bb9757a3af0f191b567774c02222a3/) |
| ❌ | 2024/03/21 | 0-19 | [AFronteiraFinal](https://ws.tsl.rocks/corp/f0c64a4babe1fb017902406f1f331c63129409bccfba868cadc10cf1d064b9d4/) |
| ✅ | 2024/03/17 | 19-8 | [Starlancer](https://ws.tsl.rocks/corp/ef3681f4433ada2b05c563519c377662b1755fed13e8c6cbae8f4af3249d5bda/) |
| ❌ | 2024/03/15 | 0-29 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ❌ | 2024/03/12 | 0-18 | [Spaceballs](https://ws.tsl.rocks/corp/1e54a7ba8156a65b15f7f1358b682a10f856acb0f96d9e3b582c4ea175905839/) |
| ❌ | 2024/03/10 | 0-28 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2024/03/06 | 23-4 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |
| ✅ | 2024/03/04 | 15-8 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ✅ | 2024/02/28 | 22-10 | [Лютые](https://ws.tsl.rocks/corp/c9ffc70c2dcbfe9eaa3387645d404d9227b173de066bf09e0493d83aa4c9f053/) |
| ❌ | 2024/02/28 | 3-24 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ❌ | 2024/02/23 | 2-15 | [UFO](https://ws.tsl.rocks/corp/920537bbdadc8e0f3ba0a5bf70b777bf8ca14cde8723f0364eb0a6c3a93eb685/) |
| ❌ | 2024/02/23 | 2-30 | [Gemini Ind\.](https://ws.tsl.rocks/corp/c85dd45ed75136d750bdcc2d83740494dea9e0ba077eac1bbb2f1a442a92674c/) |
| ✅ | 2024/02/18 | 6-5 | [РусКорп](https://ws.tsl.rocks/corp/7994b4a10a625b21deff136a17c63d096a4ba2f5cdd9eb9dedd7d0bd21b53d16/) |
| ✅ | 2024/02/18 | 3-2 | [You Win](https://ws.tsl.rocks/corp/972debff8c750fc5774a5af41280e0796ef1e0d306bde0558cd116522d9b7c43/) |
| ❌ | 2024/02/12 | 5-22 | [1st/Ave/Junkie2](https://ws.tsl.rocks/corp/b129b678cd83374fa72b5da92172ff1c856b8f72c32bcdb4711d66d06528fca1/) |
| ✅ | 2024/02/12 | 9-0 | [Лунный Феникс](https://ws.tsl.rocks/corp/457b7f76314e0ee24752aaf2396afac9027cfbdcca2a9863add962250ccbf389/) |
| ❌ | 2024/02/07 | 7-21 | [CDG](https://ws.tsl.rocks/corp/0372d45acdd50729ec92e18f0e973f382362ae554f8d15778250b493e887cce2/) |
| ✅ | 2024/02/07 | 4-1 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2024/02/02 | 3-16 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ✅ | 2024/02/02 | 16-7 | [Quadra FR](https://ws.tsl.rocks/corp/e87ef7b09a57216e03405e0f951199ff8b37dd4397d2f7da36bd269fe42ba974/) |
| ✅ | 2024/01/28 | 26-2 | [六大天神\.轻歌之影](https://ws.tsl.rocks/corp/558304186ed78398ff16afe6f1f2909cee69fe56f1e3ee787d023cffa6999b3b/) |
| ✅ | 2024/01/28 | 5-0 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ❌ | 2024/01/23 | 0-15 | [Inexorable](https://ws.tsl.rocks/corp/8343908ac19af8666d7765db00e5eb603d9e87bbbfe273c81d9b9b2329ca0827/) |
| ✅ | 2024/01/23 | 18-15 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ✅ | 2024/01/18 | 22-4 | [Toxic](https://ws.tsl.rocks/corp/6fd41dbfe23fef41eedbc7b3cd8651f24735f62594a817d28e88676f68ce3198/) |
| ❌ | 2024/01/17 | 0-20 | [Альянс](https://ws.tsl.rocks/corp/a7d0478626828d7428aeeb5115f68e790f7e4c8a7f917812ec2241178e1c3f50/) |
| ❌ | 2024/01/12 | 6-9 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ❌ | 2024/01/07 | 0-15 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2024/01/01 | 28-0 | [太阳系联邦](https://ws.tsl.rocks/corp/1511bcf209c9d65c3db8fce158834ee0365899e8a765df9554b7606eb92b1df1/) |
| ❌ | 2023/12/31 | 1-2 | [Черный Легион](https://ws.tsl.rocks/corp/af3427036ba655aaea1af0c704240800cc2def44f43c06d558d9cc1ec8bcbc7b/) |
| ✅ | 2023/12/26 | 10-3 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ❌ | 2023/12/25 | 1-24 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ✅ | 2023/12/19 | 24-0 | [Trade Systems](https://ws.tsl.rocks/corp/b5b84604f7c180c2151cfb05b4a635d9a7868f44630b2e5072e1babdf541677d/) |
| ❌ | 2023/12/19 | 0-20 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ❌ | 2023/12/14 | 0-16 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2023/12/14 | 21-5 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ✅ | 2023/12/09 | 11-4 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ❌ | 2023/12/09 | 3-17 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2023/12/04 | 3-7 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2023/12/04 | 8-1 | [Star Blazers](https://ws.tsl.rocks/corp/f179acb7b919d9d3185f1fcd66bb17d5e257feab5039bcbf6efb5c8cd6f5c057/) |
| ❌ | 2023/11/29 | 2-20 | [Unión latina](https://ws.tsl.rocks/corp/9919a50d277644f496c19d5becdf40abb251d000345f049632329f0b35b7fbf1/) |
| ❌ | 2023/11/29 | 4-29 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2023/11/24 | 7-6 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2023/11/19 | 22-8 | [华夏远征太空舰队](https://ws.tsl.rocks/corp/01e2a815aa9dd9c1db7cc861838ba180b5bf294273f9eaf4cdea5a256c9999a2/) |
| ✅ | 2023/11/14 | 19-1 | [边际的文明](https://ws.tsl.rocks/corp/4e21eaedc914a082c3bbb48fc00a00db0993fa6da46c25db658dfdc2857e7eb9/) |
| ✅ | 2023/11/09 | 22-6 | [Империя](https://ws.tsl.rocks/corp/28ecac3cd0bd2a08844a9e37cc5c2193b0d086bd860ad1e2cc3e89c6d908cea4/) |

---
Corporation ID: 04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>