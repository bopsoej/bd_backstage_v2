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
          <el-button type="primary" icon="el-icon-circle-plus" circle @click="showAddItemVisible"></el-button>
          <el-button  type="primary" icon="el-icon-edit" circle></el-button>
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
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="血型">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="推荐人">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addItemVisible=false">取消</el-button>
          <el-button type="primary">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import {getUser_Table,setNewPassword} from "../util/https";

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
            newPassword:''
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
      showAddItemVisible(val){
        this.addItemVisible=true;
        this.addItemTemp=val;
      },
      change(val){
        // console.log(val);
        this.dialogFormVisible=true
        this.dialogTemp=val
        // console.log(val.id);
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
          getUser_Table(1,this.pageSize).then(res=>{
            console.log(res);
            this.countPage=res;
          });
         getUser_Table(2,this.pageSize,this.pageNow).then(res=>{
           console.log(res);
           this.table=res
         })
    }
    }
</script>

<style scoped>

</style>
