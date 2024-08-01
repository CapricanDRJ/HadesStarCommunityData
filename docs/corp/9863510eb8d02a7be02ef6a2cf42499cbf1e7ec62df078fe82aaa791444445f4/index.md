---
layout: page
title: ​КМБ
description: W:5 L:6 D:0 Bonus ❌
date: 1714151062
---
### Whitestar Bonus ❌

| Statistic | Value |
| --- | --- |
| ELO Regular | 1205 🔻  (413)|
| ELO Competitive | 1208 🔻  (492)|
| Total Matches | 11 |
| Wins | 5 |
| Losses | 6 |
| Draws | 0 |
| Streak Record | 3 |


### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ❌ | 2024/04/26 | 3-35 | [Interestelar](https://ws.tsl.rocks/corp/cc9ed2698988a35d6dbb9e9762d6575b28204ab15fd7208b64e8108878a4b8f9/) |
| ❌ | 2024/04/06 | 6-29 | [OntarioDawn](https://ws.tsl.rocks/corp/1a002c71f3aba5da5918941fa2ba4dbbfc183ad52d97d44a25718e07e6b08a03/) |
| ✅ | 2024/03/26 | 14-11 | [2ND\-R8 Corp\.](https://ws.tsl.rocks/corp/e97866623598a98454b3a4724b472dc171f5e1aff84b076c43d021f0fabdc702/) |
| ✅ | 2024/03/14 | 14-6 | [Dark Training](https://ws.tsl.rocks/corp/f889cafae8c2e0c622ae5494ce013504bf204ba00f7c7b44c61985588ee8f53c/) |
| ✅ | 2024/03/02 | 13-3 | [中国星际联盟](https://ws.tsl.rocks/corp/6d595623b3ba17629ed70438d85d84622ba49e733e5d6d57765a9e0a477dfc81/) |
| ❌ | 2024/02/21 | 1-9 | [TheBasics](https://ws.tsl.rocks/corp/8c9069f3ec3e766d51d76851b0d21a0fb065a026e597cfebc7d8cc8cbf2b998f/) |
| ❌ | 2024/02/10 | 0-8 | [Uchiha](https://ws.tsl.rocks/corp/84cbfdcf65b61cfbc76fd507cdad0278bd1469742b77cd098a372506d8f50dbd/) |
| ✅ | 2024/01/30 | 3-2 | [水晶星际集团](https://ws.tsl.rocks/corp/6390d7a4666ac4537ef5eacf76dd1c2f34548cc588aac8dad423c308ad1c0f3d/) |
| ❌ | 2024/01/17 | 0-18 | [Albedo](https://ws.tsl.rocks/corp/8e9848f9867c594384d6a31618213447f358c7b308fee91d20991b80b513fdbb/) |
| ❌ | 2023/12/21 | 2-7 | [СлАвЯнСкИй СоЮз](https://ws.tsl.rocks/corp/74a0e9ceb3b48af60580382b0ee5e8712d9a468b4f947302b81b999cfde3f86a/) |
| ✅ | 2023/12/10 | 1-0 | [德意志第三帝国阿尔法分部](https://ws.tsl.rocks/corp/83f745abaa8bed335f0cba2f66fdbafa4b226d40d8ad145db66795d7c051fb60/) |

Corporation ID: 9863510eb8d02a7be02ef6a2cf42499cbf1e7ec62df078fe82aaa791444445f4

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>

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
        let timestamps = [1713719062,1711993454,1711051149,1709943619,1708954445,1708073096,1707177115,1706176888,1705103460,1702701496,1701782422];

        // Function to convert Unix timestamps to day of the week (0=Sunday, 6=Saturday)
        function getDayOfWeek(timestamp) {
            return new Date(timestamp * 1000).getDay();
        }

        // Initialize an array to count occurrences for each day of the week
        let dayCounts = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1];

        // Populate the dayCounts array based on the scanTime data
        timestamps.forEach(ts => {
            let dayOfWeek = getDayOfWeek(ts);
            dayCounts[dayOfWeek]++;
        });

        // Chart.js configuration for the bar chart
        const data = {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Events by Day of the Week',
                data: dayCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Render the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    });
</script>
    