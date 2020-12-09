import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Todo from '../views/Todo.vue'
import Contact from '../views/Contact.vue'
import GIT from '../views/GIt持续部署.vue'
import MD from '../views/MD文档静态部署.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/GIT',
    name: 'GIT',
    component: GIT
  },
  {
    path: '/MD',
    name: 'MD',
    component: MD
  }
]

const router = new VueRouter({
  routes
})

export default router
