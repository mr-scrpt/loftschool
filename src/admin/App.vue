<template lang="pug">
  .page__inner
    header.header
      section.page__container
        .header__inner.profole
          .profile__ava-box
            img(src="../images/content/user__me.jpg").profile__ava-img.img
          .profile__name Дмитрий Лукьянов
          .profile__title Панель администратора
          a(href="#").profile__logout
            .profile__logout-text Выйти
    section.menu-tab
      nav.menu-tab__inner.page__container
        router-link(
          v-for="tab in tabs"
          :data-text="tab.title"
          :to="tab.href"
          exact-active-class="menu-tab__link_active"
        ).menu-tab__link {{tab.title}}
        //router-link(:to="/").menu-tab__link.menu-tab__link_active Обо мне
        //router-link(:to="/works").menu-tab__link Работы
        //router-link(:to="/reviews").menu-tab__link Отзывы
      router-view
    //-include section/section_about-me.pug
    //-include section/section_my-works-editor
    //-include section/section_reviews-editor.pug
    //-include section/section_login-popup.pug

</template>

<style lang="postcss">

  @import "../styles/mixins.pcss";
  @import "./style/blockquote.pcss";
  @import "./style/img.pcss";
  @import "./style/cite.pcss";
  @import "./style/textarea.pcss";
  @import "./style/input.pcss";
  @import "./style/button.pcss";
  @import "./style/page.pcss";
  @import "./style/header.pcss";
  @import "./style/profile.pcss";
  @import "./style/menu-tab.pcss";
  @import "./style/content.pcss";
  @import "./style/about-me.pcss";
  @import "./style/my-work.pcss";
  @import "./style/new-work.pcss";
  @import "./style/tile.pcss";
  @import "./style/editor.pcss";
  @import "./style/icon.pcss";
  @import "./style/img-loader.pcss";
  @import "./style/tags.pcss";
  @import "./style/ava-loader.pcss";
  @import "./style/popup.pcss";
  @import "./style/login.pcss";

  html{
    height: 100%;
    width: 100%;
  }
</style>

<script>
export default {
  name: 'app',
  data(){
    return{
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    }
  }
}
</script>