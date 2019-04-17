<template lang="pug">
  section.content.my-works
    pre {{addingModeValue}}
    .page__container.content__inner
      header.content__head
        .content__title Блок "Отзывы"
      .content__body.my-work__grid
        c-review-add(
          v-if="addingModeValue"
          )
        c-review-edit(v-if="activeReviewId")
        c-review-all(@addReviewOpen="addReviewOpen")
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    components:{
      cReviewAdd: () => import('components/c-review-add.vue'),
      cReviewEdit: () => import('components/c-review-edit.vue'),
      cReviewAll: () => import('components/c-review-all.vue')
    },
    props:{
      file: File,

    },
    data(){
      return{
        showAddReviews: false,
        editedReview: {},
        activeReview: ''
      }
    },
    computed:{
      ...mapGetters('reviews', ['getActiveReviewId', 'getAddingMode']),
      activeReviewId(){
        return this.getActiveReviewId;
      },
      addingModeValue(){
        return this.getAddingMode;
      }
    },
    methods:{
      ...mapActions('reviews', ['activeReviewDelete','addingMode','activeReviewSet']),
      addReviewOpen(){
        this.activeReviewDelete();
        this.addingMode(true);
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