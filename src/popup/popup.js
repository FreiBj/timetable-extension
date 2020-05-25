import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

const button = document.createElement('button');
button.textContent = 'Greet me!'
document.body.insertAdjacentElement('afterbegin', button);
button.addEventListener('click', () => {
  
  // Plays audio when notification is sent
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
  audio.play();
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Your next class is in 5 minutes',
      message: 'Get your books ready!',
      iconUrl: 'icons/icon_128.png',
      type: 'basic'
    }
  });
});
