import Vue from 'vue';

const controls ={
  template: "#comments-controls"
};

const comments ={
  template: "#comments-inner "
  ,props:{
    comments
  }
};

new Vue({
  template: '#comments-container'
  ,el: '#comments-component'
  ,components:{
    controls
    ,comments
  }
  ,data(){
    return{
      comments: []
    }
  }
  ,props:{
    activeComments: Array
  }
  ,methods:{
    filterCommentsShow(arr,shift,start){
      const cloneArr = [...arr];
      const filterArr = cloneArr.slice(start, shift);
      return filterArr;
    }
    ,rollComments(dir){
      const len = this.comments.length - 1;
      console.log(dir,len);
    }
  }
  ,created(){
    const data = require('../data/comments');
    this.comments = this.filterCommentsShow(data,2, 0);

  }
});
