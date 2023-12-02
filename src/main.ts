import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import { createNaverMap } from 'vue3-naver-maps'

const app = createApp(App)


app.use(createPinia());
app.use(router);
app.use(createNaverMap, {
  clientId: import.meta.env.VITE_NAVER_MAP_CLIENT,
});
app.use(
  createVuestic({
    config: {
      colors: {
        variables: {
          primary: '#00ffa2',
          button: '#004466',
          secondary: '#002c85',
          success: '#40e583',
          info: '#2c82e0',
          danger: '#e34b4a',
          warning: '#ffc200',
          gray: '#babfc2',
          dark: '#34495e'
        }
      },
      components: {
        VaButton: {
          color: 'button'
        }
      }
    }
  })
);
app.mount('#app');
