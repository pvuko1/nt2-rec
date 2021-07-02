import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Formulario/index'
import Respuestas from './components/Respuestas/index'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/respuestas', component: Respuestas }
    ]
})