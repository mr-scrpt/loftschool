<template lang="pug">
.login.popup.page__popup
  .popup__inner
    .popup__box.login__inner
      button(type="button").button.button_close.popup__close
      .login__row
        .login__title Авторизация
      .login__row
        label.label.label__login Логин
        span.input.input--size-l.login__input.input_active
          span.icon.input__icon.icon_user
          span.input__box
            input(
              v-model="login"
              type="text"
              placeholder="Название группы"
              ).input__control
      .login__row
        label.label.label__login Пароль
        span.input.input--size-l.login__input.input_active
          span.icon.input__icon.icon_key
          span.input__box
            input(
              v-model="password"
              type="text"
              placeholder="Название группы"
              ).input__control
      .login__row
        button(type="submit").button.button_rainbow.button_size_xl.login__button-confirm
          .button__text ОТПРАВИТЬ
</template>