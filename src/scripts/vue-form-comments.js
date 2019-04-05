import Vue from 'vue';
import axios from 'axios';

new Vue({
  template: "#comments-form-tpl"
  ,el: '#comments-form'
  ,components:{
    axios
  }
  ,data(){
    return{

    }
  }
  ,props:{
    name: String
    ,email: String
    ,message: String

  }
  ,mounted(){
    this.$refs.alertMessage.classList.add('page__hidden'); // пярчим блок который выводит ошибки, покзываем только в том случае если есть незаполненные поля
  }
  ,methods: {
    // Вспомогательная функция - Отчистка полей после
    clearField(field){
      field.value = "";
    }
    // Вспомогательная функция - Отправка запроса xhr
    ,sendXHR(url, data, method) {
      axios[method](url, data)
        .then((response) => {
          // Если ответ получен, отчищаем поля формы
          this.clearField(this.$refs["input-name"]);
          this.clearField(this.$refs["input-email"]);
          this.clearField(this.$refs["textarea-message"]);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // Вспомогательная функция - Проверяет поля на заполненность, принимает поле
    ,validField(field){
      if(!field.value){
        // Если поле пустое то добавляем ему класс для визуализации
        field.classList.add('field-empty');
        const messageBlock = this.$refs.alertMessage;
        // Если поле пустое то показываем блок с ошибкой
        if(messageBlock.classList.contains("page__hidden")){
          messageBlock.classList.remove("page__hidden");
        }

      }else {
        // Если поле не пустое, то проверяем есть ли у него класс пустого поля и если есть, то удаляем его
        if(field.classList.contains('field-empty')){
          field.classList.remove('field-empty');
        }
      }
    }
    //Основная функция валидации, вызываеться по событию клика на submit
    ,validEmptyFields() {
      // Получаем значения из плей в props
      this.name = this.$refs["input-name"].value;
      this.email = this.$refs["input-email"].value;
      this.message = this.$refs["textarea-message"].value;
      // Если все поля заполнены
      if (this.name && this.email && this.message) {
        // Фомируем тело запроса
        const data = {
          name: this.name
          , email: this.email
          , message: this.message
        };
        //Проверяем не был ли до этого показан блок с ошибкой формы, если да, то убираем его
        if(!this.$refs.alertMessage.classList.contains("page__hidden")){
          this.$refs.alertMessage.classList.add("page__hidden");
        }
        // Отправляем запрос
        this.sendXHR('/testURL', data, 'post');
      } else {
        // Проверяем какие поля не были заполнены
        this.validField(this.$refs["input-name"]);
        this.validField(this.$refs["input-email"]);
        this.validField(this.$refs["textarea-message"]);
      }
    }
  }
});