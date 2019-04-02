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
  @import "./style/img.pcss";
  @import "./style/input.pcss";
  @import "./style/button.pcss";
  @import "./style/page.pcss";
  @import "./style/header.pcss";
  @import "./style/profile.pcss";
  @import "./style/menu-tab.pcss";
  @import "./style/content.pcss";
  @import "./style/tile.pcss";
  @import "./style/editor.pcss";
  @import "./style/icon.pcss";

  html{
    height: 100%;
    width: 100%;
  }


</style>