<template>
<div>
  <el-table :data="table" style="text-align:left" @cell-click="exchangeInfo">
    <el-table-column label="流水时间" prop="set_time"></el-table-column>
    <el-table-column label="身份证号" prop="id_card"></el-table-column>
    <el-table-column label="预约时间" prop="exchange_time"></el-table-column>
    <el-table-column label="兑换积分" prop="exchange_points"></el-table-column>
    <el-table-column label="礼品名" prop="git_name"></el-table-column>
  </el-table>
  <br>
  <div>
    <el-row type="flex" justify="end">
      <el-col :md="4">
        <el-button type="primary" icon="el-icon-circle-plus-outline" circle @click="addExchangeItemVisible=true"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-col>
    </el-row>
  </div>
  <el-dialog title="添加纪录" :visible.sync="addExchangeItemVisible">
    <el-form>
      <el-form-item label="身份证号"><el-input></el-input></el-form-item>
      <el-form-item label="预约时间"><el-input></el-input></el-form-item>
      <el-form-item label="兑换积分"><el-input></el-input></el-form-item>
      <el-form-item label="礼品名"><el-input></el-input></el-form-item>
      <el-form-item label="备注"><el-input></el-input></el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="addExchangeItemVisible=false">取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  import {getExchange} from "../util/https";

  export default {
        name: "exchangeManage",
        data(){
          return{
            msg:'this is exchange page',
            table:[],
            addExchangeItemVisible:false
          }
        },
    methods:{
      exchangeInfo(val){
          this.$router.push({path:'/exchangeInfo',query:{val}})

      }
    },
      mounted(){
        getExchange(3,2).then(res=>{
          // console.log(res);
          this.table=res;
        })
      }
    }
</script>

<style scoped>

</style>
