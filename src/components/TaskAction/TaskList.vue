<template>
<div v-for="task in tasks" :key="task.taskId">
   
    <base-card>
    <!-- <router-view></router-view> -->
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
    <!-- <router-link :to="'/tasks/'+task.taskId">Update</router-link> -->
    <base-button @click="editTask(task.taskId)"> Edit</base-button>
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

  
   
    methods:{
       editTask(id){
           this.editId=id
         //  this.$route.push(`/task/${id}`)
       },
       clearEditTask(){
           this.editId='';
       }
    }
    //   provide(){
    //     return{
    //         editId:this.editId
    //     }
    // }

}

</script>

<style scoped>

</style>