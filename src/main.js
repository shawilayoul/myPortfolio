import './assets/main.css'
import { createI18n } from 'vue-i18n';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

// Import translation files
import en from './locales/en.json';
import fr from './locales/fr.json';


// Set up Vue I18n
const userLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
  locale: userLocale, // Load the user's preferred locale
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
});
  
const app = createApp(App)
app.use(i18n)
app.use(AOS.init());
app.use(ToastPlugin);
app.use(createPinia())
app.use(router)

app.mount('#app')
