<template>
    <v-card width="368px" height="320px" class="card">
      <v-progress-circular model-value="60" width="8" color="#FF773C" class="v-progress-circular__overlay">
        <div class="circular-color">
          50<span class="protsent">%</span>
        </div>
      </v-progress-circular>
    </v-card>
  </template>
  
  <style scoped>
  .v-progress-circular__overlay{
    stroke-linecap: round;
    height: 90px;
    width: 90px;
    stroke: #000;
    stroke-width: 20px;
  }
  .circular-color{
    background-color: #FFF5F0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }
  
  .protsent{
    font-size: 12px;
  }
  
  </style>