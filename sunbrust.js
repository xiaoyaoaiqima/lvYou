var chartDom = document.getElementById('sunbrust');
var sunBrustChart = echarts.init(chartDom);
const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';
const itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};
const data = [
    {
        name: '4.5及以上',
        itemStyle: {
            color: colors[1]
        },
        children: [
            //   荔波小七孔

            {
                name: '荔波小七孔',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '景色值得、风景、'
                            },
                            {
                                name: '漂亮、体验'
                            },
                            {
                                name: '推荐'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '时间、观光车'
                            },
                            {
                                name: '不合理、大小'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '门票、环境、当地人'
                            },
                        ]
                    }
                ]
            },
            //   安顺黄果树
            {
                name: '安顺黄果树',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '值得、壮观'
                            },
                            {
                                name: '震撼、不虚此行'
                            },
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '排队、服务、路线'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '排队、体验'
                            },
                            {
                                name: '后悔、退票'
                            },
                        ]
                    }
                ]
            },
            //   镇远古城
            {
                name: '镇远古城',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '历史、值得'
                            },
                            {
                                name: '建筑、景色'
                            },
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '没什么、灯光、商业化'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '商业化、停车场'
                            },
                            {
                                name: '管理、住宿'
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: '4.4及以下',
        itemStyle: {
            color: colors[2]
        },
        children: [
            {
                name: '梵净山',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '金顶、值得、景色'
                            },
                            {
                                name: '天气、风景'
                            },
                            {
                                name: '推荐'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '排队、不好'
                            },
                            {
                                name: '时间、整体一般、人太多'
                            },
                            {
                                name: '天气、看不到'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '排队、管理'
                            },
                            {
                                name: '预约时间、工作人员'
                            }
                        ]
                    }
                ]
            },
            {
                name: '安顺龙宫',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '值得、体验、'
                            },
                            {
                                name: '漂亮、性价比、凉快'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '不错、排队、时间'
                            },
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '排队、销售、门票'
                            },
                            {
                                name: '服务、小时、工作人员'
                            }
                        ]
                    }
                ]
            },
            {
                name: '乌蒙大草原',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '景色、值得'
                            },
                            {
                                name: '适合、体验'
                            },
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '不错、管理'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '退钱、堵车、'
                            },
                            {
                                name: '门票、管理、工作人员'
                            }
                        ]
                    }
                ]
            },
            {
                name: '百里杜鹃',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '景色、景点值得'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '游客、摆渡'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '管理、服务'
                            },
                            {
                                name: '门票、混乱'
                            }
                        ]
                    }
                ]
            },
            {
                name: '千户苗寨',
                children: [
                    {
                        name: '5☆',
                        children: [
                            {
                                name: '夜景、拍照、体验、'
                            },
                            {
                                name: '风景、值得'
                            }
                        ]
                    },
                    {
                        name: '3☆',
                        children: [
                            {
                                name: '商业化、旅拍、观景台'
                            }
                        ]
                    },
                    {
                        name: '1☆',
                        children: [
                            {
                                name: '商业化、排队、体验、'
                            },
                            {
                                name: '服务态度、工作人员'
                            },
                            {
                                name: '后悔、不合理'
                            }
                        ]
                    }
                ]
            },
        ]
    }
];
for (let j = 0; j < data.length; ++j) {
    let level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
            let style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '3☆':
                        bookScoreId = 1;
                        return itemStyle.star3;
                    case '1☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);
            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };
            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;
                    book.label = {
                        color: style.color
                    };
                    let value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }
                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    } else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }
        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}
var option = {
    backgroundColor: bgColor,
    color: colors,
    series: [
        {
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                } else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [
                {},
                {
                    r0: 0,
                    r: 40,
                    label: {
                        rotate: 0
                    }
                },
                {
                    r0: 40,
                    r: 105
                },
                {
                    r0: 115,
                    r: 140,
                    itemStyle: {
                        shadowBlur: 2,
                        shadowColor: colors[2],
                        color: 'transparent'
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                },
                {
                    r0: 140,
                    r: 145,
                    itemStyle: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    },
                    label: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    },
                    downplay: {
                        label: {
                            opacity: 0.5
                        }
                    }
                }
            ]
        }
    ]
};
sunBrustChart.setOption(option);
