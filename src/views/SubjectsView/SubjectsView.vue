<template>
  <v-container>
    <div class="subject-activate">Your active course</div>
    <v-row>
      <v-col v-for="i in 2" sm="12" md="6" lg="4" :key="i">
        <card-main />
      </v-col>
    </v-row>
    <v-list-item-title class="py-5 all-item">
      All subjects
    </v-list-item-title>
    <v-row>
      <v-col v-for="category in categorys" xs="12" sm="6" md="4" lg="3" :key="category">
        <card-mini :category="category"/>
      </v-col>
    </v-row>
    <p>{{ PRODUCTS.length }}</p>
  </v-container>
</template>
  
<script>
import CardMain from './CardMain.vue';
import CardMini from './CardMini.vue';
  
  import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  components: {
    CardMain,
    CardMini
  },

  data() {
    return {
      tab: 1,
      value: 0,

      categorys:[
        {
          id:1,
          title:'Mathematics',
          image:'9.svg'
        },
        {
          id:2,
          title:'Physical',
          image:'8.svg'
        },
        {
          id:3,
          title:'SVT',
          image:'5.svg'
        },
        {
          id:4,
          title:'History',
          image:'7.svg'
        },
        {
          id:5,
          title:'Chemistry',
          image:'1.svg'
        },
        {
          id:6,
          title:'Numeric Science',
          image:'10.svg'
        },
        {
          id:7,
          title:'Technology',
          image:'3.svg'
        },
        {
          id:8,
          title:'Philosophy',
          image:'2.svg'
        },
        {
          id:9,
          title:'Geographi',
          image:'6.svg'
        },
        {
          id:10,
          title:'French',
          image:'4.svg'
        }
      ]
    }
  },
  computed:{
    ...mapGetters(['PRODUCTS']),
  },

  methods:{
    ...mapActions(['getProducts']),
    fetchProducts(){
      this.$store.dispatch('getProducts')
    }
  },
  mounted(){
    this.fetchProducts()
  }
};
</script>

<style scoped>
.subject-activate {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.0142658px;
  color: #86C9BE;
}

.card {
  border-radius: 20px;
  box-shadow: 3px 8px 20px 8px rgba(117, 173, 188, 0.1)
}

.all-item{
  margin-top: 20px;
  color: #86C9BE;
  font-size: 16px;
  font-weight: 500;
}
</style>
