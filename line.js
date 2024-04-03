var chartDom = document.getElementById('line');
var myChart = echarts.init(chartDom);


// 假设这是你的初始数据
var categories = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
var seriesData = {
  '旅游人数': [4747.89, 6262.89, 8190.23, 10439.95, 12913.02, 17019.36, 21401.18, 26761.28, 32134.94, 37630.01, 53148.42, 74417.43, 96858.12, 113526.6, 61781.49, 64436.68, 49206.88, 63558.44],
  '旅游收入': [387.05, 512.28, 653.13, 805.23, 1061.23, 1429.48, 1860.16, 2370.65, 2895.98, 3512.82, 5027.54, 7116.81, 9471.03, 12318.86, 5785.09, 6642.16, 5245.64, 7404.56],
  '人数增长率': [0.532071636, 0.319089111, 0.307739718, 0.274683373, 0.236885234, 0.317999972, 0.257460915, 0.250458152, 0.200799812, 0.170999852, 0.412394522, 0.400181416, 0.301551532, 0.172091715, -0.455797232, 0.042977112, -0.236352959, 0.291657589],
  '旅游收入增长率': [0.593913437, 0.323549929, 0.274947294, 0.2328786, 0.317921588, 0.347003006, 0.301284383, 0.274433382, 0.221597452, 0.212998709, 0.431197727, 0.415565068, 0.330797085, 0.300688521, -0.530387552, 0.148151541, -0.210250882, 0.411564652],
};

// 初始化折线图配置
var option = {
  title: {
    text: '旅游人数和收入变化及其增长率动态折线图',
    top:0
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: Object.keys(seriesData),
    top:20
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: categories
  },
  yAxis: {
    type: 'value'
  },
  series: Object.keys(seriesData).map(function(key) {
    return {
      name: key,
      type: 'line',
      stack: 'Total',
      data: []
    };
  })
};

myChart.setOption(option);

// 动态更新数据的函数
function updateData() {
  var currentIndex = 0;

  function updateSeries() {
    if (currentIndex < categories.length) {
      option.series.forEach(function(serie) {
        var name = serie.name;
        serie.data.push(seriesData[name][currentIndex]);
      });

      myChart.setOption({
        series: option.series
      });

      currentIndex++;
      setTimeout(updateSeries, 500); // 更新间隔为500毫秒
    }
  }

  updateSeries();
}

// 调用函数开始动态更新
updateData();
