<template>
    <v-card width="100%" height="200px" class="footer-content" elevation="0">
        <div class="overlay-circle1"></div>
        <div class="overlay-circle2"></div>
        <div class="overlay-circle3"></div>


        <img :src="require('../assets/shakh.svg')" />
        <div class="footer-title">
            Use the app to review anywhere
        </div>
        <div class="footer-app-contact">
            <img :src="require('../assets/google.png')" />
            <img :src="require('../assets/apple.png')" />
        </div>
    </v-card>
    <v-container>
        <v-row class="footer-contact">
            <v-col md="2">
                <img :src="require('../assets/logo2.svg')" height="30"/>
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 700;">
                Classes
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 700;">
                Subjects
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 700;">
                Company
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 700;">
                Follow us
            </v-col>
        </v-row>
        <v-row>
            <v-col md="2">
                
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                5th
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Mathematics
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                About Us
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                
            </v-col>
        </v-row>
        <v-row>
            <v-col md="2">
                
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                4th
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Physical
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Contact
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                
            </v-col>
        </v-row>
       
        
        <v-row>
            <v-col md="2">
                
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                3rd
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                SVT
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Help
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight:400;">
                
            </v-col>
        </v-row>
        <v-row>
            <v-col md="2">
                
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Second
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                French
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Support Communty
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                
            </v-col>
        </v-row>
        <v-row>
            <v-col md="2">
                
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                First
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Chemistry
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                Share your story
            </v-col>
            <v-col md="2" style="font-size: 14px;font-weight: 400;">
                
            </v-col>
        </v-row>
       
    </v-container>
</template>
<style scoped>
.footer-content {
    background: radial-gradient(48.09% 307.35% at 55% 48.09%, #DEF9F1 0%, #DEF9F1 100%);
    border-top-right-radius: 160px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.overlay-circle1 {
    position: absolute;
    left: -6%;
    top: -32%;
    width: 352px;
    border-radius: 50%;
    height: 352px;
    background: #01B880;
    opacity: 0.1;

}

.overlay-circle2 {
    position: absolute;
    background: #01B880;
    right: 0;
    bottom: 30%;
    opacity: 0.1;
    width: 352px;
    border-radius: 50%;
    height: 352px;
}

.overlay-circle3 {
    position: absolute;
    background: #01B880;
    right: 18%;
    bottom: 18%;
    opacity: 0.1;
    width: 120px;
    border-radius: 50%;
    height: 120px;
}

.footer-title {
    font-size: 20px;
    font-weight: 600;
    padding: 16px 0;
}


.footer-app-contact {
    display: flex;
}

.footer-app-contact img {
    padding-right: 16px;
}

.footer-contact{
    padding-top: 40px;
}
</style>

