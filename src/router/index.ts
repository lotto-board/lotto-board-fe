import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('@/views/RankingView.vue')

    },
    {
      path: '/',
      name: 'map',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/MapView.vue')
    },
    {
      path: '/number-ranking',
      name: 'number-ranking',
      component: () => import('@/views/NumberRankingView.vue')
    }
  ]
})

export default router
