import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { App } from '@app';

createApp(App).use(createPinia()).mount('#app');
