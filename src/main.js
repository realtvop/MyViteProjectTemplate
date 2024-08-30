import { createApp } from 'vue';
import 'mdui';
import { setColorScheme } from 'mdui';
import 'mdui/mdui.css';
import './style.css';
import App from './App.vue';
import { createRouter } from './router.js';

setColorScheme("#64c8ff");
createApp(App)
    .use(createRouter())
    .mount('#app');