$(window).scroll(function () {
  let imgLogo = document.getElementById('logo')
  
  let menu = document.getElementsByClassName('menu')
  

  if( $(window).width() > 800){

    if ($(this).scrollTop() > 190 ){
      $('.form-top').addClass('changed')
    
      $('.navbar-fixed').css('background-color', '#6eade7')
      $('.phone').css('display', 'none')
      $('.btn').css('background-color', '#ffb43b')
      
      $('#refe').css('margin-top', '15px!important')
      $('#refe').css('background', 'rgba(0,0,0,.3)')
      $('#refe').css('border', 'none')

      $('.filtro1').css('border', 'none')
      $('.filtro2').css('border', 'none')

      imgLogo.src = 'images/logo-branco2.png'
      imgLogo.style.width = '10vh'
      
    } else {

          $('.navbar-fixed').css('background-color', 'transparent') 
        
          $('.form-top').removeClass('changed')
          $('.phone').css('display', 'block')

          $('.menu').css('margin-right', '0px')
          $('.btn').css('background-color', '#6eade7')

          $('.refImovel').css('height', '500px!important')

          $('#refe').css('margin-top', '15px!important')
          $('#refe').css('border', '1px solid #fff')
              
          imgLogo.src = 'images/logo-branco.png'
          imgLogo.style.width = '28vh'
    };

  }else{
    
    
    
  }
})

let cont = 1

function addClass() {
  let btn = document.querySelector('#refe')

  let elementFil1 = document.querySelector('.filtro1')
  let elementFil2 = document.querySelector('.filtro2')
  let elementFil3 = document.querySelector('.filtro3')
  let elementBus =  document.querySelector('#busca')
  let elementRef = document.getElementById('refImovel')

  ++cont

  if (cont % 2 !== 0) {

    elementFil1.classList.remove('hidden')
    elementFil2.classList.remove('hidden')
    elementFil3.classList.remove('hidden')
     elementBus.classList.remove('hidden')
        elementRef.classList.add('hidden')

    btn.innerText = 'Busca por referência'
  } else {

    elementFil1.classList.add('hidden')
    elementFil2.classList.add('hidden')
     elementBus.classList.add('hidden')
  elementRef.classList.remove('hidden')

    btn.innerText = 'Busca por Filtro'

    cont = 0
  }
}


function menuHid() {
  ++cont

  if (cont % 2 !== 0) {
    $('.menu-side').removeClass('menu-show')
  } else {
    $('.menu-side').addClass('menu-show')
    cont = 0
  }

}
