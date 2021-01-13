<template>
<div v-for="task in tasks" :key="task.id">
    {{task.taskName}}
</div>

</template>
<script>
export default {
    inject:['tasks'],
    created(){
        console.log(this.tasks)
    }
}

</script>

<style scoped>

</style>