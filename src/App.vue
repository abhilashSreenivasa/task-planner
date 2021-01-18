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

