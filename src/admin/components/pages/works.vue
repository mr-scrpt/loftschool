<template lang="pug">
  section.content.my-works
    .page__container.content__inner
      header.content__head
        .content__title Блок "Обо мне"
      .content__body.my-work__grid
        c-works-edit
        c-works-item
        c-works-all
</template>
<script>
  export default {
    components:{
      cWorksEdit: ()=> import('components/c-works-edit.vue'),
      cWorksAdd: ()=> import('components/c-works-add.vue'),
      cWorksAll: ()=> import('components/c-works-all.vue')
    }
  }
</script>
<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
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
  .my-work{
    &__grid{
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

  }
</style>