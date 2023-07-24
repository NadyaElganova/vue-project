<template>
    <section class="posts">
        <div v-for="(post, index) in this.posts" v-if="this.posts.length"> 
            <Post @delete="this.deletePost(post.id)" :title="post.title" :text="post.text"/>
        </div>
        <div v-else>
            <EmptySection text="Нет ни одного поста!"/>
        </div>
            <div class="addForm">
                <div class="border rounded p-3">
                <div class="form-group">
                    <label for="exampleFormControlInput1">
                        Название поста<spa class="text-danger"> *</spa></label>
                    <input :class="{'with-error': this.error.title}" v-model="this.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    <small v-if="this.error.title" id="emailHelp" class="form-text text-muted">Заполните заголовок</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        Текст поста<spa class="text-danger"> *</spa></label>
                    <textarea :class="{'with-error': this.error.text}" v-model="this.text" class="form-control"></textarea>
                    <small v-if="this.error.text" id="emailHelp" class="form-text text-muted">Заполните текст</small>
                </div>
                <button class="btn btn-primary" @click="createPost">
                    Отправить
                </button>
            </div>
            </div>
    </section>
</template>

<script>
    import Post from "@/components/post/Post.vue";
    import EmptySection from "@/components/post/Empty.vue";

    export default{
        name: "New", 
        components:{
            Post,
            EmptySection,
        },
        data(){
            return{
                title: "",
                text: "",
                error:{
                    title: false,
                    text: false,
                },
                posts: [
                    {id: 1, title: "Пост 1", text: "Какой-то текст 1"},
                    {id: 2, title: "Пост 2", text: "Какой-то текст 1"},
                    {id: 3, title: "Пост 3", text: "Какой-то текст 1"},
                    {id: 4, title: "Пост 4", text: "Какой-то текст 1"},
                    {id: 5, title: "Пост 5", text: "Какой-то текст 1"},
                    {id: 6, title: "Пост 6", text: "Какой-то текст 1"},
                ],
            }
        },
        methods:{
            createPost(){
                if(this.text && this.title){
                    this.posts.push ({
                        title: this.title,
                        text: this.text,
                    });
                    this.title="";
                    this.text="";

                    this.error.title = false;
                    this.error.text = false;
                }else{
                    this.error.title = !this.title;
                    this.error.text = !this.text;
                }
            },
            deletePost(id){
                this.posts = this.posts.filter(post => post.id != id)
            }
        },
        watch:{
            title(value){
                this.error.title = false;
            },
            text(value){
                this.error.text = false;
            }
        }
    }
</script>

<style>
    .posts{
        margin: 0 auto;
        max-width: 80%;
    }
    .addForm{
        margin-top: 15px;
    }
</style>