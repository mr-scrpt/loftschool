export default {
  namespaced: true,
  state:{
    works:[],
    activeWork: "",
    addWorkMode: false
  },
  mutations:{
    ADD_WORK:(state, work)=>{
      state.works.push(work)
    },
    SET_WORK(state, works){
      state.works = works;
    },
    /*REMOVE_WORK: (state, delWork)=>{
      //state.reviews.push(reviews);
      state.works = state.works.filter(work=> work.id !== delWork);
    },*/
    EDIT_WORK:(state, workEdited)=>{
      state.works = state.works.map(work => work.id === workEdited.id ? workEdited : work)
    },
    SET_ACTIVE_WORK:(state, workId)=>{
        state.activeWork = workId;
    },
    REMOVE_WORK: (state, delWork)=>{
      state.works = state.works.filter(work=> work.id !== delWork);
    },
    SET_ADDING_MODE:(state, value)=>{
      state.addWorkMode = value;
    },
    DELETE_ACTIVE_WORK:(state)=>{
      state.activeWork = "";
    },

  },
  getters:{
    getWorkById: state =>{
      return state.works.find(work => work.id === state.activeWork);
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
   async removeWork({commit}, workId){
      const response = await this.$axios.delete(`/works/${workId}`);
      commit('REMOVE_WORK', workId);
      return response;
    },
    async editWork({commit}, work){

      try{
        const formData = new FormData;
        formData.append('title', work.title);
        formData.append('techs', work.techs);
        formData.append('photo', work.photo);
        formData.append('link', work.link);
        formData.append('description', work.description);

        const response = await this.$axios.post(`/works/${work.id}`, formData);

        commit('EDIT_WORK', response.data.work);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message);
      }







    }


  }
}