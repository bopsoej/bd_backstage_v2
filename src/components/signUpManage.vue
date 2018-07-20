<template>
    <div>
      <el-table :data="table" style="text-align:left" @cell-click="jumpInfo">
      <el-table-column prop="set_time" label="报名时间"></el-table-column>
      <el-table-column prop="id_card" label="身份证号"></el-table-column>
      <el-table-column prop="cut_time" label="预约时间"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
      <br>
      <div>
        <el-row type="flex" justify="end">
          <el-col :md="4">
            <el-button type="primary" icon="el-icon-circle-plus-outline" circle @click="addItemGroupVisible=true"></el-button>
<<<<<<< HEAD
            <el-button type="danger" icon="el-icon-delete" circle  @click="editButtonVisible=false" v-if="editButtonVisible"></el-button>

            <el-button type="primary" icon="el-icon-edit" circle  @click="editButtonVisible=true" v-else></el-button>
=======
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9
            <!--<el-button type="primary" icon="el-icon-edit" circle @click="jumpInfo"></el-button>-->
          </el-col>
        </el-row>
      </div>
      <el-dialog title="添加纪录" :visible.sync="addItemGroupVisible">
        <el-form>
          <!--<el-form-item label="报名时间">-->
            <!--<el-input></el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="身份证号">
            <el-input v-model="newApplyItem.id_card"></el-input>
          </el-form-item>
          <el-form-item label="预约时间">
            <el-input v-model="newApplyItem.cut_time"></el-input>
          </el-form-item>
          <el-form-item label="备注"><el-input v-model="newApplyItem.remarks"></el-input></el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addItemGroupVisible=false">取消</el-button>
          <el-button type="primary" @click="addApplyItem">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
<<<<<<< HEAD
  import {getApplylist,setAddApplyItem,delApplyItem} from "../util/https";
=======
  import {getApplylist,setAddApplyItem} from "../util/https";
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9

  export default {
        name: "sign-up-manage",
      data(){
          return{
            msg:'this is sign up manage page',
            table:[],
            addItemGroupVisible:false,
<<<<<<< HEAD
            editButtonVisible:false,
=======
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9
            newApplyItem:{
              id_card:'',
              cut_time:'',
              remarks:''
            }
          }
      },
    methods:{
          addApplyItem(){
            setAddApplyItem(6,this.newApplyItem.id_card,global.operator,this.newApplyItem.cut_time,this.newApplyItem.remarks).then(res=>{
              if(res){
                this.addItemGroupVisible=false;
                Object.keys(this.newApplyItem).forEach(key=>this.newApplyItem='');
                getApplylist(1,2).then(res=>{
                  this.table=res
                })
              }
            })
          },
          jumpInfo(val){
            if(this.editButtonVisible){
              this.$confirm('确认删除此记录吗？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
              }).then(()=>{
                delApplyItem(7,val.id_card).then(res1=>{
                  if(res1){``
                    this.$message({
                      type:'success',
                      message:'删除成功！'
                    })
                    getApplylist(1,2).then(res=>{
                      this.table=res;
                    })
                  }else{
                    console.log(res1);
                    this.$message({
                      type:'info',
                      message:'删除失败！'
                    })
                  }
                })
              }).catch(()=>{
                this.$message({
                  type:'info',
                  message:'已取消删除'
                })
              })
            }else{
              this.$router.push({path:'/applyInfo',query:{val}})
            }
          }
    },
    mounted(){
      getApplylist(1,2).then(res=>{
        this.table=res

        console.log(global.operator);
      })
    }
    }
</script>

<style scoped>

</style>
