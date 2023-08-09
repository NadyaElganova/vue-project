<template>
    <header>
        <nav>
            <RouterLink to='/'>
                Главная
            </RouterLink>
            <RouterLink to='/about'>
                О нас
            </RouterLink>
            <RouterLink to='/user'>
                Мой профиль
            </RouterLink>
            <RouterLink to='/new'>
                Новости
            </RouterLink>
            <RouterLink to='/message'>
                Сообщения
            </RouterLink>
            <RouterLink to='/albums'>
                Альбомы
            </RouterLink>
        </nav>
        </header>
</template>

<script>
    import {RouterLink, RouterView} from 'vue-router'

    export default {
        name: "Header",
        components: {

        },
        data(){

        },
    }
</script>

<style>
    header{
        border: 1px solid black;
        padding: 20px 40px;
    }
</style>