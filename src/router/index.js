import Vue from 'vue'
import Router from 'vue-router'
import drive from '../pages/drive'
import detail from '../pages/detail'
import postDynamic from '../pages/postDynamic'  // 填写动态页面 add 2017/8/20
import addTask from '../pages/addTask'  // 新增任务 页面 add 2017/8/20
// import relCustom from '../pages/relCustom' //新增任务－关联客户 add 2017/8/21
import login from '../pages/login'
import userinfo from '../pages/userinfo'  //个人资料页 add 2017/8/24
import userinfoEdit from '../pages/userinfoEdit' // 个人资料修改页 add2017/8/25
import cropinfo from '../pages/cropinfo'  //企业资料页 add 2017/8/26
import lowerLevel from '../pages/lowerLevel'  //下级任务页 add 2017/8/28
import crminfo from '../pages/crminfo' //crm客户信息 add 2017/8/29
import addLinker from '../pages/addLinker'  // crm客户信息 - 添加联系人  add 2017/8/30
import editcrminfo from '../pages/editcrminfo' // 修改crm客户信息 add 2017/8/31
import cloudDisk from '../pages/cloudDisk' //云盘 add 2017/8/31
import addressBook from '../pages/addressBook'  //通讯录 add 2017/9/2
import addClerk from '../pages/addClerk'  //通讯录 add 2017/9/2
import workFlow from '../pages/workFlow' // 工作流 add 2017/9/4
import workFlowDetail from '../pages/workFlowDetail' // 工作流 add 2017/9/4
import addWorkFlow from '../pages/addWorkFlow' // 添加工作流 add 2017/9/4
import set from "../pages/set.vue"  // 设置页面 add 2017/9/6

Vue.use(Router)

// 路由组件
// 1.主页 － drive
// 2.任务详情页 － details/id
// 3.工作流 － workFlow
// 4.云盘 －
// 5.登录页 －login
// 6.个人资料页 －userinfo/loginname
// 7.crm客户信息 --/crminfo/:id
// 8.crm客户信息 - 添加联系人
// 9.修改crm客户信息
// 10.云盘
// 11.通讯录
// 12.通讯录-新增联系人
// 13.设置页面

export default new Router({
  routes: [
    {
      path: '/',
      name: 'drive',
      component: drive
    },
    {
      path: '/cloud-disk',
      name: 'cloudDisk',
      component: cloudDisk
    },
    {
      path: '/address-book',
      name: 'addressBook',
      component: addressBook
    },
     {
      path: '/userinfo-edit/',
      name: 'userinfo-edit',
      component: userinfoEdit
    },
    {
      path: '/userinfo/:loginname',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/cropinfo',
      name: 'cropinfo',
      component: cropinfo
    },
    {
      path: '/addLinker',
      name: 'addLinker',
      component: addLinker
    },
    {
      path: '/addClerk',
      name: 'addClerk',
      component: addClerk
    },
    {
      path: '/crminfo/:id',
      name: 'crminfo',
      component: crminfo
    },
    {
      path: '/editcrminfo',
      name: 'editcrminfo',
      component: editcrminfo
    },
    {
      path: '/lowerLevel/:loginname',
      name: 'lowerLevel',
      component: lowerLevel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: addTask
    },
    {
      path: '/workFlow',
      name: 'workFlow',
      component: workFlow,
      children:[{
          name:"wfd",
          path: 'detail/:id',
          component: workFlowDetail
      }]
    },
    {
      path: '/addWorkFlow',
      name: 'addWorkFlow',
      component: addWorkFlow
    },
    {
      path: '/postDynamic',
      name: 'postDynamic',
      component: postDynamic
    }
  ]
})
