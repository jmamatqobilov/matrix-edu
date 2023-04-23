
    

<template>
    <v-container>
        <v-row>
            <v-col md="3" class="sidebar-left">
                <div @click="sideBar = 1" :class="`sidebar-left-item ${sideBar === 1 ? ' active' : ''}`">
                    See all
                </div>
                <div @click="sideBar = 2" :class="`sidebar-left-item ${sideBar === 2 ? ' active' : ''}`">
                    Access success
                </div>
                <div @click="sideBar = 3" :class="`sidebar-left-item ${sideBar === 3 ? ' active' : ''}`">
                    Ask Methrix show
                </div>
                <div @click="sideBar = 4" :class="`sidebar-left-item ${sideBar === 4 ? ' active' : ''}`">
                    Special issue
                </div>
            </v-col>
            <v-col md="9">
                <div style="margin-left: 30px;padding-bottom: 16px; margin-top: 20px;font-weight: 500;font-size: 16px;color: #86C9BE;">
                    Access success
                </div>
                <v-row class="card-items">
                    <v-col md="6" v-for="i in motivationUser" :key="i">
                        <div class="card-item">
                            <div class="card-item-image">
                                <img :src="require(`../../assets/motivation/${i.image}`)"/>
                            </div>
                            <span class="mb-4">
                                {{ i.text }}
                            </span>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            sideBar: 1,

            motivationUser:[
                {
                    id:1,
                    image:"v1.png",
                    text:"Are you studying and still can’t do it?"
                },
                {
                    id:1,
                    image:"v2.png",
                    text:"How to better revice?"
                },
                {
                    id:1,
                    image:"v3.png",
                    text:"How to better revice?"
                },
                {
                    id:1,
                    image:"v4.png",
                    text:"dsds"
                },
                {
                    id:1,
                    image:"v5.png",
                    text:"dsds"
                }
            ]
        }
    }
}
</script>
<style scoped>
.sidebar-left {
    border-right: 1px solid #e4e4e4;
}

.sidebar-left-item {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.149625px;
    color: #282929;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 8px 0;  
    padding-left: 30px;
    margin-left: -30px;
}

.sidebar-left-item.active {
    color: #000;
    background-image: url("../../assets/img/Vector.svg");
    position: relative;
}

.card-items {
    padding: 0px 30px;
}

.card-item {
    width: 368px;
    height: 300px;
    background: #FFFFFF;
    box-shadow: 2.875px 0px 17.25px rgba(185, 213, 208, 0.5);
    border-radius: 7.79661px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.card-item-image{
    width: 335px;
    height: 210px;
    border-radius: 10px;
    
    background-color: rgb(60, 59, 59);
    overflow: hidden;
}
</style>