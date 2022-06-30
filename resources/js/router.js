import Vue from 'vue'
import VueRouter from "vue-router"; // Подключаем VueRouter
import PostComponent from "./components/PostComponent";
import TagComponent from "./components/TagComponent";

Vue.use(VueRouter) // Подключаем VueRouter во Vue

export default new VueRouter( {   // export - передает значения, при import и router(после components в app.js)
    mode: 'history',

    routes: [
        {
            path:   '/posts',
            component: PostComponent
        },
        {
            path:   '/tags',
            component: TagComponent
        }
    ]
})
