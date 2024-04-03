   // chart2.js

   var myChart2 = echarts.init(document.getElementById('main2'));

   var option2 = {
     title: {
       text: 'ECharts 入门示例2'
     },
     tooltip: {},
     legend: {
       data: ['销量']
     },
     xAxis: {
       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
     },
     yAxis: {},
     series: [{
       name: '销量',
       type: 'bar',
       data: [5, 20, 36, 10, 10, 20]
     }]
   };

   myChart2.setOption(option2);