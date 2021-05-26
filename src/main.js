import Vue from 'vue';
import App from './App';

new Vue({
  // el: '#app', This is alternate syntax for mounting a component
  render: h => h(App),
}).$mount('#app');
