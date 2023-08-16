import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import QuasarConfig from './quasar.config';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, QuasarConfig);

app.mount('#app');
