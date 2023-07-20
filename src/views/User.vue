<template>
      <Avatar />
      <News />
      <About />
</template>


<script>
  import Avatar from "@/components/Avatar.vue"
  import News from "@/components/News.vue"
  import About from "@/components/Info.vue"

  export default{
        name: "App",
        components: {
          Avatar,
          News,
          About

        },
        data(){

        },
    }
</script>

<style>

</style>
