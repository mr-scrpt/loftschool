export default {
  namespaced: true,
  state:{
    skills: []
  },
  mutations:{
    SET_SKILLS: (state, skill)=>{
      state.skills = skill;
    },
    ADD_SKILL: (state, newSkill)=>{
      state.skills.push(newSkill);
    },
    REMOVE_SKILL:(state, delSkill)=>{
      state.skills = state.skills.filter(skill=> skill.id !== delSkill);
    },
    EDIT_SKILL:(state, editedSkill)=>{
      state.skills =  state.skills.map(skill => skill.id === editedSkill.id ? editedSkill : skill)
    }
  },
  actions:{
    async addSkill({commit}, skill){
      try{
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async fetchSkills({commit}, skill){
      try{
        const response = await this.$axios.get('/skills/126');
        commit('SET_SKILLS', response.data);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async deleteSkills({commit}, skillId){
      try{
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async editSkills({commit}, skill){
      try{
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill);
        return response;
      }catch(error){
        throw new Error(error.response.data.error || error.response.data.message)
      }
    }
  }
}
