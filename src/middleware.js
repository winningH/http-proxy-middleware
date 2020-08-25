var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

// app.use('/api', proxy({
//   // 代理跨域目标接口
//   target: ' https://www.toutiao.com/stream/widget/local_weather/data/', // 请求的后台接口地址
//   changeOrigin: true,
//   pathRewrite: {
//   '^/api': ''
// }
// }));

app.use('/api', proxy({
  // 代理跨域目标接口
  target: ' http://localhost:8080/table/user.json', // 请求的后台接口地址
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.use('/music.html/song', proxy({
  // 代理跨域目标接口
  target: 'http://tingapi.ting.baidu.com/v1/restserver/ting', // 请求的后台接口地址
  changeOrigin: true,
  pathRewrite: {
    '^/song': ''
  }
}));

app.use('/', proxy({
  // 代理跨域目标接口
  target: 'http://localhost:63342/191111/src', // 本地前端地址
  changeOrigin: true,
}));

app.listen(3000); // node服务端口
console.log('Proxy server is listen at port 3000...');