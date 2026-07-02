---
title: ​KARI
description: W:2 L:69 D:0 Bonus ❌ 13%
image: ./favicon.png
Summary: ❌ 0 - 30 **BRhue**
date: 2025-05-19T14:33:05.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Korea Aerospace Research Institute
```
<br>

### [Discord](https://discord.gg/https://discord.gg/rxhQwwna)
### Whitestar Bonus ❌ 13%

| Statistic | Value |
| --- | --- |
| ELO Regular | 801 🔻  (-3)|
| ELO Competitive | 976 🔻  (-5)|
| Total Matches | 71 |
| Wins | 2 |
| Losses | 69 |
| Draws | 0 |
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
        let timestamps = [1747233185,1746623477,1745168859,1730436965,1725451305,1721730979,1721722265,1721126050,1721119139,1720621115,1720602340,1719194005,1719189466,1718590836,1718589334,1717934046,1717933273,1717319955,1717319955,1716820479,1716344833,1716338526,1715292957,1715291154,1714450372,1714449471,1713763224,1713751509,1712644291,1712644011,1712207690,1712207690,1711516886,1711497058,1710891909,1710891909,1710403336,1710377202,1709882017,1709881717,1709368511,1709366064,1708867007,1708867007,1708401245,1708400644,1707968087,1707961315,1707365879,1707357767,1706791444,1706774616,1706312726,1706303710,1705847229,1705847229,1705412081,1705404568,1704943289,1704930971,1704444129,1704424600,1703962710,1703940167,1703485780,1703463246,1702962666,1700293519,1700287809,1699732324,1699693538];

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
| [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) | 0 | 2 | 0 | 2 |
| [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) | 0 | 2 | 0 | 2 |
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 0 | 3 | 0 | 3 |
| [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2025/05/19 | 0-30 | [BRhue](https://ws.tsl.rocks/corp/cf382c812409b617906f693517aebeee55e827f37c20a515ff23810e49d6310d/) |
| ❌ | 2025/05/12 | 0-36 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ❌ | 2025/04/25 | 4-17 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ❌ | 2024/11/06 | 0-24 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/09/09 | 4-35 | [West Worlders](https://ws.tsl.rocks/corp/aad051ec6b980cc52fb4777aef113d9e28a72aab40fda65aa9cdbf477b8e390a/) |
| ❌ | 2024/07/28 | 0-52 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2024/07/28 | 0-15 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/07/21 | 3-42 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ❌ | 2024/07/21 | 0-33 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ❌ | 2024/07/15 | 0-39 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ❌ | 2024/07/15 | 3-14 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ❌ | 2024/06/29 | 3-21 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ❌ | 2024/06/29 | 0-30 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2024/06/22 | 0-24 | [TeddisaurusWrex](https://ws.tsl.rocks/corp/88f37fd0ab1f14c7e06af4173800167f8d1f5db4022c1cd42637da431140ef7a/) |
| ❌ | 2024/06/22 | 3-45 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/06/14 | 0-53 | [Polish Pirates](https://ws.tsl.rocks/corp/e73d410a73bca6a1161056891e484b32cac940c0d94d20c92ed085683524652b/) |
| ❌ | 2024/06/14 | 0-2 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2024/06/07 | 0-20 | [Lacuna X](https://ws.tsl.rocks/corp/fb10f33f3db17b99b0d227f17e7fde76ef067dc4a4bb4ae05e46c76d2e5e8ea1/) |
| ❌ | 2024/06/07 | 3-41 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2024/06/01 | 4-55 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ❌ | 2024/05/27 | 0-18 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/05/27 | 4-57 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ❌ | 2024/05/14 | 4-73 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/05/14 | 0-15 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2024/05/05 | 4-20 | [第一序列](https://ws.tsl.rocks/corp/8646e4426755a50819777452fe7fd80b1b1ac9ae9a5b2e807a44c7c4b01efd23/) |
| ❌ | 2024/05/05 | 0-24 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2024/04/27 | 11-55 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ❌ | 2024/04/27 | 0-26 | [Elysium](https://ws.tsl.rocks/corp/d29949a00f7b1588ef5b9c7b7ca61c20fad0439b4d887721f32fbe9f018e11f1/) |
| ❌ | 2024/04/14 | 3-21 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/04/14 | 0-26 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2024/04/09 | 3-50 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/04/09 | 0-30 | [THE BENDERA](https://ws.tsl.rocks/corp/4c9acd27de08822b8670167ae6bc94f7ecd2786d5beed82c68ad61600fc318d3/) |
| ❌ | 2024/04/01 | 0-51 | [KLM](https://ws.tsl.rocks/corp/963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1/) |
| ❌ | 2024/03/31 | 0-27 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2024/03/24 | 0-48 | [United Stars](https://ws.tsl.rocks/corp/312c90cac9a249b2179da8891f78c1a90bd16d0bf3391509d6a3d8e9a35a3d36/) |
| ❌ | 2024/03/24 | 3-58 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ❌ | 2024/03/19 | 0-23 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/03/19 | 0-18 | [八月政府](https://ws.tsl.rocks/corp/72097ba1b36daa9482410e9d2b442965a1f4bbb7bb7974995521f1a948244424/) |
| ❌ | 2024/03/13 | 3-33 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2024/03/13 | 0-27 | [StellaMysterium](https://ws.tsl.rocks/corp/cfaaa81ed93cc9361ade470c3414c73ecf77068badd68d624c7b3f486d142b10/) |
| ❌ | 2024/03/07 | 3-59 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/03/07 | 0-24 | [Embers Rising](https://ws.tsl.rocks/corp/30173fb6f0cf7a6d78f30c60350646ad6bc0d667a14854bdc9abbc19cd7d0327/) |
| ❌ | 2024/03/01 | 3-4 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2024/03/01 | 3-46 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2024/02/25 | 0-35 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ❌ | 2024/02/25 | 0-27 | [Midland Ind\.](https://ws.tsl.rocks/corp/da3a00a59e73cb89ddcf9ae42f31ecf0c9d9b5fe9a2dc5ddec6fc42922f86a23/) |
| ❌ | 2024/02/20 | 0-17 | [Вселенские 40%](https://ws.tsl.rocks/corp/963d73346ebb929607f54404f481ac2273b4f483915b93144d0757b066a1fd99/) |
| ❌ | 2024/02/20 | 0-13 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/02/13 | 0-46 | [The Watchers](https://ws.tsl.rocks/corp/62a08ec3521bd62e5c8fbfc03c7d99fbf3e30fd1df80716485c9b989b27771e6/) |
| ❌ | 2024/02/13 | 0-39 | [CommCody & LPA](https://ws.tsl.rocks/corp/211f33fe81910ba6692148af7d2bc4fe851f48bec79ca579ed16aa0ca50b36bb/) |
| ❌ | 2024/02/06 | 0-34 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2024/02/06 | 0-30 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ❌ | 2024/01/31 | 0-31 | [Duchy Arrakis](https://ws.tsl.rocks/corp/6c8c526b366a9e9eb3eba3d3107b628042c005db03530961b24a722cc58a339e/) |
| ❌ | 2024/01/31 | 3-44 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2024/01/26 | 3-42 | [Bounty Hunters](https://ws.tsl.rocks/corp/d44b4a2b4a57fd50845c39abe5c6b0a38bab694941fed09d3ca164c1d78625ea/) |
| ❌ | 2024/01/26 | 0-43 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2024/01/21 | 1-24 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2024/01/21 | 0-25 | [Killers from Ua](https://ws.tsl.rocks/corp/d9422068c043dbd30acc89fc13d0ba7b276a3f27a85ec53595b93b9b561d7fd6/) |
| ✅ | 2024/01/16 | 12-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2024/01/15 | 0-21 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2024/01/10 | 3-43 | [The trade pub](https://ws.tsl.rocks/corp/43689e4266357d8b8d3d66d371109d9aed82ee6df47dc6fa0a7c5da735b9863b/) |
| ❌ | 2024/01/10 | 0-20 | [Crimson Dawn](https://ws.tsl.rocks/corp/d01a872035141501ad24bc84e5496d239d31d121774482b777bd8f2e03726d44/) |
| ❌ | 2024/01/04 | 0-37 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2024/01/04 | 0-42 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2023/12/30 | 3-21 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2023/12/30 | 0-21 | [꿀벌왕국](https://ws.tsl.rocks/corp/5835926ee3d1861cbc6fc002291ee3a4b537c1a3a0aef8ea187dfe857505bebc/) |
| ✅ | 2023/12/24 | 1-0 | [НИФИГАСЕБЕ](https://ws.tsl.rocks/corp/a18fab78c26d983ee99c4cd3c7aaddcfac61283abb2122e9a8ccc44feb2b3196/) |
| ❌ | 2023/11/23 | 0-5 | [Imperio Tortuga](https://ws.tsl.rocks/corp/f6a55d248e49087c7f24bd1ffa5fddbeb4c64697f4fa485d2a8e350c1c067f79/) |
| ❌ | 2023/11/23 | 0-9 | [Dauntless](https://ws.tsl.rocks/corp/8313138d370b0b0f15dea3af851c836f9a1e1e838bf26c652c9a9831fb6b739a/) |
| ❌ | 2023/11/16 | 0-27 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ❌ | 2023/11/16 | 0-6 | [Омикрон Альфа](https://ws.tsl.rocks/corp/846ea10029302e3055a59da0b2754bd5ed8a6e3ac7d5fea612255e02034bf544/) |

---
Corporation ID: 4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1747665185"></span>
</div>