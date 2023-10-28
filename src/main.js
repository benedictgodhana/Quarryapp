import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { CAlert } from '@coreui/vue';

import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";





const vuetify = createVuetify({
  components,
  directives,
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
  icons: {
    iconfont: 'mdi', // Use 'mdi' for Material Design Icons
  },
})


const app = createApp(App)

app.use(router)
app.use(vuetify)
app.component('CAlert', CAlert)
app.mount('#app')
