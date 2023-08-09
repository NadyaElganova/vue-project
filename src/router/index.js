import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import New from '../views/New.vue'
import Message from '../views/Messages.vue'
import Post from '../views/Post.vue'
import Album from '../views/Albums.vue'
import Albums from '../views/Album.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/new/:id',
      name: 'post',
      component: Post
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/albums',
      name: 'album',
      component: Album
    },
    {
      path: '/album/:id',
      name: 'albums',
      component: Albums
    },
  ]
})

export default router
