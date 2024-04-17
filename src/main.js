import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import router from './router'


createApp(App).use(router).use(VueSweetAlert).mount('#app')
