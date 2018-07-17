<template>
<div>
  <el-table :data="table" style="text-align:left" @cell-click="exchangeInfo">
    <el-table-column label="流水时间" prop="set_time"></el-table-column>
    <el-table-column label="身份证号" prop="id_card"></el-table-column>
    <el-table-column label="预约时间" prop="exchange_time"></el-table-column>
    <el-table-column label="兑换积分" prop="exchange_points"></el-table-column>
    <el-table-column label="礼品名" prop="git_name"></el-table-column>
  </el-table>
</div>
</template>

<script>
  import {getExchange} from "../util/https";

  export default {
        name: "exchangeManage",
        data(){
          return{
            msg:'this is exchange page',
            table:[]
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
