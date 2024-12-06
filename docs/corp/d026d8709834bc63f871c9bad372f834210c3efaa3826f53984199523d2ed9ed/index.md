---
layout: page
title: ​万星联盟
description: W:33 L:4 D:0 Bonus ✅
image: ./favicon.png
date: 1733128703
---
<head>
<link rel="icon" type="image/x-icon" href="./favicon.ico">
</head>
<img align="left" width="50" height="50" src="./favicon.ico" alt="Corp Logo"><img align="right" width="100" height="100" src="./qr.png" alt="QR Code">



```
<color=yellow>本团为星光万丈星际集团第一分团<br>欢迎大家加入<br>集团定期清人，被踢随时欢迎回家<br><color=
red>Q群852308177<br><color=yellow>福利不会自动发放，有需要请找团内或其他分团大佬<br>参白进群后找管理员
报备<br><size=200>不要捐旗舰！qwq<color=yellow>
```
### Whitestar Bonus ✅

| Statistic | Value |
| --- | --- |
| ELO Regular | 1422 🔺  (33)|
| ELO Competitive | 1477 🔺  (69)|
| Total Matches | 37 |
| Wins | 33 |
| Losses | 4 |
| Draws | 0 |
| Streak | 10 |
| Streak Record | 10 |
| Flagship | 3 |

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
        let timestamps = [1732696703,1732676875,1732028414,1732013388,1731503746,1731497134,1731020634,1730991379,1730517201,1730508789,1730014767,1729839567,1729407159,1727789085,1727489487,1726882793,1726358212,1725792973,1725172154,1724682335,1724231864,1723789194,1723278627,1722843792,1722779182,1722357271,1721896560,1720956835,1719478542,1719126913,1718888936,1717458342,1716989374,1716542814,1715944631,1715479536,1714143292];

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
| [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) | 2 | 0 | 0 | 2 |

---
### Match History

|  | Date | Score | Opponent |
| --- | --- | --- | --- |
| ✅ | 2024/12/02 | 19-2 | [северный шторм](https://ws.tsl.rocks/corp/6f96aa1102eb9f74854d6fec810da14ef1d04b0c3ce3e61044affea7ecb920dc/) |
| ✅ | 2024/12/02 | 11-0 | [11th Engineers](https://ws.tsl.rocks/corp/7341e9a33a1baf2162870c795632dcd551d3c624b06456dac041fa049ba67a9a/) |
| ✅ | 2024/11/24 | 27-3 | [Серебряная орда](https://ws.tsl.rocks/corp/8d4aad97eccabbf26608245f090064005878474e1712d6b08f7328df6075450d/) |
| ✅ | 2024/11/24 | 15-5 | [对，进就进人少的](https://ws.tsl.rocks/corp/2b4a8af17754b61359e653f9b3bdd80e0f3498a09bf2323c4365fdf0241988a1/) |
| ✅ | 2024/11/18 | 29-0 | [Gold Star](https://ws.tsl.rocks/corp/4f4d16d4a152e144c7bddd46c7d63debbbd550fdae5fe720860a334546330de2/) |
| ✅ | 2024/11/18 | 10-0 | [小号营地](https://ws.tsl.rocks/corp/e716da4b59355078ca6f014735de218d3fa5e832805efb942d1299b899f2d8b9/) |
| ✅ | 2024/11/12 | 15-0 | [超新星联盟](https://ws.tsl.rocks/corp/c3667794c88fd0a09f565dc3b4fed5325f131a616d01d0f6890755b44997d0a1/) |
| ✅ | 2024/11/12 | 14-0 | [揽月宫](https://ws.tsl.rocks/corp/16a4fe26591408a3f2128646e96c5ec1f82feb35f1f9743aebd2dae05095d2ed/) |
| ✅ | 2024/11/07 | 10-3 | [WhiteSTarfighte](https://ws.tsl.rocks/corp/5693bea442e36f5dbd2e36ed7b4a569f007579198d7ae00bae412c312d311dae/) |
| ✅ | 2024/11/07 | 18-2 | [普罗米修斯](https://ws.tsl.rocks/corp/f39d00b1bbbf87c158931fd887f37a588019d0b1fd4f2441fbc675674b71423a/) |
| ❌ | 2024/11/01 | 2-5 | [国际联盟](https://ws.tsl.rocks/corp/4b25f449617273077d1898d67e79bfe22c803412bb840eb68412fe0ee7224a95/) |
| ✅ | 2024/10/30 | 20-0 | [101](https://ws.tsl.rocks/corp/6b4681e994e78199b26297184be90aaf1928c04f6323f02fc316d25729e121e6/) |
| ✅ | 2024/10/25 | 19-0 | [The Smeg Heads](https://ws.tsl.rocks/corp/4468352a700fed901168b249c273c37c4d32a032977d53e5261f9c596c1e5366/) |
| ❌ | 2024/10/06 | 0-6 | [星际集团](https://ws.tsl.rocks/corp/67927cef3b9a4d68a6d2c19566471f1b50b33eb4591df40d9631d6b6759db55c/) |
| ✅ | 2024/10/03 | 9-3 | [ALPHA](https://ws.tsl.rocks/corp/e30ca8011a6277e53ef6e20d413ae271f480b54849c0746d74231c83fdd3acf4/) |
| ✅ | 2024/09/26 | 10-0 | [OrderofTheGeon](https://ws.tsl.rocks/corp/85f6a14e4f7488eb8134ea422522636da92d121d81297b3018e1e69fac907762/) |
| ✅ | 2024/09/19 | 14-0 | [宇宙联盟（中国）](https://ws.tsl.rocks/corp/f65e4271e098ff050b7e566effe810ba1757388a6eecf4b818ed6c3502743dec/) |
| ✅ | 2024/09/13 | 21-0 | [逐光起航](https://ws.tsl.rocks/corp/e6bb076aa209101b5fa1cbc40a614c241d71ab5eca143c733b81aed6302455e8/) |
| ✅ | 2024/09/06 | 13-7 | [ZORG IND](https://ws.tsl.rocks/corp/61902ac82b4e5d8b9740d8f783424bbf4f0c804602e644fcb3d6e0447457776f/) |
| ✅ | 2024/08/31 | 9-0 | [荣耀之星](https://ws.tsl.rocks/corp/4334fd4d4ffbc89487deaec7bb38025aba46209b810578436882be271fdbff23/) |
| ✅ | 2024/08/26 | 10-0 | [Splendid](https://ws.tsl.rocks/corp/8d0fd2cb62785c9876643edf419b241f0f86e339052e5d3e4fab40b0416828dd/) |
| ✅ | 2024/08/21 | 7-0 | [Poggy Rockers](https://ws.tsl.rocks/corp/47aeb151232251d9e53310e21f1290b1240c63878169968847bd1e89efc909a7/) |
| ✅ | 2024/08/15 | 15-0 | [Stars](https://ws.tsl.rocks/corp/0e1b189f1119cbc08c19cd3809191c65df5fe40514444e31217a0a3611fd8ec3/) |
| ✅ | 2024/08/10 | 5-0 | [舰队联邦\[FF\]](https://ws.tsl.rocks/corp/a416c5b53512093490461bf0dab583fbb401f5850470774f6de02dafe6ca3655/) |
| ❌ | 2024/08/09 | 1-17 | [银星S Stars‘](https://ws.tsl.rocks/corp/ae73bc387e166c41c7df8d5514866f190e7d81ec4286fdd54d78fe1f07ff71b4/) |
| ✅ | 2024/08/04 | 8-1 | [Red Alliance](https://ws.tsl.rocks/corp/72789009cc9ae3283afaad2d17fcfbd83e52175a6d6e4ec1a7161ef38645b0d8/) |
| ❌ | 2024/07/30 | 4-5 | [第四星际](https://ws.tsl.rocks/corp/42d38d5f95c493cb1822f0c89a5366e532a9dc30c0019e03cf7ddd280bf55040/) |
| ✅ | 2024/07/19 | 5-2 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ✅ | 2024/07/02 | 5-0 | [火洋之心](https://ws.tsl.rocks/corp/99cb105316e2715545c205443c4e331cd11832753eac1c21e11ae3d532e36bcb/) |
| ✅ | 2024/06/28 | 1-0 | [Nexland Ind\.](https://ws.tsl.rocks/corp/d944d7c48fcdf12fbe80bbfaec82482895285c344a643e8e679fc22617a2c44a/) |
| ✅ | 2024/06/25 | 5-3 | [Anarchy Nation ](https://ws.tsl.rocks/corp/9c456dbf32e22070620021bf0bea4d2ab9deb0ac7ad4be06a4067a9ced5f2f5b/) |
| ✅ | 2024/06/08 | 3-0 | [以太超星团](https://ws.tsl.rocks/corp/327addf616128dc5b01013e29e850c76d22ae27af199bcc6bba3b92cee7818ae/) |
| ✅ | 2024/06/03 | 8-0 | [雪月永恒](https://ws.tsl.rocks/corp/3b30781263716daadc217687009247bd0acb28c7eb4a8ebfe37daa11142622c2/) |
| ✅ | 2024/05/29 | 4-0 | [蓝色星系一号分盟](https://ws.tsl.rocks/corp/e0f054888d7f0127596210e18c6714dc3bd228748e8f6822d1a091514d6264b8/) |
| ✅ | 2024/05/22 | 9-2 | [МеГаКо](https://ws.tsl.rocks/corp/11cd7fa53aad1bfc7d40c47a63de7b6c4a6d76f00e69dcb853f47e2c90b382dd/) |
| ✅ | 2024/05/17 | 4-0 | [Venture](https://ws.tsl.rocks/corp/a48bd30701e4a563543ff54e7c8091cc6b5d0e972c70e4de279a93f4df2f24b0/) |
| ✅ | 2024/05/01 | 14-0 | [STRVS233～](https://ws.tsl.rocks/corp/727f6b88132c5850b1ef7ad02101bab3f97fc5dd191307dffca64181bf41e614/) |

---
Corporation ID: d026d8709834bc63f871c9bad372f834210c3efaa3826f53984199523d2ed9ed

[Hades' Star](https://www.hadesstar.com)
<script src="{{ '/assets/localtime.js' | relative_url }}"></script>
<div>
  Last updated: <span class="last-updated-date" data-unix-time="{{ page.date }}"></span>
</div>