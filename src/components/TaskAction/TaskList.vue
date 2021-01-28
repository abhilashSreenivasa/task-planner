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
        this.getData()
    },
   
    methods:{
       getData(){
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
       }
        ,
       editTask(id){
           this.editId=id
       },
       clearEditTask(){
           this.editId='';
       },
       deleteTask(id){
           var dbId=null;
            var list=null;
                 this.axios.get('https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks.json')
                    .then((response)=> {
                        list=response.data
                        for(let task in list){
                        if(list[task].taskId==id)
                            dbId=task
                            
                        }
                       // console.log(dbId)
                    
                    }).then(()=>{  //larger then starts.
                                        this.axios.delete(`https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks/${dbId}.json`
                    
                                        )
                                        .then(()=> {
                                        const idx=this.tasks.findIndex(task=>task.taskId==id)
                                        this.tasks.splice(idx,1)
                                        
                                        })
                                        .catch((error)=> {
                                       console.log(error);
                     })
                    })//larger then
                    .catch((error)=> {
                         console.log(error);
                    })
       }
    }
  
}
</script>

<style scoped>
</style>