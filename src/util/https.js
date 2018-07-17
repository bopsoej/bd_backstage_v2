import axios from 'axios';

export function getUser_Table(model,pageSize,pageNow){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/userService.php',{
      params:{
        model:model,
        pageSize:pageSize,
        pageNow:pageNow
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

export function setNewPassword(model,id,password){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/userService.php',{
      params:{
        model:model,
        id:id,
        newPassword:password
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

export  function getApplylist(model,identifying){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        identifying:identifying
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

export  function setApplyInfo(model,blood_number,blood_nurse,confirm_time,identifying,id_card,donation_type){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        blood_number:blood_number,
        blood_nurse:blood_nurse,
        confirm_time:confirm_time,
        identifying:identifying,
        id_card:id_card,
        donation_type:donation_type
      }
    }).then(response=>{
      resolve(response.data)
    }).then(err=>{
      reject(err)
    })
  })
}

export function getExchange(model,identifying){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        identifying:identifying
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

export function fileUp(param,config){
  return new Promise((resolve,reject)=>{
    axios.post('http://www.honor99.com/blood_station/admin/test.php',param,config).then(response=>{
        resolve(response.data)
    }).then(err=>{
      reject(err)
    })
  })
}
export function upExchangeState(model,subtract_point,confirm_time,id_card,id,identifying){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        subtract_point:subtract_point,
        confirm_time:confirm_time,
        identifying:identifying,
        id:id,
        id_card:id_card
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
export function loginCheck(model,user,password){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        user:user,
        password:password
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}