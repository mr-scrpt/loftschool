window.addEventListener('DOMContentLoaded', (e)=>{
  const
    parallax = document.querySelector('.parallax__animation'),
    layers = parallax.children;

  function moveLayerDependensOnScroll(wScroll) {
    Array.from(layers).forEach(layer =>{
      const divider = layer.dataset.speed;
      const strafe = wScroll * divider / 6;

      layer.style.transform = `translateY(-${strafe}%)`;
    })
  }

  window.addEventListener("scroll",e=>{
    const wScroll = window.pageYOffset;
    moveLayerDependensOnScroll(wScroll);
  })

});
