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
    //-include section/section_about-me.pug
    include section/section_my-works.pug

</template>

<style lang="postcss">

  @import "../styles/mixins.pcss";
  @import "./style/img.pcss";
  @import "./style/textarea.pcss";
  @import "./style/input.pcss";
  @import "./style/button.pcss";
  @import "./style/page.pcss";
  @import "./style/header.pcss";
  @import "./style/profile.pcss";
  @import "./style/menu-tab.pcss";
  @import "./style/content.pcss";
  @import "./style/about-me.pcss";
  @import "./style/tile.pcss";
  @import "./style/editor.pcss";
  @import "./style/icon.pcss";
  @import "./style/img-loader.pcss";
  @import "./style/tags.pcss";

  html{
    height: 100%;
    width: 100%;
  }
</style>