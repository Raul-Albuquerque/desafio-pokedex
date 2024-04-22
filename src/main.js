import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import store from './store'

import './services/api'
import {en} from '@/locales/en.js'
import {es} from '@/locales/es.js'
import {pt} from '@/locales/pt.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const languages = {
  pt,
  es,
  en
}

const i18n = createI18n({
  locale: store.state.language,
  fallbackLocale: 'pt',
  messages: languages
})

createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app')

store.watch(
  (state) => state.language,
  (newLanguage) => {
    i18n.global.locale = newLanguage
  }
)