<template lang="pug">
  span(:class="inputClass").input
    span(
      v-if="inputIconClass"
      :class="inputIconClass"

      ).icon
    span.input__box
      input(
        :value="value"
        :type="inputType"        @input="$emit('input', $event.target.value)"

        placeholder="Название группы"
      ).input__control
</template>

<script>
  export default {
    props:{
      inputClass: String,
      inputIconClass: String,
      inputType: String,
      value: String | Number

    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";

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
    &_active{
      &:before{
        border-bottom: 1px solid $text-color;
      }
    }
    &_percent{
      padding-right: 22px;
      &:after{
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

  .input .icon{
    position: absolute;
    width: 30px;
    height: 30px;
  }

  .input .icon+.input__box{
    padding-left: 35px;
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
        background: linear-gradient(bottom right, $gradient_blue-dark, $gradient_blue-light);
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
    &_cross{
      width: 10px;
      height: 10px;
    }
    &_user{
      background: url("../../images/admin/icon__user.png") no-repeat;
    }
    &_key{
      background: url("../../images/admin/icon__key.png") no-repeat;
    }

  }
  .login__input{
    width: 100%;
    padding: 20px 0;
  }
</style>