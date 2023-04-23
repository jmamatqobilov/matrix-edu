<template>
  <div class="card-mini">
   <img :src="require(`../../assets/category/${category.image}`)"/>
   <div class="category-title">
    {{ category.title }}
   </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      
    }
  },
  props:{
    category:{}
  }
}
</script>
<style scoped>
.card-mini {
  width: 264px;
  height: 200px;
  background: #FFFFFF;
  box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-mini img{
  width: 169px;
  height: 181px;

}


.category-title{
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
}
</style>