module.exports = {
    // app server启动配置
    SERVERCONFIG: {
        apiDir: 'api',
        // 后端接口host
        apiBackEndHost: 'http://m.easylifewell.com:6060',
        // 是否mock，true时请求${path}-mock.js
        isMock: 0,
        // app port
        port: process.env.NODE_ENV === 'prod' ? 80 : 3002,
        // 开发／生产环境
        nodeEnv: process.env.NODE_ENV || 'dev',
        // 单位：MB
        postLimit: 1
    }
};
