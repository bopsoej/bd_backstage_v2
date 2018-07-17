<template>
    <div>
      <el-table :data="table" style="text-align:left" @cell-click="jumpInfo">
      <el-table-column prop="set_time" label="报名时间"></el-table-column>
      <el-table-column prop="id_card" label="身份证号"></el-table-column>
      <el-table-column prop="cut_time" label="预约时间"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
    </div>
</template>

<script>
  import {getApplylist} from "../util/https";

  export default {
        name: "sign-up-manage",
      data(){
          return{
            msg:'this is sign up manage page',
            table:[],
          }
      },
    methods:{
          jumpInfo(val){
            this.$router.push({path:'/applyInfo',query:{val}})
            // console.log(val.id_card)
          }
    },
    mounted(){
      getApplylist(1,2).then(res=>{
        this.table=res

        console.log(res);
      })
    }
    }
</script>

<style scoped>

</style>
