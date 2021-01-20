<template>
<the-navbar></the-navbar>
<main>
<router-view></router-view>
</main>

</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue'

export default{
  created(){
    this.getDbData();
  },
  updated(){
    this.getDbData()
  },
components:{
  TheNavbar
},
data(){
  return{
   tasks:[]
  }
},
provide(){
  return{
    tasks:this.tasks
  }
},
methods:{
   getDbData(){
      this.axios.get('https://task-planner-9bd41-default-rtdb.firebaseio.com/tasks.json')
                    .then((response)=> {
                        console.log("Success biyatch")
                      
                        var entry=response.data
                        for(var task in entry)
                        this.tasks.push(entry[task])
                    })
                    .catch((error)=> {
                         console.log(error);
                    })
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
     color: #eee;
     background-color: black;
}
.input :hover{
  cursor:-moz-grab
}

</style>

