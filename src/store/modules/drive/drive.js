import * as types from './drive-mutation-types'

const state = {
    // 推动数据列表
    driveDataList :[],
    // 任务数据
    taskDataList:[],
    driveHeadIsShow:true,
    // driveData: {
    //     id: '',
    //     pic_url: '', // logo url
    //     people_name: '',  // 人名
    //     time:'',  // 更新时间
    //     content: '',//正文内容
    //     target: '',// 目标
    //     status: {},// 状态信息
    //     operateBtn: {

    //     }, // 操作按钮

    // }
    // http://localhost:8080/#/detail/1
    // 根据id获取此条任务的详细数据
    detailData:{
            "id":0,
            "type":"", //类型
            "pic_url":"",
            "name":"",
            "content": "",
            "finish_date":"", //时间搓
            "finish_date_str":"",
            "remaining_time":"", //剩余时间
            "target_name":"",
            "target_val":"",
            "relevance":{ //关联
                "pic_url":"",
                "name":""
            },
            "workflow":{}, //工作流
            "ps":"", // 备注
            "response_depart":{// 职责部门
                "depart":"",
                "explain":""// 解是说明
            },
            "dynamic_data":[],
            "attachment_data":[]
    }
}

const getters = {
    driveDataList: state=>state.driveDataList,
    taskDataList: state=>state.taskDataList,
    detailData: state=>state.detailData,
    driveHeadIsShow:state=>state.driveHeadIsShow
}

const mutations = {
    [types.INIT_DRIVE_DATA_LIST](state, data){
        state.driveDataList = data
    },
    [types.INIT_TASK_DATA_LIST](state, data){
        state.taskDataList = data
    },
    [types.INIT_DETAIL_DATA](state, data){
        state.detailData = data
    },
    [types.DRIVE_HEAD_IS_SHOW](state, boolean){
        state.driveHeadIsShow = boolean
    }

}

const actions = {
    initDriveDataList({commit},data){
        commit(types.INIT_DRIVE_DATA_LIST,data)
    },
    initTaskDataList({commit},data){
        commit(types.INIT_TASK_DATA_LIST,data)
    },
    initDetailData({commit}, data){
        commit(types.INIT_DETAIL_DATA, data)
    },
    isShowDriveHead({commit}, boolean){
        commit(types.DRIVE_HEAD_IS_SHOW, boolean)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
