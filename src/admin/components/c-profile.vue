<template lang="pug">
  .profile
    .profile__inner
      .profile__ava-box
        img(src="../../images/content/user__me.jpg").profile__ava-img.img
      .profile__name Дмитрий Лукьянов
      .profile__title Панель администратора
      router-link(to="/login").profile__logout
        .profile__logout-text Выйти
</template>
<style scoped lang="postcss">
  @import "../../styles/mixins.pcss";
  @import "../style/img.pcss";
  .profile{
    height: 100%;
  }
  .profile__inner{
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
  .profile__ava-box{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    @include phones{
      grid-row: 1 / 3;
    }
  }
  .profile__name{
    padding: 0 20px;
    font-size: 18px;
    color: #fff;
  }
  .profile__title{
    font-size: 14px;
    color: rgba(#fff,0.7);
    @include middle{
      display: none;
    }

  }
  .profile__logout{
    margin-left: auto;
    margin-right: 0;
    color: rgba(#fff,0.7);
    text-decoration: none;

    @include phones{
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      display: inline;
      text-align: left;
      padding: 0 20px;
      margin: 0;
    }
  }
  .profile__logout-text{
    border-bottom: 1px solid rgba(#fff,0.7);
    display: inline-block;
    @include ts(color,border-color);
    &:hover{
      color: $orange;
      border-color: $orange;
    }
  }
</style>

