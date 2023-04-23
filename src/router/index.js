import { createRouter, createWebHistory } from 'vue-router'
import SubjectsView from '../views/SubjectsView/SubjectsView'

const routes = [
  {
    path: '/subjects',
    name: 'subjects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SubjectsView/SubjectsView.vue')
  },
  {
    path: '/motivation',
    name: 'motivation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Motivation/Motivation.vue')
  },
  {
    path: '/training',
    name: 'training',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Training/Training.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
