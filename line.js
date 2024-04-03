var chartDom = document.getElementById('line');
var myChart = echarts.init(chartDom);


// 假设这是你的初始数据
var categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var seriesData = {
  'Email': [120, 132, 101, 134, 90, 230, 210],
  'Union Ads': [220, 182, 191, 234, 290, 330, 310],
  'Video Ads': [150, 232, 201, 154, 190, 330, 410],
  'Direct': [320, 332, 301, 334, 390, 330, 320],
  'Search Engine': [820, 932, 901, 934, 1290, 1330, 1320]
};

// 初始化折线图配置
var option = {
  title: {
    text: 'Stacked Line Dynamic Growth',
    top:-5
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
