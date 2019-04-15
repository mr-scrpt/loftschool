<template lang="pug">
  .tile.content__tile.editor.my-work__full
    pre {{review}}
    .tile__inner.tile__inner_simply
      .tile__header Редактирование отзыва
      .tile__body.tile__body_half
        .tile__ava-add
          .ava-loader
            label.ava-loader__inner
              input(
                @change="appendFileAndRenderPhoto"
                type="file"
                ).page__hidden
              .ava-loader__image-box
                img(src="../../images/admin/ava__stock.png" v-if="!review.photo").ava-loader__img.img
                img(:src="`https://webdev-api.loftschool.com/${review.photo}`" v-else).ava-loader__img.img
              .ava-loader__button
                button(type="submit").button.button_size_m
                  .button__text Добавить фото
        .tile__review-add
          .tile__review-inner
            //Одно поле с лэйблом
            .editor__row.editor__row_half.editor__row_cell
              label.label.editor__label-full
              span.input.input--size-l.editor__input-full.input_active
                span.input__box
                  input(
                    placeholder="Ваше имя"
                    v-model="review.author"
                    ).input__control
            //Одно поле с лэйблом КОНЕЦ

            //Одно поле с лэйблом
            .editor__row.editor__row_half.editor__row_cell
              label.label.editor__label-full Титул Автора
              span.input.input--size-l.editor__input-full.input_active
                span.input__box
                  input(
                    placeholder="Ваша должность"
                    v-model="editedReview.occ"
                  ).input__control
            //Одно поле с лэйблом КОНЕЦ

            //Одно поле с лэйблом
            .editor__row.editor__row_cell
              label.label.editor__label-full Описание
              textarea(
                placeholder="Текст вашего комментария"
                v-model="editedReview.text"
                rows='3'
                ).textarea.editor__textarea-full
            //Одно поле с лэйблом КОНЕЦ

            //Одно поле с лэйблом
            .editor__row.editor__row_cell
              .editor__function.editor__function_alt
                button(
                  @click="$emit('addReviewClose')"
                  type="button"
                  ).button.button_size_m.editor__cancel
                  .button__text Отмена
                button(
                  @click="sendEditedReview"
                  type="button"
                  ).button.button_rainbow.button_size_xl
                  .button__text СОХРАНИТЬ

            //Одно поле с лэйблом КОНЕЦ

</template>

<script>
  import { mapActions,  mapGetters, mapState } from "vuex";
  export default {
    name: "c-reviewEditor",
    props:{
      editedReview: Object
    },
    data(){
      return{
        renderedPhotoUrl: ""
      }
    },
    computed:{
      //...mapGetters('reviews', ['getCommentById']),
      review(){
        return {...this.editedReview};
      }
    },
    methods:{
      ...mapActions('reviews', ['editReview']),
      appendFileAndRenderPhoto(e){
        const file = e.target.files[0];
        this.review.photo = file;
        //this.$emit('file', file);
        const reader = new FileReader();
        try{
          reader.readAsDataURL(file);
          reader.onload = ()=>{
            this.renderedPhotoUrl = reader.result;
          }
        }catch(error){
          alert("Ошибка при загрузке файла")
        }
      },
      async sendEditedReview(){
        this.editReview(this.review);
      }
    },
    created() {

    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";
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

  .editor__cancel{
    margin: 0 30px;
    @include phones{
      margin: 0 10px;
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

  .tile__ava-add{
    width: 225px;
    margin-right: 15px;
    margin-left: 15px;
    @include tablets{
      width: calc(100% - 30px);
    }
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


  .ava-loader__inner{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .ava-loader__image-box{
    width: 200px;
    height: 200px;
    background: #dee4ed;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
  .button_size_m{
    font-size: 16px;
    line-height: 32px;
  }
  .button_size_m .button__text{
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
  .content__tile{
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .img {
    font: 0/0 a;
    border: 0;
    max-width: 100%;
    height: auto
  }

</style>