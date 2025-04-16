import Vue from "vue";
import VueRouter from "vue-router";
import dashboardView from '@/views/dashboard.vue'
import PostView from "@/views/post.vue";
import AlbumsView from "@/views/albums.vue";
import CommentsView from "@/views/comments.vue";
import PhotoView from "@/views/photo.vue";

const routes = [
  { path: '/', name: 'home', component: dashboardView },
  { path: '/post/:idUser', name:'post', component: PostView },
  { path: '/album/:idUser/', name:'album', component: AlbumsView },
  { path: '/comments/:idPost', name:'comments', component: CommentsView },
  { path: '/photo/:idAlbum', name:'photo', component: PhotoView }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    routes
  });

export default router;