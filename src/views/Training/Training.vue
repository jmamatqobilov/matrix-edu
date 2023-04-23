<template>
    <v-container>
        <v-row>
            <v-col md="12">
                <div style="padding-bottom: 16px; margin-top: 20px;font-weight: 500;font-size: 16px;color: #86C9BE;">
                    Your training
                </div>
                <v-row class="card-items">
                    <v-col md="4" v-for="i in motivationUser" :key="i">
                        <div class="card-item">
                            <div class="card-item-image">
                                <img :src="require(`../../assets/motivation/${i.image}`)" />
                                <div class="card-position-video">
                                    <img :src="require('../../assets/video.svg')"/>
                                </div>
                            </div>
                            <div class="" style="display: flex;justify-content: center;font-size: 18px;font-weight: 600;padding-top: 15px;text-align: center;padding:15px 7px 0;">
                                Increasing and decreasing functions and others
                            </div>
                            <div class="" style="display: flex;justify-content: space-evenly;padding: 20px 0;">
                                <div class="" style="display:flex;flex-direction: column;align-items: center;">
                                    <img :src="require('../../assets/classes.svg')"/> 
                                    <span style="font-size: 14px;font-weight: 400;color: #B7B7B7;padding-top: 6px;">2 hours total</span>
                                </div>
                                <div class="" style="display:flex;flex-direction: column;align-items: center;">
                                    <img :src="require('../../assets/total.svg')"/>
                                    <span style="font-size: 14px;font-weight: 400;color: #B7B7B7;padding-top: 6px;">for 4th classes </span>
                                </div>
                            </div>

                            <div class="linear-" style="width: 100%;height: 1px;background-color: #E1F1EF;"></div>
                            <div class="" style="display:flex;align-items: center;justify-content: center; margin: 18px 0;">
                                <div class="" style="font-size: 16px;font-weight: 600;color: #229A87;">
                                    Сontinue
                                </div>
                                <div class="" style="padding-left: 10px;">
                                    <img :src="require('../../assets/shapes.svg')"/>
                                </div>
                            </div>
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

            motivationUser: [
                {
                    id: 1,
                    image: "v2.png",
                    text: "How to better revice?"
                },
                {
                    id: 1,
                    image: "v3.png",
                    text: "How to better revice?"
                }
            ]
        }
    }
}


</script>

<style scoped>
.card-items {}

.card-item {
    width: 368px;
    height: 492px;
    padding: 20px; 
    background: #FFFFFF;
    box-shadow: 2.875px 0px 17.25px rgba(185, 213, 208, 0.5);
    border-radius: 20px;
}

.card-item-image {
    height: 230px;
    border-radius: 20px;
    background-color: rgb(60, 59, 59);
    position: relative;
    overflow: hidden;
}
.card-item-image img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}

.card-position-video{
    position: absolute;
    right: 38%;
    top: 30%;
}
</style>