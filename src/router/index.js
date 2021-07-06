import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('../views/home/Homee')
const Catagory = () => import('../views/catagory/Catagory')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
Vue.use(Router)

export const routes = [
    {
      path: '',
      redirect: '/Home'
    },
    {
      path: '/catagory',
      component: Catagory
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/Home',
      component: Home
    }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()
export default router
