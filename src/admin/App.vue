<template lang="pug">
  .page__inner
    header.header
      section.page__container
        .header__inner.profole
          .profile__ava-box
            img(src="../images/content/user__me.jpg").profile__ava-img.img
          .profile__name Дмитрий Лукьянов
          .profile__title Панель администратора
          a(href="#").profile__logout Выйти
    section.page__container.menu-tab
      nav.menu-tab__inner
        a(href="#").menu-tab__link.menu-tab__link_active Обо мне
        a(href="#").menu-tab__link Работы
        a(href="#").menu-tab__link Отзывы
    section.content
      .page__container.content__inner
        header.content__head
          .content__title Блок "Обо мне"
          button.button.button_size_l
            .button__text.add-plus Добавить группу
        .content__body




          // Секция ===========================
          .tile.content__tile.editor
            .tile__inner
              .tile__header.tile__enter-block
                span.input.input--size-l.tile__input-box
                  span.input__box
                    input(placeholder="Название группы").input__control
                .editor__function
                  .editor__accept
                    button.button.button_size_l
                      img(src="../images/admin/icon__accept.png").button__icon.editor__icon
                  .editor__decline
                    button.button.button_size_l
                      img(src="../images/admin/icon__decline.png").button__icon.editor__icon
              .tile__body
                .editor__row
                  span.input.input--size-l.tile__input-box.editor__name
                    span.input__box
                      input(placeholder="Название группы" value="Git" disabled).input__control
                  span.input.input--size-l.tile__input-box.input_percent.editor__value
                    span.input__box
                      input(placeholder="Название группы" value="70" disabled).input__control

                  .editor__function
                    .editor__edit
                      button.button.button_size_l
                        img(src="../images/admin/icon__pencil.png").button__icon.editor__icon
                    .editor__delete
                      button.button.button_size_l
                        img(src="../images/admin/icon__trash.png").button__icon.editor__icon
              .tile__footer
                .editor__add-row
                  span.input.input--size-l.tile__input-box.editor__add-name
                    span.input__box
                      input(placeholder="новый навык").input__control

                  span.input.input--size-l.tile__input-box.input_percent.editor__add-value
                    span.input__box
                      input(placeholder="100").input__control

                  button.button.editor__add-button.add-plus.add-plus_big
        // Секция КОНЕЦ ===========================






</template>

<style lang="postcss">
  //Анимация
  @mixin ts($obj, $obj2:"empty", $obj3:"empty") {
    @if $obj3 != "empty" {
      transition: $obj $th, $obj2 $th, $obj3 $th;
    }
    @if $obj2 != "empty" {
      transition: $obj $th, $obj2 $th;
    }
    @else {
      transition: $obj $th;
    }

  }
  .img {
    font: 0/0 a;
    border: 0;
    max-width: 100%;
    height: auto
  }

  html{
    height: 100%;
    width: 100%;
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
    &_percent{
      padding-right: 22px;
      :after{
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
    }

  }


  /*L - Начало*/
  .button_size_l{
    font-size: 15px;
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
    padding: 20px 110px;
  }
  /*XL - КОНЕЦ*/
  /*Состояния*/
  //Стандартная кнопка

  .button.button:hover{
    cursor: pointer;
  }
  .page{
    position: relative;
    width: 100%;
    height: 100%;
    font: 16px / 1.42 'Open Sans', Arial, sans-serif;
    min-width: 100%;
    margin: 0;
    color: $text-color;
    background: #fff;
  }
  .page__inner{
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 80px 1fr;
    grid-template-areas:
            "header"
            "nav"
            "content"
  ;}
  .page__container{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-left: 60px;
    padding-right: 60px;
  }
  .header{
    grid-area: header;
    background: $violet;
  }
  .header__inner{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
  }
  .profile__ava-box{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }
  .profile__name{
    padding: 0 20px;
    font-size: 18px;
    color: #fff;
  }
  .profile__title{
    font-size: 14px;
    color: rgba(#fff,0.7);
  }
  .profile__logout{
    margin-left: auto;
    margin-right: 0;
    color: rgba(#fff,0.7);
    border-bottom: 1px solid rgba(#fff,0.7);
    text-decoration: none;
    @include ts(color,border-color);
    &:hover{
      color: $orange;
      border-color: $orange;
    }
  }
  .menu-tab{
    grid-area: nav;
    background: #fff;
  }

  .menu-tab__link{
    display: inline-block;
    text-decoration: none;
    color: $text-color;
    padding: 27px 30px;
    border-bottom: 3px solid transparent;
    @include ts(border-color,color);
    &:hover{
      border-color:$blue;
      color: $blue;
    }
    &_active{
      border-color:$blue;
      color: $blue;
    }

  }
  .content{
    grid-area: content;
    background: url("../images/admin/bg__content.jpg") no-repeat;
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
  .content__head{
    grid-area: content-header;
    display: flex;
    align-items: center;
  }
  .content__title{
    font-size: 21px;
    font-weight: $font_bold;
  }
  .add-plus{
    color: $blue;
    padding: 0 60px;
    position: relative;
    @include ts(color);
    &:before{
      position: absolute;
      content: "+";
      color: #fff;
      @include ts(color);
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      left: 30px;
      background: linear-gradient(bottom right, $blue_dark, $blue);
    }
    &_big{
      height: 40px;
      &:before{
        width: 40px;
        height: 40px;
        line-height: 40px;
        left: auto;
        right: 0;
      }
    }
    &:hover{
      color: $orange;
      &:before{
        color: $orange;
      }
    }
  }
  .content__body{
    grid-area: content-body;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .tile__inner{
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
  }

  .tile__header{
    grid-area: tile-header;
    border-bottom: 1px solid rgba(#000, .15);
  }
  .tile__enter-block{
    display: flex;
  }
  .tile__input-box{
    width: calc(100% - 80px);
  }

  .editor__function{
    width: 80px;
    display: flex;
    justify-content: flex-end;
    background-color: yellow;
  }
  .editor__icon{
    width: 14px;
    height: 12px;
    padding-left: 20px;
  }

  .tile__body{
    grid-area: tile-body;
    padding-bottom: 45px;
  }
  .tile__footer{
    grid-area: tile-footer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .editor__add-row{
    width: 90%;
    display: flex;
    align-items: center;
  }
  .editor__add-name{
    width: 70%;

  }
  .editor__add-value{
    width: 30%;
  }
  .editor__add-button{
    width: 20%;
  }
  .editor__row{
    width: 100%;
    display: flex;
    align-items: center;
    background-color: yellow;
  }
  .editor__name{
    width: calc(70% - 40px);
    background-color: pink;
  }
  .editor__value{
    width: calc(30% - 40px);
    background-color: green;
  }

</style>