const chartDom = document.getElementById('rank3');
const myChart = echarts.init(chartDom);
// Generate data
let date = ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
// 人数单位：万人
let manNum = [1.13, 6.17, 6.44, 4.92, 6.3, 8.12, 10.34, 13.18];
// 收入单位：千元
let incomeNum = [12.3, 5.7, 6.6, 5.2, 7.4, 9.50, 1.20, 1.50];
// 人数增长率单位：百分比
let manAdd = [17.21, -15.58, 4.30, -23.64, 29.17, 28, 27, 28];
// 收入增长率单位：百分比
let incomeAdd = [30.07, -33.04, 14.82, -21.03, 41.16, 27.76, 27.35, 27.51];

// option
let option = {
    // backgroundColor: '#0f375f',
    title: {
        text: '景区人数增长，收入预测（2024-2026）',
        top: 0 // 调整标题的位置
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        },
        top:20
    },
    xAxis: {
        data: date,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: { show: false },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    // 旅游人数	旅游收入	人数增长率	旅游收入增长率

    series: [
        {
            name: '人数增长率(%)',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: manAdd
        },
        {
            name: '旅游人数',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                borderRadius: 5,
                color: function(params) {
                    if (params.name === '2024' || params.name === '2025' || params.name === '2026') {
                        return 'red';
                    } else {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#14c8d4' },
                            { offset: 1, color: '#43eec6' }
                        ]);
                    }
                }
            },
            data: manNum
        },
        {
            name: '旅游收入增长率(%)',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(20,200,212,0.5)' },
                    { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                    { offset: 1, color: 'rgba(20,200,212,0)' }
                ])
            },
            z: -12,
            data: incomeAdd
        },
        {
            name: '旅游收入',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#0f375f'
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: incomeNum
        }
    ]
};

myChart.setOption(option);
