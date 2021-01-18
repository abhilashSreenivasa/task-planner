<template>
<h1>Edit</h1>
    <form @submit.prevent="editTask(editId)">
        <div class="form-control">
        <label for="taskName">Task</label>
        <input class="input" type="text" id="taskName" name="taskName" v-model="editName" required/>
        </div>
        <div class="form-control">
        <label for="desc">Description</label>
        <textarea class="input" rows="5" columns="5" id="desc" name="desc" v-model="editDesc" required>
        </textarea>
        </div>
        <div>
        <base-button>Edit Task</base-button>
        </div>
    </form>
</template>
<script>
export default {
    props:['taskId','taskName','desc','editId'],
    inject:['tasks'],
    emits:['clearEdit'],
     data(){
        return {
            id:this.editId,
            editName:this.taskName,
            editDesc:this.desc
        }
    },
    beforeCreate(){
       console.log(this.editId)
    },
    methods:{
        editTask(id){

             const editedObj={
                 taskId:this.id,
                 taskName:this.editName,
                 desc:this.editDesc 
             };
           // console.log(id)
            const idx=this.tasks.findIndex((task)=>{
                return task.taskId==id
                })
            
           this.tasks[idx]=editedObj;
           //console.log(this.tasks)
           //console.log(this.editId)
           this.$emit('clearEdit')
            this.$router.push('/tasks') 
    }

    }
    
}
</script>
<style>

</style>