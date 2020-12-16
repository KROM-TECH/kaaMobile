import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
// import Book from '@/views/Book.vue'
// import Video from '@/views/Video.vue'
// import Article from '@/views/Article.vue'
// import Guide from '@/views/Guide.vue'
// import Upload from '@/views/Upload.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/',
  //   name: 'Book',
  //   component: Book
  // },
  // {
  //   path: '/',
  //   name: 'Video',
  //   component: Video
  // },
  // {
  //   path: '/',
  //   name: 'Article',
  //   component: Article
  // },
  // {
  //   path: '/',
  //   name: 'Guide',
  //   component: Guide
  // },
  // {
  //   path: '/',
  //   name: 'Upload',
  //   component: Upload
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
