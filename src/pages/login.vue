<template>
    <div class="login">
            <div class="login-box">
                <div class="login-logo">logo</div>
                <mt-field label="用户名" placeholder="请输入用户名" v-model="data.username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="data.password"></mt-field>
                <mt-cell value='忘记密码'></mt-cell>
                <div class="login-btn">
                       <mt-button size="large" type='primary' @click.native='login'>登录</mt-button>
                </div>
            </div>
    </div>
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            data:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login: function(){
            if(this.data.username==='' || this.data.password===''){
                Toast({
                  message: '不能为空',
                  position: 'top',
                  duration: 1000
                });
                return
            }else{
                Indicator.open('正在登录...');
                this.axios.get('http://localhost:8080/static/userData.json').then(res=>{
                Indicator.close();
                Toast({
                  message: '登录成功',
                  position: 'top',
                  duration: 1000
                });
                this.$store.dispatch("initLoginData", res.data);
                this.$router.push({path:"/"});

              })
            }


        }
    }
}

</script>
<style lang="scss" scoped>
        .login{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #fff;

        }
         .login-logo{
            width: 100px;
            height: 100px;
            margin: 10% auto;
            background: url(../assets/images/logo.png) no-repeat center;
            background-size: cover;
            text-indent: -999em
        }
        .login-btn{
            width: 80%;
            margin: 0 auto
        }
</style>
