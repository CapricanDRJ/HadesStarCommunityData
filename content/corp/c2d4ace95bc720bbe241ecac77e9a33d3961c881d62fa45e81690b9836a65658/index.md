---
title: ​青丘湖
description: W:24 L:71 D:0 Bonus ❌ 10%
image: ./favicon.png
Summary: ❌ 0 - 23 **두빛나래**
date: 2026-01-25T01:03:42.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
本集团为<size=120>仙女座星雲</size>第五分团
集团总群<color=yellow>372337244</color> 
这里有神器福利等你领取
这里有专业的排队<size=100><color=red>BOT</color> 
</size>
这里有D7-D11大佬亲自指导
这里有全方位的培养体系
无论红星，暗星，白星，蓝星
这里是国服区对萌新最友好的集团
期待你
```
<br>

### [Discord](https://discord.gg/snwFMgDPms)
### Whitestar Bonus ❌ 10%

| Statistic | Value |
| --- | --- |
| ELO Regular | 931 🔻  (-8)|
| ELO Competitive | 1203 🔻  (-3)|
| Total Matches | 95 |
| Wins | 24 |
| Losses | 71 |
| Draws | 0 |
| Streak Record | 4 |
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
        let timestamps = [1768871022,1768650776,1767982347,1767947636,1767534003,1766968256,1766466205,1765523982,1765477116,1764966921,1764864412,1764447710,1763910167,1763400308,1762960155,1762356233,1762355632,1761852936,1761842464,1761378556,1761359628,1760871260,1760410667,1759941325,1759307629,1758812477,1758212024,1757325345,1757183019,1756703531,1756583646,1755994303,1755961241,1755520717,1755500138,1754959093,1754743930,1754416697,1754298602,1753805516,1753799204,1753354482,1753345469,1752902216,1752422328,1752136028,1751986389,1751565111,1750793486,1750255573,1749746812,1749529455,1749278035,1748860964,1748839330,1748371473,1748366663,1747890595,1747887050,1747427606,1747402360,1746983171,1746969043,1746528522,1746524316,1746094906,1746068463,1745625319,1745320009,1745168258,1744796828,1744729521,1744294092,1743862240,1743852320,1743420175,1742874991,1742399248,1741963494,1741518784,1741062336,1740527746,1740015971,1739549831,1739114766,1738678128,1738237958,1728133791,1727686309,1726286677,1724131197,1723213116,1722744020,1715898970,1715081737];

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
| [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) | 0 | 2 | 0 | 2 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 0 | 2 | 0 | 2 |
| [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) | 1 | 1 | 0 | 2 |
| [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) | 0 | 2 | 0 | 2 |
| [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) | 0 | 2 | 0 | 2 |
| [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) | 0 | 2 | 0 | 2 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 2 | 0 | 0 | 2 |
| [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/01/25 | 0-23 | [두빛나래](https://ws.tsl.rocks/corp/f2ff8c6a1035943d6dbff4062b4546ac2e3c7b2185b1bd986aec34256c2edb7f/) |
| ❌ | 2026/01/22 | 0-43 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ❌ | 2026/01/14 | 1-15 | [繁星一夢](https://ws.tsl.rocks/corp/aa5c727d4c474affdae1b8a4ceaa1a4d1749c24368741cfaf77e72e2bef86764/) |
| ❌ | 2026/01/14 | 0-18 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ❌ | 2026/01/09 | 3-31 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ❌ | 2026/01/03 | 0-1 | [Critical Mass](https://ws.tsl.rocks/corp/97748c176e12f022cd0dc7253a1c70aac71ef0e421870edf4555e20d70aa9716/) |
| ❌ | 2025/12/28 | 0-42 | [Corvus Ind\.](https://ws.tsl.rocks/corp/f99305aca0eca2f37971c97916647c8edd0258de0d30a3de61941700e7fb2c94/) |
| ❌ | 2025/12/17 | 0-35 | [Держава Русь](https://ws.tsl.rocks/corp/cbf11e25cee65a6c529251b7f47a35d9e4ba7bb9d640f384605541637e931672/) |
| ❌ | 2025/12/16 | 0-9 | [V0RTEX](https://ws.tsl.rocks/corp/dfbf2c493d0f00dab04291385bfd5d8b9673e7234e9cdaabddbff84f01ab0272/) |
| ❌ | 2025/12/10 | 6-59 | [BrinySeal](https://ws.tsl.rocks/corp/05ada6d14c0c53422b434d3d55b1440370f85e96f93c74992cb8c4eb8f5503ba/) |
| ❌ | 2025/12/09 | 0-11 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/12/04 | 3-23 | [Galaxians](https://ws.tsl.rocks/corp/94728c6eb201c1f15c6e2304b5920aa155ccc1a7aac83b574baae51c53a22c5d/) |
| ❌ | 2025/11/28 | 0-18 | [九州分团](https://ws.tsl.rocks/corp/e7374c31c95ba96f5c59c7c1de632517dd4cec2d4680e25e7f34d077133e4d4f/) |
| ❌ | 2025/11/22 | 0-29 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2025/11/17 | 0-47 | [帝国长青](https://ws.tsl.rocks/corp/4f2adf2f91d724aed6a934a014ab1cc284bbfb9dcc629b2abcd1605ba368b1f6/) |
| ❌ | 2025/11/10 | 0-52 | [Stone Legion](https://ws.tsl.rocks/corp/60cd15c27192f777f2e4abc413a83d4ab33bbccd7764a387afd2347dcd3d751a/) |
| ❌ | 2025/11/10 | 0-10 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2025/11/04 | 0-23 | [ThePurpl3Fleet](https://ws.tsl.rocks/corp/62b89144efc2dd57c092e008fc14260f17db10074edd2ed82d82c5ebe84ce610/) |
| ❌ | 2025/11/04 | 0-41 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ✅ | 2025/10/30 | 3-0 | [@\#@](https://ws.tsl.rocks/corp/5c4a0867cfaaf5bf512fc82362a56f0efb9573589f9606008e52992f69339997/) |
| ❌ | 2025/10/30 | 0-35 | [Mass Effect](https://ws.tsl.rocks/corp/6f715653bec3925d9c3acd7c2388fe8e1c79332146894ed424f57bd2636de8c7/) |
| ❌ | 2025/10/24 | 3-30 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/10/19 | 0-19 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/10/13 | 0-29 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ❌ | 2025/10/06 | 0-36 | [万星联盟](https://ws.tsl.rocks/corp/d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed/) |
| ❌ | 2025/09/30 | 0-51 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2025/09/23 | 0-32 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ❌ | 2025/09/13 | 0-6 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ❌ | 2025/09/11 | 0-13 | [日月星辰](https://ws.tsl.rocks/corp/d4f02aae2e03f6d0af99e1291b59b8bc7ea9c5baae99fc2eff5afe1e4baedc30/) |
| ✅ | 2025/09/06 | 23-1 | [Rogue Hero's](https://ws.tsl.rocks/corp/a1c2437de3e0bbe4c42481ff156cf7b2b96231991aa3d337180fbe30d254857b/) |
| ❌ | 2025/09/04 | 0-23 | [Kratos](https://ws.tsl.rocks/corp/1a0c5412c9e225a31e3addcb263114f49a6f2ac58041ffda3795db9bba72f23b/) |
| ✅ | 2025/08/29 | 7-2 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/08/28 | 0-20 | [Peaky Blinders](https://ws.tsl.rocks/corp/307baf1ef2e91ed992cd24bce234e347905a566f98db4845cb026b89e7ef0816/) |
| ❌ | 2025/08/23 | 0-31 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ❌ | 2025/08/23 | 0-15 | [RedStar Raiding](https://ws.tsl.rocks/corp/83a1c4f1576eec7dce037eb5b64b2455ca3affb9d3072108c5d4d3eba88b4570/) |
| ❌ | 2025/08/17 | 0-43 | [Dark Monarchs](https://ws.tsl.rocks/corp/c23ec9ebc110eb3dd1c56d100e206f8e421ad61de0748f4c6229e6297d736b4c/) |
| ❌ | 2025/08/14 | 0-25 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ✅ | 2025/08/10 | 27-17 | [OKC THUNDER](https://ws.tsl.rocks/corp/e0d10ea9212daec497d7fbfc5e33cb87a175d27e7024ea9da117385db5dbf3c2/) |
| ❌ | 2025/08/09 | 0-33 | [\[Blue\*Nation\]](https://ws.tsl.rocks/corp/38cd283c7bb8ee0390f5624e49a3465b1d4a8c789cc2d501f38918a16f6140e2/) |
| ✅ | 2025/08/03 | 31-1 | [VoidRunners](https://ws.tsl.rocks/corp/5d195a83bdec92e83e1f97ed8b05b35254ade000cd6ca979b81921c702b34a23/) |
| ❌ | 2025/08/03 | 0-25 | [Industrial W\.O](https://ws.tsl.rocks/corp/99a4ba88f6a620cb9ea1da456127c978a858ffbda4e40b255fcf3365515da25d/) |
| ❌ | 2025/07/29 | 2-4 | [New YuGiOh](https://ws.tsl.rocks/corp/14dfb83015e3c431e3b62aa4d0a6966657e5a34996e34d185efb92f703eda337/) |
| ❌ | 2025/07/29 | 0-23 | [万顷稻花](https://ws.tsl.rocks/corp/03386ec0080aee6d7af1877f35b017855540984073077164c8d3ac4203042630/) |
| ❌ | 2025/07/24 | 0-34 | [Cydonia Order](https://ws.tsl.rocks/corp/e55f58931b283e38b70e189f9bbc51563a76e2ae541f8b2b207444fb36d5ddf9/) |
| ✅ | 2025/07/18 | 11-9 | [Z\. O\. V\.](https://ws.tsl.rocks/corp/4f56534357f2407b25faee160f9dca4ee83b8f9ca4425ba472a47298faf54096/) |
| ❌ | 2025/07/15 | 0-11 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2025/07/13 | 8-7 | [Omega Nation](https://ws.tsl.rocks/corp/daf6da11d2b76129fa12c5d3d20894ed2f7f9b67eca3439c3e5f952e5d74bb5b/) |
| ❌ | 2025/07/08 | 0-45 | [Osmium Star llc](https://ws.tsl.rocks/corp/edd3ac94ea8ee1cf441e904ff29c48c21fa5db83af6eb5a6e83ae236b3872b22/) |
| ❌ | 2025/06/29 | 0-13 | [Legión](https://ws.tsl.rocks/corp/50f2309d2f9e5d31b10e6b9cf5928035bc1df6f395d81adf89b10627daad0fc7/) |
| ❌ | 2025/06/23 | 1-25 | [R\-6 satalite](https://ws.tsl.rocks/corp/ce3450a529768e932b3aeb4c6f39b9295e6e07d010b209d0120c0125799adc43/) |
| ❌ | 2025/06/17 | 0-7 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2025/06/15 | 6-30 | [АарнСарт](https://ws.tsl.rocks/corp/22a6ca5b9d96d9fe15fd019792db66760757592e6e03678bf67bca27b028233b/) |
| ❌ | 2025/06/12 | 0-11 | [神圣群星帝国](https://ws.tsl.rocks/corp/12f7f9ac2089354bdf775f46f0c4d77c32eccbfd2869d2d3bf93e88f4f23adce/) |
| ❌ | 2025/06/07 | 1-11 | [Polaris Corpo](https://ws.tsl.rocks/corp/918db816bc1bb29c5cb1854a5a67b1b240f8835af6f1e584db7fb7070884e346/) |
| ❌ | 2025/06/07 | 0-31 | [NERF TOY'S](https://ws.tsl.rocks/corp/34838966e1d5c2467f7985cafe5dd5c420c5ac919621da59c90867f11d1162d0/) |
| ❌ | 2025/06/01 | 7-19 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2025/06/01 | 0-32 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2025/05/27 | 0-10 | [\*Alfa y Omega\*](https://ws.tsl.rocks/corp/b1da3a2265efd2266a8e4b5698a731ae179d00e431ee748d7bee62a1357a12ed/) |
| ❌ | 2025/05/27 | 0-33 | [Death Star llc\.](https://ws.tsl.rocks/corp/3dd4906939827fa7537a3e95f8d75948c06b75a98f3c4aab253ea79857d2ce81/) |
| ❌ | 2025/05/21 | 17-29 | [Curiosity \+ Cat](https://ws.tsl.rocks/corp/c2982821577254a4ce2d996f53a2391f6f059ff79bbb14c29f9463269b4beebf/) |
| ❌ | 2025/05/21 | 0-16 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/05/16 | 8-14 | [9\-Й СКОРПИОН](https://ws.tsl.rocks/corp/5ad79ec30d5d805635609e2b1e1cf5f399486c1d57f6101cb6015afbd50f5913/) |
| ❌ | 2025/05/16 | 0-11 | [The Witness](https://ws.tsl.rocks/corp/b7b956df82c516f3d2c025c8ce1a2c4932eab3de4a2f63b49184241db2b3075c/) |
| ❌ | 2025/05/11 | 7-24 | [Cerulean Star](https://ws.tsl.rocks/corp/63d77c8d633b9dec932ad5d0f5a8ceb371b865b1adbb221ed410c5a7ba7df203/) |
| ❌ | 2025/05/11 | 0-13 | [Lupus Regnum](https://ws.tsl.rocks/corp/5d09edd698e4bd37f80fdeb19605360b985df7035b132f7cf4749dd1390098a9/) |
| ✅ | 2025/05/06 | 35-3 | [RGW](https://ws.tsl.rocks/corp/48a0b2c0f203025d10d1217dbcc5e27f3e31f56f2c407d61219c24ec88446be7/) |
| ❌ | 2025/05/06 | 0-9 | [孤星长城](https://ws.tsl.rocks/corp/af057d9c6c59118dd1a58b74a8ec83db78962a17ae022269292a5fc05693ab83/) |
| ✅ | 2025/04/30 | 19-7 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ❌ | 2025/04/27 | 3-10 | [新?的星际集团?](https://ws.tsl.rocks/corp/22bf8dd694333c9c627c373b02fed1704094cf10e94618c1f79feaef53183e7e/) |
| ✅ | 2025/04/25 | 25-3 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ✅ | 2025/04/21 | 4-1 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2025/04/20 | 29-1 | [DarkSide](https://ws.tsl.rocks/corp/a05d1feeae198a1f2ef98606bf83fdfa2254f2ac62f3db20cd5b09449257b8cd/) |
| ❌ | 2025/04/15 | 6-17 | [OPA](https://ws.tsl.rocks/corp/e80002cbc38034342376acee2274117d3b6150fce2d47bbd1dbf75cd06d8e258/) |
| ❌ | 2025/04/10 | 0-1 | [沐星楼](https://ws.tsl.rocks/corp/8dc700398a6a7fa7f9903b0ddea4181ff7eb16833cc774d5a1441f81cfcd3538/) |
| ✅ | 2025/04/10 | 19-17 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2025/04/05 | 10-21 | [Justice Vengers](https://ws.tsl.rocks/corp/0a3e9116062accf6fa5ec0e70eab7592dbea2a9f061e6cc49e74bc78f74d0711/) |
| ✅ | 2025/03/30 | 16-15 | [Bacon Warriors](https://ws.tsl.rocks/corp/ec62b01fc96adc2a7b7ac4077438e5153eeefc94740fab8309dcb6613e3a7f48/) |
| ✅ | 2025/03/24 | 37-0 | [Seila](https://ws.tsl.rocks/corp/8749ed87cb9e85c88599f3bb9f9159e00561229eb1690cb36d565a054638cc52/) |
| ❌ | 2025/03/19 | 12-30 | [莫比乌斯\-星环](https://ws.tsl.rocks/corp/f880db6adc517a83cc7c539551b160f5a90ac67a8ac62f8ae1edcbb40fff043c/) |
| ❌ | 2025/03/14 | 4-34 | [Hinterm Mars](https://ws.tsl.rocks/corp/a49fb97adf99c630611e791c8da7d8d9a198689fda80881a5e00e4b69b564bf7/) |
| ❌ | 2025/03/09 | 15-31 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ✅ | 2025/03/02 | 19-2 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2025/02/25 | 0-21 | [The Foundation](https://ws.tsl.rocks/corp/279f86b28e83ff2e41b798bf93f59b0803e62aecd6e7f0caa5c8be3efecf8728/) |
| ❌ | 2025/02/19 | 7-16 | [47підрозділССП](https://ws.tsl.rocks/corp/a8788ba9570f69df1db51d6de5c4c27666546d220234006a48fb8997a05ae63d/) |
| ✅ | 2025/02/14 | 28-5 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2025/02/09 | 20-7 | [ItaFederalFleet](https://ws.tsl.rocks/corp/02f7ac2b406e46cbb3e1f7fa3a0fb0dc2c32f9bc8afc54c299cd54757463ddbe/) |
| ✅ | 2025/02/04 | 20-0 | [Укр інтроверти](https://ws.tsl.rocks/corp/d572c676473ca035b64333d3b419fb4da007677b96f6a401710c4b9249a193d5/) |
| ✅ | 2024/10/10 | 22-0 | [Shrimp City](https://ws.tsl.rocks/corp/eae9b3a1f9dd6b4a1fb39d6aedfe84a80662abe6b181bedcfd7ec15d931b8e84/) |
| ❌ | 2024/10/05 | 1-19 | [Север РусКорп](https://ws.tsl.rocks/corp/39eeae12a2a5fead3330938b8f38c71aab465634b732303dad7b2a7d5f472004/) |
| ✅ | 2024/09/19 | 9-2 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2024/08/25 | 14-0 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ✅ | 2024/08/14 | 17-10 | [企鹅帝国](https://ws.tsl.rocks/corp/53f5c71ba84d7adb312f2f45919553d71769bce6acb74e18973f8c9127499807/) |
| ✅ | 2024/08/09 | 20-19 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ❌ | 2024/05/21 | 0-4 | [Stardust](https://ws.tsl.rocks/corp/304ad360ced8ec5a0e12a9955f3dd8f8ac2476f48d98a379beda41221e5a1c1c/) |
| ❌ | 2024/05/12 | 0-26 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |

---
Corporation ID: c2d4ace95bc720bbe241ecac77e9a33d3961c881d62fa45e81690b9836a65658

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1769303022"></span>
</div>