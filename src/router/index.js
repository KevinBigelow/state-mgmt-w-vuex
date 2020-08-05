import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/products/:id/',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    props (route) {
      const props = { ...route.params };
      props.id = +props.id;
      return props
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
