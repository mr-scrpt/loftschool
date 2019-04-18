<template lang="pug">
  div(:class="`tooltip_${type}`").tooltip
    .tooltip__inner
      .tooltip__text {{text}}
      .close(@click="closeTooltip")

</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: "c-tooltip",
    computed:{
      ...mapState('tooltip', {
        text: state=> state.text,
        type: state=> state.type,
      })
    },
    methods:{
      ...mapActions('tooltip', ['closeTooltip'])
    }
  }
</script>
<style lang="postcss" scoped>
  .close{
    width: 20px;
    height: 20px;
    background: url("../../images/admin/icon__cross.png") center center no-repeat;
    cursor: pointer;
  }
  .tooltip{
    &_success{
      & .tooltip__inner{
        background: #79c700;
      }
    }
    &_error{
      & .tooltip__inner{
        background: red;
      }
    }
    &_warning{
      & .tooltip__inner{
        background: blueviolet;
      }
    }
  }
  .tooltip__inner{
    width: 250px;
    display: flex;
    padding: 20px 10px;
  }
  .tooltip__text{
    flex-grow: 1;
    color: #fff;

  }
</style>