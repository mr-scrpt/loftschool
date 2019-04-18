<template lang="pug">
  header.header
    section.page__container
      profile
</template>

<script>
  export default {
    components:{
      profile: ()=>import('components/c-profile.vue')
    }
  }
</script>
<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";
  .header{
    grid-area: header;
    background: $violet;
  }
</style>