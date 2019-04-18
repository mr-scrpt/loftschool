import Vue from 'vue';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

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
          nextEl: '.button_slide-next'
          ,prevEl: '.button_slide-prev'
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
  },

  methods:{
    makeArrWithReqImg(data){
      return data.map(item=>{
          item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
          return item;
      })
    },
    async fetchComments(){
      try {
        const response = await axios.get('/reviews/126');
        console.log(response.data);
        return response;
      }catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    }
  },
  async created(){
    //const data = require('../data/comments');
    //this.comments = this.works = this.makeArrWithReqImg(data);

    const comments = await this.fetchComments();
    this.comments = this.makeArrWithReqImg(comments.data);

  }
});
