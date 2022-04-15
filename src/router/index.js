import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignIn.vue'
import Lock from '../views/Lock.vue'
import RolledUp from '../views/RolledUp.vue'
import Settings from '../views/Settings.vue'
import Psd from '../views/Psd.vue'
// import SignOut from '../views/SignOut.vue'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/usr',
    name: 'usr',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: SignInView
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/psd',
    name: 'psd',
    component: Psd
  },
  {
    path: '/rolled-up',
    name: 'rolled-up',
    component: RolledUp
  },
  {
    path: '/lock',
    name: 'lock',
    component: Lock
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
