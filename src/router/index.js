import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignIn.vue'
import Lock from '../views/Lock.vue'
import RolledUp from '../views/RolledUp.vue'
import Settings from '../views/Settings.vue'
import Psd from '../views/Psd.vue'
import SignOut from '../views/SignOut.vue'
import NotFound from '../views/404.vue'
const routes = [
  {
    path: '/',
    name: 'sign-in',
    component: SignInView
  },
  {
    path: '/user',
    name: 'user',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard
      }
    ]
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
    path: '/logout',
    name: 'logout',
    component: SignOut
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
