var chartDom = document.getElementById('rank1');
var myChart = echarts.init(chartDom);
var option;

option = {
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 1,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: [
      '千户苗寨',
      '百里杜鹃',
      '乌蒙大草原',
      '安顺龙宫',
      '梵净山',
      '镇远古城',
      '黄果树瀑布',
      '荔波小七孔'
    ]
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [
      { value: 0.2, itemStyle: { color: '#5470c6' } },
      { value: 0.3, itemStyle: { color: '#91cc75' } },
      { value: 0.4, itemStyle: { color: '#fac858' } },
      { value: 0.4, itemStyle: { color: '#ee6666' } },
      { value: 0.4, itemStyle: { color: '#73c0de' } },
      { value: 0.5, itemStyle: { color: '#3ba272' } },
      { value: 0.5, itemStyle: { color: '#fc8452' } },
      { value: 0.7, itemStyle: { color: '#9a60b4' } }
    ],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
};

myChart.setOption(option);