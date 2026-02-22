---
title: ​Spanish Apes
description: W:33 L:19 D:2 Bonus ❌ 
image: ./favicon.png
Summary: ❌ 4 - 22 **Space Dragons**
date: 2026-02-20T11:16:15.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```

```
<br>

### Whitestar Bonus ❌ 

| Statistic | Value |
| --- | --- |
| ELO Regular | 1270 🔻  (-16)|
| ELO Competitive | 1461 🔻  (-16)|
| Total Matches | 54 |
| Wins | 33 |
| Losses | 19 |
| Draws | 2 |
| Streak Record | 12 |
| Flagship | 0 |

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
        let timestamps = [1771154175,1771151471,1770719140,1770716136,1770142897,1770120960,1769596636,1769590628,1769156440,1769100861,1768587084,1768580170,1767983459,1767980455,1767548130,1767534003,1766968256,1766960746,1766526901,1766526601,1765971349,1765969546,1765415225,1765286382,1764867467,1764341916,1764338909,1763844369,1763817022,1763290339,1763144320,1762785306,1762334299,1762185284,1761639176,1761638757,1760961696,1760511013,1760452726,1759957252,1759939823,1759465015,1759464473,1759026409,1758991558,1758472076,1758457349,1757827833,1756964925,1756149633,1755670650,1755068461,1754467775,1753889048];

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
| [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) | 0 | 2 | 0 | 2 |
| [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) | 0 | 2 | 0 | 2 |
| [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/20 | 4-22 | [Space Dragons](https://ws.tsl.rocks/corp/56abc2a100d670fdde4dc7a34a284d429a863f45d8807422ae338faf806c81b9/) |
| ❌ | 2026/02/20 | 1-12 | [契约\-璃月](https://ws.tsl.rocks/corp/ddf212167e61a225a1554a76a8956a044f72afa9eb2fd239661f8740ba008f92/) |
| ✅ | 2026/02/15 | 24-0 | [帝国长青](https://ws.tsl.rocks/corp/4f2adf2f91d724aed6a934a014ab1cc284bbfb9dcc629b2abcd1605ba368b1f6/) |
| ✅ | 2026/02/15 | 25-8 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2026/02/08 | 28-0 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2026/02/08 | 8-21 | [Bastille FR](https://ws.tsl.rocks/corp/910f3de039463150a8be5828e846a65c435f5ee4a5ae8ec2d27ab040614e5aa8/) |
| ❌ | 2026/02/02 | 2-20 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2026/02/02 | 29-1 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2026/01/28 | 0-17 | [Space Monkeys](https://ws.tsl.rocks/corp/6894d5efb7b658b31de079cb2e732d920d4a9c0be391dc9f063e62e22ac51dac/) |
| ✅ | 2026/01/27 | 39-0 | [USSR](https://ws.tsl.rocks/corp/775ec12999c2bb5396801268de447d30104b470d9f093ec4afea9c9db71d7690/) |
| ✅ | 2026/01/21 | 33-0 | [Корпорация Миф](https://ws.tsl.rocks/corp/605aa7df348e96fcaa0cb9dc5c1f37a87fb8991ae0694b9ff21d1f4fee54aa88/) |
| ❌ | 2026/01/21 | 2-13 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2026/01/14 | 12-6 | [The Allegiant](https://ws.tsl.rocks/corp/1c4cfbcf7902769aff100297d9174153f4c0528ed07918ba494f763a1315ffc6/) |
| ↔️ | 2026/01/14 | 0-0 | [何为真理](https://ws.tsl.rocks/corp/862e97c5edefda9591478c11e2d99c48c2f37740e56655e0ef0a9c583ade4507/) |
| ❌ | 2026/01/09 | 4-9 | [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) |
| ❌ | 2026/01/09 | 0-10 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ✅ | 2026/01/03 | 1-0 | [青丘湖](https://ws.tsl.rocks/corp/c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658/) |
| ✅ | 2026/01/02 | 30-0 | [West Worlders](https://ws.tsl.rocks/corp/aad051ec6b980cc52fb4777aef113d9e28a72aab40fda65aa9cdbf477b8e390a/) |
| ❌ | 2025/12/28 | 0-15 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ❌ | 2025/12/28 | 9-13 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ❌ | 2025/12/22 | 0-22 | [DarkMoon](https://ws.tsl.rocks/corp/90066f3df9499804310418b33334c0ae72f144b5592c4863ac52d2b2eace302a/) |
| ✅ | 2025/12/22 | 22-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/12/16 | 20-2 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/12/14 | 0-9 | [lesescargots](https://ws.tsl.rocks/corp/718c873931e9097064fd6ef580fe9d8761be712e0783e0b97d28344abd910623/) |
| ✅ | 2025/12/09 | 27-1 | [Kingdom Of Meow](https://ws.tsl.rocks/corp/bb7b30afd9a7e5c035d0ba19b9aa388cea55098d375174faf86523618929f856/) |
| ❌ | 2025/12/03 | 3-13 | [General](https://ws.tsl.rocks/corp/82f142db6c5d19268a598fa5dc5b7ccf0554422791925a821cd5b839718cf0e6/) |
| ✅ | 2025/12/03 | 31-0 | [Avantgarde](https://ws.tsl.rocks/corp/5003271bb02761b202cd42865c9bde5fd2dad83ae1bb96b920c606b282744046/) |
| ✅ | 2025/11/27 | 3-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2025/11/27 | 22-2 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ✅ | 2025/11/21 | 19-0 | [Бороская Имерия](https://ws.tsl.rocks/corp/13a4b881c81a63721b98078aeed9b4970eae55034b2a55cb345dc7a8fb2ff541/) |
| ❌ | 2025/11/19 | 0-21 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/11/15 | 8-5 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ✅ | 2025/11/10 | 6-0 | [Mandaloriens](https://ws.tsl.rocks/corp/a48760d19220976fd3d11b9847c74b29619e5fadbfaadd83587d8831eeae964f/) |
| ✅ | 2025/11/08 | 24-0 | [真·理](https://ws.tsl.rocks/corp/440e37b41933d6c2df898f91079251173dc970f82f497dd18239edb894d3bab8/) |
| ❌ | 2025/11/02 | 3-22 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/11/02 | 0-28 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ✅ | 2025/10/25 | 4-3 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2025/10/20 | 10-7 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/10/19 | 19-3 | [萌新集团](https://ws.tsl.rocks/corp/ce01702934684c7c912cca080e785332f51d3f626308b9fb6cb6ed48aa7f042c/) |
| ✅ | 2025/10/13 | 9-3 | [Glashan](https://ws.tsl.rocks/corp/48b9fa3df8bbc6ce4a8455e9b923f28c0eccb8054c9f72e9c14e6acfee5a23a4/) |
| ✅ | 2025/10/13 | 21-2 | [Cool Casual](https://ws.tsl.rocks/corp/9a2a796d16f4c8e1d525d5964621454c42a10aa6c544766a55463862c9d3b6f0/) |
| ✅ | 2025/10/08 | 5-0 | [猎户座星云](https://ws.tsl.rocks/corp/6eb23240d8c185984cab8e829f9aba441b284c7a003241d3a521da840a6cbff4/) |
| ✅ | 2025/10/08 | 21-2 | [First Legion](https://ws.tsl.rocks/corp/19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38/) |
| ✅ | 2025/10/03 | 2-0 | [dark news](https://ws.tsl.rocks/corp/392d4555432e2fb7c77ddf78c077aaab6d8cb3da0e36551e8eac0f2d98081d2c/) |
| ✅ | 2025/10/02 | 18-2 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/09/26 | 6-0 | [Corellia Corp](https://ws.tsl.rocks/corp/d3813c9aa0d7db5581d7e4799a89837cd3bc6d47bbe2639a295b56f5afc1b93f/) |
| ✅ | 2025/09/26 | 14-3 | [Hungary First](https://ws.tsl.rocks/corp/d678326dd81ae0cf5b2bb37d15dcfe7fa1477dbb6e063fbd0d34c69b5942d31b/) |
| ✅ | 2025/09/19 | 12-0 | [太阳系星盟·白星观测站](https://ws.tsl.rocks/corp/956fd97c2d6b7d9dc5c9859f2ca6e43bfdff0036065408f26bdd4bb179173499/) |
| ❌ | 2025/09/09 | 8-10 | [异星旅人（流浪地球第2分盟）](https://ws.tsl.rocks/corp/9dc08f39359c6ef107f59f385544278a55c72ff4689e9a06a4e639197e7dfac1/) |
| ❌ | 2025/08/30 | 1-13 | [Raine](https://ws.tsl.rocks/corp/db92e9f0141e3e56a92eef374a7cfeb204852318338a71b9de16edb1058871c5/) |
| ❌ | 2025/08/25 | 8-22 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ↔️ | 2025/08/18 | 4-4 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ✅ | 2025/08/11 | 8-2 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ✅ | 2025/08/04 | 3-0 | [BrbroZ](https://ws.tsl.rocks/corp/30b4148a5831c38d4e258cd0a3e21598dcb3cab51ae585e7035c8900b836d2ba/) |

---
Corporation ID: 97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771586175"></span>
</div>