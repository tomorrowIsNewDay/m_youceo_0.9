import * as types from './login-mutation-types'

const state = {
    isLogin:false,
    userData:{
      token:'',
      avatar_url: '',
      id: '',
      loginname: '',
      depat:'',
      job:'',
      level:'',
      tel:'',
      email:'',
      // crm 客户信息
      crmDatas: []
    },
    //cropinfo
    cropData:{
      crop_name:'',
      avatar_url:'',
      num_depat:'',
      num_people:'',
      admin:'',
      admin_tel:'',
      admin_email:'',
      crop_profile:''
    },

}

const getters = {
    userData:state=>state.userData,
    isLogin:state=>state.isLogin,
    cropData:state=>state.cropData
}

const mutations = {
    [types.INIT_LOGIN_DATA](state,data){
        state.isLogin = true;
        state.userData = data;
        // localstorage 缓存数据
        localStorage.isLogin=true;
        localStorage.userData=JSON.stringify(data);
    },
    [types.INIT_CROP_DATA](state,data){
        state.cropData = data;
    },
    [types.LOGIN_OUT](state){
        state.isLogin = false;
        state.userData = {
              token:'',
              avatar_url: '',
              id: '',
              loginname: '',
              depat:'',
              job:'',
              level:'',
              tel:'',
              email:''
        };
        //localstorage clear数据
        localStorage.clear();
    }
}

const actions = {
    initLoginData({commit}, data){
        commit(types.INIT_LOGIN_DATA, data)
    },
    initCropData({commit},data){
        commit(types.INIT_CROP_DATA, data)
    },
    loginOut({commit}){
        commit(types.LOGIN_OUT)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
