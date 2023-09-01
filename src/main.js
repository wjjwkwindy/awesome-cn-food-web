import './assets/main.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@/utils/store.js';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

createApp(App).use(router).mount('#app');
