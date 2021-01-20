<template>
<div v-for="task in tasks" :key="task.taskId">
   
    <base-card>
    <edit-task v-if="task.taskId===editId"
     :taskId="task.taskId"
     :taskName="task.taskName"
     :desc="task.desc"
      :key="task.taskId"
      :editId="editId"
      v-on:clearEdit="clearEditTask"
      >
      </edit-task>
    <div v-else>
    <h3>{{task.taskName}}</h3>
    <p>{{task.desc}}</p>
    <base-button @click="editTask(task.taskId)"> Edit</base-button>
    <base-button @click="deleteTask(task.taskId)">Delete</base-button>
    </div>
    </base-card>
</div>

</template>
<script>
import BaseButton from '../UI/BaseButton.vue'
import EditTask from './EditTask.vue'
export default {
  components: { BaseButton, EditTask },
    data(){
        return{
            editId:''
        }
    },
    inject:['tasks'],

    created(){
        this.axios.get('https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks.json')
                    .then((response)=> {
                        var a=[];
                        var entry=response.data
                        for(var task in entry)
                        a.push(entry[task])
                    })
                    .catch((error)=> {
                         console.log(error);
                    })
    },
  
   
    methods:{
       
       editTask(id){
           this.editId=id
       },
       clearEditTask(){
           this.editId='';
       },
       deleteTask(id){
           const idx=this.tasks.findIndex((task)=>task.taskId===id)
           this.tasks.splice(idx,1);
       }
    }
  

}

</script>

<style scoped>

</style>