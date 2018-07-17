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
              <el-col :md="4"><el-input v-model="password"></el-input></el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :md="5" :push="2" ><el-button  @click="login" type="primary">登录</el-button></el-col>
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
                  if(res){
                    global.isLogin=res;
                    this.$router.push({path:'/home'})
                    console.log(res);
                  }else{
                    this.$alert('账号密码错误，请重新输入',{
                      confirmButton:'确定',
                    })
                    global.isLogin=res;
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
