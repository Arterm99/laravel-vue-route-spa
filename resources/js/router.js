import Vue from 'vue'
import VueRouter from "vue-router"; // Подключаем VueRouter

Vue.use(VueRouter) // Подключаем VueRouter во Vue

export default new VueRouter( {   // export - передает значения, при import и router(после components в app.js)
    mode: 'history',

    routes: [
        {
            path: '/people',
            // Второй вариант подключения component (Первый на гите:  laravel-vue-route-spa, коммит - first-spa)
            // component: function () {return import('./components/Person/Index')},

            // Третий вариант - сокращенный, стрелочная функция
            component: () => import('./components/Person/Index'),
            name: 'person.index' // нэйминг для редиректов, ссылок : название папки/название файла
        }
    ]
})
