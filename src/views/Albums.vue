<template>
    <section class="albums">
        <div v-for="(album, index) in this.albums" v-if="this.albums.length">
            <Album
                :id="album.id"
                :title="album.title"
            />
        </div>
        <div v-else>
            <EmptySection text="Еще нет ни одного альбома!"/>
        </div>
    </section>
</template>


<script>
    import Album from "@/components/Album.vue"
    import EmptySection from "@/components/post/Empty.vue";
    import { getAlbums } from "@/services/index.js";

    export default{
        name: "Albums",
        components:{
            Album,
            EmptySection,
        },
        async created(){
            this.albums = await this.getAlbums();
            console.log(this.albums.length);
        },
        data(){
            return{
                id: "",
                title: "",
                albums: [],
            }
        },
        methods:{
            async getAlbums(){
                try {
                    const response = await getAlbums();
                    return response.data;
                } catch (error) {
                    return [];
                }
            },
        },
    }
</script>

<style>
    .albums{
        margin: 0 auto;
        max-width: 80%;
    }
</style>