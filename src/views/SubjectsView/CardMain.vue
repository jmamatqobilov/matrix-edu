<template>
  <v-card width="368px" height="320px" class="card">
    <div class="history mt-5 mx-3 ">History</div>
    <div class="bird-container">
      <div class="bird">
        <img :src="require('../../assets/bird.svg')" />
      </div>
      <div class="search">
        <img :src="require('../../assets/search.svg')" /> 
      </div>
      <div class="circular-svg">
        <img :src="require('../../assets/circular.svg')" /> 
      </div>
    </div>
    <div class="content-circular mx-3">
      <v-progress-circular model-value="60" width="8" color="#FF773C" class="v-progress-circular__overlay">
        <div class="circular-color">
          50<span class="protsent">%</span>
        </div>
      </v-progress-circular>
      <div class="">
        <div class="circular-title px-2">
          Continuity and Derivation 
        </div>
        <div class="pt-1">
          <span class="px-2 shape-title">Continue</span>
          <img :src="require('../../assets/Shape.svg')"/>
        </div>
      </div>
    </div>

    <v-row class="content-row">
      <v-col cols="6" xs="6" class="content content-1">
        <div class="content-1-protestent">
          35/56
        </div>
        <span>
          videos checked
        </span>
      </v-col>
      <v-col cols="6" xs="6" class="content content-2">
        <div class="content-1-protestent">
          35/56
        </div>
        <span>
          videos checked
        </span>
      </v-col>
      <v-col cols="6" xs="6" class="content content-3">
        <div class="content-1-protestent">
          35/56
        </div>
        <span>
          videos checked
        </span>
      </v-col>
      <v-col cols="6" xs="6" class="content content-4">
        <div class="content-1-protestent"> 
          35/56
        </div>
        <span>
          videos checked
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.card {
  position: relative;
}

.bird-container {
  position: absolute;
  background-color: #ffe2d6;
  /* opacity: 0.1; */
  width: 168px;
  height: 168px;
  border-radius: 50%;
  right: -10%;
  top: -30%;
}

.bird img {
  position: absolute;
  width: 50px !important;
  height: 50px !important;
  left: -4px;
  bottom: 13px;
}

.search img {
  position: absolute;
  bottom: 32px;
  right: 60px;
}
.circular-svg img{
  position: absolute;
  bottom: -4px;
  right: 38px;
}

.v-progress-circular__overlay {
  stroke-linecap: round;
  height: 90px;
  width: 90px;
  stroke: #000;
  stroke-width: 20px;
}

.circular-title{
  max-width: 150px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
}
.shape-title{
  color: #229A87;
  font-size: 16px;
  font-weight: 600;
}

.content-circular{
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.circular-color {
  background-color: #FFF5F0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history {
  background-color: #FFF2EC;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 76px;
  height: 30px;
  font-size: 12px;
  color: #FF773C;
}

.content-row{
  padding-top: 20px;
  margin-right: 16px; 
  margin-left: 16px;
  padding-bottom: 20px;
}


.content-1{
  border-bottom: 1px solid #E1F1EF;
  border-right:1px solid #E1F1EF;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}
.content div {
  font-weight: 600;
}
.content span {
  font-size: 15px;
  opacity: 0.5;
}
.content-2{
  border-bottom: 1px solid #E1F1EF; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-3{
  border-right: 1px solid #E1F1EF;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
}
.content-4{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}


.protsent {
  font-size: 12px;
}
</style>