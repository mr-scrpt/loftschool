(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{361:function(e,t,n){},382:function(e,t,n){"use strict";var i=n(361);n.n(i).a},401:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"content my-works"},[t("div",{staticClass:"page__container content__inner"},[this._m(0),t("div",{staticClass:"content__body my-work__grid"},[t("transition",{attrs:{name:"fade"}},[this.addingModeValue?t("c-review-add"):this._e()],1),t("transition",{attrs:{name:"fade"}},[this.activeReviewId?t("c-review-edit"):this._e()],1),t("transition",{attrs:{name:"fade"}},[t("c-review-all",{on:{addReviewOpen:this.addReviewOpen}})],1)],1)])])};i._withStripped=!0;var r=n(93);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={components:{cReviewAdd:function(){return n.e(6).then(n.bind(null,411))},cReviewEdit:function(){return n.e(7).then(n.bind(null,409))},cReviewAll:function(){return n.e(4).then(n.bind(null,408))}},computed:a({},Object(r.e)("reviews",{activeReviewId:function(e){return e.activeReview},addingModeValue:function(e){return e.addReviewMode}})),methods:a({},Object(r.d)("reviews",{addingMode:"SET_ADDING_MODE",activeReviewDelete:"DELETE_ACTIVE_REVIEW"}),{addReviewOpen:function(){this.activeReviewDelete(),this.addingMode(!0)}})},s=(n(382),n(341)),d=Object(s.a)(o,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"content__head"},[t("div",{staticClass:"content__title"},[this._v('Блок "Отзывы"')])])}],!1,null,"1f42caf0",null);d.options.__file="src/admin/components/pages/reviews.vue";t.default=d.exports}}]);