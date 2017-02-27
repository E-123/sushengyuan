module.exports = {
    clock: {
        '子': {description: '子时具体描述', time: 0},
        '丑': {description: '丑时具体描述', time: 2},
        '寅': {description: '寅时具体描述', time: 4},
        '卯': {description: '卯时具体描述', time: 6},
        '辰': {description: '辰时具体描述', time: 8},
        '巳': {description: '巳时具体描述', time: 10},
        '午': {description: '午时具体描述', time: 12},
        '未': {description: '未时具体描述', time: 14},
        '申': {description: '申时具体描述', time: 16},
        '酉': {description: '酉时具体描述', time: 18},
        '戌': {description: '戌时具体描述', time: 20},
        '亥': {description: '亥时具体描述', time: 22}
    },
    homeCarouselMaterial: [
        {
            imgSrc: '/image/assets/home/1.png',
            href: ''
        },
        {
            imgSrc: '/image/assets/home/2.png',
            href: ''
        },
        {
            imgSrc: '/image/assets/home/3.png',
            href: ''
        }
    ],
    ingredientsCategory: [{
        title: '肉类',
        subCategory: ['猪', '牛', '羊', '鸡', '鸭', '其它肉类', '制品']
    }, {
        title: '水果、花茶、坚果',
        subCategory: ['鲜果', '花', '坚果、干果类']
    }, {
        title: '蔬菜、菌藻、药食',
        subCategory: ['蔬菜类', '菌藻类', '药材类', '酸菜、腌菜类']
    }, {
        title: '鱼虾蟹贝等水产',
        subCategory: ['虾', '蟹', '贝', '鱼', '其它']
    }, {
        title: '谷类',
        subCategory: ['米', '面', '杂粮', '淀粉类']
    }, {
        title: '豆乳蛋类及制品',
        subCategory: ['乳及其制品', '豆及其制品', '蛋及其制品']
    }, {
        title: '调味品',
        subCategory: ['香辛料', '酱', '油', '糖']
    }],
    detailTab: [
        {
            title: '商品详情',
            key: 'detail'
        },
        {
            title: '商品认证',
            key: 'identify'
        },
        {
            title: '追根溯源',
            key: 'resource'
        }
    ],
    presentMaterial: [
        {
            title: '敬老坊',
            type: 'old',
            materialList: [
                {
                    id: 1,
                    name: '老金磨坊',
                    imgSrc: '/image/assets/present/old/1.png',
                    price: 998,
                    origin: '澳洲',
                    detail: {
                        carouselMaterial: [
                            {
                                imgSrc: '/image/assets/present/old/1/carousel/1.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/old/1/carousel/2.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/old/1/carousel/3.png',
                                href: ''
                            }
                        ],
                        contain: '鱼油（1）＋葡萄籽（2）',
                        detailImageSrc: '/image/assets/present/old/1/detail.png',
                        identifyImageSrc: '/image/assets/present/old/1/identify.png',
                        resourceImageSrc: '/image/assets/present/old/1/resource.png'
                    }
                }
            ]
        },
        {
            title: '育婴坊',
            type: 'child',
            materialList: [
                {
                    id: 1,
                    name: '小金磨坊',
                    imgSrc: '/image/assets/present/child/1.png',
                    price: 998,
                    origin: '澳洲',
                    detail: {
                        carouselMaterial: [
                            {
                                imgSrc: '/image/assets/present/child/1/carousel/1.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/child/1/carousel/2.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/child/1/carousel/3.png',
                                href: ''
                            }
                        ],
                        contain: '鱼油（1）＋葡萄籽（2）',
                        detailImageSrc: '/image/assets/present/child/1/detail.png',
                        identifyImageSrc: '/image/assets/present/child/1/identify.png',
                        resourceImageSrc: '/image/assets/present/child/1/resource.png'
                    }
                }
            ]
        },
        {
            title: '特产坊',
            type: 'special',
            materialList: [
                {
                    id: 1,
                    name: '特产磨坊',
                    imgSrc: '/image/assets/present/special/1.png',
                    price: 998,
                    origin: '澳洲',
                    detail: {
                        carouselMaterial: [
                            {
                                imgSrc: '/image/assets/present/special/1/carousel/1.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/special/1/carousel/2.png',
                                href: ''
                            },
                            {
                                imgSrc: '/image/assets/present/special/1/carousel/3.png',
                                href: ''
                            }
                        ],
                        contain: '鱼油（1）＋葡萄籽（2）',
                        detailImageSrc: '/image/assets/present/special/1/detail.png',
                        identifyImageSrc: '/image/assets/present/special/1/identify.png',
                        resourceImageSrc: '/image/assets/present/special/1/resource.png'
                    }
                }
            ]
        }
    ]
};
