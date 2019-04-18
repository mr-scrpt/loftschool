export default {
  namespaced: true,
  state:{
    showed: false,
    text: "Текст тултипа",
    type: "success"
  },
  mutations:{
    SET_SHOWED: (state, trueOrFalse) => (state.showed = trueOrFalse),
    SET_TEXT: (state, text) => (state.text = text),
    SET_TYPE: (state, type) => (state.type = type)
  },
  actions:{
    showTooltip({commit}, payload){
      commit('SET_SHOWED', true);
      commit('SET_TEXT', payload.text);
      commit('SET_TYPE', payload.type);
    },
    closeTooltip({commit}){
      commit('SET_SHOWED', false);
    },
    ticTacTooltip({commit, dispatch}, payload){
      dispatch('showTooltip', payload);
      setTimeout(()=>{
        dispatch('closeTooltip')
      }, 4000);
    }
  }
}