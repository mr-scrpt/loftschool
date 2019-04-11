<template lang="pug">
  section.menu-tab
    nav.menu-tab__inner.page__container
      router-link(
        v-for="tab in tabs"
        :data-text="tab.title"
        :to="tab.href"
        exact-active-class="menu-tab__link_active"
      ).menu-tab__link {{tab.title}}
</template>

<script>
  export default {
    name: "c-menu-tab",
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

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";
  .menu-tab{
    grid-area: nav;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
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
</style>