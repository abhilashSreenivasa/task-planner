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
        <base-button>Update Task</base-button>
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
   
    methods:{
        editTask(id){

             const editedObj={
                 taskId:this.id,
                 taskName:this.editName,
                 desc:this.editDesc 
             };
            var dbId=null;
            var list=null;
                 this.axios.get('https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks.json')
                    .then((response)=> {
                        list=response.data
                        
                        for(let task in list){
                        if(list[task].taskId==id)
                            dbId=task
                        }
    
                    
                    }).then(()=>{  //larger then starts.
                                        const idx=this.tasks.findIndex(task=>task.taskId==id)
                                        this.tasks[idx]=editedObj
                                        this.axios.put(`https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks/${dbId}.json`,
                                        editedObj
                                        )
                                        .catch((error)=> {
                                       console.log(error);
                     })
                    })//larger then
                    .catch((error)=> {
                         console.log(error);
                    })
          // this.tasks[idx]=editedObj;
           this.$emit('clearEdit')
            this.$router.push('/tasks')
    }

    }
}
</script>
<style>

</style>