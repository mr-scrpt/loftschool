import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

new Vue({
  template: '#comments-container'
  ,el: '#comments-component'
  ,components:{
    swiper,
    swiperSlide
  }
  ,data(){
    return{
      comments: []
      ,swiperOption: {
        navigation: {
          nextEl: '.slider__next'
          ,prevEl: '.slider__prev'
        }
        ,loop: true
        ,slidesPerView: 2
        ,breakpoints: {
          // when window width is <= 320px
          640: {
            slidesPerView: 1

          }
        }
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
  }
  ,created(){
    const data = require('../data/comments');
    this.comments = this.works = this.makeArrWithReqImg(data);

  }
});
