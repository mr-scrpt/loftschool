<template lang="pug">
  section.content.about-me
    .page__container.content__inner
      header.content__head
        .content__title Блок "Обо мне"

        button(
          @click="showAddingForm = true"
          v-if="showAddingForm === false"
        ).button.button_flex.button_size_m.content__head-add
          .button__icon.icon.icon_add-button
          .button__text Добавить группу
      .content__body.about-me__grid
        skills-add(
          v-if='showAddingForm'
          @close="closeGroup"
          )
        skills-group(
          v-for="category in categories"
          :key="category.id"
          :category="category"
          )

</template>
<script>
  import { mapActions, mapState } from "vuex";
  export default {
    components:{
      skillsAdd: ()=>import('components/c-skills-add.vue'),
      skillsGroup: ()=>import('components/c-skills-group.vue')
    },
    data(){
      return{
        showAddingForm: false
      }
    },

    computed:{
      ...mapState('categories',{
        categories: state=> state.categories
      })
    },


    methods:{
      ...mapActions('categories', ['fetchCategories']),
      closeGroup(){
        this.showAddingForm = false;
      }
    },
    created() {
      try {
        this.fetchCategories();
      }catch (e) {
        console.log(e.message);
      }
    }

  }
</script>
<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
  .button {
    font: 16px / 1.42 'Open Sans', Arial, sans-serif;
    touch-action: manipulation;
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    user-select: none;
    color: #fff;
    border: 0;
    outline: 0;
    background: none;
  // Цвет бордера text-align: center;
    white-space: nowrap;
    &_flex {
      display: flex;
      align-items: center;
    }
  }
  .button:before{
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    content: '';
    background: none; //цвет фона
  }
  .button{
    & .button__text{
      position: relative;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      color: $blue;
      @include ts(color);
    }
  }
  /*M - Начало*/
  .button_size_m{
    font-size: 15px;
    line-height: 32px;
  }
  .button_size_m .button__text{
    margin: 0 15px;
  }
  /*M - КОНЕЦ*/
  .button:hover{
    cursor: pointer;
    & .button__text {
      color: $orange;
    }
    & .icon{
      &_add-button{
        &:before {
          color: $orange;
        }
      }
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

  .about-me{
    &__grid{
      grid-area: content-body;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      @include laptop{
        grid-template-columns: 1fr;
      }
    }
  }


  .icon{
    &_add-button {
      color: $blue;
      box-sizing: border-box;
      position: relative;
      width: 20px;
      height: 20px;
      &:before {
        position: absolute;
        content: "+";
        color: #fff;
        @include ts(color);
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        background: linear-gradient(bottom right, $gradient_blue-dark, $gradient_blue-light);
      }
      &:hover {
        &:before {
          color: $orange;
        }
      }
    }
  }

</style>