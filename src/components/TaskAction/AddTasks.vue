<template>
<base-card>
    <form @submit.prevent="addTask">
        <div class="form-control">
        <label for="taskName">Task</label>
        <input class="input" type="text" id="taskName" name="taskName" v-model="taskName" required/>
        </div>
        <div class="form-control">
        <label for="desc">Description</label>
        <textarea class="input" rows="5" columns="5" id="desc" name="desc" v-model="desc" required></textarea>
        </div>
        <div>
        <base-button>Add-Task</base-button>
        </div>
    </form>
</base-card>
</template>
<script>

export default {
    inject:['tasks'],
    data(){
        return {
            taskName:'',
            desc:''
        }
    },
    methods:{
        addTask(){
             const newTask={
                taskId:new Date().toString(),
                taskName:this.taskName,
                desc:this.desc
            }

            this.axios.post('https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks.json', newTask)
                    .then((response)=> {
                        console.log(response);
                    })
                    .catch((error)=> {
                         console.log(error);
                    })
                    this.$router.push('/Tasks') 
        }
    }

}
</script>

<style>


</style>