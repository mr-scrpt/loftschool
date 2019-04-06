import Vue from 'vue';
import axios from 'axios';

const errorMessage = {
  template: "#error-message",
  props: {
    errorMessage
  }
};

new Vue({
  template: "#comments-form-tpl",
  el: 'comments-form',
  components:{
    axios,
    errorMessage

  },
  data(){
    return{
      formData:{
        name: "",
        email: "",
        message: ""
      },
      isEmpty: false,
      data: {},
      errorMessageArr: [], //Массив, который содержет сообщения об ошибках
      errorMessage: "", //Строка для вывода всех активных ошибок
      fieldEmptyName: false,
      fieldEmptyEmail: false,
      fieldEmptyMessage: false
    }
  },
  props:{
  },
  mounted(){

  },
  methods: {
    // Вспомогательный метод - отправляет запрос на сервер, принимает урл, объект данных и метод отправки
    sendXHR(url, data, method) {
      axios[method](url, data)
        .then((response) => {})
        .catch((error) => {
          console.log(error)
        })
    },

    /*testMethod(obj){
      let flag = true;
      this.errorMessageArr = [];
      for(let key in obj){
        if (!obj[key]) {
          flag = false;
          this.errorMessageArr.push(`Поле ${key} пусто`);
        }
      }
      if(flag){
        console.log('Успех');
      }else {
        this.errorMessage = this.errorMessageArr.join(', ');
      }
    },*/
    // Основной метод - валидирует поля формы, вызывается при нажатии на submit
    checkForm(){
      // Проверка полей на заполненость
      if(this.formData.name && this.formData.email && this.formData.message){
        this.sendXHR('/testURL',this.formData, 'post' );
      }else{
        // Отчищаем массив в котором могут содержаться данные об ошибках
        this.errorMessageArr = [];
        // Меняем флаг
        this.isEmpty = true;
         // Проверяем каждое поле и заносим ошибку в массив
         if(!this.formData.name){
           this.errorMessageArr.push('Введите ваше имя');
           this.fieldEmptyName = true;
         }
         if(!this.formData.email){
           this.errorMessageArr.push('Введите вашу почту');
           this.fieldEmptyEmail = true;
         }
         if(!this.formData.message){
           this.errorMessageArr.push('Введите ваше сообщение');
           this.fieldEmptyMessage = true;
         }
         // Джоиним массив ошибок в строку, что бы удобно ее вывести в сообщении, через запятые
         this.errorMessage = this.errorMessageArr.join(', ');
      }
    }
  }
});