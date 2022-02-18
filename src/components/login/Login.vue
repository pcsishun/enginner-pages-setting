<template>
    <div class="login-container">
        <div class="login-content">
            <div class="login-title">
                <h4>login</h4>
            </div>
            <div class="login-body">
                <div class="body-content">
                    <div class="login-text">
                        <input class="input-data" v-model="isUsername" placeholder="Username" type="text"/>
                    </div>
                    <div class="login-text">
                        <input class="input-data" v-model="isPassword" placeholder="Password" type="password"/>
                    </div>
                    <div class="error-msg" v-if="isError === true">
                        <h5>{{ errorText }}</h5>
                    </div>
                    <div class="btn-login">
                        <button class="btn btn-primary" @click="haddleLogin">Login</button>
                        <!-- <button class="btn btn-primary" @click="haddleForgot">Forgot</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import nodemailer from 'nodemailer';
import axios from 'axios';
import Cookies from 'js-cookie'

export default {
    data(){
        return{
            isUsername: null,
            isPassword: null,
            isError: false,
            errorText: null
        }
    },
    methods:{
        async haddleLogin(){
            if(this.isUsername !== this.$root.state.username || this.isPassword !== this.$root.state.password){
                this.isError = true,
                this.errorText = "invalid username or password"
            }
            else{
                const headerConfig = {
                    header:{
                        'Content-Type': 'application/json'
                        }
                }

                const adminUser = {
                    username: this.isUsername,
                    password: this.isPassword
                }

                const objectToken = await axios.post("http://localhost:3030/login", adminUser, headerConfig)
                const isToken = JSON.stringify(objectToken)

                Cookies.set("tai_token_eng", isToken, {expires: 0.1})

            
                this.isError = false
                this.errorText = null
                this.$root.state.isLogin = true
                this.$router.push('./config')
            }
        },
        // haddleForgot(){
        //     alert('in maintance')

            // const setEmailAdmin = nodemailer.createTransport({
            //     service: "gmail",
            //     auth:{
            //         user: "",
            //         pass: ""
            //     }
            // });

            // const mailOption = {
            //     from: "",
            //     to: "",
            //     subject: "Resend password",
            //     text: "recover password admin is: " + this.$root.state.password
            // }

            // setEmailAdmin.sendMail(mailOption, (error, info) => {
            //     if(error){
            //         alert("please contact admin and copy this error code: " + error)
            //     }else{
            //         alert("email have alreadly send please check email admin info responsive: "+ info.response)
            //     }
            // })
        // }
    }
}
</script>

<style scoped>
.login-container{
    text-align: center;
    margin-top: 50px;
    color: rgb(138, 138, 138)
}
.login-body{
    width: 50%;
    margin: auto;
    border: 1px solid rgb(184, 184, 184);
    border-radius: 8px;
}
.body-content{
    margin-top: 30px;
    margin-bottom: 30px;
}
.login-title{
    margin-bottom: 30px;
}
.error-msg{
    text-align: center;
}

.input-data{
    border-radius: 8px;
    border: 1px solid rgb(172, 172, 172);
    height: 40px;
}
.input-data::placeholder{
    padding-left: 5px;
}
.login-text{
    margin-bottom: 30px;
}
.btn{
    margin-left: 10px;
    margin-right: 10px;
}
</style>