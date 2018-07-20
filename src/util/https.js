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
export function setNewUser(model,name,id_card,phone,password,sex,blood_type,referee_id,remarks){
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/userService.php',{
      params:{
        model:model,
        name:name,
        id_card:id_card,
        phone:phone,
        password:password,
        sex:sex,
        blood_type:blood_type,
        referee_id:referee_id,
        remarks:remarks

      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
<<<<<<< HEAD

export function setAddApplyItem(model,id_card,operator,cut_time,remarks){ //献血表添加新记录
=======
<<<<<<< HEAD
export function setAddApplyItem(model,id_card,operator,cut_time,remarks){
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        id_card:id_card,
        operator:operator,
        cut_time:cut_time,
        remarks:remarks
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
<<<<<<< HEAD

export function setAddExchangeItem(model,identifying,id_card,operator,exchange_points,exchange_time,exchange_gift,remarks){ //exchange表添加记录
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/exchangeProcess.php',{
      params:{
        model:model,
        identifying:identifying,
        id_card:id_card,
        operator:operator,
        exchange_points:exchange_points,
        exchange_time:exchange_time,
        exchange_gift:exchange_gift,
        remarks:remarks
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
export function delUserItem(model,id){ //删除用户表一项记录
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/userService.php',{
      params:{
        model:model,
        id:id,
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
export function delApplyItem(model,id_card){ //删除apply表某一项
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/applyProcess.php',{
      params:{
        model:model,
        id_card:id_card
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
export function delExchangeItem(model,id_card){ //删除exchange表某项
  return new Promise((resolve,reject)=>{
    axios.get('http://www.honor99.com/blood_station/admin/exchangeProcess.php',{
      params:{
        model:model,
        id_card:id_card
      }
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}
=======
=======
>>>>>>> 898b38afac8075a02240301b60ef5e89aa2f5577
>>>>>>> d4f5696ce4bc83d927bac7ee72e3d5cae53b67b9
