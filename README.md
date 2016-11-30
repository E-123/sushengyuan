# sushengyuan

## 安装运行：

node 5.4

npm 4.0

#### 安装依赖

```
    npm install
```

#### 启动express server

```
    npm start
```
#### 新建console tab，编译client/src（编译后文件在client/build下）

```
    npm run build
```

访问：http://localhost:3001/

## 项目架构说明：

    react + redux + react-router + antUI，webpack打包

### client/src/app

* action:
 
数据请求写在这里

* reducer

修改state

* containers

路由相关的组件，Layout为页面结构，routes中为children

* components

containers里各自的组件

### client/src/www

* index.html

### server

* src/api

处理前端请求

* src/router

后端路由

* 生产环境编译到server/build下，使用build.sh

