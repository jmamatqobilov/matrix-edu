<template>
    <v-container>
        <v-row>
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


