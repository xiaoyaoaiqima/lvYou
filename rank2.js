var chartDom = document.getElementById('rank2');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '八大景区评分排名',
        top: 0 // 调整标题的位置
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        top: 30, // 调整图例的位置
        data: ['荔波小七孔', '黄果树瀑布', '镇远古城', '梵净山', '安顺龙宫', '乌蒙大草原', '百里杜鹃', ' 千户苗寨']
    },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 80, // 调整漏斗图的位置
            bottom: 0,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 100, name: '荔波小七孔' },
                { value: 90, name: '黄果树瀑布' },
                { value: 80, name: '镇远古城' },
                { value: 70, name: '梵净山' },
                { value: 60, name: '安顺龙宫' },
                { value: 50, name: '乌蒙大草原' },
                { value: 40, name: '百里杜鹃' },
                { value: 30, name: '千户苗寨' }
            ]
        }
    ]
};

option && myChart.setOption(option);