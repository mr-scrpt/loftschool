<template lang="pug">
  section.content.my-works
    .page__container.content__inner
      header.content__head
        .content__title Блок "Отзывы"
      .content__body.my-work__grid
        //include tile-review_edit
        c-review-editor(
          v-if="showAddReviews"
          @addReviewClose="showAddReviews = false"
          @sendReview="addNewReview"
          @file="item => review.photo = item"
          v-model="review"
          )
        //include tile-review_tall
        c-review-all(
          @addReviewOpen="showAddReviews = true"
        )
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    components:{
      cReviewEditor: () => import('components/c-review-editor.vue'),
      cReviewAll: () => import('components/c-review-all.vue')
    },
    props:{
      file: File
    },
    data(){
      return{
        showAddReviews: false,
        review:{
          photo: "",
          author: "",
          occ: "",
          text: ""
        }
      }
    },
    methods:{
      ...mapActions('review', ['addReview']),
      async addNewReview(review){
        await this.addReview(review);
        review = {};
      },
      test(file){
        console.log(file);
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
  .my-work__grid{
      grid-area: content-body;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      @include laptop{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }
  }
  .content{
    grid-area: content;
    background: url("../../../images/admin/bg__content.jpg") no-repeat;
    background-size: cover;
  }
  .content__inner{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 1fr;
    grid-template-areas:
            "content-header"
            "content-body"
  ;}
  .content__tile{
    background-color: #fff;
    display: flex;
    flex-direction: column;

  }
  .content__head{
    grid-area: content-header;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @include tablets{
      width: 100%;
    }
  }
  .content__head-add{
    padding: 0 50px;
    @include tablets{
      width: 100%;
      padding: 0;
    }
  }
  .content__title{
    font-size: 21px;
    font-weight: $font_bold;
  }
</style>