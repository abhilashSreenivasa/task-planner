import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import TaskList from './components/TaskList.vue'
const app=createApp(App)
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/tasks',component:TaskList},
        {path:'/tasks',component:TaskList}
    ]
})
app.use(router)
app.mount('#app')
