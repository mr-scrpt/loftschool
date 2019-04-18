<template lang="pug">
  .tile.content__tile.editor.my-work__full
    .tile__inner.tile__inner_simply
      .tile__header Редактирование работы
      .tile__body.tile__body_half
        .tile__img-add
          .img-loader
            label(v-if="!work.photo").img-loader__inner
              .img-loader__box
                input(
                  @change="appendFileAndRenderPhoto"
                  type="file"
                ).page__hidden
                .img-loader__text Перетащити или загрузите для загрузки изображения
                .img-loader__button
                  button(type="submit").button.button_rainbow.button_size_xl
                    .button__text ЗАГРУЗИТЬ
            img(:src="`https://webdev-api.loftschool.com/${work.photo}`" v-else).img
        .tile__content-add
          //Одно поле с лэйблом
          .editor__row
            label.label.editor__label-full Название
            span.input.input--size-l.editor__input-full.input_active
              span.input__box
                input(placeholder="Название группы" v-model="work.title").input__control
          //Одно поле с лэйблом КОНЕЦ

          //Одно поле с лэйблом
          .editor__row
            label.label.editor__label-full Ссылка
            span.input.input--size-l.editor__input-full.input_active
              span.input__box
                input(placeholder="Название группы" v-model="work.link").input__control
          //Одно поле с лэйблом КОНЕЦ

          //Одно поле с лэйблом
          .editor__row
            label.label.editor__label-full Описание
            textarea(rows='4' v-model="work.description").textarea.editor__textarea-full
          //Одно поле с лэйблом КОНЕЦ

          //Одно поле с лэйблом
          .editor__row
            label.label.editor__label-full Добавление тэга
              span.input.input--size-l.editor__input-full.input_active
                span.input__box
                  input(placeholder="Название группы" v-model="work.techs").input__control
            .editor__tags.tags
              .tags__inner
                .tags__item(v-for="tag in tags" v-if="tag")
                  .tags__text {{tag}}
            .editor__function.editor__function_alt
              button(
                type="button"
                @click="$emit('closeEditor')"
                ).button.button_size_m.editor__cancel
                .button__text Отмена
              button(
                @click="sendEditedWork"
                type="submit"
                ).button.button_rainbow.button_size_xl
                .button__text СОХРАНИТЬ
</template>

<script>
  import { mapActions} from "vuex";
  export default {
    name: "c-works-add",
    data(){
      return{
        work: {...this.editedWork}
      }
    },
    props:{
      editedWork: Object
    },
    computed:{
      tags(){
        return this.work.techs.split(',');
      }
    },
    methods:{
      ...mapActions('works', ['editWork']),
      sendEditedWork(){
        this.editWork(this.work);
        this.$emit('closeEditor')
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
  .input{
    position: relative;
    display: inline-block;
    background: #fff;
    touch-action: manipulation;
    padding: 5px 0;
    box-sizing: border-box;
    &:before{
      position: absolute;
      top: 1px;
      right: 1px;
      bottom: 1px;
      left: 1px ;
      content: '';
      background: #fff;

    }
    &_active{
      &:before{
        border-bottom: 1px solid $text-color;
      }
    }
    &_percent{
      padding-right: 22px;
      &:after{
        position: absolute;
        opacity: .7;
        content: "%";
        width: 20px;
        right: 0;
      }
    }
    &.input__box{
      position: relative;
      display: block;
      user-select: none;
    }
    & .input__control{
      font: inherit;
      line-height: inherit;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      padding: 0;
      width: 100%;
      border: 0;
      outline: none;
      background: none;
      &::placeholder{
        opacity: .5;
      }
    }
  }

  .input .icon{
    position: absolute;
    width: 30px;
    height: 30px;
  }

  .input .icon+.input__box{
    padding-left: 35px;
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
    color: $blue;
    font-weight: $font_semibold;
    padding-bottom: 40px;
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

  .editor__function{
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    &_alt{
      width: 100%;
      padding: 40px 0;
      @include phones{
        justify-content: center;
      }
    }
  }
  .editor__icon{
    width: 14px;
    height: 12px;
    padding-left: 20px;
  }

  .editor__add-row{
    width: 90%;
    display: flex;
    align-items: center;
    &_disabled{
      opacity: .5;
      pointer-events: none;
      user-select: none;
    }
  }
  .editor__add-name{
    width: calc(100% - 160px);

  }
  /*.editor__add-value{*/
  /*width: 80px;*/
  /*}*/
  .editor__add-footer{
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .editor__row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &_half {
      width: calc(50% - 30px);
    }
    &_cell{
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  .editor__name{
    width: calc(100% - 160px);

  }
  .editor__value{
    width: calc(30% - 40px);

  }
  .editor__percent{
    width: calc(80px);
  }
  .editor__label-full{
    width: 100%;
    font-weight: $font_semibold;
    color: rgba($text-color, .5);
    margin-top: 10px;
  }
  .editor__input-full{
    width: 100%;
    padding: 20px 0;
  }
  .editor__textarea-full{
    width: 100%;
    border: 1px solid #d9dbe0;
    resize: none;
    padding: 10px;
    font-size: 16px;
  }
  .editor__tags{
    padding: 10px 0;
    width: 100%;
  }
  .editor__cancel{
    margin: 0 30px;
    @include phones{
      margin: 0 10px;
    }
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

  .img-loader{
    &__inner{
      display: flex;
      flex-wrap: wrap;
      background-color: #dee4ed;
      border: 1px dashed #a1a1a1;
      align-items: center;
      justify-content: center;
      padding: 100px 50px;
      @include laptop{
        padding: 80px 20px;
      }
    }
    &__box{
      max-width: 250px;
      @include phones{
        max-width: 200px;
      }

    }
    &__text{
      width: 100%;
      text-align: center;
      color: rgba($text-color, .5);
      font-size: 18px;
    }
    &__button{
      padding: 20px 0;
      width: 100%;
      text-align: center;
    }
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
</style>