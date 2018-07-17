<template>
<div>
  <el-form>

  <el-row :md="24"  type="flex" justify="center" >
     <el-col :md="4">
       <el-form-item label="报名时间："></el-form-item></el-col>
       <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="prevPageData.set_time"></el-input></el-col>
  </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4">
        <el-form-item label="身份证号："></el-form-item>
      </el-col>
      <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="prevPageData.id_card"></el-input></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4">
        <el-form-item label="预约时间："></el-form-item>
      </el-col>
      <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="prevPageData.cut_time"></el-input></el-col>
    </el-row>
    <el-row type="flex" justify="center" :md="24">
      <el-col :md="4">
        <el-form-item label="备注：">
        </el-form-item></el-col>
      <el-col :md="9" :pull="1">
        <el-input :disabled="true" v-model="prevPageData.remarks"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4">
        <el-form-item label="本次献血量："></el-form-item>
      </el-col>
      <el-col :md="9" :pull="1"><el-input v-model="prevPageData.blood_number"></el-input></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4">
        <el-form-item label="捐献类型："></el-form-item>
      </el-col>
      <el-col :md="9" :pull="2"><el-select v-model="donation_type" placeholder="请选择" @change="test">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4"><el-form-item label="采血护士："></el-form-item></el-col>
      <el-col :md="9" :pull="1"><el-input v-model="prevPageData.blood_nurse"></el-input></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :md="4"><el-form-item label="献血确认日期："></el-form-item></el-col>
      <el-col :md="9" :pull="1"><el-input v-model="prevPageData.confirm_time"></el-input></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <!--<el-col :sm="6"></el-col>-->
      <el-col :md="4" ><el-form-item label="本次献血状态："></el-form-item></el-col>
      <el-col  :md="3" :pull="1" ><el-radio  v-model="prevPageData.identifying" label="2" border size="small" class="radio" >未完成</el-radio></el-col>
      <!--<el-col></el-col>-->
      <el-col :md="6" :pull="2"><el-radio v-model="prevPageData.identifying" label="1" border size="small" class="radio">完成</el-radio></el-col>
    </el-row>
    <hr>
    <br>
    <el-row type="flex" justify="center">
      <el-col :md="6"><el-button type="primary" round @click="setBloodInfo">确定</el-button></el-col>
      <el-col :md="6"><el-button round @click="jumpPrev">返回</el-button></el-col>
    </el-row>
  </el-form>
</div>
</template>

<script>
  import {setApplyInfo} from "../util/https";

  export default {
        name: "apply-info",
        data(){
          return{
            msg:'this id apply info page',
            prevPageData:[],
            radio1:'Null',
            options:[{
              value:'全血',
              label:'全血'
            },{
              value:'血小板',
              label:'血小板'
            }],
            donation_type:'',
            value:''
          }
        },
      methods:{
          test(){
            console.log(this.donation_type)
          },
          setBloodInfo(){
            // console.log(this.prevPageData.id_card);
            if(this.prevPageData.identifying==2){
              this.$alert('请确认状态完成',{
                confirmButtonText:'确定',
                callback:action=>{
                  this.$message({
                    type:'info',
                    message:`确认献血状态`
                  })
                }
              })
            }else{
              setApplyInfo(2,this.prevPageData.blood_number,this.prevPageData.blood_nurse,this.prevPageData.confirm_time,this.prevPageData.identifying,this.prevPageData.id_card,this.test).then(res=>{
                console.log(res);
              })
            }

          },
        jumpPrev(){
          this.$router.go(-1)
        }
      },
      mounted(){
        this.prevPageData=this.$route.query.val
        console.log(this.prevPageData.identifying)
      }
    }
</script>

<style scoped>
*{
  padding-left:0;
  margin-left:0;
}
  .radio{
    width:90px;
    height:35px;
  }
  hr{
    border-top:1px solid ghostwhite;
  }
</style>
