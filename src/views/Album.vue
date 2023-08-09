<template>
    <div class="album-page">
        <div class="album-content" >
            <div class="photo" v-for="(photo, index) in this.showPhotos"  v-if='this.showPhotos'>
                <img :src="photo.url">
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click='this.$router.go(-1)'>
                Вернуться назад
            </span>
        </div>
    </div>
</template>

<script>
import {getPhotos} from '@/services/index.js';

export default {
        name: "Photo",
        data(){
            return {
                showPhotos: [],
            }
        },
        async created(){
            this.allPhotos = await this.getAllPhotos();
            this.showPhotos = await this.getShowPhotos();
        },
        methods: {
            async getAllPhotos(){
                try {
                    const response = await getPhotos();
                    return response.data;
                } catch (error) {
                    console.log(error)
                }
            },
            async getShowPhotos(){
                let bufPhotos = [];
                this.allPhotos.forEach(photo =>{
                    if(photo.albumId == this.$route.params.id){
                        bufPhotos.push(photo)
                    }
                })
                return bufPhotos;
            }
        }
    }
</script>

<style>
    .album-page{
        margin: 0 auto;
        max-width: 80%;
        padding: 15px;
        border: 1px solid black;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .album-content{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .photo{
        margin: 5px;
    }
</style>