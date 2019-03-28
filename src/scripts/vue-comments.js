import Vue from 'vue';
import Flickity from 'vue-flickity';

/*
const controls ={
  template: "#comments-controls"
};

const comments ={
  template: "#comments-inner"
  ,props:{
    comments: Array
    ,Flickity: Object
  }
};
*/

new Vue({
  template: '#comments-container'
  ,el: '#comments-component'
  ,components:{
    Flickity
  }
  ,data(){
    return{
      comments: []
      ,flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  }

  ,methods:{
    makeArrWithReqImg(data){
      return data.map(item=>{
          item.photo = require(`../images/content/${item.photo}`);
          return item;
        })
      }
    ,next() {
      this.$refs.flickity.next();
    }
    ,previous() {
      this.$refs.flickity.previous();
    }
  }
  ,created(){
    const data = require('../data/comments');
    this.comments = this.works = this.makeArrWithReqImg(data);

  }
});
