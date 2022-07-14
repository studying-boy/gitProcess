import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'; //引入vue-router
import './index.css'

import { ElButton } from 'element-plus'

const app = createApp(App);

app.component(ElButton.name, ElButton)

app.use(router);
app.mount('#app')
