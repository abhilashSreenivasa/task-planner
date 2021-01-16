<template>
<the-navbar></the-navbar>
<main>
<router-view></router-view>
</main>

</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue'

export default{
components:{
  TheNavbar
},
data(){
  return{
   tasks:[
     {taskId:1,taskName:'eat',desc:"Dont forget to eat"},
     {taskId:2,taskName:'code',desc:"An hour of coding"}
   ]
  }
},
provide(){
  return{
    tasks:this.tasks
  }
}

}
</script>
<style>
body,html{
  border:0;
  padding:0;
  margin: 0;
}
</style>

