import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue'
import NotFound from '@/views/Error/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'accueil',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Apropos',
    },
  },
  {
    path: '/product/:name',
    name: 'Product',
    component: Product,
    props: true,
    meta: {
      title: 'Produits',
    },
  },
  {
    path: '/:pathmatch(.*)',
    name: 'NotFound',
    component: NotFound,
    props: true,
    meta: {
      title: '404 not Found',
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.afterEach((to) => {
  document.title = to.meta.title
});


export default router
