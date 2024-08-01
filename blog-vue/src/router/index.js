import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/posts/Posts.vue'
import Edit from '../views/posts/Edit.vue'
import Create from '../views/posts/Create.vue'
import YourPosts from '@/views/posts/YourPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/your-posts',
      name: 'your-posts',
      component: YourPosts
    },
  ]
})

export default router
