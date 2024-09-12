$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });


    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rule: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por Favor, Insira seu nome'
        }
    })
});

