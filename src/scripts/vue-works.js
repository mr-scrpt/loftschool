import Vue from 'vue';
import axios from 'axios';


axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const thumbsSlider = {
  template: "#slider-thumbs",
  props:{
    works: Array,
    currentWork: Object,
    ready: Boolean
  }
};


const btnsSlider = {
  template: "#slider-btns"
};

const displaySlider = {
  template: "#slider-display",
  components:{
    btnsSlider,
    thumbsSlider

  },
  data(){
    return{

    }
  },
  props:{
    works: Array,
    currentWork: Object,
    currentIndex: Number,
    ready: Boolean

  },
  methods: {
    press(work){
      this.currentWork = work;
    },
    async fetchWorks(){
      try {
        const response = await axios.get('/works/126');
        return response;
      }catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    }
  },
  async created(){
   /* this.currentWork = this.works[0];
    console.log(this.works[0]);*/

  }
};
const tags= {
  template: "#slider-tags"
  ,props:{
    tagsArr: Array
  }

};
const infoSlider = {
  template: "#slider-info"
  ,components:{
    tags
  }
  ,props:{
    currentWork: Object,
    ready: Boolean
  }
  ,computed: {
    tagsArr(){
      return this.currentWork.techs.split(',')
    }
  }
};


new Vue({
  template: '#slider-container',
  el: '#slider-component',
  components: {
    displaySlider,
    infoSlider
  },
  data(){
    return{
      works: [],
      currentIndex: 0,
      ready: false
    }
  }
  ,computed:{
    currentWork(){
      return this.works[this.currentIndex];
    }
  }
  ,watch:{
    currentIndex(val){
      this.makeInfiniteLoopForCurrIndex(val);
    }
  }
  ,methods:{
    makeInfiniteLoopForCurrIndex(val){
      const worksAmount = this.works.length -1;
      if(val > worksAmount) this.currentIndex = 0;
      if(val < 0 ) this.currentIndex = worksAmount;
    }
    ,makeArrWithReqImg(data){
      return data.map(item=>{
        //item.photo = require(`../images/slider/${item.photo}`);
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
        return item;
      })
    }
    ,handelSlide(dir){
      if(dir === "next"){
        this.currentIndex--;
        console.log(this.currentIndex);
      } else if (dir === "prev"){
        this.currentIndex++;
        console.log(this.currentIndex);
      }
    },
    changeSlide(work){
      //this.currentWork = work;
      //console.log(work);
    },
    async fetchWorks(){
      try {
        const response = await axios.get('/works/126');
        return response;
      }catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    }

  }
  ,async created(){
    const work = await this.fetchWorks();
    this.works = this.makeArrWithReqImg(work.data);
    this.ready = true;
  }
});
