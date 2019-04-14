export default {
  namespaced: true,
  state:{
    reviews:[]
  },
  actions:{
    async addReview(state, review){
      try{
        const response = await this.$axios.post('/reviews', review);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message);
      }
    }
  }
}