import Vue from 'vue';

new Vue({
  template: "#comments-form-tpl"
  ,el: '#comments-form'
  ,data(){
    return{
      value: []
    }
  }
  ,props:{
    validField: String // Строка с именами полей, которые не прошли валидацию и будут выведены в сообщении
  }
  ,mounted(){
    this.$refs.alertMessage.classList.add('page__hidden'); // пярчим блок который выводит ошибки, покзываем только в том случае если есть незаполненные поля
  }
  ,methods:{
    // Вспомагательный метод, для получения из формы полей для валидации, принимет форму, в которой нужно произвести валидацию
    getFormValues(form){
      return Array.from(form).filter(item=>{
        if (item.tagName === "INPUT" || item.tagName === "TEXTAREA"){
          return item;
        }
      });
    }
    // Вспомагательный метод, получает массив полей, которые были пустыми при отправке формы и выводит их в блок для отображения ошибок, так же принемает сам блок, для того, что бы убрать css класс который его скрывает
    ,alertMessageForm(elems, block){
      block.classList.remove('page__hidden');
      this.validField = elems.join(',');

    }
    // Основной метод, принимает узел формы для валидации и проверяет ее и отправляет запрос на сервер при помощи вспомогательных методов
    ,checkForm(form){
      const elems = this.getFormValues(form);
      let emptyValue = [];
      elems.map(elem=>{
        const value = elem.value;
        if(!value){
          emptyValue.push(elem.placeholder);
        }
      });
      console.log(emptyValue);
      this.alertMessageForm(emptyValue, this.$refs.alertMessage);
    }

  }
});