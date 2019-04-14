<template lang="pug">
.login.popup.page__popup
  .popup__inner
    form(@submit.prevent="login").popup__box.login__inner
      button(type="button").button.button_close.popup__close
      .login__row
        .login__title Авторизация
      .login__row
        label.label.label__login Логин
        c-input(
          v-model="user.name"
          inputClass="input--size-l login__input input_active"
          inputIconClass="input__icon icon_user"
          inputType="text"
          )
      .login__row
        label.label.label__login Пароль
        c-input(
          v-model="user.password"
          inputClass="input--size-l login__input input_active"
          inputIconClass="input__icon icon_key"
          inputType="password"
        )
      .login__row
        button(type="submit").button.button_rainbow.button_size_xl.login__button-confirm
          .button__text ОТПРАВИТЬ
</template>
<script>
  import $axios from "@/requests"
  export default {
    components: {
      cInput: ()=>import('components/c-input.vue')
    },
    data(){
      return{
        user:{
          name: "luk0319",
          password: "123456"
        }
      }
    },
    methods:{
      async login(){
        try {
          const {data: {token}} = await $axios.post('/login', this.user);

          localStorage.setItem('token', token);
          $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
          this.$router.replace('/');

        }catch (e) {
          console.log(`Ошибка авторизации: ${e.message}`);
        }

      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../../styles/mixins.pcss";
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
    &_flex{
      display: flex;
      align-items: center;
    }
    &_close{
      background: none;
      height: 20px;
      width: 20px;
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

  .button_rainbow:before{
    background: linear-gradient(to top left, $gradient_blue-dark, $gradient_blue-light);
    border-radius: 24px;
  }

  .button_close:before{
    background: url("../../../images/icons/icon__menu-close.png") no-repeat;
    background-size: contain;
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

  .button_rainbow{
    & .button__text{
      color: #fff;
      @include ts(color);
    }
  }

  /*XL - Начало*/
  .button_size_xl{
    font-size: 18px;
    line-height: 38px;
    font-weight: $font_bold;
    text-transform: uppercase;
  }
  .button_size_xl .button__text{
    padding: 5px 20px;
  }
  /*XL - КОНЕЦ*/
  /*Состояния*/
  //Стандартная кнопка

  .button:hover{
    cursor: pointer;
    & .button__text {
      color: $orange;
    }
  }
  .login__inner{
    display: flex;
    flex-direction: column;
  }
  .login__title{
    font-size: 36px;
    font-weight: $font_semibold;
    margin: 0 auto;
  }
  .login__row{
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  .label__login{
    width: 100%;
  }
  .login__input{
    width: 100%;
    padding: 20px 0;
  }
  .login__button-confirm{
    margin: 0 auto;
  }

  .popup__inner{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../../images/content/bg__popup.jpg") no-repeat;
    background-size: cover;
    &:before{
      content: "";
      position: absolute;
      background: rgba($dark, .8);
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  .popup__box{
    position: absolute;
    background-color: #fff;
    z-index: 2;
    width: 500px;
    padding: 20px 50px;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    @include middle{
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translate(0,0);
    }
  }
  .popup__close{
    position: absolute;
    right: 35px;
    top: 35px;
  }



  .popup__close{
    position: absolute;
    right: 35px;
    top: 35px;
  }
</style>