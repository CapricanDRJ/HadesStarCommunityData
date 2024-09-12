---
layout: page
title: ​KLM
description: W:9 L:26 D:0 Bonus ❌
date: 1726031446
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1142 🔻  (1066)|
| ELO Competitive | 1184 🔻  (856)|
| Total Matches | 35 |
| Wins | 9 |
| Losses | 26 |
| Draws | 0 |
| Streak Record | 4 |


# Whitestar Match Day

This chart shows the frequency of days of the week when whitestars were matched in your local timezone

<!-- Load Chart.js from jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1"></script>

<!-- Create a canvas element where the chart will be rendered -->
<canvas id="myChart" width="400" height="200"></canvas>

<!-- JavaScript code to render the bar chart -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Ensure scanTime is an array; if empty, handle accordingly
        let timestamps = [1725599446,1724633653,1723784386,1723158426,1722702853,1721952458,1721429567,1720656284,1720052824,1719443089,1718847171,1718226159,1717639144,1716943402,1716338526,1715748142,1715212435,1714598206,1714119254,1713406602,1712694475,1712112140,1711516886,1707267866,1706686567,1706065405,1705451755,1704686650,1703993664,1702974985,1702257123,1701323201,1700441398,1699686624,1698967480];

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
| [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) | 0 | 3 | 0 | 3 |
| [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) | 1 | 1 | 0 | 2 |
| [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) | 0 | 3 | 0 | 3 |
| [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) | 0 | 2 | 0 | 2 |
| [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) | 2 | 0 | 0 | 2 |
| [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) | 0 | 2 | 0 | 2 |

### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/09/11 | 33-43 | [Famous Assasins](https://ws.tsl.rocks/corp/8a3aea3b3dacfd3dcdb402e896204557e250b07b8a5e04b5814600c66cc1a25b/) |
| ✅ | 2024/08/31 | 24-23 | [ RELAX CZ/SK](https://ws.tsl.rocks/corp/051a82098a716580383e9ab0d025dd67a8e7ad93da00f1610c449a784f3dc825/) |
| ❌ | 2024/08/21 | 15-33 | [IX Легион](https://ws.tsl.rocks/corp/1621eab3bcc1ebffe496faadcde81cd31c503b2ac667ef88fbf2d64ea1f9908b/) |
| ✅ | 2024/08/13 | 46-37 | [Croce del Sud](https://ws.tsl.rocks/corp/d0899d3aea0aaed6c7d87de378c6c82274ff8dcdabad391d44c2f08f98039af1/) |
| ✅ | 2024/08/08 | 48-9 | [UAGC](https://ws.tsl.rocks/corp/1be720217ab52db12c48c73fc6d02f0cd66130efe05373dd97926fac3992557d/) |
| ✅ | 2024/07/31 | 39-20 | [붉은늑대](https://ws.tsl.rocks/corp/43d32b05645aaa9415d1c04ecbcea520d2ed5b90304770cb0ab3813cb86e2f49/) |
| ❌ | 2024/07/24 | 14-37 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/07/16 | 20-23 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/07/09 | 8-22 | [Spacefleet](https://ws.tsl.rocks/corp/517f7b257f68936f7a95a478d6923776a2549b88897bae628fd35b23572d3cbd/) |
| ❌ | 2024/07/01 | 8-41 | [VoidCorp](https://ws.tsl.rocks/corp/b866417e5607f8434347bb5f986e37c4fa7dda68b3882f0135d186043d3f68a3/) |
| ❌ | 2024/06/25 | 13-34 | [Stargate Corp](https://ws.tsl.rocks/corp/b698cd0d86be60954a4b995f79fffe102a71c350e47fbdc2a5827f0ed0ca455d/) |
| ❌ | 2024/06/17 | 10-57 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/06/11 | 0-37 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ❌ | 2024/06/03 | 13-34 | [Internationals](https://ws.tsl.rocks/corp/7ddbb3c057311d12ecc582b5767dc061653f6b7769ea81f82c752ec258aff6cc/) |
| ✅ | 2024/05/27 | 57-4 | [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) |
| ✅ | 2024/05/20 | 24-15 | [Hun Generals](https://ws.tsl.rocks/corp/b2de426f7c65dec5fd6e64e3213d7371358bb6758ddf34d8c69da6c4f5de82c6/) |
| ✅ | 2024/05/13 | 38-16 | [Lost Legion](https://ws.tsl.rocks/corp/451b249473bf36e9f688ffd82a5955f04fc586b1dc545ff81277a4d73af47623/) |
| ✅ | 2024/05/06 | 25-17 | [GDZ](https://ws.tsl.rocks/corp/a04890160268d05cf11f997b0a1c724fbbcfa66b2ea4cb1c4b56ca18d0425d62/) |
| ❌ | 2024/05/01 | 3-29 | [МАРСЮКИ](https://ws.tsl.rocks/corp/c3fa1ee33163a1a29bc7c9c69a933fc3b4d29c0e0e7a720c80fb2f5381b275c8/) |
| ❌ | 2024/04/23 | 20-34 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ❌ | 2024/04/14 | 7-9 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/04/08 | 19-42 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ✅ | 2024/04/01 | 51-0 | [KARI](https://ws.tsl.rocks/corp/4434276aa1aebbe4c0a69ac51dff9c243c5287d00096e12c87e8590318a2ab65/) |
| ❌ | 2024/02/12 | 5-42 | [Legion](https://ws.tsl.rocks/corp/313baaeac1c759ca26e0f4bd3140711cffdfa85c287d4c992dcfb809908cf491/) |
| ❌ | 2024/02/05 | 9-54 | [Ender](https://ws.tsl.rocks/corp/71bc7ab0134ea1a0c057680d9d8465bd65b54fc1c78d9b7b9b582baabfd46e0d/) |
| ❌ | 2024/01/29 | 14-17 | [Grunthal Gang](https://ws.tsl.rocks/corp/0ab98cd1f1b195397b27360ea0dee2527f1504c9f5d4867e719d6f1f73efb01d/) |
| ❌ | 2024/01/22 | 22-56 | [Continuum](https://ws.tsl.rocks/corp/ea5fb17c8fcf67a15bd5a194549206adba2279a79973a34bcfd0abb1e3cf9107/) |
| ❌ | 2024/01/13 | 14-56 | [Bloodtide](https://ws.tsl.rocks/corp/45a33569cb3d53981db18893d92ddeaebd1f7bbc027226150f2c848f336f1905/) |
| ❌ | 2024/01/05 | 15-41 | [русь ](https://ws.tsl.rocks/corp/74b60d3e331a6a56ea4d17f4444f02a50808c013285ee0e0ccd54e4594e5e11b/) |
| ❌ | 2023/12/24 | 4-54 | [GermanIndustrie](https://ws.tsl.rocks/corp/5d5954b2c9b2decd8836f2b7b9aa404e2f4386ae4fa682b54654459282852986/) |
| ❌ | 2023/12/16 | 0-30 | [TROLL SQUAD](https://ws.tsl.rocks/corp/91daecf0251a6a1eee3d92820695d021c1f949e194cc5003d7cdebe59ef4502e/) |
| ❌ | 2023/12/05 | 9-51 | [Curcubeu](https://ws.tsl.rocks/corp/a2bdd69ff0d73fcdb3bd9461684b2951dd4df9009b7ea8eae1592efff76e3c59/) |
| ❌ | 2023/11/25 | 4-43 | [RUS](https://ws.tsl.rocks/corp/d2d651ed0a46443766a7930975f8ee7a4b0ee52e2ffb1d13337e743a3d5bea8d/) |
| ❌ | 2023/11/16 | 0-38 | [BattleCo](https://ws.tsl.rocks/corp/6fedbaaa5e81626ae4028e9ec468585dffa6b131eedb09b88a3ac88b7bca681e/) |
| ❌ | 2023/11/07 | 4-19 | [Final](https://ws.tsl.rocks/corp/77270275648d2f188dea5d234a7428073a451ef4bc3cbd1b274a1d65e5f67c68/) |

Corporation ID: 963e490e64d4703042415d3fcd8267ff87fbfd3383b83d447d29d842f2a446a1

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>