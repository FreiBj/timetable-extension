import store from './store';
global.browser = require('webextension-polyfill');

alert(`Hello ${store.getters.foo}!`);

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});