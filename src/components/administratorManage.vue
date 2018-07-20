<template>
    <div>
    <el-table :data="table" style="text-align:left">
      <el-table-column prop="name" label="账号"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="authority" label="权限"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
    </div>
</template>

<script>
  import {getUser_Table} from "../util/https";


    export default {
        name: "administrator",
      data(){
          return{
            msg:'this is administrator page',
            table:[],
            pageSize:5,
            pageNow:1,
            countPage:1,

          }
      },
      mounted(){
          getUser_Table(4,this.pageSize).then(res=>{
            this.countPage=res;
            console.log(res);
          })
          getUser_Table(5,this.pageSize,this.pageNow).then(res=>{
            this.table=res;
            // console.log(res);
          })
      }
    }
</script>

<style scoped>

</style>
