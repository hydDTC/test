// 只能在这里改变state的状态；必须是同步函数

const mutations = {
  setMenu(state, payload) {
    state.menu = payload
  }
}
export default mutations
