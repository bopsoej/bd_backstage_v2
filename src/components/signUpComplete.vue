<template>
    <div>
      <el-table :data="table" style="text-align:left">
        <el-table-column label="报名时间" prop="set_time"></el-table-column>
        <el-table-column label="身份证号" prop="id_card"></el-table-column>
        <el-table-column label="预约时间" prop="cut_time"></el-table-column>
        <el-table-column label="献血量" prop="blood_number"></el-table-column>
        <el-table-column label="负责护士" prop="blood_nurse"></el-table-column>
        <el-table-column label="完成时间" prop="cofirm_time"></el-table-column>
      </el-table>
    </div>
</template>

<script>
import {getApplylist} from "../util/https";

export default {
        name: "sign-up-complete",
        data(){
          return{
            msg:'this id sign up complete page',
            table:[],
          }
        },
        mounted(){
          getApplylist(1,1).then(res=>{
            // console.log(res);
            this.table=res;
          })
        }
    }
</script>

<style scoped>

</style>
