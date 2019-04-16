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
    },
    REMOVE_WORK: (state, delWork)=>{
      //state.reviews.push(reviews);
      state.works = state.works.filter(work=> work.id !== delWork);
    },
    EDIT_WORK:(state, workEdited)=>{
      state.works = state.works.map(work => work.id === workEdited.id ? workEdited : work)
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
    async removeWorks({commit}, workId){
      const response = await this.$axios.delete(`/works/${workId}`);
      commit('REMOVE_WORK', workId);
      return response;
    },
    async editWork({commit}, work){
      const response = await this.$axios.post(`/works/${work.id}`, work);
      commit('EDIT_WORK', work);
      return response;
    }


  }
}