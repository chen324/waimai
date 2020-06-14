###########环境依赖  

"mpvue": "^2.0.0",  

"vuex": "^3.0.1",  

"babel-core": "^6.22.1",  

"babel-loader": "^7.1.1",  

"babel-plugin-transform-runtime": "^6.22.0",  

"babel-preset-env": "^1.3.2",  

"babel-preset-stage-2": "^6.22.0",  

"babel-register": "^6.22.0",  

"chalk": "^2.4.0",  

"connect-history-api-fallback": "^1.3.0",  

"copy-webpack-plugin": "^4.5.1",  

"css-loader": "^0.28.11",  

"cssnano": "^3.10.0",  

"eventsource-polyfill": "^0.9.6",  

"express": "^4.16.3",  

"extract-text-webpack-plugin": "^3.0.2",  

"file-loader": "^1.1.11",  

"friendly-errors-webpack-plugin": "^1.7.0",  

"glob": "^7.1.2",  

"html-webpack-plugin": "^3.2.0",  

"http-proxy-middleware": "^0.18.0",  

"optimize-css-assets-webpack-plugin": "^3.2.0",  

"ora": "^2.0.0",  

"portfinder": "^1.0.13",  

"postcss-loader": "^2.1.4",  

"postcss-mpvue-wxss": "^1.0.0",  

"prettier": "~1.12.1",  

"px2rpx-loader": "^0.1.10",  

"relative": "^3.0.2",  

"rimraf": "^2.6.0",  

"semver": "^5.3.0",  

"shelljs": "^0.8.1",  

"uglifyjs-webpack-plugin": "^1.2.5",  

"url-loader": "^1.0.1",  

"vue-style-loader": "^4.1.0",  

"mkdirp": "^0.5.1",  

"mpvue-loader": "^2.0.0",  

"mpvue-template-compiler": "^2.0.0",  

"mpvue-webpack-target": "^1.0.3",  

"webpack-mpvue-vendor-plugin": "^2.0.0",  

"webpack-mpvue-asset-plugin": "^2.0.0",  

"webpack-bundle-analyzer": "^2.2.1",  

"webpack-dev-middleware-hard-disk": "^1.12.0",  

"webpack-merge": "^4.1.0",  

"webpack": "^3.11.0"  



###########部署步骤  

1.全局安装 vue-cli:   npm install --global vue-cli  

2.利用脚手架创建项目:  vue init mpvue/mpvue-quickstart my-project  

3.安装依赖:  cd my-project  

​                     npm install  

​                     npm run dev  



###########目录结构描述  

│  .DS_Store  
│  app.js                              // 用来对微信小程序进行全局配置  
│  app.json                         // 小程序公共配置  
│  app.wxss                       // 小程序公共样式表  
│  project.config.json       // 项目配置文件  
│  README.md                 // help  
│  sitemap.json  
│  sitemap56.json  
│  sitemap70.json  
│  sitemap82.json  
│  sitemap83.json  
│  
├─common  
│      manifest.js  
│      vendor.js  
│      vendor.wxss  
│      
├─components           // 公用组件
│      card.vue.wxml  
│      slots.wxml  
│      Star.vue.wxml  
│      
├─pages                     // 视图层  
│  ├─city                     // 城市选择  
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.json  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  ├─counter  
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  ├─detail                // 商家详细页
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.json  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  ├─home              // 主页面
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.json  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  ├─index  
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  ├─logs  
│  │      index.vue.wxml  
│  │      main.js  
│  │      main.json  
│  │      main.wxml  
│  │      main.wxss  
│  │      
│  └─personal          // 个人中心
│          index.vue.wxml  
│          main.js  
│          main.json  
│          main.wxml  
│          main.wxss  
│          
└─static               // 静态资源
    ├─images  
    │      b-half.png  
    │      b-off.png  
    │      b-on.png  
    │      b-star.png  
    │      car.png  
    │      clock.png  
    │      collect-active.png  
    │      collect.png  
    │      down.png  
    │      eat.png  
    │      eatPicture.png  
    │      foot.png  
    │      gray-star.png  
    │      group-buy.png  
    │      hotel.png  
    │      improve.png  
    │      ktv.png  
    │      more.png  
    │      people.png  
    │      personal.jpg  
    │      phone.png  
    │      position.png  
    │      rank.png  
    │      remark.png  
    │      s-half.png  
    │      s-star.png  
    │      user.png  
    │      wifi.png  
    │      
    └─tabs  
            home-active.png  
            home.png  
            orders-active.png  
            orders.png  
            