<template lang="pug">
  .my-work__rewiev
    // Секция ===========================
    .tile.content__tile.my-work__tile
      .tile__inner.tile__inner_full
        .tile__main.new-work
          .new-work__inner
            button(
              @click="$emit('addReviewOpen', 'true')"
              type="button"
              ).button.new-work__add
            .new-work__title Добавить отзыв

    // Секция КОНЕЦ ===========================

    // Секция ===========================
    blockquote(
      v-for="review in reviews"
      :key="review.id"
      ).blockquote.tile.content__tile.my-work__tile
      div(:class="{ tile__shadow: activeReview === review.id }").tile__inner.tile__inner_full
        .tile__main
          cite.cite.tile__author
            img(:src="`https://webdev-api.loftschool.com/${review.photo}`").tile__author-ava
            .tile__author-info
              .tile__author-name {{review.author}}
              .tile__author-title {{review.occ}}
          .tile__about
            .tile__about-content {{review.text}}
            .tile__about-function
              //button(@click="activeReview(review)")
              button(
                @click="editReview(review)"
                type="button"
                ).button.button_size_l.tile__edit
                .button__text Править
                img(src="../../images/admin/icon__pencil.png").button__icon.editor__icon
              button(
                @click="reviewDelete(review.id)"
                type="submit"
                ).button.button_size_l.tile__remove
                .button__text Удалить
                img(src="../../images/admin/icon__cross.png").button__icon.editor__icon
    // Секция КОНЕЦ ===========================
</template>

<script>
  import { mapActions, mapState } from "vuex";
  export default {
    name: "c-review-all",
    data(){
      return{
        activeReview: ""
      }
    },
    props:{
    },
    computed:{
      ...mapState('reviews',{
        reviews: state => state.reviews
      })
    },
    methods:{
      ...mapActions('reviews', ['fetchReview', 'removeReview']),
      async reviewDelete(reviewId){
        try{
          await this.removeReview(reviewId);
          //console.log(reviewId);
        }catch(error){
          alert('Ошибка удаления')
        }
      },
      editReview(review){
        this.$emit('editReviewOpen', review);
        this.activeReview = review.id;
      }
    },
    async created() {
      try {
        await this.fetchReview();
      }catch (e) {
        console.log(e.message);
      }
    }
  }
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.tile{
  &__shadow{
    opacity: .3;
  }
}
.tile__inner{
  height: 100%;
  padding: 20px;
  background: #fff;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px 1fr 80px;
  grid-template-areas:
          "tile-header"
          "tile-body"
          "tile-footer"
;
  &_full{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:"tile-full";
    padding: 0;
  }

  &_simply{
    grid-template-rows: 55px 1fr;
  }
}
.tile__main{
  grid-area: tile-full;
  display: flex;
  flex-direction: column;
}


.tile__about{
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
}

.tile__about-content{
  color: rgba($text-color, .7);
  font-weight: $font_semibold;
  padding-bottom: 20px;
  line-height: 30px;
}

.tile__about-function{
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & .button__text{
    color: rgba($text-color, .7);
    font-weight: $font_semibold;
  }
  @include phones{
    justify-content: center;
  }
}
.tile__author{
  display: flex;
  padding: 35px;
  padding-bottom: 0;
}
.tile__author-ava{
  width: 50px;
  height: 50px;
}
.tile__author-info{
  padding-left: 15px;
}
.tile__author-name{
  font-size: 18px;
  font-weight: $font_semibold;
}
.tile__author-title{
  color: rgba($text-color, .7);
}

.button.button_close:hover{
  &:before{
    opacity: 0.7;
    background: url("../../images/icons/icon__menu-close.png") no-repeat;
    background-size: contain;
  }
}.button{
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
.blockquote{
  margin: 0;
  padding: 0;
}

.content__tile{
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.cite{
  font-style: normal;
}

.new-work__inner{
  background: linear-gradient(to top left, $gradient_blue-dark, $gradient_blue-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.new-work__add{
  width: 150px;
  height: 150px;
  position: relative;
  margin-bottom: 20px;
  &:before{
    width: 150px;
    height: 150px;
    position: absolute;
    content: "+";
    text-align: center;
    line-height: 150px;
    border-radius: 50%;
    font-size: 58px;
    color: #fff;
    border: 2px solid #fff;
    box-sizing: border-box;
    @include ts(color,border-color);
  }
  &:hover{
    &:before{
      border-color: $orange;
      color: $orange;
    }
  }
}
.new-work__title{
  color: #fff;
  font-size: 18px;
  font-weight: $font_bold;
}
.my-work__rewiev{
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}
.my-work__tile{
  width: calc(33% - 30px);
  margin: 0 15px;
}


.tags{
  &__inner{
    display: flex;
    flex-wrap: wrap;
    @include laptop{
      justify-content: center;
    }

  }
  &__item{
    @include bgc(#f1f5f9);
    font-size: 13px;
    font-weight: $font_semibold;
    padding: 5px 1px;
    margin: 0 6px 4px 0;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .tags__text{
  //@include bgc(green);
    line-height: 15px;
    padding: 2px 10px;
  }

}
</style>