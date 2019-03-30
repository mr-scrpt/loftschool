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
            //.button__icon.content__add-icon
            .button__text.content__add Добавить группу

        .content__body
          .content__tile.tile.editor
            .tile__inner
              .tile__header.tile__enter-block
                input.tile__enter.tile__input-box
                .tile__function
                    .editor__accept
                    .editor__decline
              .tile__body

              .tile__footer
                .editor__add-row
                  input.editor__add-name
                  input.editor__add-value
                  button.editor__add-button


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
.content__add{
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
    background: linear-gradient(bottom right, $blue_dark, $blue);;
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
  background-color: yellow;
}


</style>