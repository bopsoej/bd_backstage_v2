<template>
    <div>
      <el-container id="body">
        <el-aside :xl="4" :lg="3" :sm="1"  class="Aside hidden-md-and-down" >
        </el-aside>
        <el-container :xl="16" :lg="18" :sm="22" >
          <el-header class="mainheader"></el-header>
          <el-container style="padding:0px;">
            <el-aside width="200px">
              <el-menu :default-active="activeIndex" @open="handleOpen" @close="handleClose" router mode="vertical">
                <el-menu-item index="administratorManage" style="width:200px;"><span>管理员帐号管理</span></el-menu-item>
                <el-menu-item index="userManage" style="width:200px;" >
                  <span >会员管理</span>
                </el-menu-item>
                <!--<el-menu-item index="signUpManage" style="width:200px;">-->
                <!--<span>报名管理</span>-->
                <!--</el-menu-item>-->
                <el-submenu index="1" style="width:200px;">
                  <template slot="title" >
                    <span>报名管理</span>
                  </template>
                  <el-menu-item-group >
                    <el-menu-item index="signUpManage"  style="margin-top:-14px;">
                      未完成
                    </el-menu-item>
                    <el-menu-item index="signUpComplete">
                      历史报名
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2" style="width:200px">
                  <template slot="title" >
                    <span>积分兑换管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="exchangeManage" style="margin-top:-14px;">
                      兑换管理
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
              <!--<router-link to="/points">报名管理</router-link>-->
            </el-aside>
            <el-main>
              <router-view/>

            </el-main>
          </el-container>
        </el-container>
        <el-aside :xl="4" :lg="3" :sm="1" class="Aside hidden-md-and-down" ></el-aside>
      </el-container>

    </div>
</template>

<script>
    export default {
        name: "home",
       data(){
          return{
            msg:'this is home page',
            activeIndex:''
          }
       },
      methods:{
        handleOpen(key,keyPath){
          // console.log(key,keyPath)
        },
        handleClose(key,keyPath){
          // console.log(key,keyPath)
        }
      },
      mounted(){
        let h=window.innerHeight;
        let seth=h+'px';
        console.log(seth);
        document.getElementById('body').style="height:"+seth;
      }
    }
</script>

<style scoped>

</style>
