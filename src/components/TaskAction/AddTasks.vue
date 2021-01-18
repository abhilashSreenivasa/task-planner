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
            this.tasks.push(newTask)
            this.$router.push('/Tasks')
        }
    }

}
</script>

<style scoped>
body{
       color:black;
    }

.form-control{
    display:flex;
    align-items: center;
    justify-content: right;
    padding:5px;
}
.input{
    padding:5px;
    margin-left:5px;
    flex-grow: 1;
    border: 2px solid #eee;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
}


</style>