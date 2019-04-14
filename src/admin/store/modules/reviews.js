export default {
  namespaced: true,
  state:{
    reviews:[]
  },
  mutations:{
    ADD_REVIEWS: (state, reviews)=>{
      state.reviews.push(reviews)
    },
    REMOVE_REVIEWS: (state, delreview)=>{
      //state.reviews.push(reviews);
      state.reviews = state.reviews.filter(review=> review.id !== delreview);
    },
    SET_REVIEWS:(state, reviews)=>{
      state.reviews = reviews;
    }
  },
  actions:{
    async addReview({commit}, review){
      try{
        const formData = new FormData;
        formData.append('photo', review.photo);
        formData.append('author', review.author);
        formData.append('occ', review.title);
        formData.append('text', review.text);

        const response = await this.$axios.post('/reviews', formData);
        commit('ADD_REVIEWS', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async fetchReview({commit}){
      try{
        const response = await this.$axios.get('/reviews/126');
        commit('SET_REVIEWS', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async removeReview({commit}, reviewsId){
      const response = await this.$axios.delete(`/reviews/${reviewsId}`);
      commit('REMOVE_REVIEWS', reviewsId);
      return response;
    }
  }
}