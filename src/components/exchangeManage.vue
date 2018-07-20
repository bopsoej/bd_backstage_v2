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
        <el-button type="danger" icon="el-icon-delete" circle v-if="editButtonVisible" @click="editButtonVisible=false"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle v-else @click="editButtonVisible=true"></el-button>
      </el-col>
    </el-row>
  </div>
  <el-dialog title="添加纪录" :visible.sync="addExchangeItemVisible">
    <el-form>
      <el-form-item label="身份证号"><el-input v-model="newExchangeItem.id_card"></el-input></el-form-item>
      <el-form-item label="预约时间"><el-input v-model="newExchangeItem.exchange_time"></el-input></el-form-item>
      <el-form-item label="兑换积分"><el-input v-model="newExchangeItem.exchange_points"></el-input></el-form-item>
      <el-form-item label="礼品名"><el-input   v-model="newExchangeItem.exchange_gift"></el-input></el-form-item>
      <el-form-item label="备注"><el-input     v-model="newExchangeItem.remarks"></el-input></el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="addExchangeItemVisible=false">取消</el-button>
      <el-button type="primary" @click="addExchangeItem">确定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
  import {getExchange,setAddExchangeItem,delExchangeItem} from "../util/https";

  export default {
        name: "exchangeManage",
        data(){
          return{
            msg:'this is exchange page',
            table:[],
            addExchangeItemVisible:false,
            editButtonVisible:false,
            newExchangeItem:{
              id_card:'',
              exchange_time:'',
              exchange_points:'',
              exchange_gift:'',
              remarks:''
            }
          }
        },
    methods:{
      addExchangeItem(){
        setAddExchangeItem(1,2,this.newExchangeItem.id_card,global.operator,this.newExchangeItem.exchange_points,this.newExchangeItem.exchange_time,this.newExchangeItem.exchange_gift,this.newExchangeItem.remarks).then(res=>{
          // console.log(res);
          if(res){
            this.addExchangeItemVisible=false;
            Object.keys(this.newExchangeItem).forEach(key=>this.newExchangeItem='');
            getExchange(3,2).then(res1=>{
              this.table=res1;
            })
          }else{
            console.log(res);
          }
        })
      },
      exchangeInfo(val){
        if(this.editButtonVisible){
          this.$confirm('确认删除此条记录吗？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
              }).then(()=>{
                delExchangeItem(2,val.id_card).then(res1=>{
                  if(res1){
                    getExchange(3,2).then(res=>{
                      this.table=res;
                    });
                    this.$message({
                      type:'success',
                      message:'删除成功！'
                    })
                  }else{
                    console.log(res1);
                    this.$message({
                      type:'info',
                      message:'删除失败。'
                    })
                  }
                })
              }).catch(()=>{

              })
        }else{
          this.$router.push({path:'/exchangeInfo',query:{val}})
        }
      }
    },
      mounted(){
        getExchange(3,2).then(res=>{
          this.table=res;
        })
      }
    }
</script>

<style scoped>

</style>
