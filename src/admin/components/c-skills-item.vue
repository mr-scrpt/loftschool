<template lang="pug">
.editor__row(v-if="editMode === false")
  span.input.input--size-l.tile__input-box.editor__name
    span.input__box
      input(placeholder="Название группы" :value="skill.title" disabled).input__control
  span.input.input--size-l.tile__input-box.input_percent.editor__value.editor__percent
    span.input__box
      input(placeholder="Название группы" :value="skill.percent" disabled).input__control

  .editor__function
    .editor__edit
      button(@click="editMode = true").button.button_size_l
        img(src="../../images/admin/icon__pencil.png").button__icon.editor__icon
    .editor__delete
      button(@click="skillDel").button.button_size_l
        img(src="../../images/admin/icon__trash.png").button__icon.editor__icon

.editor__row(v-else)
  span.input.input--size-l.tile__input-box.editor__name.input_active
    span.input__box
      input(v-model="editedSkill.title").input__control
  span.input.input--size-l.tile__input-box.input_percent.editor__value.editor__percent.input_active
    span.input__box
      input(v-model="editedSkill.percent").input__control
  .editor__function
    .editor__edit
      button(@click="skillEditAccept").button.button_size_l
        img(src="../../images/admin/icon__accept.png").button__icon.editor__icon
    .editor__delete
      button(@click="editMode = false").button.button_size_l
        img(src="../../images/admin/icon__decline.png").button__icon.editor__icon
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    data() {
      return{
        editMode: false,
        editedSkill:{
         ...this.skill
        }
      }
    },
    props:{
      skill: Object,
      categoryId: Number
    },
    methods:{
      ...mapActions('skills', ['deleteSkills', 'editSkills']),
      //...mapActions('skills', ['editSkills']),
      async skillDel(){
        try{
          await this.deleteSkills(this.skill.id);
        }catch(error){
          console.log(error.message);
        }

      },
      async skillEditAccept(){
        try{
          await this.editSkills(this.editedSkill);
          this.editMode = false;
        }catch(error){
          console.log(error.message);
        }

      }
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
      @include ts(color);
    }
  }

  /*L - Начало*/
  .button_size_l{
    font-size: 16px;
    line-height: 32px;
  }
  .button_size_l .button__text{
    margin: 0 15px;
  }
  /*L - КОНЕЦ*/


  /*Состояния*/
  //Стандартная кнопка

  .button:hover{
    cursor: pointer;
    & .button__text {
      color: $orange;
    }
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
        background: linear-gradient(to top left, $gradient_blue-dark, $gradient_blue-light);
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
  }
  .editor__function{
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    &_alt{
      width: 100%;
      padding: 40px 0;
      @include phones{
        justify-content: center;
      }
    }
  }
  .editor__icon{
    width: 14px;
    height: 12px;
    padding-left: 20px;
  }
  .editor__row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &_half {
      width: calc(50% - 30px);
    }
    &_cell{
      margin-right: 15px;
      margin-left: 15px;
    }
  }
  .editor__name{
    width: calc(100% - 160px);

  }
  .editor__value{
    width: calc(30% - 40px);

  }
  .editor__percent{
    width: calc(80px);
  }
</style>