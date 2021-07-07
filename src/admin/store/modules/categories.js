export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    }
  },
  actions: {
    async addNewSkillGroup(state, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories/126");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async userInfo(state) {
      try {
        const response = await this.$axios.get("/user");
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async changeCategoryName(state, category) {
      try {
        const data = { title: category.category };
        const response = await this.$axios.post(
          `/categories/${category.id}`,
          data
        );

        return response;
      } catch (error) {}
    },

    async removeCategoryAction(state, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        return response;
      } catch (error) {}
    }
  }
};
