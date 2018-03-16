import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  config: {
    pages: [
      '^pages/index/index',
      // 'pages/button/button',
      // 'pages/list/list',
      // 'pages/input/input',
      // 'pages/slider/slider',
      // 'pages/uploader/uploader',
      // 'pages/article/article',
      // 'pages/badge/badge',
      // 'pages/flex/flex',
      // 'pages/footer/footer',
      // 'pages/gallery/gallery',
      // 'pages/grid/grid',
      // 'pages/icons/icons',
      // 'pages/loadmore/loadmore',
      // 'pages/panel/panel',
      // 'pages/preview/preview',
      // 'pages/progress/progress',
      // 'pages/actionsheet/actionsheet',
      // 'pages/dialog/dialog',
      // 'pages/msg/msg',
      // 'pages/msg/msg_success',
      // 'pages/msg/msg_fail',
      // 'pages/picker/picker',
      // 'pages/toast/toast',
      // 'pages/navbar/navbar',
      // 'pages/tabbar/tabbar',
      // 'pages/searchbar/searchbar'
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'WeUI for mpvue',
      navigationBarBackgroundColor: '#f8f8f8',
      backgroundColor: '#f8f8f8',
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000,
    },
    debug: true,
  },
};
