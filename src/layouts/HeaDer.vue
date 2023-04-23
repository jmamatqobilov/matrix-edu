<template>
    <v-app-bar :elevation="0" class="navbar" style="width: 100%; overflow:visible">
        <div class="container" style="width: 100%;">
            <div style="display: flex;justify-content: space-between;">
                <div class="header-left">
                    <img :src="require('../assets/logo.svg')" />
                </div>
                <div class="header-right">
                    <div class="header-search">
                        <img :src="require('../assets/search-icon.svg')" width="20"/>
                        <input v-model="myinput" class="header-input" type="text" placeholder="Find what interests you">
                        <div :class="`myinput shadow rounded ${(myinput && visibly == true) ? 'active' : ''}`">
                            <div v-for="item in searcher" class="" :key="item.id">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                    <div class="header-terminal">
                        <span>
                            Terminal ES
                        </span>
                        <button>
                            k
                        </button>
                    </div>
                    <div class="header-premium">
                        Get Premium
                    </div>

                    <div class="header-profil">
                        <img :src="require('../assets/ic_user.svg')" />
                       
                    </div>

                    <div class="header-notif">
                        <img :src="require('../assets/ic.svg')" />
                        <div class="notif-body">
                            <div class="n-body">
                                <img width="20" height="20" style="position:absolute;top:-13px;right:18px"
                                    :src="require('../assets/burchak.svg')" />
                                <div class="n-body-head">
                                    <div class="" style="color:#282929;font-size: 16px;font-weight: 600;">
                                        Notification
                                    </div>
                                    <div class="" style="color:#229A87;font-size: 14px;font-weight: 600;">
                                        Mark all as read
                                    </div>
                                </div>
                                <div class="n-body-items">
                                    <div class="n-body-item">
                                        <div class="n-body-item-img">
                                            <img :src="require('../assets/reactangle2.svg')" />
                                            <div class="" style="padding-left: 10px;">
                                                <div class="" style="color:#282929;font-weight: 400;font-size: 14px;">
                                                    You’ve just unlocked “Seed”
                                                </div>
                                                <div class="" style="color:#B7B7B7;font-size: 14px;font-weight: 400;">
                                                    Complete your first math task
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="n-body-item">
                                        <div class="n-body-item-img">
                                            <img :src="require('../assets/reactangle2.svg')" />
                                            <div class="" style="padding-left: 10px;">
                                                <div class="" style="color:#282929;font-weight: 400;font-size: 14px;">
                                                    You’ve just unlocked “Seed”
                                                </div>
                                                <div class="" style="color:#B7B7B7;font-size: 14px;font-weight: 400;">
                                                    Complete your first math task
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="n-body-item">
                                        <div class="n-body-item-img">
                                            <img :src="require('../assets/reactangle2.svg')" />
                                            <div class="" style="padding-left: 10px;">
                                                <div class="" style="color:#282929;font-weight: 400;font-size: 14px;">
                                                    You’ve just unlocked “Seed”
                                                </div>
                                                <div class="" style="color:#B7B7B7;font-size: 14px;font-weight: 400;">
                                                    Complete your first math task
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-app-bar>
</template>
  
<script>
import { search } from './data';
export default {
    name: 'HeaDer',
    data() {
        return {
            myinput: '',
            visibly: false,
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],

        }
    },
    computed: {
        searcher() {
            if (this.myinput == '') {
                return [];
            }
            const data = search.filter(item => item.name.toLowerCase().includes(this.myinput.toLowerCase()));
            this.visibly = data.length > 0 ? true : false;
            return data;
        }
    }
}
</script>

<style scoped>

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff;
  opacity: 1; /* Firefox */
}
input{
    color:white
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ffffff;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #ffffff;
}
.profile-hover {
    position: absolute;
    top: 0;
    rigth: 0;
    display: none;
}

.header-profile:hover .profile-hover {
    display: block;
}



.n-body-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.n-body {
    width: 337px;
    height: 354px;
    background: #FFFFFF;
    box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
    border-radius: 20px;
    align-items: center;
    position: relative;
    padding: 20px 20px;
    
}
.user-body-items{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: red;
}

.user-items-box{
    display: flex;
    justify-content: space-between;
}
.n-body-items {}


.n-body-item {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    text-align: start;
}

.n-body-item-img {
    display: flex;
    align-items: center;
}

.n-body-item img {
    width: 30px;
}

.p-body {
    width: 186px;
    height: 142px;
    background: #FFFFFF;
    box-shadow: 5px 0px 30px rgba(185, 213, 208, 0.5);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 24px 20px;
}

.notif-body {
    position: absolute;
    top: 52px;
    right: 0;
    opacity: 0;
    display: none;
    height: 0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.profil-body {
    position: absolute;
    top: 52px;
    right: 0;
    opacity: 0;
    display: none;
    height: 0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.items-box {
    display: flex;
    justify-content: space-between;
}

.header-notif:hover .notif-body {
    opacity: 1;
    height: 100%;
    display: block;
}

.header-profil:hover .profil-body {
    opacity: 1;
    height: 100%;
    display: block;
}

.myinput {
    position: absolute;
    top: 40px;
    /* height: 0; */
    opacity: 0;
    transition: 0.5s all ease;
    width: 100%;
    padding: 30px;
    /* top: 100px; */
    background: #fff;
    color: red;
    z-index: 100 !important;
    box-shadow: 2px 5px 8px rgba(1, 1, 1, 0.2);
    border-radius: 10px;
    margin-left: -5px;
}

.myinput.active {
    opacity: 1;
    /* height: 100%; */
    top: 45px;
}

.myinput div {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.149625px;
    color: #282929;
    margin-bottom: 9px;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.header-notif {
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.header-profil {
    position: relative;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.header-premium {
    width: 158px;
    height: 40px;
    box-sizing: border-box;
    background: #F9ED35;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.header-terminal {
    width: 150px;
    height: 40px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 6px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.header-terminal button {
    margin-left: 8px;
}

.header-search {
    position: relative;
    width: 340px;
    height: 40px;
    box-sizing: border-box;
    background: #77CABA;
    /* opacity: 0.2; */
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-right: 12px;
    z-index: 10 !important;
}

.header-search input {
    padding-left: 5px;
    border: none;
    outline: none;
}

::-moz-placeholder,
::placeholder,
::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: -0.149625px;
    color: #ffffff;
    background-color: #FFFFFF;
}

.header-right {
    display: flex;
    align-items: center;

}

.container {
    padding: 60px;
}

.navbar {
    border-bottom-left-radius: 42px;
    background: linear-gradient(261.11deg, #77CABA 0%, #229A87 90.84%);
}
</style>
  