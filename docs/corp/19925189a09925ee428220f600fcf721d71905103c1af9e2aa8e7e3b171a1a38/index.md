---
layout: page
title: ​First Legion
description: W:38 L:37 D:1 Bonus ❌
date: 1723480442
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1237 🔻  (253)|
| ELO Competitive | 1426 🔻  (70)|
| Total Matches | 76 |
| Wins | 38 |
| Losses | 37 |
| Draws | 1 |
| Streak Record | 5 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched.

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1723048442,1723046338,1722468758,1722465154,1721867714,1721865011,1721262490,1721251374,1720660792,1720649974,1720064542,1719374269,1719350535,1718832151,1718832151,1718232470,1718227362,1717630432,1717625625,1717019732,1717018831,1716416340,1716415439,1715853896,1715811540,1715226553,1715208230,1714631853,1714625544,1713994872,1713994872,1713394286,1713389779,1712791822,1712790621,1712192968,1712181852,1711578486,1711574880,1710978739,1710975135,1710375713,1710371795,1709770250,1709769048,1709160586,1709159985,1708567717,1708558103,1707949297,1707948395,1707352059,1707349355,1706755686,1706754184,1706138130,1706138130,1705531391,1705528386,1704916246,1704912638,1704324532,1704316418,1703588556,1703553701,1703120345,1703109228,1702539507,1702528990,1701848214,1701769499,1701176533,1700707072,1699971873,1699489746,1698894760];

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
| [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) | 0 | 2 | 0 | 2 |
| [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) | 0 | 3 | 0 | 3 |
| [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) | 0 | 3 | 0 | 3 |
| [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) | 1 | 1 | 0 | 2 |
| [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) | 2 | 0 | 0 | 2 |
| [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) | 1 | 1 | 0 | 2 |
| [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) | 2 | 0 | 0 | 2 |
| [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) | 0 | 2 | 0 | 2 |
| [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) | 1 | 1 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/08/12 | 0-32 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ❌ | 2024/08/12 | 3-8 | [КРЫЛЯ ФЕНИКСА](https://ws.tsl.rocks/corp/a7852d9224a29d8a8b12b07f0985cf455ee57c9a7b5fed73f08ab733e8de733b/) |
| ✅ | 2024/08/05 | 10-0 | [Mega Corp](https://ws.tsl.rocks/corp/a30e9d9c153508aae950f9a2502286ee3c0290c79ca4d9c93766e4978031302f/) |
| ❌ | 2024/08/05 | 3-22 | [three kitties](https://ws.tsl.rocks/corp/04ae72b5736fbdc80a2fe9e4c2baaad3258a1e0ef0acc8122295fb64d6b3d292/) |
| ❌ | 2024/07/30 | 4-25 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2024/07/29 | 8-2 | [红日初升，其道大光](https://ws.tsl.rocks/corp/1be1009eb158cf7402aa36511acaab9c9400d087f4d4ee443f768ccb6b163921/) |
| ✅ | 2024/07/23 | 14-0 | [Discovery](https://ws.tsl.rocks/corp/58441c4aa90462bcabbfd94ae4192e21648299edfe9fd5c8ead5f81f3e7cd866/) |
| ❌ | 2024/07/22 | 3-40 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ❌ | 2024/07/16 | 1-3 | [使命白星](https://ws.tsl.rocks/corp/88e828c55c07286950a3296b00ca2a7a9cc2f1a0139e9cf4c6e54229f821e952/) |
| ✅ | 2024/07/15 | 17-0 | [Axiom](https://ws.tsl.rocks/corp/4000a010c205d318c766ba14fe1836eaab6652f1738a88cce8a8c69d0283e1b0/) |
| ❌ | 2024/07/09 | 0-21 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ✅ | 2024/07/01 | 9-3 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2024/06/30 | 3-7 | [リリース](https://ws.tsl.rocks/corp/128149aefc384d482d0f002d83f9c9a08c89dec768584030fc4585ea50d2f774/) |
| ✅ | 2024/06/24 | 14-0 | [К звездам](https://ws.tsl.rocks/corp/0c600c79a290196ac9ef6207559cd8481f3a63f8e2edd03f8f6a370b469c141f/) |
| ❌ | 2024/06/24 | 14-16 | [Dumpster Fire 2](https://ws.tsl.rocks/corp/37d473dec00d4d68e29963e3b423670aac735e7c1f256276e6c2e7d62180b0f8/) |
| ❌ | 2024/06/17 | 2-4 | [四季长春](https://ws.tsl.rocks/corp/cf0b11914dc18d8e669592ecfe191f115c4e5fdba09d130d260bb625b36a3179/) |
| ❌ | 2024/06/17 | 5-14 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ✅ | 2024/06/10 | 13-0 | [Sich\.ua](https://ws.tsl.rocks/corp/9fcd6d7c4fe7f8e39acf48585dfe9c6d3d14edc7781fe8caf85618b3e98c685d/) |
| ✅ | 2024/06/10 | 25-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/06/03 | 8-16 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ✅ | 2024/06/03 | 18-2 | [Global Elite](https://ws.tsl.rocks/corp/de6b6ff3aa4788e5136b12b7aabd0fa188b3b1a907b27ac1ee88c288de60040c/) |
| ✅ | 2024/05/27 | 11-4 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ✅ | 2024/05/27 | 14-0 | [LUPI ROMÎNI](https://ws.tsl.rocks/corp/934374a52ab97c3cc084b49caec3a1c144b0da9300288269c1efabaa671ca4f6/) |
| ✅ | 2024/05/21 | 6-4 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/05/20 | 2-25 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2024/05/14 | 14-0 | [NAC](https://ws.tsl.rocks/corp/cd35bc5d7637a2804496e55b68cd138afe3f993bb62691cfeaae93f7549344e3/) |
| ❌ | 2024/05/13 | 4-5 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ✅ | 2024/05/07 | 12-5 | [●Black•Sails●](https://ws.tsl.rocks/corp/fe048ff17e9dd095f7071da69d7f3933dd7a9cd3d7168cc2add063c0ff686d31/) |
| ❌ | 2024/05/07 | 3-8 | [银星舰队SSF](https://ws.tsl.rocks/corp/c02d97cc37c082739a7828b6669ee67e2108bbf3d9f33628c650ced9fe04dd06/) |
| ❌ | 2024/04/29 | 5-6 | [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) |
| ❌ | 2024/04/29 | 11-24 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2024/04/22 | 26-0 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/04/22 | 3-23 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/04/15 | 4-2 | [한국인](https://ws.tsl.rocks/corp/f2b2c144f02ec69dfe3bd7fb8d4d1db10d7e3954a2f45937f16daafb0266490e/) |
| ❌ | 2024/04/15 | 0-9 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ✅ | 2024/04/09 | 14-2 | [Empire of Light](https://ws.tsl.rocks/corp/5ca200f11c7f9dedf112be9585982247820f97c82868bacb956c0ef8d19262bc/) |
| ✅ | 2024/04/08 | 13-0 | [佛矿寺](https://ws.tsl.rocks/corp/64f8afd95b7004e9d5a442da55644ee3ce64a9a8e82345c458d757b527e40624/) |
| ✅ | 2024/04/01 | 19-0 | [Eternal empire ](https://ws.tsl.rocks/corp/c710661fec52581acc50c1f8a96dfb2dc3e582cf877080c41714526c98cd7193/) |
| ❌ | 2024/04/01 | 3-32 | [Atlas Star llc\.](https://ws.tsl.rocks/corp/3de5259ba12509e4d02854f1414caacf3d0aaaf79f417b9d843ff20ca35863dd/) |
| ❌ | 2024/03/25 | 1-17 | [Destroyers](https://ws.tsl.rocks/corp/3756333f55f58944372cf785b972da55796cc179c0ce5f10244e90e3c4355a23/) |
| ✅ | 2024/03/25 | 24-0 | [death squadron ](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ❌ | 2024/03/19 | 3-21 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2024/03/18 | 0-7 | [Prospectors](https://ws.tsl.rocks/corp/7919c3c38ee794a50b54a2d7a4d0aa78e36cf5a6e35d3e3d6a0c68db2841c167/) |
| ❌ | 2024/03/12 | 2-15 | [Space Rangers](https://ws.tsl.rocks/corp/da0952db0de44e4eee72d9ffa2394d5818565c5c16d89a1313c6df07417f9fb3/) |
| ✅ | 2024/03/11 | 13-2 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |
| ✅ | 2024/03/04 | 18-0 | [Dying stars](https://ws.tsl.rocks/corp/9ac33f7e88def3078cadaed4978016cc35164eecfd76bd9e0b02735afde2783a/) |
| ✅ | 2024/03/04 | 3-0 | [Prometheus](https://ws.tsl.rocks/corp/b8bbef86e5b1f72bf9c827f0497871ab0363769ac4fef563fd56f96ac88c85a6/) |
| ❌ | 2024/02/27 | 2-29 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ✅ | 2024/02/26 | 14-9 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2024/02/19 | 4-10 | [The New Light](https://ws.tsl.rocks/corp/73c87b4394c7e44aa0fa6996ae32e7448f956391dac8b5d025da6019d3062cfc/) |
| ✅ | 2024/02/19 | 15-0 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ❌ | 2024/02/13 | 3-4 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ✅ | 2024/02/12 | 18-0 | [OntarioDiligent](https://ws.tsl.rocks/corp/912060e9f2992284d8f2a3c31aefc5bb294acd5cb3213fa15e6f4cb3b326d5cf/) |
| ✅ | 2024/02/06 | 7-6 | [很多星球的社会主义团](https://ws.tsl.rocks/corp/dcac8e5bb444db7feec894f3be5a6f373fd0025a6ec79ccc125dd8b7bf652bc2/) |
| ✅ | 2024/02/06 | 16-0 | [湖心亭看雪](https://ws.tsl.rocks/corp/eb4316c2fbedc2f03ed45e128c8c8d96376d1d1125790a9b9697481dacd002fb/) |
| ❌ | 2024/01/29 | 2-12 | [Black Star llc\.](https://ws.tsl.rocks/corp/f6cd5aed527efed3a402f931784d68b5b7201b317118a60bd3d81b551ee87330/) |
| ✅ | 2024/01/29 | 19-0 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ✅ | 2024/01/22 | 18-0 | [Hail Hydra](https://ws.tsl.rocks/corp/32527ae821386573e64d75451a2fce9d6731e290d0cfab03e7d953356979baf8/) |
| ✅ | 2024/01/22 | 2-1 | [TECH CO](https://ws.tsl.rocks/corp/49f9afe365665b0d622f99306a23e7a2ebd9cf7022ee79c25e08917977ab9d7a/) |
| ❌ | 2024/01/15 | 0-3 | [U\.S\.A](https://ws.tsl.rocks/corp/6d7a18e9893736881762a4e1b687b55e7311d367267ff5a9cc8e45722b14ea06/) |
| ✅ | 2024/01/15 | 10-0 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2024/01/08 | 0-4 | [IMPERIAL ARMADA](https://ws.tsl.rocks/corp/54b8724d96e9c022ab2907e45bead9f5b45b02fca093dc0fe5827f14644b2663/) |
| ❌ | 2024/01/08 | 1-14 | [CIS](https://ws.tsl.rocks/corp/3efaab24560531ff257e73bfb281a7e9c0a9d591ac5aff55d05d35f2fb5e1d73/) |
| ✅ | 2023/12/31 | 5-3 | [ReylZ](https://ws.tsl.rocks/corp/69a8a2b36262bc3c3dec3511df24b34329b82bdbe9813e845bf2365f9d0c7a74/) |
| ✅ | 2023/12/31 | 22-0 | [Vermilion](https://ws.tsl.rocks/corp/1a96e18d1c38ae2d619ce1659e51ddb1b075c87733cacc178f09b8abc52efd89/) |
| ✅ | 2023/12/26 | 7-3 | [Imperio Lie Yan](https://ws.tsl.rocks/corp/adfcb1528f44da89091917abd7726a804e7a69b59cbd176a77a408d4b2e81f9e/) |
| ✅ | 2023/12/25 | 17-0 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ✅ | 2023/12/19 | 15-0 | [联合宇宙](https://ws.tsl.rocks/corp/da614a2861abac24e31b7b978e75196750b88545f6ece0f367b66b43d696deab/) |
| ↔️ | 2023/12/19 | 3-3 | [边缘世界](https://ws.tsl.rocks/corp/6a0c2b263b0bfabc564979bce02c28c80aae497654fc10637ceb36d5447f6365/) |
| ❌ | 2023/12/11 | 2-3 | [Russian Style](https://ws.tsl.rocks/corp/db02701745537e2b055f660e59bd465567c4e4b322c16ade37245ed4a40699c8/) |
| ❌ | 2023/12/10 | 5-8 | [Eretria ](https://ws.tsl.rocks/corp/bdadb3cf8eff262b48dd6a7b5945b8192fbc67117ddb3eecf7912e402e975725/) |
| ❌ | 2023/12/03 | 3-5 | [СССР 2\.0](https://ws.tsl.rocks/corp/2a77c0d4e05f31ab26b8c73af7f6d0b6ac40368b06a702e4a912edbf09eab65b/) |
| ❌ | 2023/11/28 | 2-28 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ❌ | 2023/11/19 | 2-38 | [<a\>超越®</a\>光速℡](https://ws.tsl.rocks/corp/771c827eb591813e3b88ff38b0031d09519b0f3d5fe01666aa4711bfd5052857/) |
| ❌ | 2023/11/14 | 8-21 | [Ninth Planet](https://ws.tsl.rocks/corp/53297ed66c8c326d4cb4eebdee55172d3d64f122addd5d916b314f4ab557e21a/) |
| ✅ | 2023/11/07 | 14-0 | [Imperial Navy](https://ws.tsl.rocks/corp/0f445013f557b459e4493839746dd103be3ace2169b35acbafcb3550ae0da8c1/) |

Corporation ID: 19925189a09925ee428220f600fcf721d71905103c1af9e2aa8e7e3b171a1a38

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>