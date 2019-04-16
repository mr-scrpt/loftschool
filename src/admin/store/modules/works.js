export default {
  namespaced: true,
  state:{
    works:[]
  },
  mutations:{
    ADD_WORK:(state, work)=>{
      state.work.push(work)
    },
    SET_WORK(state, works){
      state.works = works;
    }
  },
  actions:{
    async addWork({commit}, work){
      try{
        const formData = new FormData;
        formData.append('title', work.title);
        formData.append('techs', work.techs);
        formData.append('photo', work.photo);
        formData.append('link', work.link);
        formData.append('description', work.description);

        const response = await this.$axios.post('/works', formData);
        commit('ADD_WORK', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async fetchWorks({commit}){
      try{
        const response = await this.$axios.get('/works/126');
        commit('SET_WORK', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },


  }
}