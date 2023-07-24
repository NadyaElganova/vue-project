<template>
    <section class="messages">
        <div class="message" v-for="(messag, index) in this.messages">
            <div v-if="messag.sender" >
            <h4 class="sender">
                Отправитель
            </h4>
            </div>
            <div v-else>
                <h4 class="recipient" >
                    Получатель
                </h4>
            </div>
            <h3>
              {{messag.message}} 
            </h3>
        </div>
        <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        Сообщение<spa class="text-danger"> *</spa></label>
                    <textarea :class="{'with-error': this.error.text}" v-model="this.message" class="form-control"></textarea>
                    <small v-if="this.error.text" class="form-text text-muted">Введите сообщение</small>
                </div>
        <div class="form-check">
            <input v-model="this.sender"  
            @click="chooseRole" class="form-check-input" type="radio" 
            name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Отправитель
            </label>
            <input v-model="this.recipient" 
            @click="chooseRole" class="form-check-input" type="radio" 
            name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                Получатель
            </label>
        </div>
        <button type="submit" class="btn btn-primary" @click="createMessage">
            Отправить
        </button>
    </section>
</template>


<script>

export default{
      name: "Messages",
      components: {

      },
      data(){
        return{
            message: "",
            sender: true,
            recipient: false,
            error:{
                text: false,
            },
            messages:[
                {id:1, message: "Hello, world!", sender: true, recipient: false},
                {id:2, message: "Hello!", sender: false, recipient: true},
            ],

        }

      },
      methods:{
        createMessage(){
            if(this.message){
                this.messages.push({
                    message: this.message,
                    sender: this.sender,
                    recipient: this.recipient,
                });
                this.error.text = false;
                this.message="";
            }else{
                this.error.text = true;
            }
            if(!exampleRadios1  && !exampleRadios2.checked){
                this.error.role = true;
                console.log(exampleRadios1.checked);
            }
        },
        chooseRole(){
            if(exampleRadios1.checked == true)
            {
               this.sender = true;
               this.recipient = false;
            }else{
                this.sender = false;
                this.recipient = true;
            }
        },
      }
  }
</script>

<style>
.message{
    border: 1px solid black;
    padding: 15px;
    margin-top: 10px;
}
.messages{
    margin: 0 auto;
    max-width: 80%;
}
.recipient{
    margin-top: 10px;
    color: blueviolet;
}
.sender{
    margin-top: 10px;
    color: red;
}
.form-check-label {
    margin-right: 50px;
}
</style>
