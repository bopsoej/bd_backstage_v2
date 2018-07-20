<template>
    <div>
      <el-table :data="table" style="text-align:left" @cell-click="change" >
      <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="id_card" label="身份证号" ></el-table-column>
        <el-table-column prop="phone" label="手机号" ></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="blood_type" label="性别"></el-table-column>
        <el-table-column prop="blood_card" label="献血证号"></el-table-column>
        <el-table-column prop="referee_id" label="推荐人"></el-table-column>
        <el-table-column prop="points" label="积分"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="pageSize" layout="prev,pager,next,jumper" :page-count="countPage"></el-pagination>
      </div>
      <el-row type="flex" justify="end">
        <el-col :md="4">
          <el-button type="primary" icon="el-icon-circle-plus-outline" circle @click="showAddItemVisible"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <!--<el-button  type="primary" icon="el-icon-edit" circle @click="change"></el-button>-->
        </el-col>
      </el-row>
      <el-dialog title="修改密码"  :visible.sync="dialogFormVisible">
        <el-form >
          <el-form-item label="原密码">
            <el-input v-model="dialogTemp.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="newPassword"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false">取消</el-button>
          <el-button type="primary" @click="changePs">确定</el-button>
        </div>
      </el-dialog>
      <el-dialog title="添加会员" :visible.sync="addItemVisible">
        <el-form>
          <el-form-item label="姓名">
            <el-input v-model="sendNewUser.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="sendNewUser.id_card"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="sendNewUser.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="sendNewUser.password"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="sendNewUser.sex"></el-input>
          </el-form-item>
          <el-form-item label="血型">
            <el-input v-model="sendNewUser.blood_type"></el-input>
          </el-form-item>
          <el-form-item label="推荐人">
            <el-input v-model="sendNewUser.referee_id"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addItemVisible=false">取消</el-button>
          <el-button type="primary" @click="saveNewUser">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import {getUser_Table,setNewPassword,setNewUser} from "../util/https";

  export default {
        name: "user-manage",
      data(){
          return{
            msg:'this is user manage page',
            table:[],
            currentPage3:1,
            pageNow:1,
            pageSize:5,
            countPage:1,
            dialogFormVisible:false,
            dialogTemp:'',
            addItemVisible:false,
            addItemTemp:'',
            newPassword:'',
            sendNewUser:{
              name:'',
              id_card:'',
              password:'',
              phone:'',
              sex:'',
              blood_type:'',
              referee_id:'',
              remarks:''
            }
          }
      },
    methods:{
      handleSizeChange(val){
        console.log(`每页:${val}条`)
        // alert(1)
      },
      handleCurrentChange(val){
        getUser_Table(2,this.pageSize,val).then(res=>{
          this.table=res
          this.pageNow=val;
        })
      },
      showAddItemVisible(){
        this.addItemVisible=true;
        // this.addItemTemp=val;
      },
      change(val){
        // console.log(val);
        this.dialogFormVisible=true
        this.dialogTemp=val
        // console.log(val.id);
      },
      saveNewUser(){
          setNewUser(6,this.sendNewUser.name,this.sendNewUser.id_card,this.sendNewUser.phone,this.sendNewUser.password,this.sendNewUser.sex,this.sendNewUser.blood_type,this.sendNewUser.referee_id,this.sendNewUser.remarks).then(res=>{
            if(res){
              getUser_Table(7,this.pageSize).then(res1=>{
                this.countPage=res1;
                // console.log(res);
              })
              getUser_Table(2,this.pageSize,this.pageNow).then(res1=>{
                // console.log(res);
                this.table=res1
              })   //重新拉取表单
              this.addItemVisible = false;
              Object.keys(this.sendNewUser).forEach(key=>this.sendNewUser='')


              console.log(res);
            }else{
              console.log(res);
              // this.router.push({path:'/userManage'})
              // this.addItemVisible=false;
            }
          })
      },
      changePs(){
        setNewPassword(3,this.dialogTemp.id,this.newPassword).then(res=>{
          if(res==1){
            this.$message({
              message:'修改成功',
              type:'success'
            })
          }else if(res==2){
            this.$message({
              message:'与旧密码重复',
              type:'warning'
            })
          }else{
            this.$message.error(res)
          }
        })
        this.dialogFormVisible=false
      }
    },
    mounted(){
      getUser_Table(7,this.pageSize).then(res=>{
        this.countPage=res;
        // console.log(res);
      })
         getUser_Table(2,this.pageSize,this.pageNow).then(res=>{
           // console.log(res);
           this.table=res
         })
    }
    }
</script>

<style scoped>

</style>
