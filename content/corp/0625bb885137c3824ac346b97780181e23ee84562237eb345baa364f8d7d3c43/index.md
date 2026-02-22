---
title: ​Moon Catchers
description: W:17 L:31 D:1 Bonus ❌ 11%
image: ./favicon.png
Summary: ❌ 6 - 37 **pirates spatial**
date: 2026-02-22T07:30:16.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
Casual Corp looking for like minded players. Discord is optional. Wee
kly White Star with searches starting on Wednesdays. We have 1-2 open
 spots on our White Star group. 
```
<br>

### [Discord](https://discord.gg/https://discord.gg/XAcW8fk2)
### Whitestar Bonus ❌ 11%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1075 🔻  (-4)|
| ELO Competitive | 1166 🔻  (-1)|
| Total Matches | 49 |
| Wins | 17 |
| Losses | 31 |
| Draws | 1 |
| Streak Record | 5 |
| Flagship | 7 |

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
        let timestamps = [1771313416,1770398270,1768670011,1766456292,1761785083,1759342187,1756884402,1754500231,1753313922,1750680802,1749354061,1748652716,1747913188,1747212449,1743151469,1725710631,1724276947,1723627221,1721853594,1720835416,1718788269,1717327170,1715881841,1714922202,1714424234,1713788159,1713350106,1712741640,1712146690,1711534310,1710932164,1710335432,1709735993,1709120616,1708528952,1707921346,1707308726,1706707301,1706101761,1705493821,1704883484,1704276142,1703596371,1702924501,1702276828,1700658379,1700046707,1699455786,1698948546];

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
| [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) | 0 | 2 | 0 | 2 |
| [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) | 0 | 2 | 0 | 2 |
| [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) | 2 | 1 | 0 | 3 |
| [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) | 1 | 1 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/22 | 6-37 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ✅ | 2026/02/11 | 30-0 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2026/01/22 | 7-16 | [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) |
| ❌ | 2025/12/28 | 8-34 | [Warriorlords](https://ws.tsl.rocks/corp/a78c29b9e1c9f793205ba10d796dcabc114ef43d86f0bd34a43a56dc6da768aa/) |
| ❌ | 2025/11/04 | 2-27 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ❌ | 2025/10/06 | 6-19 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ❌ | 2025/09/08 | 2-23 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ❌ | 2025/08/11 | 8-26 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ✅ | 2025/07/28 | 12-3 | [Space Pirates](https://ws.tsl.rocks/corp/87eff6e453b6f020baf8cb8930236b566161e22814cdbdc77d696c5812684bc6/) |
| ❌ | 2025/06/28 | 0-48 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ❌ | 2025/06/13 | 8-21 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2025/06/05 | 6-11 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ✅ | 2025/05/27 | 39-4 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ✅ | 2025/05/19 | 25-5 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2025/04/02 | 8-40 | [ГОРИЗОНТ](https://ws.tsl.rocks/corp/fc3e048fc6343ca1150c739ea0ee3851e467726090f1a6be2e8ce1f4851c7362/) |
| ❌ | 2024/09/12 | 0-31 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2024/08/26 | 2-38 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ❌ | 2024/08/19 | 3-43 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/07/29 | 2-18 | [Торг\. федерация](https://ws.tsl.rocks/corp/915f197e5951f44128c2a3d3126141cd44b3c67a361158d2b220a5883e410310/) |
| ❌ | 2024/07/18 | 1-13 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ✅ | 2024/06/24 | 13-1 | [King's Guard](https://ws.tsl.rocks/corp/39833a864277b04f9bad126a54a03bfa2c9f9473d3e504b3579cbdc18a4d7e75/) |
| ❌ | 2024/06/07 | 11-36 | [Space Marshalls](https://ws.tsl.rocks/corp/6a41cc36abf3a28a1c26bc22843f1892d6938e8eb1e8f8a10fd9e6e964e06c2c/) |
| ❌ | 2024/05/21 | 4-19 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/05/10 | 16-32 | [Ironbear Legion](https://ws.tsl.rocks/corp/256873683be88bf78e3d4f1fda68e669c8be11e78a85f9add19e60facc9831b0/) |
| ✅ | 2024/05/04 | 47-0 | [Aeternae](https://ws.tsl.rocks/corp/05ad49bd809f330a794a7d0278a5e21b110b79ebb26ff8d28a25e8a2f1bcb7c8/) |
| ❌ | 2024/04/27 | 3-25 | [pirates spatial](https://ws.tsl.rocks/corp/3ff4602678e19275d9891fa0d9d34ecd5b9bfaf88bb39e35b30372cac2981a40/) |
| ❌ | 2024/04/22 | 19-39 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ❌ | 2024/04/15 | 4-15 | [Dumpster Fire](https://ws.tsl.rocks/corp/f191bf7efb93ca805453b3e11aef9278976a4c70fe9790e7813f28fcdf899121/) |
| ✅ | 2024/04/08 | 30-16 | [ProyectCorp](https://ws.tsl.rocks/corp/ac76fbb017abc5511e6d39625245f0cd8f145ef5ba96ae1760d7f2389b5e0fe1/) |
| ✅ | 2024/04/01 | 49-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2024/03/25 | 14-30 | [Ark Summit](https://ws.tsl.rocks/corp/5940b759f3f833f4c6b35733e1f642a64d5589c1c692e34d030383be08e95e02/) |
| ↔️ | 2024/03/18 | 30-30 | [Int\. Trading Co](https://ws.tsl.rocks/corp/6978edb31cfa5778f4e28d2477e5db050fd8bf44105dc25871490d0cffaf4bf7/) |
| ✅ | 2024/03/11 | 35-6 | [혁명군](https://ws.tsl.rocks/corp/712800536cbb3ef3357a2480d86cf971596950ac499e699bb3d99f94d1c65f5f/) |
| ❌ | 2024/03/04 | 10-13 | [Game of Stars](https://ws.tsl.rocks/corp/ad5bb68e6076ee70e6715ecead226fc9880b66a87b68acb3098843f723c1562e/) |
| ✅ | 2024/02/26 | 43-4 | [海賊ギルド](https://ws.tsl.rocks/corp/5a1a2bfa07b5ad3ca9bc90a4a86ce8e83d0e61393771fa0ff4c71733bc8879f3/) |
| ❌ | 2024/02/19 | 9-32 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ✅ | 2024/02/12 | 7-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2024/02/05 | 6-24 | [Curcubeu](https://ws.tsl.rocks/corp/a2bdd69ff0d73fcdb3bd9461684b2951dd4df9009b7ea8eae1592efff76e3c59/) |
| ❌ | 2024/01/29 | 3-44 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ✅ | 2024/01/22 | 39-0 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ✅ | 2024/01/15 | 35-4 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2024/01/08 | 34-12 | [Deadspace](https://ws.tsl.rocks/corp/45fc2bf2d1b40361071590e427fa47116d4e5e063064d17ed9933bbd61f04369/) |
| ✅ | 2023/12/31 | 36-6 | [The Picard](https://ws.tsl.rocks/corp/e9a6cae99e308f9c70625e04162b887239bea0d52463d7a3ed53464fdd906d0b/) |
| ✅ | 2023/12/23 | 24-8 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2023/12/16 | 9-16 | [Enigma](https://ws.tsl.rocks/corp/d901fe833fb2f84db2321a90a63d0466d4288c8c727fb177afdc6bf2c7c56f25/) |
| ❌ | 2023/11/27 | 3-41 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2023/11/20 | 6-24 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2023/11/13 | 5-29 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2023/11/07 | 19-7 | [West Worlders](https://ws.tsl.rocks/corp/aad051ec6b980cc52fb4777aef113d9e28a72aab40fda65aa9cdbf477b8e390a/) |

---
Corporation ID: 0625bb885137c3824ac346b97780181e23ee84562237eb345baa364f8d7d3c43

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771745416"></span>
</div>