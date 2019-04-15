import Vue from 'vue';
import axios from 'axios';


axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const skill = {
  template: "#skill",
  props:{
    skillName: String,
    skillPercent: Number
  },
  methods:{
    drawColoredCricle(){
      const circle = this.$refs['circle-color'];
      const dashArray =parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
      console.log(dashArray)
    }
  },
  mounted() {
    this.drawColoredCricle();
  }
};

const skillsRow = {
  template: "#skills-row"
  ,components: {
    skill
  }
  ,props:{
    skills: Array,
    category: Object
  }
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data(){
    return{
      skills:{},
      categories:{}
    }
  },
  methods:{
    async fetchCategories(){
      try {
        const response = await axios.get('/categories/126');
        return response;
      }catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async fetchSkills(){
      try {
        const response = await axios.get('/skills/126');
        return response;
      }catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
  },
  async created(){
    const cat = await this.fetchCategories();
    this.categories = cat.data;
    console.log(this.categories);
    const skills = await this.fetchSkills();
    this.skills = skills.data;
    console.log(this.skills);
  }
});