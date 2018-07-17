import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Login from '../components/login'
import SignUpManage from '../components/signUpManage'
import UserManage from '../components/userManage'
import SignUpComplete from  '../components/signUpComplete'
import ApplyInfo from '../components/ApplyInfo'
import ExchangeManage from '../components/exchangeManage'
import ExchangeInfo from '../components/exchangeInfo'
import AdministratorManage from '../components/administratorManage'


Vue.use(Router)

const VueRoutes=new Router({
  routes:[{
      path:'/home',
      name:'home',
      component:Home,
      meta:{requireAuth:true},
    children:[
      {path:'/administratorManage',name:'administratorManage',meta:{requireAuth:true},component:AdministratorManage},
      {path:'/signUpManage',name:'signUpManage',meta:{requireAuth:true},component:SignUpManage},
      {path:'/applyInfo/',name:'applyInfo',meta:{requireAuth:true},component:ApplyInfo},
      {path:'/userManage',name:'userManage',meta:{requireAuth:true},component:UserManage},
      {path:'/signUpComplete',name:'signUpComplete',meta:{requireAuth:true},component:SignUpComplete},
      {path:'/exchangeManage',name:'exchangeManage',meta:{requireAuth:true},component:ExchangeManage},
      {path:'/exchangeInfo',name:'exchangeInfo',meta:{requireAuth:true},component:ExchangeInfo},
    ]
  },

    {path:'/login',name:'login',meta:{requireAuth:false},component:Login},
    {path:'*',redirect:'/home'}
    ]
})

VueRoutes.beforeEach(function(to,from,next){
  if(to.meta.requireAuth){
    if(global.isLogin){
      // console.log(global.user)
      next()
    }else{
      next({path:'/login',query:{redirect:to.fullPath}})
    }
  }else{
    next();
  }
})

export default VueRoutes;
