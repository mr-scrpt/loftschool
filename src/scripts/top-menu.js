window.addEventListener('DOMContentLoaded', (e)=>{
  const
    open = document.querySelector('.header__menu-open')
    , close = document.querySelector('.header__menu-close')
    , container = document.querySelector('.menu-top__inner');

  open.addEventListener('click', (e)=>{
    console.log('dddd');
    if(!container.classList.contains('menu-top__inner-show')){
      container.classList.add('menu-top__inner-show');
    }
  });

  close.addEventListener('click', (e)=>{
    if(container.classList.contains('menu-top__inner-show')){
      container.classList.remove('menu-top__inner-show');
    }
  })

});