import Vue from 'vue';

const skill = {
  template: "#skill"
  , props:{
    skillName: String,
    skillPercent: Number
  }
  ,methods:{
    drawColoredCricle(){
      const circle = this.$refs['circle-color'];
      const dashArray =parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
      console.log(dashArray)
    }
  }
  , mounted() {
    this.drawColoredCricle();
  }
};

const skillsRow = {
  template: "#skills-row"
  ,components: {
    skill
  }
  ,props:{
    skill: Object
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