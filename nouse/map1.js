var myChart = echarts.init(document.getElementById('map1'));

fetch('https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json')
    .then(response => response.json())
    .then(json => {
        echarts.registerMap('贵州_map', json);
        option = {
            tooltip: {},
            geo: {
                tooltip: {
                    show: true
                },
                map: '贵州_map',
                roam: true,
                zoom: 1.3
            },
            series: {
                type: 'custom',
                coordinateSystem: 'geo',
                geoIndex: 0,
                zlevel: 1,
                data: [
                    // 荔波小七孔
                    [117, 106, 100],
                    // 黄果树瀑布
                    [400, 450, 30],
                    // 镇远古城
                    [680, 310, 80],
                    // 梵净山
                    [700, 200, 61],
                    // 安顺龙宫
                    [450, 420, 70],
                    // 乌蒙大草原
                    [305, 420, 81],
                    // 百里杜鹃
                    [450, 280, 81],
                    // 千户苗寨
                    [680, 300, 81],
                ],
                // 动画
                renderItem(params, api) {
                    const coord = api.coord([
                        api.value(0, params.dataIndex),
                        api.value(1, params.dataIndex)
                    ]);
                    const circles = [];
                    for (let i = 0; i < 5; i++) {
                        circles.push({
                            type: 'circle',
                            shape: {
                                cx: 0,
                                cy: 0,
                                r: 30
                            },
                            style: {
                                stroke: 'red',
                                fill: 'none',
                                lineWidth: 2
                            },
                            // Ripple animation
                            keyframeAnimation: {
                                duration: 4000,
                                loop: true,
                                delay: (-i / 4) * 4000,
                                keyframes: [
                                    {
                                        percent: 0,
                                        scaleX: 0,
                                        scaleY: 0,
                                        style: {
                                            opacity: 1
                                        }
                                    },
                                    {
                                        percent: 1,
                                        scaleX: 1,
                                        scaleY: 0.4,
                                        style: {
                                            opacity: 0
                                        }
                                    }
                                ]
                            }
                        });
                    }
                    return {
                        type: 'group',
                        x: coord[0],
                        y: coord[1],
                        children: [
                            ...circles,
                            {
                                type: 'path',
                                shape: {
                                    d: 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z',
                                    x: -10,
                                    y: -35,
                                    width: 20,
                                    height: 40
                                },
                                style: {
                                    fill: 'red'
                                },
                                // Jump animation.
                                keyframeAnimation: {
                                    duration: 1000,
                                    loop: true,
                                    delay: Math.random() * 1000,
                                    keyframes: [
                                        {
                                            y: -10,
                                            percent: 0.5,
                                            easing: 'cubicOut'
                                        },
                                        {
                                            y: 0,
                                            percent: 1,
                                            easing: 'bounceOut'
                                        }
                                    ]
                                }
                            }
                        ]
                    };
                }
            }
        };
        myChart.setOption(option);
    });

