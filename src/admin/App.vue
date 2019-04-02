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
          button.button.button_flex.button_size_l.content__head-add
            .button__icon.icon.icon_add-button
            .button__text Добавить группу
        .content__body
          include section/tile-about_group

</template>

<style lang="postcss">
  @import "../styles/mixins.pcss";

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
    &_flex{
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
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-left: 60px;
    padding-right: 60px;
    @include desktop{
      padding-left: 20px;
      padding-right: 20px;
    }
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
    width: 100%;
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
  .content__tile{
    background-color: pink;
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

  .content__body{
    grid-area: content-body;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    @include laptop{
      grid-template-columns: 1fr;
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
    align-items: center;
    background-color: yellow;
  }
  .editor__name{
    width: calc(100% - 160px);
    background-color: pink;
  }
  .editor__value{
    width: calc(30% - 40px);
    background-color: green;
  }
  .editor__percent{
    width: calc(80px);
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
        background: linear-gradient(bottom right, $blue_dark, $blue);
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

</style>