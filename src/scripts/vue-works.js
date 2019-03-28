import Vue from 'vue';

const thumbsSlider = {
  template: "#slider-thumbs"
  ,props:{
    works: Array
    ,currentWork: Object

  }
};


const btnsSlider = {
  template: "#slider-btns"
};

const displaySlider = {
  template: "#slider-display"
  ,components:{
    btnsSlider
    ,thumbsSlider

  }
  ,props:{
    works: Array
    ,currentWork: Object
    ,currentIndex: Number
    ,clickSlide: Number
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
    currentWork: Object
  }
  ,computed: {
    tagsArr(){
      return this.currentWork.skills.split(',')
    }
  }
};


new Vue({
  template: '#slider-container'
  ,el: '#slider-component'
  ,components: {
    displaySlider
    ,infoSlider
  }
  ,data(){
    return{
      works: []
      ,currentIndex: 0
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
        item.photo = require(`../images/slider/${item.photo}`);
        return item;
      })
    }
    ,handelSlide(dir){
      if(dir === "next"){
        this.currentIndex--;
      } else if (dir === "prev"){
        this.currentIndex++;
      }
    },
    changeSlide(id){
      this.currentIndex = id - 1;
    }

  }
  ,created(){
    const data = require('../data/works');
    this.works =this.makeArrWithReqImg(data);
  }
});
