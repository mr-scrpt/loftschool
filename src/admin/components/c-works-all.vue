<template lang="pug">
  .my-work__rewiev
    // Секция ===========================
    .tile.content__tile.my-work__tile
      .tile__inner.tile__inner_full
        .tile__main.new-work
          .new-work__inner
            button(
              @click="$emit('addWorkOpen')"
              type="button"
              ).button.new-work__add
            .new-work__title Добавить работу

    // Секция КОНЕЦ ===========================

    // Секция ===========================
    .tile(
      v-for="work in works"
      :key="work.id"
    ).content__tile.my-work__tile
      div(:class="{ tile__shadow: activeWorkId === work.id }").tile__inner.tile__inner_full
        .tile__main
          .tile__visual
            img(:src="`https://webdev-api.loftschool.com/${work.photo}`").tile__img.img
            .tags.tile__tags
              .tags__inner
                div(v-for="tag in work.techs.split(',')").tags__item
                  .tags__text {{tag}}

          .tile__about
            .tile__about-title {{work.title}}
            .tile__about-content {{work.description}}
            a(:href="work.link").tile__about-link {{work.link}}
            .tile__about-function
              button(
                @click="editWork(work)"
                type="button"
                ).button.button_size_l.tile__edit
                .button__text Править
                img(src="../../images/admin/icon__pencil.png").button__icon.editor__icon
              button(
                @click="workDelete(work.id)"
                type="button"
                ).button.button_size_l.tile__remove
                .button__text Удалить
                img(src="../../images/admin/icon__cross.png").button__icon.editor__icon
    // Секция КОНЕЦ ===========================
</template>

<script>
  import { mapActions, mapState, mapMutations } from "vuex";
  export default {
    name: "c-works-add",
    data(){
      return{
        activeWork: ""
      }
    },
    computed:{
      ...mapState('works',{
        works: state => state.works,
        activeWorkId: state=> state.activeWork
      })

    },
    methods:{
      ...mapActions('works', ['fetchWorks', 'removeWork']),
      ...mapActions('tooltip', ['ticTacTooltip']),
      ...mapMutations('works', {
        addingMode: 'SET_ADDING_MODE',
        activeWorkSet: 'SET_ACTIVE_WORK'
      }),

      async workDelete(workId){
        try{
          await this.removeWork(workId);
          this.ticTacTooltip({
            type: "success",
            text: "Работа успешно удалена"
          })
        }catch(error){
          this.ticTacTooltip({
            type: "error",
            text: error.message
          })
        }
      },

      editWork(work){
        this.activeWorkSet(work.id);
        this.addingMode(false);
      }
    },
    async created(){
      try {
        await this.fetchWorks();
      }catch (e) {
        this.ticTacTooltip({
          type: "error",
          text: error.message
        })
      }
    }
  }

</script>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";

  .img {
    font: 0/0 a;
    border: 0;
    max-width: 100%;
    height: auto
  }

  .button_rainbow:hover{
    & .button__text{
      color: $orange;
    }
  }

  .button.button_close:hover{
    &:before{
      opacity: 0.7;
      background: url("../../images/icons/icon__menu-close.png") no-repeat;
      background-size: contain;
    }
  }.button{
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
     background: none; // Цвет бордера
     text-align: center;
     white-space: nowrap;
     &_flex{
       display: flex;
       align-items: center;
     }
     &_close{
       background: none;
       height: 20px;
       width: 20px;
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

  .button_rainbow:before{
    background: linear-gradient(to top left, $gradient_blue-dark, $gradient_blue-light);
    border-radius: 24px;
  }

  .button_close:before{
    background: url("../../images/icons/icon__menu-close.png") no-repeat;
    background-size: contain;
  }
  .button_wide{
    padding-left:40px;
    padding-right:40px;
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

  .button_rainbow{
    & .button__text{
      color: #fff;
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

  /*L - Начало*/
  .button_size_l{
    font-size: 16px;
    line-height: 32px;
  }
  .button_size_l .button__text{
    margin: 0 15px;
  }
  /*L - КОНЕЦ*/

  /*XL - Начало*/
  .button_size_xl{
    font-size: 18px;
    line-height: 38px;
    font-weight: $font_bold;
    text-transform: uppercase;
  }
  .button_size_xl .button__text{
    padding: 5px 20px;
  }
  /*XL - КОНЕЦ*/
  /*Состояния*/
  //Стандартная кнопка

  .button:hover{
    cursor: pointer;
    & .button__text {
      color: $orange;
    }
  }


.my-work__grid{
    grid-area: content-body;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    @include laptop{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }
.my-work__full{
    grid-column: 1/4;
    @include laptop{
      grid-column: 1/2;
    }
  }
.my-work__rewiev{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

.my-work__tile{
  width: calc(33% - 30px);
  margin: 0 15px;
}

  .tile{
    &__shadow{
      opacity: .3;
    }
  }
  .tile__inner{
    height: 100%;
    padding: 20px;
    background: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 55px 1fr 80px;
    grid-template-areas:
            "tile-header"
            "tile-body"
            "tile-footer"
  ;
    &_full{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:"tile-full";
      padding: 0;
    }

    &_simply{
      grid-template-rows: 55px 1fr;
    }
  }

  .tile__header{
    grid-area: tile-header;
    border-bottom: 1px solid rgba(#000, .15);
  //margin-bottom: 30px;
  }
  .tile__enter-block{
    display: flex;
    align-items: flex-start;
  }
  .tile__input-box{
    width: calc(100% - 80px);
  }
  .tile__body{
    grid-area: tile-body;
    padding: 45px 0;
    &_half{
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
  }
  .tile__main{
    grid-area: tile-full;
    display: flex;
    flex-direction: column;
  }
  .tile__img-add{
    width: calc(50% - 30px);
    margin-right: 15px;
    margin-left: 15px;
    @include tablets{
      width: calc(100% - 30px);
    }
  }
  .tile__content-add{
    width: calc(50% - 30px);
    margin-right: 15px;
    margin-left: 15px;
    @include tablets{
      width: calc(100% - 30px);
    }
  }
  .tile__footer{
    grid-area: tile-footer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .tile__visual{
    position: relative;
  }
  .tile__img{
    display: block;
  }
  .tile__tags{
    position: absolute;
    bottom: 5px;
    right: 0;
  }
  .tile__about{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
  }
  .tile__about-title{
    font-size: 18px;
    font-weight: $font_bold;
    padding-bottom: 20px;
  }
  .tile__about-content{
    color: rgba($text-color, .7);
    font-weight: $font_semibold;
    padding-bottom: 20px;
    line-height: 30px;
  }
  .tile__about-link{
    text-decoration: none;
    color: $blue;
    font-weight: $font_semibold;
    padding-bottom: 40px;
    @include ts(color);
    &:hover{
      color: $orange;
    }
  }
  .tile__about-function{
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & .button__text{
      color: rgba($text-color, .7);
      font-weight: $font_semibold;
    }
    @include phones{
      justify-content: center;
    }
  }
  .tile__ava-add{
    width: 225px;
    margin-right: 15px;
    margin-left: 15px;
    @include tablets{
      width: calc(100% - 30px);
    }
  }
  .tile__review{
    display: flex;
    flex-direction: column;
  }
  .tile__review-add{
    width: calc(100% - 285px);
    margin-right: 15px;
    margin-left: 15px;
    @include tablets{
      width: calc(100% - 30px);
    }
  }
  .tile__review-inner{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
  }
  .tile__author{
    display: flex;
    padding: 35px;
    padding-bottom: 0;
  }
  .tile__author-ava{
    width: 50px;
    height: 50px;
  }
  .tile__author-info{
    padding-left: 15px;
  }
  .tile__author-name{
    font-size: 18px;
    font-weight: $font_semibold;
  }
  .tile__author-title{
    color: rgba($text-color, .7);
  }

  .tags{
    &__inner{
      display: flex;
      flex-wrap: wrap;
      @include laptop{
        justify-content: center;
      }

    }
    &__item{
      @include bgc(#f1f5f9);
      font-size: 13px;
      font-weight: $font_semibold;
      padding: 5px 1px;
      margin: 0 6px 4px 0;
      border-radius: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .tags__text{
    //@include bgc(green);
      line-height: 15px;
      padding: 2px 10px;
    }

  }

  .new-work__inner{
    background: linear-gradient(to top left, $gradient_blue-dark, $gradient_blue-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .new-work__add{
    width: 150px;
    height: 150px;
    position: relative;
    margin-bottom: 20px;
    &:before{
      width: 150px;
      height: 150px;
      position: absolute;
      content: "+";
      text-align: center;
      line-height: 150px;
      border-radius: 50%;
      font-size: 58px;
      color: #fff;
      border: 2px solid #fff;
      box-sizing: border-box;
      @include ts(color,border-color);
    }
    &:hover{
      &:before{
        border-color: $orange;
        color: $orange;
      }

    }
  }
  .new-work__title{
    color: #fff;
    font-size: 18px;
    font-weight: $font_bold;
  }

</style>