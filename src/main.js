import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import TaskList from './components/TaskList.vue'
import AddTasks from './components/AddTasks.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'

const app=createApp(App)

app.component('base-button',BaseButton)
app.component('base-card',BaseCard)

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/tasks',component:TaskList},
        {path:'/tasks',component:TaskList},
        {path:'/add',component:AddTasks}
    ]
})
app.use(router)
app.mount('#app')
