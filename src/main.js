import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import TaskList from './components/TaskAction/TaskList.vue'
import AddTasks from './components/TaskAction/AddTasks.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import EditTask from './components/TaskAction/EditTask.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
const app=createApp(App)

app.component('base-button',BaseButton)
app.component('base-card',BaseCard)

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',redirect:'/tasks',component:TaskList},
        {path:'/tasks',component:TaskList,children:[
            {path:':id',component:EditTask,props:true}
        ]},
        {path:'/add',component:AddTasks}
    ]
})
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')
