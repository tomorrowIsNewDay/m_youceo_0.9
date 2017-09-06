/**
 * Created by lee_ming on 2017/8/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import drive from './modules/drive/drive'  // 推动
import login from './modules/login/login'  // 登录

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drive,
    login
  }
})
