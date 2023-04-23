<template>
  <v-app>
    <div class="index-view">
      <hea-der />
      <tab-bar />
      <router-view />
      <foo-ter/>
      
    </div>
  </v-app>
</template>

<script>
import HeaDer from './layouts/HeaDer.vue';
import TabBar from './layouts/TabBar.vue';
import FooTer from './layouts/FooTer.vue';

export default {
  components: {
    HeaDer, TabBar,FooTer
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}



.navbar {
  border-bottom-left-radius: 42px;
  background: linear-gradient(261.11deg, #77CABA 0%, #229A87 90.84%);
}

.navbar-container {
  display: flex;
}

.index-view {
  padding-top: 40px;
}
</style>
