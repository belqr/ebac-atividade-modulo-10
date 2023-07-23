$(document).ready(function() {
   $('#carousel-images').slick({
      autoplay: true
   })

   $('.menu-hamburguer').click(function() {
      $('nav').slideToggle()
   })

   $('#telefone').mask('(00) 0 00000-0000')

   $('form').validate({
      rules: {
         nome: {
            required: true
         },
         email: {
            required: true,
            email: true
         },
         telefone: {
            required: true
         },
         mensagem: {
            required: true
         },
         veiculo: {
            required: false
         }
      },
      messages: {
         nome: '<p class="validate"> Por favor insira o seu nome </p>',
         telefone: '<p class="validate"> Por favor insira o seu telefone </p>',
         email: '<p class="validate"> Por favor insira o seu email </p>',
         mensagem: '<p class="validate"> Por favor insira a sua mensagem </p>'
      },
      submitHandler: function(form) {
         console.log(form)
      },
      invalidHandler: function(evento, validador) {
         let camposIncorretos = validador.numberOfInvalids();
         if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`); 
         }
      }
   })

   $('.lista-veiculos button').click(function() {
      const destino = $('#contato')
      const veiculoName = $(this).parent().find('h3').text()

      $('#veiculo-interesse').val(veiculoName)

      $('html').animate({
         scrollTop: destino.offset().top
      }, 1000)
   })
})