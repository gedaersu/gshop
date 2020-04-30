/*
vuex 的 actions 模块
*/
import {reqAddress, reqFoodList, reqShops, reqLogout, reqUserInfo} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO} from './mutation-types'
export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },
  // 异步获取分类列表
  async getCategorys ({commit}) {
    const result = await reqFoodList()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  // 记录用户信息
  recordUserInfo ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },
  // 退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }
}
