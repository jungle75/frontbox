import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';

import '@/assets/css/style.css';
import "primeicons/primeicons.css";

import Button from 'primevue/button';
import Card from 'primevue/card';

// eslint-disable-next-line
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('BaseButton', Button);
app.component('CardBox', Card);

app.mount('#app')