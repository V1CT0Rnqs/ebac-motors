$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true,
    });


    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })


    $('#telefone').mask('(00) 00000-0000');
});
