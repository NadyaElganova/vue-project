<template>
    <div class="album">
        <div class="d-flex justify-content-between">
            <h3>
                {{ this.id }}
            </h3>
        </div>
        <p>
            {{ this.title }}
        </p>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click='this.$router.push("/album/"+this.id)'>
                Посмотреть все фото
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Album",
        props: [
            'id',
            'title',            
        ],
        components: {

        },
        data(){

        },
        methods: {
            
        }
    }
</script>

<style>
    .album{
        border: 1px solid black;
        padding: 15px;
        margin-top: 10px;
    }
    .album:last-child{
        margin-bottom: 10px;
    }
</style>