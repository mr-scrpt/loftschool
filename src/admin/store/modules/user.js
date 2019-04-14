export default {
  namespaced: true,
  state:{
    user: {}
  },
  mutations:{
    SET_USER:(state, user)=>{
      state.user = user;
    }
  },
  getters:{
    userIsLogged: state=>{
      const userObj = state.user;
      const userObjectEmpty =
        Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjectEmpty === false;
    }
  }
}