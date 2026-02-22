---
title: ​泰拉瑞亚
description: W:41 L:42 D:3 Bonus ❌ 11%
image: ./favicon.png
Summary: ❌ 0 - 23 **imperio galacti**
date: 2026-02-22T14:20:51.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
 我们都要成为生活的高手
欢迎新朋友过来玩
```
<br>

### Whitestar Bonus ❌ 11%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1211 🔻  (-7)|
| ELO Competitive | 1470 🔻  (-8)|
| Total Matches | 86 |
| Wins | 41 |
| Losses | 42 |
| Draws | 3 |
| Streak Record | 8 |
| Flagship | 2 |

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
        let timestamps = [1771338051,1769150732,1769094250,1768675002,1768650476,1768118969,1767862674,1766654286,1766652483,1765803103,1765200395,1764554084,1764103951,1764082316,1763365179,1763356926,1762917498,1762917462,1762358336,1762327992,1761892635,1761890551,1759724386,1759684726,1759221453,1759202474,1758735591,1758719941,1758216616,1758206698,1757739489,1757727772,1757262990,1757259684,1756820106,1756819806,1756387397,1756365060,1755875607,1755871399,1755330794,1754813262,1754808384,1754366514,1754366214,1753708155,1753686069,1753231886,1752771803,1752295291,1751910369,1751852972,1751424787,1751419981,1750983088,1750957546,1750495677,1750474641,1750028101,1750028101,1749587853,1749572824,1749139513,1749132000,1748692380,1748689375,1748241360,1748238355,1747802875,1747799384,1747360595,1747338662,1746891517,1746874986,1746419745,1745986307,1745511278,1745051956,1744618037,1744184411,1743740225,1743266019,1742821795,1742389327,1709172001,1699838615];

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
| [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) | 0 | 2 | 0 | 2 |
| [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) | 0 | 2 | 0 | 2 |
| [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) | 2 | 0 | 0 | 2 |
| [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) | 0 | 2 | 0 | 2 |
| [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) | 1 | 1 | 0 | 2 |
| [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) | 1 | 1 | 0 | 2 |
| [Clube Jogatico](https://ws.tsl.rocks/corp/b7fa1d6ba9752f3526daf60acb3f70f9daaf33a9e81bb5d9c78015c805b74ef4/) | 0 | 2 | 0 | 2 |
| [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) | 0 | 2 | 0 | 2 |
| [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) | 2 | 0 | 0 | 2 |
| [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) | 1 | 1 | 0 | 2 |
| [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) | 2 | 0 | 0 | 2 |
| [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) | 0 | 2 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 0-23 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ❌ | 2026/01/28 | 3-22 | [HUN TERS](https://ws.tsl.rocks/corp/99c45cb17fdcbf89bf806b294ebe42a042ff774e913c216800fb7b1435d255a1/) |
| ❌ | 2026/01/27 | 0-20 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ↔️ | 2026/01/22 | 0-0 | [W\.A\.L\.R\.U\.S\.](https://ws.tsl.rocks/corp/3360cfbc27ced65ef69f7de87380357cd8d4a316d8701e67b93a624d481bf313/) |
| ✅ | 2026/01/22 | 12-4 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2026/01/16 | 3-2 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ✅ | 2026/01/13 | 10-0 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2025/12/30 | 2-9 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2025/12/30 | 22-0 | [落魄山](https://ws.tsl.rocks/corp/9d8f3705cfb7a51ea635285d0069c819d598b63819bffe518ea3c5da7b329573/) |
| ✅ | 2025/12/20 | 22-9 | [星露谷](https://ws.tsl.rocks/corp/e169565c80233f6c6d2c4068dce563794b6b652af64c4331676868fca429382d/) |
| ❌ | 2025/12/13 | 0-21 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2025/12/06 | 0-23 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ❌ | 2025/11/30 | 4-15 | [\-=Содружество=\-](https://ws.tsl.rocks/corp/a9493d38afc250d1f8288ca320eb0e5fb1263b1854737d813cdbf575c0e0e2d3/) |
| ❌ | 2025/11/30 | 0-23 | [Russian space 3](https://ws.tsl.rocks/corp/e801d288bf6d95e9705e8f7d791fdcb030abe8bebaf2980bc32fb453f95575d7/) |
| ❌ | 2025/11/22 | 0-15 | [imperio galacti](https://ws.tsl.rocks/corp/53a1ca8088f875a7b4ba2199b1059595e3034594188eb4717bc045a64e1dcdd2/) |
| ✅ | 2025/11/22 | 40-0 | [지고받자](https://ws.tsl.rocks/corp/7172d4e10205869e535b82bbdfc5fea3978414c420bade9a1f96cf10c8e4855d/) |
| ✅ | 2025/11/17 | 5-1 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ❌ | 2025/11/17 | 3-36 | [Новый Мир](https://ws.tsl.rocks/corp/5563c95f687e98cc5e151634915ffa5e0f4bb39709901c5acc52e34094f19409/) |
| ❌ | 2025/11/10 | 2-21 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/11/10 | 19-6 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/11/05 | 3-34 | [HIGH COMMAND](https://ws.tsl.rocks/corp/c301e344c877e869eedde9888fe0c1444bdf2c7c7750699fdf80745b983795a2/) |
| ✅ | 2025/11/05 | 3-2 | [Sternenflotte](https://ws.tsl.rocks/corp/f30282c604cbf222ab5535b9ed73cef3b1d7e36a65617d09134d1a94a9c98cbd/) |
| ❌ | 2025/10/11 | 0-11 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ❌ | 2025/10/10 | 6-14 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ↔️ | 2025/10/05 | 3-3 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/10/05 | 17-3 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ❌ | 2025/09/29 | 0-3 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2025/09/29 | 4-16 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2025/09/23 | 38-3 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2025/09/23 | 0-6 | [Blade Corp\.](https://ws.tsl.rocks/corp/4f115f758a9b28f62e6272f0443baa7e7aaf16801e50275361463f9760a16339/) |
| ❌ | 2025/09/18 | 0-16 | [imperio estelar](https://ws.tsl.rocks/corp/c4c7de80ce172ac4cb77f23b5833bc20f87ea3f6e64ed09120b0e95113460bb4/) |
| ✅ | 2025/09/18 | 23-4 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2025/09/12 | 0-16 | [Rebel Alliance](https://ws.tsl.rocks/corp/63e58bd850ba84e710d43b92c7489a3beb350ab8e665a10e7a7e3ab4acdf8df9/) |
| ✅ | 2025/09/12 | 18-0 | [Galactic Empire](https://ws.tsl.rocks/corp/e2223ab2b582a5eb5ae1734e132358eb3c24ddf61fcbeee7b8f6708f26782108/) |
| ❌ | 2025/09/07 | 3-6 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ❌ | 2025/09/07 | 3-6 | [Black Pearl FR](https://ws.tsl.rocks/corp/2b852290b8f1d765b15529c7bac7b9b7eacc3ca4f427cbed0a24b2ddfde359e6/) |
| ❌ | 2025/09/02 | 3-13 | [✨ℛedstar Order«](https://ws.tsl.rocks/corp/01220718f2aba52af83767c0d2e500ff584ec88cd06a8fa451841a5576937e8d/) |
| ❌ | 2025/09/02 | 0-9 | [Clube Jogatico](https://ws.tsl.rocks/corp/b7fa1d6ba9752f3526daf60acb3f70f9daaf33a9e81bb5d9c78015c805b74ef4/) |
| ✅ | 2025/08/27 | 11-0 | [Salmon\_Imperium](https://ws.tsl.rocks/corp/b5faa201fbeb2e298123635203c4f54acf0f85cf9e9b60a05d5fd6e7227e0d18/) |
| ❌ | 2025/08/27 | 4-19 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/08/21 | 4-14 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/08/15 | 16-0 | [Discovery Corp\.](https://ws.tsl.rocks/corp/c361c7d99930a4028e12b5bb1543f106ebdc0778caecce6914f37d45a9675603/) |
| ❌ | 2025/08/15 | 1-16 | [九州·华夏](https://ws.tsl.rocks/corp/b9cbe11f1e67c4fe116f0b88f6a09cd820c689366a96b35d8393a6ef34b8558f/) |
| ✅ | 2025/08/10 | 7-1 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ❌ | 2025/08/10 | 0-27 | [传说之下2](https://ws.tsl.rocks/corp/faa2aefadbb402432c939d718812c12a5541becc311c39f57a880750d11c56bb/) |
| ❌ | 2025/08/02 | 1-6 | [宇宙警察](https://ws.tsl.rocks/corp/e351af3589315207a50dad0eefdf5309943c39b25656f0870904e6be9302a082/) |
| ✅ | 2025/08/02 | 13-0 | [Чистое Небо](https://ws.tsl.rocks/corp/82c64f0d4483d056037e3a43e597d4b1730ac0cd84bae8307fadef28fd6c202f/) |
| ✅ | 2025/07/28 | 20-0 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ✅ | 2025/07/22 | 9-0 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ✅ | 2025/07/17 | 21-0 | [Empyre](https://ws.tsl.rocks/corp/b31247ca3aabadd1d2b099494ccc433c768f115c91677798d5b3dac380f90392/) |
| ✅ | 2025/07/12 | 7-4 | [中华人民共和国](https://ws.tsl.rocks/corp/2acf0be46829b53620f0aa02fc71aaa7e3e9c54d9446951bb26288c05727ae84/) |
| ✅ | 2025/07/12 | 11-2 | [新星工程分团](https://ws.tsl.rocks/corp/32118ce6bd19b8bf3c71207205af9e433ae29cc8a80ebde0a608e508b6c37895/) |
| ✅ | 2025/07/07 | 9-0 | [Bon Ariens](https://ws.tsl.rocks/corp/1d0aa6d0fbc5e35422544e47ebd18d2fe21749780594630982f96fa08a850574/) |
| ✅ | 2025/07/07 | 20-0 | [⭐PRETORIANS\.X⭐](https://ws.tsl.rocks/corp/cb69b877d0e7ac86c3ce149f74e3c8db3a6352f330dc8da3e9754e9468a3255a/) |
| ❌ | 2025/07/02 | 0-14 | [沐星楼](https://ws.tsl.rocks/corp/8dc700398a6a7fa7f9903b0ddea4181ff7eb16833cc774d5a1441f81cfcd3538/) |
| ✅ | 2025/07/01 | 7-5 | [Alpaca Nation](https://ws.tsl.rocks/corp/183ddf96d070e4587235f1fe8f0c8a6a5a4af354f44fae28416fe492a1f8f9d1/) |
| ✅ | 2025/06/26 | 10-0 | [Le Refuge\.](https://ws.tsl.rocks/corp/3d5b92e8e4eb41b09f321270a189277951b5989b232c79bfee0cfa80ca846665/) |
| ✅ | 2025/06/26 | 7-0 | [龙族之家](https://ws.tsl.rocks/corp/4951f6e13d787e8798ea15bd6893c755a561a89e7946c6b35edcc00353af5e60/) |
| ✅ | 2025/06/20 | 2-0 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ❌ | 2025/06/20 | 2-26 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ✅ | 2025/06/15 | 36-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ↔️ | 2025/06/15 | 1-1 | [pérola negra](https://ws.tsl.rocks/corp/731b9063ad91473ffe9bbd2721ce5b77e0774b482c7d88033ce2ba6f834b535a/) |
| ✅ | 2025/06/10 | 12-0 | [Terran empire](https://ws.tsl.rocks/corp/ca5552c1a800772ddb6671c92cdaed340e0dcac55d22809ed72c1ead2a701c2d/) |
| ❌ | 2025/06/10 | 1-3 | [对，进就进人少的（分团）](https://ws.tsl.rocks/corp/69a860d3020745a9088fa70fa7ebc4caaa8a6181832961bcd607fbfa627203f3/) |
| ❌ | 2025/06/05 | 0-5 | [深域](https://ws.tsl.rocks/corp/eecda71374dad3401a154cda170518bbf578f7124c194849a529405246335626/) |
| ✅ | 2025/06/05 | 23-0 | [超新星联盟](https://ws.tsl.rocks/corp/c3667794c88fd0a09f565dc3b4fed5325f131a616d01d0f6890755b44997d0a1/) |
| ✅ | 2025/05/31 | 9-6 | [星际公约组织](https://ws.tsl.rocks/corp/72e8750bccc297a8a97c53745622d1acc8a59cc5cb7618e58ce5bb12f98849d0/) |
| ❌ | 2025/05/31 | 0-6 | [Clube Jogatico](https://ws.tsl.rocks/corp/b7fa1d6ba9752f3526daf60acb3f70f9daaf33a9e81bb5d9c78015c805b74ef4/) |
| ❌ | 2025/05/26 | 5-8 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ✅ | 2025/05/26 | 4-1 | [One True Empire](https://ws.tsl.rocks/corp/7e29d1af231dce04c39b39f2cd8e189806f7d6a74a9199861598c2e27fdc5029/) |
| ✅ | 2025/05/21 | 13-4 | [Eastern Front](https://ws.tsl.rocks/corp/b85c2704ee1257f24225de4e7290aa6b9c6804f07062fbc7008a58b8c0ab09a4/) |
| ✅ | 2025/05/20 | 10-3 | [EarthFederation](https://ws.tsl.rocks/corp/e1d58bc0b534389adeb45301641e32cdda2af0a1748a0d2ddb52e794db2c6d5b/) |
| ✅ | 2025/05/15 | 19-9 | [太阳系星盟](https://ws.tsl.rocks/corp/95985d5638e8398d249c8e1660b53ccf4b8c3227e16e61b8e0ee78a867db650d/) |
| ❌ | 2025/05/15 | 0-1 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/05/10 | 3-16 | [Милый дом](https://ws.tsl.rocks/corp/d908cbdc39ad7efc371d8e2683776f9c0961d8bd1c3959d1db2a2e0bac82cacc/) |
| ❌ | 2025/05/05 | 4-17 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ✅ | 2025/04/29 | 12-0 | [the kings](https://ws.tsl.rocks/corp/e5401c31454641df970c76a211cb6fa604fcad47f1974d42db317169a796b1cc/) |
| ✅ | 2025/04/24 | 8-0 | [Junker Nation](https://ws.tsl.rocks/corp/57f12051efed19092f9dce087e27dd9bc0c568ec40e829548316c0d3376984de/) |
| ✅ | 2025/04/19 | 13-1 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ❌ | 2025/04/14 | 3-6 | [Empire of Hades](https://ws.tsl.rocks/corp/5772c612f584faa0a1fcb0a9a96f08ee4ebba1f4cc1105d95634c651bddf54bf/) |
| ❌ | 2025/04/09 | 2-7 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2025/04/03 | 11-3 | [titan tv](https://ws.tsl.rocks/corp/30ba418a884a4c2f888c814c6adfd9f30d995c155ccdc8aafa74ae4dc30f1c39/) |
| ❌ | 2025/03/29 | 2-12 | [Hades’ galaxy](https://ws.tsl.rocks/corp/a5161db8db3228457dcd60bba1f4edee3636f916b6d20b3fdedb04a4fb6f117e/) |
| ❌ | 2025/03/24 | 4-9 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/03/05 | 0-2 | [Cowboys](https://ws.tsl.rocks/corp/f461f65e85a43e0b855a525f6995505fc1cc5ae6f85be50470c9dacbb955fc21/) |
| ✅ | 2023/11/18 | 20-0 | [ToC](https://ws.tsl.rocks/corp/72dc408527c06786fa45851f432da731fd63c063d51f4a180b9ae24216e41765/) |

---
Corporation ID: a5ca891aa2a7441fd3106ee6f2745eecd8e3573d5f10eab62da06e82a22b1e3a

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771770051"></span>
</div>