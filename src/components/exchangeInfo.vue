<template>
    <div>
      <el-form  >
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="流水时间："></el-form-item></el-col>
          <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="exprevPageData.set_time"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="身份证号："></el-form-item></el-col>
          <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="exprevPageData.id_card"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="预约兑换时间："></el-form-item></el-col>
          <el-col  :md="9" :pull="1"><el-input :disabled="true" v-model="exprevPageData.exchange_time"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="备注："></el-form-item></el-col>
          <el-col :md="9" :pull="1"><el-input :disabled="true" v-model="exprevPageData.remarks"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="兑换礼品积分："></el-form-item></el-col>
          <el-col :md="9" :pull="1"> <el-input v-model="exprevPageData.exchange_points"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="完成时间："></el-form-item></el-col>
          <el-col :md="9" :pull="1"><el-input v-model="exprevPageData.confirm_time"></el-input></el-col>
        </el-row>
        <el-row :md="24" type="flex" justify="center">
          <el-col :md="4"><el-form-item label="兑换状态："></el-form-item></el-col>
          <el-col :md="3" :pull="1"><el-radio v-model="exprevPageData.identifying" border label="2">未完成</el-radio></el-col>
          <el-col :md="6" :pull="2"><el-radio v-model="exprevPageData.identifying" border label="1">完成</el-radio></el-col>
        </el-row>
        <hr>
        <br>

        <el-row type="flex" justify="center">
          <el-col :md="6"><el-button type="primary" round @click="save_state">确定</el-button></el-col>
          <el-col :md="6"><el-button round @click="jumpPrev">返回</el-button></el-col>
        </el-row>
      </el-form>

    </div>
</template>

<script>
  import {fileUp,upExchangeState} from "../util/https";

  export default {
        name: "exchangeInfo",
      data(){
          return{
            msg:'this exchangeInfo page',
            name:'',
            exprevPageData:[],
            age:''
          }
      },
    methods:{
          jumpPrev(){
            this.$router.go(-1)
          },
          save_state(){
            if(this.exprevPageData.identifying==2){
              this.$alert('请确认状态完成',{
                confirmButton:'确定',
                callback:action=>{
                  this.$message({
                    type:'info',
                    message:'请确认该流水完成状态。'
                  })
                }
              })
            }else{
              upExchangeState(4,this.exprevPageData.exchange_points,this.exprevPageData.confirm_time,this.exprevPageData.id_card,this.exprevPageData.id,this.exprevPageData.identifying).then(res=>{
                console.log(res);
              })
            }
          },
          update(e){
            // var e=document.getElementById('fileinfo')
            let file =e.target.files[0];
            let param=new FormData();
            param.append('file',file);
            console.log(param.get('file'));
            let config={
              headers:{'Content-Type':'multipart/form-data'}
            };
            fileUp(param,config).then(res=>{
              console.log(res);
            })
          },
      getFile(event) {
        this.file = event.target.files[0];
        console.log(this.file.name);
      },
      submitForm(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('age', this.age);
        formData.append('file', this.file);

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        this.$http.post('http://www.honor99.com/blood_station/admin/test.php', formData, config).then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
      }

    },
      mounted(){
        this.exprevPageData=this.$route.query.val
        console.log(this.exprevPageData.set_time);
      }
    }
</script>

<style scoped>
hr{
  border-top:1px solid ghostwhite;
}
</style>
