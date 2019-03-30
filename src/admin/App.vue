<template lang="pug">
  .page__inner
    header.header
    section.content
</template>
<style lang="postcss">
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
  grid-template-rows: 82px 1fr;
  grid-template-areas:
    "header"
    "content"
;}
.header{
  grid-area: header;
  background: $violet;
}
.content{
  grid-area: content;
}








</style>