var chartDom = document.getElementById('map2');
var myChart = echarts.init(chartDom);
fetch('./assets/map_color.svg')
    .then(response => response.text())
    .then(svg => {
        echarts.registerMap('iceland_svg', { svg: svg });
        let option = {
            tooltip: {},
            geo: {
                tooltip: {
                    show: true
                },
                map: 'iceland_svg',
                roam: true,
                zoom:1.8
            },
            series: {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                geoIndex: 0,
                symbolSize: function (params) {
                    return (params[2] / 100) * 15 + 5;
                },
                symbol:'path://M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
                itemStyle: {
                    color: '#b02a02'
                },
                encode: {
                    tooltip: 2
                },
                tooltip: {
                    formatter: function (params) {
                        return params.data[3];
                    }
                },
                data: [
                    // 荔波小七孔
                    [600, 500, 100,"荔波小七孔"],
                    // 黄果树瀑布
                    [400, 450, 80,"黄果树瀑布"],
                    // 镇远古城
                    [680, 310,80, "镇远古城"],
                    // 梵净山
                    [700, 200, 60,"梵净山"],
                    // 安顺龙宫
                    [450, 420, 60,"安顺龙宫"],
                    // 乌蒙大草原
                    [305, 420, 60,"乌蒙大草原"],
                    // 百里杜鹃
                    [450, 280, 40,"百里杜鹃"],
                    // 千户苗寨
                    [680, 300, 20,"千户苗寨"],
                ]
            }
        };
        myChart.setOption(option);
        myChart.getZr().on('click', function (params) {
            var pixelPoint = [params.offsetX, params.offsetY];
            var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
            console.log(dataPoint);
        });
    });
