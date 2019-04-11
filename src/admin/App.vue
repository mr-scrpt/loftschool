<template lang="pug">
    .page__inner
      c-header
      c-menu-tab
      router-view
      //-include section/section_about-me.pug
      //-include section/section_my-works-editor
      //-include section/section_reviews-editor.pug
      //-include section/section_login-popup.pug

</template>


<script>
  export default {
    name: 'app',
    components:{
      cMenuTab: ()=>import('components/c-menu-tab.vue'),
      cHeader: ()=>import('components/c-header.vue')
    },
    data(){
      return{}
    }
  }
</script>

<style lang="postcss" scoped>

  @import "../styles/mixins.pcss";
  /*@import "./style/blockquote.pcss";
  @import "./style/img.pcss";
  @import "./style/cite.pcss";
  @import "./style/textarea.pcss";
  @import "./style/input.pcss";
  @import "./style/button.pcss";
  @import "./style/page.pcss";
  @import "./style/header.pcss";
  @import "./style/profile.pcss";
  @import "./style/menu-tab.pcss";
  // @import "./style/content.pcss";
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
  @import "./style/login.pcss";*/

  html{
    height: 100%;
    width: 100%;
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

 .header{
   grid-area: header;
   background: $violet;
 }
 .header__inner{
   display: grid;
   grid-template-columns: 50px 220px 200px 1fr;
   grid-template-rows: 1fr;
   flex-wrap: wrap;
   height: 100%;
   width: 100%;
   align-items: center;
   @include middle{
     grid-template-columns: 50px 220px 1fr;
   }
   @include phones{
     grid-template-columns: 50px 1fr;
     grid-template-rows: 1fr 1fr;
   }
 }
</style>

