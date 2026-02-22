---
title: ​italian warrior
description: W:66 L:116 D:3 Bonus ❌ 15%
image: ./favicon.png
Summary: ❌ 6 - 17 **BlackStar Order**
date: 2026-02-17T18:10:35.000Z
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">

```
<b><size=80><color=blue>Corp. per tutti</color></size></b> (grandi e 
piccoli)

<b><size=40><color=red>WS sempre</color></size></b>


Discord: https://discord.gg/A26JEJgPwh
```
<br>

### [Discord](https://discord.gg/https://discord.com/invite/xGMUwWdzab)
### Whitestar Bonus ❌ 15%

| Statistic | Value |
| --- | --- |
| ELO Regular | 1085 🔻  (-5)|
| ELO Competitive | 1547 🔻  (-4)|
| Total Matches | 185 |
| Wins | 66 |
| Losses | 116 |
| Draws | 3 |
| Streak Record | 5 |
| Flagship | 10 |

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
        let timestamps = [1770919835,1770905110,1770186156,1770183153,1769455724,1769379110,1768910974,1768909772,1768419731,1768391483,1767943796,1767868983,1767304740,1767244951,1766569558,1766559343,1765910367,1765909165,1765301655,1765294142,1764689894,1764675167,1764152315,1764136094,1763523490,1763497655,1762922605,1762863417,1762324988,1762319581,1761650473,1761643563,1760942769,1760936187,1760353575,1760338555,1759746318,1759744215,1759207881,1759207881,1758517244,1758516540,1757918880,1757911971,1757295440,1757281322,1756705033,1756702329,1756104858,1756095846,1755557979,1755554374,1754871046,1754867141,1754410085,1754406778,1753719276,1753718374,1753081937,1753070821,1752467702,1752467402,1751950956,1751949732,1751246908,1751234592,1750729185,1750714464,1750118855,1750109541,1749595365,1749593562,1749122382,1749117238,1748499169,1748468525,1747943245,1747911084,1747333853,1747323333,1746844034,1746838325,1746395711,1746395711,1745835393,1745835092,1745266829,1745256007,1744823277,1744804040,1744354792,1744354492,1743812354,1743802739,1743331813,1743331513,1742875291,1742856664,1742375502,1742375501,1741819879,1741819579,1741333909,1741326754,1740809901,1740774745,1740259098,1740250383,1739818235,1739817633,1739342542,1739309795,1738875865,1738875565,1738379699,1738350852,1737869453,1737820476,1737105277,1737105277,1736367771,1736357551,1735861043,1735788022,1735327996,1734664571,1733955460,1733917292,1733245233,1733244521,1732610164,1732604456,1732164535,1732108041,1731545819,1731530796,1731070706,1730544844,1730537031,1729941743,1729941442,1729498814,1729351868,1728889956,1728732135,1728293362,1728281344,1727769853,1727768351,1727083820,1726599326,1725600347,1725103339,1724233667,1722754837,1721669077,1721194874,1720590764,1720003829,1719489360,1718982091,1718526824,1718081606,1717646956,1717190415,1715670927,1714850395,1710530731,1709015746,1708562610,1708037944,1707417563,1706153152,1705097149,1704332344,1703542884,1702944038,1702144285,1701507729,1701472271,1700995302,1700478358,1699372552,1698706614,1698703307];

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
| [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) | 1 | 2 | 0 | 3 |
| [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) | 0 | 5 | 0 | 5 |
| [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) | 0 | 3 | 0 | 3 |
| [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) | 0 | 4 | 0 | 4 |
| [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) | 3 | 1 | 0 | 4 |
| [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) | 3 | 1 | 0 | 4 |
| [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) | 0 | 3 | 0 | 3 |
| [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) | 0 | 4 | 0 | 4 |
| [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) | 1 | 1 | 0 | 2 |
| [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) | 0 | 2 | 0 | 2 |
| [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) | 1 | 1 | 0 | 2 |
| [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) | 0 | 2 | 0 | 2 |
| [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) | 1 | 1 | 0 | 2 |
| [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) | 1 | 1 | 0 | 2 |
| [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) | 1 | 2 | 0 | 3 |
| [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) | 0 | 3 | 0 | 3 |
| [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) | 1 | 1 | 0 | 2 |
| [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) | 0 | 2 | 0 | 2 |
| [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) | 4 | 0 | 0 | 4 |
| [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) | 1 | 1 | 0 | 2 |
| [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) | 0 | 4 | 0 | 4 |
| [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) | 3 | 1 | 0 | 4 |
| [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) | 1 | 1 | 0 | 2 |
| [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) | 3 | 1 | 0 | 4 |
| [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) | 1 | 1 | 0 | 2 |
| [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) | 2 | 1 | 1 | 4 |
| [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) | 0 | 3 | 0 | 3 |
| [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) | 1 | 1 | 0 | 2 |
| [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) | 0 | 2 | 0 | 2 |
| [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) | 1 | 1 | 0 | 2 |
| [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) | 0 | 3 | 0 | 3 |
| [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) | 1 | 1 | 0 | 2 |
| [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) | 1 | 1 | 0 | 2 |
| [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) | 2 | 0 | 0 | 2 |
| [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) | 0 | 1 | 1 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2026/02/17 | 6-17 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2026/02/17 | 0-49 | [Widow Makers](https://ws.tsl.rocks/corp/ac1ddcbbd45ccdfa74185d7f40b3a67b0b5b477f7b0bd6f3d7a5a7821ee55bdd/) |
| ❌ | 2026/02/09 | 0-43 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2026/02/09 | 1-14 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2026/01/31 | 0-52 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2026/01/30 | 31-54 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2026/01/25 | 72-73 | [русь](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2026/01/25 | 0-46 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2026/01/19 | 4-33 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2026/01/19 | 7-22 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2026/01/14 | 4-22 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2026/01/13 | 3-37 | [Quilliance](https://ws.tsl.rocks/corp/6a4f8febc4066842f85c0373a0d33b6501860f2cc4f61b64761d31ff472c28fe/) |
| ✅ | 2026/01/06 | 10-7 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2026/01/06 | 39-6 | [РОССИЯ](https://ws.tsl.rocks/corp/473fcb2496e83b954ab7590ba0345dcee32d12701ac4174bf92c941d2252a764/) |
| ✅ | 2025/12/29 | 56-9 | [Спутник](https://ws.tsl.rocks/corp/0ae15c4db6dc8c3f4bf3eb6aa93bffd4ea9281b06b721ab103c0078646bfe58c/) |
| ❌ | 2025/12/29 | 0-34 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2025/12/21 | 3-39 | [Providence](https://ws.tsl.rocks/corp/f12fc39ca2326de7c5ce96c005b1953c86430443f1f8b98e7515d082b43b4d4b/) |
| ❌ | 2025/12/21 | 0-38 | [Crazy Elite](https://ws.tsl.rocks/corp/ef64e9014b773074470ead0907b9c122bf6bda753de1cddfa01e95a00e9d47dc/) |
| ❌ | 2025/12/14 | 33-37 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ✅ | 2025/12/14 | 52-29 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ❌ | 2025/12/07 | 3-25 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2025/12/07 | 5-55 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ❌ | 2025/12/01 | 6-32 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2025/12/01 | 6-13 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ✅ | 2025/11/24 | 20-3 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2025/11/23 | 0-53 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |
| ❌ | 2025/11/17 | 0-34 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ✅ | 2025/11/16 | 10-3 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ✅ | 2025/11/10 | 27-5 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2025/11/10 | 4-13 | [Españoles](https://ws.tsl.rocks/corp/cf66069ff643cba9698afa591edab643607ea729973280dac06b6ea7e61e5ee2/) |
| ❌ | 2025/11/02 | 4-34 | [Stellar Exports](https://ws.tsl.rocks/corp/44e91582df527f0e9d3977b4c713db38b9c73a98e95ba353eccdcc601e64d027/) |
| ❌ | 2025/11/02 | 6-34 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2025/10/25 | 6-25 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ❌ | 2025/10/25 | 4-14 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2025/10/18 | 3-27 | [Soul System](https://ws.tsl.rocks/corp/1723dea490699d1ea8c63e03979aef391a21033bf22d9836452a37542cfc238e/) |
| ❌ | 2025/10/18 | 5-46 | [Неизбежный Рок](https://ws.tsl.rocks/corp/a075d54242806374b2fc020c48e0e4ab4077ac72faeeae7568400e0e48790289/) |
| ✅ | 2025/10/11 | 17-6 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ❌ | 2025/10/11 | 1-38 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ✅ | 2025/10/05 | 23-10 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2025/10/05 | 4-18 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/09/27 | 1-30 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ✅ | 2025/09/27 | 32-5 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/09/20 | 37-6 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2025/09/20 | 0-37 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/09/13 | 2-44 | [White Dwarf](https://ws.tsl.rocks/corp/02293e0ec2e4f96dcdcf4551de1cfa6a278a4c53ac62e80c4212912fa4eda15b/) |
| ✅ | 2025/09/12 | 12-5 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ✅ | 2025/09/06 | 19-3 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2025/09/06 | 5-27 | [AlSounT](https://ws.tsl.rocks/corp/b876a825b43edd1e21a7cc515addeb62a832c1126a5e591e562f6475572788d1/) |
| ❌ | 2025/08/30 | 1-28 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ❌ | 2025/08/30 | 13-25 | [Nearland Ind](https://ws.tsl.rocks/corp/d8104c7dc7af4c8fec4c36c1425f9fe855a195bf4befb2595cad4f8f7bed7ddc/) |
| ✅ | 2025/08/23 | 35-7 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ❌ | 2025/08/23 | 16-36 | [Planet Express](https://ws.tsl.rocks/corp/be13b17a002cf203ab2a5a31d6c8024e7458b8eac569eb576be7f30844979c99/) |
| ❌ | 2025/08/16 | 6-41 | [六大天神](https://ws.tsl.rocks/corp/28f06b2ed8c2d55fe437095ed09cf6559986f0bb3ea5ff99509341b5dbf04d65/) |
| ✅ | 2025/08/15 | 23-14 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ✅ | 2025/08/10 | 40-15 | [SNSS](https://ws.tsl.rocks/corp/ce1ae2e5f50044147f2bd8f656c00124d925211038e4ecd23d79c1bd724a8b45/) |
| ❌ | 2025/08/10 | 7-16 | [Schnuppenfarm](https://ws.tsl.rocks/corp/d744c5acdddfd2b097e4bdad7d855af86571ef171b176ae601d44d74628de5f9/) |
| ✅ | 2025/08/02 | 27-4 | [Peace Keepers](https://ws.tsl.rocks/corp/7ac71c394c017639785b3ecaa8087bd3b9a9d134e05d22703a3e18217da3380d/) |
| ✅ | 2025/08/02 | 39-3 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2025/07/26 | 23-0 | [SternenStaub](https://ws.tsl.rocks/corp/11f1e8a4d522eaef8cb40c95d07b4533097aa6509ddafd1d7efc1449e8b10f38/) |
| ❌ | 2025/07/26 | 9-10 | [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) |
| ❌ | 2025/07/19 | 3-33 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2025/07/19 | 19-5 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2025/07/13 | 0-29 | [DTC](https://ws.tsl.rocks/corp/4be10b4fa74e6bc45ea50d720527bec8db0312f419a419f203b09350d663c755/) |
| ❌ | 2025/07/13 | 3-29 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2025/07/05 | 12-38 | [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) |
| ✅ | 2025/07/04 | 25-3 | [\*СССР\*](https://ws.tsl.rocks/corp/65faf5c743dd419a1573d1c665f229a41f1724e27d160e5d2b01a4417a707e0e/) |
| ❌ | 2025/06/29 | 13-38 | [ʙᴌᴧᴐᴋ Ṣօᴌᴧᴙɨṣ](https://ws.tsl.rocks/corp/85a74d128f924274446b7fb754136e6ef7185c754df2fae3b10591d28536f17a/) |
| ✅ | 2025/06/28 | 30-1 | [碧霄殿](https://ws.tsl.rocks/corp/7e12fd0fd0a01af1c797f73316b305a21078e46bd75758850438f20357276ebf/) |
| ❌ | 2025/06/22 | 1-51 | [RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2025/06/21 | 18-44 | [Ƭιтαηѕ Ф тєʀʀσƦ](https://ws.tsl.rocks/corp/61696db57416971a365d3034c85eb5815c9ff04c0fbe5fa4be99689883df54af/) |
| ❌ | 2025/06/15 | 21-27 | [Trade Station](https://ws.tsl.rocks/corp/7003e286fe1a04aaa63e3aa318c164856c07e251a94b0496757140f5eda72cd7/) |
| ✅ | 2025/06/15 | 59-0 | [Best](https://ws.tsl.rocks/corp/bd123b7fcde92215ca4105138efc2319522ee5f2e23c925a0f2aa73adf49261a/) |
| ✅ | 2025/06/10 | 28-18 | [Star Wars](https://ws.tsl.rocks/corp/2dd3aee3667c5c190079cc378773d809ece1b146bc0a16fce6c46663fc3b6992/) |
| ❌ | 2025/06/10 | 8-37 | [Ещё один Миф](https://ws.tsl.rocks/corp/b091930b1e7a5540c2cfaa75d184dc82314a1248bbd6e4daae0867f3f248a19f/) |
| ❌ | 2025/06/03 | 11-19 | [Farland Ind\.](https://ws.tsl.rocks/corp/9e0cb5f9ee7451cf8b55ed7f18717a42c7b58995a2717b83f6f98b7872b38e3f/) |
| ❌ | 2025/06/02 | 4-24 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ✅ | 2025/05/27 | 19-14 | [Tormenta](https://ws.tsl.rocks/corp/537807f41149f54b040d4f2bc983c7f1fbfa2242ec5566371330e4996e33a195/) |
| ✅ | 2025/05/27 | 45-17 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2025/05/20 | 14-54 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2025/05/20 | 33-9 | [仙女座星雲](https://ws.tsl.rocks/corp/e8532ebca58cb402f027fdb3db24507799f38a7123ef124fae8ab7591dac77bd/) |
| ❌ | 2025/05/15 | 10-44 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2025/05/15 | 8-18 | [Death Starz](https://ws.tsl.rocks/corp/72050a78d7a3b399e8a6579f780941b77e870b86e7ae26abe0e9f4aaf3b73371/) |
| ❌ | 2025/05/09 | 18-35 | [Highlife](https://ws.tsl.rocks/corp/e667e116808de19118853c1729815a3431a83531f951514ab8aa77a345cc8e40/) |
| ❌ | 2025/05/09 | 33-44 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2025/05/03 | 9-27 | [Rogue One](https://ws.tsl.rocks/corp/7ae9b210fd68f3dfa93682a1191388e569dc54fe9d762f02110cd7ac9c1d4477/) |
| ❌ | 2025/05/03 | 40-44 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ✅ | 2025/04/26 | 32-13 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ❌ | 2025/04/26 | 10-32 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2025/04/21 | 23-11 | [Nine's Own Goal](https://ws.tsl.rocks/corp/fd47245550708347721e341d893b73e7c23e0f3624053c47ce666e55641c9e9e/) |
| ❌ | 2025/04/21 | 8-31 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ❌ | 2025/04/16 | 5-25 | [Argentina 1\.0](https://ws.tsl.rocks/corp/582e7dce954da49eb68cdf263806d5b8f37da4c81a6eef072e63102be0fa5449/) |
| ❌ | 2025/04/16 | 2-18 | [СССР](https://ws.tsl.rocks/corp/9291f24e53a2d2d23f3f2fa934a9db2247ebfc94e3a48666dbdf0e2d160c4cfd/) |
| ❌ | 2025/04/10 | 3-26 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ❌ | 2025/04/09 | 24-41 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ❌ | 2025/04/04 | 7-16 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2025/04/04 | 31-22 | [Gummibärenbande](https://ws.tsl.rocks/corp/7111d11716d236254b3fe2fdc0df09519cbed1ee9cc2c7691983534a3d8e1366/) |
| ❌ | 2025/03/30 | 11-107 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ❌ | 2025/03/29 | 5-22 | [星舰月球](https://ws.tsl.rocks/corp/b9a3e1e7fd3a235db7f440974db9210dc9a3b85c39fd437099f32f53cfe1e21c/) |
| ❌ | 2025/03/24 | 11-25 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2025/03/24 | 13-16 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2025/03/17 | 35-0 | [Hamburg AG 2](https://ws.tsl.rocks/corp/d4075195191cabef801494d3accc0e6cc8c09f534fd9203f6e43c9930acffa56/) |
| ✅ | 2025/03/17 | 22-19 | [Crux Cadre](https://ws.tsl.rocks/corp/41cdba59897d5e01412601b648c1a692368d92c198123f9ab442f2a23464b375/) |
| ❌ | 2025/03/12 | 16-35 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ❌ | 2025/03/12 | 21-44 | [E\.T\.A](https://ws.tsl.rocks/corp/33dd13a30f1fb86a48aa1e97053cb0d1d12985b0fc5f258edb5f36632dd42082/) |
| ❌ | 2025/03/06 | 4-44 | [Blood Hounds](https://ws.tsl.rocks/corp/e2741eb5c16b8ee8bb67a529e90c2891eaa23eddfb2a911cc0f3687d5a47c75e/) |
| ✅ | 2025/03/05 | 23-14 | [Ahamkara](https://ws.tsl.rocks/corp/33ddc1c3cba50fc92a3d29f65101d92d6967303e9c9acf6ff07064801bbecab8/) |
| ✅ | 2025/02/27 | 16-10 | [СОЮЗ](https://ws.tsl.rocks/corp/068cec010bfee0723895562d4bf580b93628758a762b6918d384fef632d281ab/) |
| ✅ | 2025/02/27 | 49-5 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2025/02/22 | 7-20 | [Created](https://ws.tsl.rocks/corp/04182a4606d981d1c410b0c058248e428765c672442d912ec47218ace9004e74/) |
| ❌ | 2025/02/22 | 33-48 | [Sith Empire](https://ws.tsl.rocks/corp/7deb3943434ee3aa56bb4c29a0fb0831bcbc4b570a58a2809ea1a549b7df328e/) |
| ✅ | 2025/02/17 | 45-4 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ✅ | 2025/02/16 | 20-0 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ❌ | 2025/02/11 | 2-28 | [FURIA 2\.0](https://ws.tsl.rocks/corp/9c52bc79384398f4052be65dc0f7ee091ac2d3cf14488efd1f4e3310b1f12574/) |
| ✅ | 2025/02/11 | 31-16 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2025/02/06 | 21-6 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ✅ | 2025/02/05 | 28-4 | [Free Thinkers 2](https://ws.tsl.rocks/corp/9fc879b45c4053ac93d6eebdb14d856a828df8fd85800df616cdd3332683a695/) |
| ❌ | 2025/01/31 | 25-31 | [Fleet Corp Ares](https://ws.tsl.rocks/corp/8ceac360859239e9b9386b5e4a0c3d3c7e75941b010804ab8b405d9eb6f806f6/) |
| ✅ | 2025/01/30 | 19-0 | [柯伊伯带试炼塔](https://ws.tsl.rocks/corp/dde335e4db20006ce28e1c1cf1cf3bbe510a97c5915b67cb2e31400e98291ca1/) |
| ❌ | 2025/01/22 | 18-19 | [UKR Spase](https://ws.tsl.rocks/corp/e7fccd6d3669688f2a3eabd6b676436018d6566397ab5dab1897d1a2a47f2015/) |
| ❌ | 2025/01/22 | 10-17 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2025/01/13 | 11-22 | [Corp\. Estelar](https://ws.tsl.rocks/corp/aec01be59075af2b2995f74e3e14f47e2b3ce1bd3b74abc78200a1d6330b8a72/) |
| ✅ | 2025/01/13 | 24-3 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ↔️ | 2025/01/07 | 7-7 | [柯伊伯带](https://ws.tsl.rocks/corp/fc3e5142b08821a025c19f7e687a2ba97cc1e728d81555f077feb04f3839c4a0/) |
| ❌ | 2025/01/07 | 13-40 | [EZCO](https://ws.tsl.rocks/corp/cfad990cabcdc1326c0aa3f93a57d1f0e6ec3cd2949e01e6b08443c3af8282f1/) |
| ↔️ | 2025/01/01 | 24-24 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ❌ | 2024/12/25 | 13-35 | [BlackStar Order](https://ws.tsl.rocks/corp/e75857448fb1e8d620c964ec4abe23f7e07374a4a70fde79f655862152e8f428/) |
| ❌ | 2024/12/16 | 5-15 | [Croce del Sud](https://ws.tsl.rocks/corp/d0899d3aea0aaed6c7d87de378c6c82274ff8dcdabad391d44c2f08f98039af1/) |
| ❌ | 2024/12/16 | 3-19 | [Imperium](https://ws.tsl.rocks/corp/9e2ab6b52a6e6684059b31f08966101f380a17c9a782d2a39434093e835fb17d/) |
| ❌ | 2024/12/08 | 1-27 | [Brodudes Inc\.](https://ws.tsl.rocks/corp/774cdb53f03dd3b0e510fddcc7f25a9f8017a46393076d1acf45954241305466/) |
| ❌ | 2024/12/08 | 3-25 | [Newbs](https://ws.tsl.rocks/corp/86135933491fcabc312904612bdca55124f9265aa6a5f3cb42f66427020fdb0b/) |
| ✅ | 2024/12/01 | 15-11 | [Ark](https://ws.tsl.rocks/corp/febd79d038ed9af667e201309060d9662ba825ba9be2b5b95418ac20a8e70c80/) |
| ✅ | 2024/12/01 | 15-0 | [АНДРОМЕДА](https://ws.tsl.rocks/corp/1e4e3bc5f21c0b6cd362f404b88f09e18e26a8c0134a31015d6d7577a7230dc9/) |
| ❌ | 2024/11/26 | 28-29 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/11/25 | 28-0 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ✅ | 2024/11/19 | 21-15 | [GhostNakcoorp](https://ws.tsl.rocks/corp/0a15ae22cdfbd88694d3067838a78bea07746ec95f3784b3f65d77fe47d76312/) |
| ✅ | 2024/11/18 | 3-0 | [Red\_Coat\_Mafia](https://ws.tsl.rocks/corp/f5825bb96dc9d061496fcea5926a16ba159a26ccd5518f8e63583c52fb68dd29/) |
| ✅ | 2024/11/13 | 40-3 | [华夏舰队](https://ws.tsl.rocks/corp/abd6d05a100ffdde2d15abd725a209bfbbf069b60b10ddeac88e88da66191472/) |
| ✅ | 2024/11/07 | 25-13 | [Lacuna Ind\.](https://ws.tsl.rocks/corp/09f1be75e07236be87e2fa3f6e2f82f396666cd220f25f1250ba8b9e71e1e1b7/) |
| ❌ | 2024/11/07 | 6-19 | [星を継ぐもの](https://ws.tsl.rocks/corp/107aa372f22d23bb567b3a7fefd3442d93a2984204d7189bbb0fed1ee976ede2/) |
| ✅ | 2024/10/31 | 25-15 | [Looping](https://ws.tsl.rocks/corp/08524086f45f2e6109e583baf940197663aa3e155c32fcdbb04f319343a5eb0c/) |
| ❌ | 2024/10/31 | 0-27 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2024/10/26 | 23-6 | [Zvezdec](https://ws.tsl.rocks/corp/7bce2af674b8fb313f43e497201ad86b230571cc3e200f44132be528eb4076d9/) |
| ❌ | 2024/10/24 | 3-37 | [Sprite](https://ws.tsl.rocks/corp/3bf5d300b42f0610355645e2ee9cf24e5517a2c5e12472f685781051619266ac/) |
| ❌ | 2024/10/19 | 19-34 | [Hellfire Club](https://ws.tsl.rocks/corp/c7836cb5499149d8631d0f49b7e91f08f0cf47c3bd10a9492ad6a3f7c25d7eab/) |
| ❌ | 2024/10/17 | 3-14 | [SILVER TERRA](https://ws.tsl.rocks/corp/60e0173f2a13dc7ad21bb11315df4bdc5f9bf97737ba3b89c0d035621fc2766f/) |
| ✅ | 2024/10/12 | 8-0 | [You win](https://ws.tsl.rocks/corp/ef294c88bc4f619d194e6b676f35ad1bfb559c9059d0aa53d22e49235f9d43aa/) |
| ✅ | 2024/10/12 | 27-7 | [The X \- Files](https://ws.tsl.rocks/corp/f13cb0ae2dbb0654a2067c8749f86bce49edc5b520bd391c7af11948f23a41fb/) |
| ❌ | 2024/10/06 | 0-15 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2024/10/06 | 4-35 | [Mercury Sunset](https://ws.tsl.rocks/corp/2771ec0a0e9523f8a7b62dd470c9ab87bf2bcf2b13fb47f6f97ea826337b2b20/) |
| ❌ | 2024/09/28 | 23-34 | [On en a Gros \!](https://ws.tsl.rocks/corp/eee919ee67cd5b7eb62548219cd7981660ab85d08ab0fe23b83f1849ca6cf8c6/) |
| ❌ | 2024/09/22 | 51-73 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ✅ | 2024/09/11 | 23-4 | [Regulus](https://ws.tsl.rocks/corp/2ac7f4a924f351d9e8a57c7bd7cb88bb810dd028acab61baf5f38f0ffc7cf559/) |
| ❌ | 2024/09/05 | 17-21 | [BrazilCorp\.](https://ws.tsl.rocks/corp/623f28fa77360220e64570e6493ec911dc1e814d1686305b7879da48d808d1cf/) |
| ❌ | 2024/08/26 | 18-32 | [Tuatha De Danan](https://ws.tsl.rocks/corp/7741dbd0c9e7ddbc162e374691cb3346e4bb6600840f7962ec4a4414d5d2f780/) |
| ❌ | 2024/08/09 | 2-33 | [ДИВЕРСАНТЫ](https://ws.tsl.rocks/corp/888c6867d19667e4ed2d1c33723960d52d5f92fd8a93eb6ff380d218604939fb/) |
| ❌ | 2024/07/27 | 16-38 | [Omega Alpha](https://ws.tsl.rocks/corp/b6e23a3f1f3a3c735c694624b273dcd7da2f8bd13a5ac2b36a8ad39737b1d062/) |
| ↔️ | 2024/07/22 | 35-35 | [Hexacropians](https://ws.tsl.rocks/corp/1663ae68266882a1c09b5a4e5a16b97770e86390b7af7bcfc66b46213334a3a2/) |
| ❌ | 2024/07/15 | 14-35 | [Слава Украине\!](https://ws.tsl.rocks/corp/15bb6468a62584f5281a81614dde743b4bbf2196289e4c346da53f96e2e140c1/) |
| ✅ | 2024/07/08 | 40-1 | [Октябристы](https://ws.tsl.rocks/corp/04bc2e393574e6987401e2851108ad114745016e9bec7b70cb49fc31d1981496/) |
| ❌ | 2024/07/02 | 23-33 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/06/26 | 38-8 | [Bunker](https://ws.tsl.rocks/corp/583eeb4aaa577ce5d9806fc637f83d7c02b2a29fa2d47eb38fd658be8ef93588/) |
| ✅ | 2024/06/21 | 17-9 | [Свободный флот](https://ws.tsl.rocks/corp/48fb866b3a51175a06336d9caa1bcace6d2bfb94b0a93974c8be3f54050fc0c6/) |
| ✅ | 2024/06/16 | 46-8 | [Scar](https://ws.tsl.rocks/corp/1fd57b7d50b68cb3883fd58e596f496821ebcc82dee1915bb7f34a402b03c44a/) |
| ✅ | 2024/06/11 | 35-5 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ✅ | 2024/06/05 | 29-10 | [death squadron](https://ws.tsl.rocks/corp/7177b5a598ff387d35b2348e1ec750a9f237fbf70d8016207ea3da1619c44e5b/) |
| ❌ | 2024/05/19 | 4-5 | [lonewolf](https://ws.tsl.rocks/corp/216c1ab0bb2cbf918019c0a38a37820a9d5d78d7c5801983ed6e3b17bebdc5f3/) |
| ✅ | 2024/05/09 | 23-0 | [111](https://ws.tsl.rocks/corp/8d75e4e46c8d7085ee9d2a2cea20a90129b724ea01c8a20b2f43f83bf3de2350/) |
| ❌ | 2024/03/20 | 4-28 | [украина№1](https://ws.tsl.rocks/corp/c764dc8c07d1ae2ce06aba821c24a7106f169a21b59e724b0216cd8586cde6a6/) |
| ❌ | 2024/03/03 | 19-32 | [Hand Of NOD\!](https://ws.tsl.rocks/corp/7d28fa95e1d2f344dc6cca0d3283c64b829b79b2afb7e3df8faaaa22ce5a1bf9/) |
| ✅ | 2024/02/27 | 28-9 | [Death Flight](https://ws.tsl.rocks/corp/b343459f43f0a7c366dd05dcac02d78c7a8d6cf09c7241e9b558a92e2456e1d4/) |
| ✅ | 2024/02/20 | 27-0 | [Killer Shadow](https://ws.tsl.rocks/corp/e90d22a90153c1fd6c2f02d7d408f1cba9abb2de7f76c38fe7b1aa769df23de7/) |
| ✅ | 2024/02/13 | 14-2 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/01/30 | 7-35 | [The Seperatists](https://ws.tsl.rocks/corp/f7afefdba007366512764be38eb9c404704e5d4de919e7df2b17560324bbb56f/) |
| ❌ | 2024/01/17 | 8-11 | [혁명군](https://ws.tsl.rocks/corp/712800536cbb3ef3357a2480d86cf971596950ac499e699bb3d99f94d1c65f5f/) |
| ❌ | 2024/01/09 | 5-12 | [世外桃源](https://ws.tsl.rocks/corp/7692df8056cb0736bfc429336e43c74a12d3a237305a08cef10617650dc020db/) |
| ❌ | 2023/12/30 | 3-31 | [Alpaca Haven](https://ws.tsl.rocks/corp/e93a2f2efda24a65c8ee7eb57fbb269e19b2b1c28a67c6c7c3339b8c90f7726b/) |
| ❌ | 2023/12/24 | 3-10 | [Frontier X](https://ws.tsl.rocks/corp/ebedc8d55c207f7d93561245eeca1470119a91f985f216d40f681c9c040b9c4e/) |
| ❌ | 2023/12/14 | 7-47 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ❌ | 2023/12/07 | 1-16 | [Likapa](https://ws.tsl.rocks/corp/430376e86f786afe6d4201e70b5fd09f2cdd41ca6d81ee693737e3361c06a1f4/) |
| ❌ | 2023/12/06 | 4-13 | [Odessa](https://ws.tsl.rocks/corp/f509f71fafc573fb7aad51ddd9d82668162fe80073506ca5dc2e68cb795cffea/) |
| ✅ | 2023/12/01 | 12-8 | [Hades' 420](https://ws.tsl.rocks/corp/e83b8d576f0efe37e0cdc115b709de051fc57c51a2183f4cb399421766660a73/) |
| ✅ | 2023/11/25 | 22-5 | [Peak Extraction](https://ws.tsl.rocks/corp/b656a84b60d6de62745eb9059a703b44cca76b6247beeceef5f856f89e4c2d0d/) |
| ❌ | 2023/11/12 | 6-31 | [OntarioDistrict](https://ws.tsl.rocks/corp/dc46145cd9b027168631d405d5620e9e03d335aa34416d124ca5901c074d85ec/) |
| ❌ | 2023/11/04 | 2-16 | [brit boys](https://ws.tsl.rocks/corp/1b37d746045178a34153b75c717add2f45fe50a4e280d1e5a8d7482ff700d2e8/) |
| ❌ | 2023/11/04 | 10-25 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |

---
Corporation ID: 250e012fb7b1b538e15fd2775ee25239b9c59b999c6c3271340cc97d4654df79

[Hades' Star](https://www.hadesstar.com)
<script src="/assets/localtime.js"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="1771351835"></span>
</div>