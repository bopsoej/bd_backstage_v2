<template>
    <div>
      <el-container>
        <el-header>

        </el-header>
        <el-main>
          <el-form>
            <el-row type="flex" justify="center">
              <el-col :md="1"><el-form-item label="账号："></el-form-item></el-col>
              <el-col :md="4"><el-input v-model="user"></el-input></el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :md="1"><el-form-item label="密码："></el-form-item></el-col>
              <el-col :md="4"><el-input v-model="password" @keyup.enter.native="login"></el-input></el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :md="5" :push="2" ><el-button  @click="login"  type="primary">登录</el-button></el-col>
            </el-row>
          </el-form>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  import {loginCheck} from "../util/https";

  export default {
        name: "login",
      data(){
          return{
            msg:'this is login page',
            user:'',
            password:''
          }
      },
      methods:{
          // test(ev){
          //   console.log(ev.keyCode);},
          login(){

            if(this.user=='' || this.user==null ){
              this.$alert('账号不能为空',{
                confirmButton:'确定'
              })
            }else{
              if(this.password=='' || this.password==null){
                this.$alert('密码不能为空',{
                  confirmButton:'确定'
                })
              }else{
                loginCheck(5,this.user,this.password).then(res=>{
                  if(res.Islogin){
                    global.isLogin=res.Islogin;
                    this.$router.push({path:'/home'})
                    global.showModel=res.authority;
<<<<<<< HEAD
                    global.operator=res.name;
                    console.log(global.operator);
                    // console.log(global.showModel);
             }else{
=======
<<<<<<< HEAD
                    global.operator=res.name;
                    console.log(global.operator);
=======
                    console.log(global.showModel);
>>>>>>> 898b38afac8075a02240301b60ef5e89aa2f5577
                  }else{
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9
                    this.$alert('账号密码错误，请重新输入',{
                      confirmButton:'确定',
                    })
                    global.isLogin=res.Islogin;
                    console.log(res);
                  }
                })
              }
            }
          }
      }
    }
</script>

<style scoped>

</style>
