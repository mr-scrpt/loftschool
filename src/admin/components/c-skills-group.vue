<template lang="pug">
  // Секция ===========================
  .tile.content__tile.editor
    .tile__inner
      .tile__header.tile__enter-block

        span.input.input--size-l.tile__input-box.input_active
         span.input__box
          input(placeholder="Название группы" :value="category.category" disabled).input__control
        .editor__function
          .editor__accept
            button(type="submit").button.button_size_l
              img(src="../../images/admin/icon__accept.png").button__icon.editor__icon
          .editor__decline
            button(type="button").button.button_size_l
              img(src="../../images/admin/icon__decline.png").button__icon.editor__icon
      .tile__body
        //Один ряд
        .editor__row
          span.input.input--size-l.tile__input-box.editor__name
            span.input__box
              input(placeholder="Название группы" value="Git" disabled).input__control
          span.input.input--size-l.tile__input-box.input_percent.editor__value.editor__percent
            span.input__box
              input(placeholder="Название группы" value="70" disabled).input__control

          .editor__function
            .editor__edit
              button.button.button_size_l
                img(src="../../images/admin/icon__pencil.png").button__icon.editor__icon
            .editor__delete
              button.button.button_size_l
                img(src="../../images/admin/icon__trash.png").button__icon.editor__icon
        //Один ряд КОНЕЦ
      .tile__footer
        .editor__add-row
          span.input.input--size-l.tile__input-box.editor__add-name.input_active
            span.input__box
              input(placeholder="новый навык").input__control

          span.input.input--size-l.tile__input-box.input_percent.editor__add-value.editor__percent.input_active
            span.input__box
              input(placeholder="100").input__control

          span.editor__add-footer
            button(type="submit").button
              .icon.icon_add-button.icon_add-button_big
        // Секция КОНЕЦ ===========================
</template>
<script>
  export default {
    props: {
      category: Object
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";

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

  .button{
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

  /*L - Начало*/
  .button_size_l{
    font-size: 16px;
    line-height: 32px;
  }
  .button_size_l .button__text{
    margin: 0 15px;
  }
  /*L - КОНЕЦ*/


  /*Состояния*/
  //Стандартная кнопка

  .button:hover{
    cursor: pointer;
    & .button__text {
      color: $orange;
    }
  }


  .icon{
    &_add-button {
      color: $blue;
      box-sizing: border-box;
      position: relative;
    //@include ts(color); width: 20px;
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
      //transform: translate(-50%, -50%);
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
      &_big{
        height: 40px;
        width: 40px;
        &:before{
          width: 40px;
          height: 40px;
          line-height: 40px;
          left: auto;
          right: 0;
          font-size: 24px;
        }
      }
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

  .tile__footer{
    grid-area: tile-footer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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




</style>
