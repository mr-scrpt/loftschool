window.addEventListener('DOMContentLoaded', e=>{
  const
    form = document.querySelector('.form-contact')
    , row = form.querySelectorAll('.form-contact__row')
    , elems = form.querySelectorAll('.form-contact__control');

  Array.from(elems).forEach((elem, i)=>{
    elem.addEventListener('focus', e=>{
       const currentRow = row[i];
       if(!currentRow.classList.contains('form-contact__row-focus')){
         currentRow.classList.add('form-contact__row-focus');
       }
    });
    elem.addEventListener('blur', e=>{
      const currentRow = row[i];
      if(currentRow.classList.contains('form-contact__row-focus')){
        currentRow.classList.remove('form-contact__row-focus');
      }
    })
  })

});