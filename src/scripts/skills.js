import Vue from 'vue';

const skill = {
  template: "#skill"
};

const skillsRow = {
  template: "#skills-row"
  ,components: {
    skill
  }
};

new Vue({
  el: "#skills-component"
  ,template: "#skills-list"
  ,components: {
    skillsRow
  }
  ,data(){
    return{
      skills:{}
    }
  }
  ,created(){
    const data = require('../data/skills');
    this.skills = data;
  }
});