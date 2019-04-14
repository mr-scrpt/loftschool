export default {
  namespaced: true,
  state:{
    reviews:[]
  },
  actions:{
    async addReview(state, review){
      try{
        const formData = new FormData;
        formData.append('photo', review.photo);
        formData.append('author', review.author);
        formData.append('occ', review.occ);
        formData.append('text', review.text);

        const response = await this.$axios.post('/reviews', formData);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message);
      }
    }
  }
}