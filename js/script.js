$(document).ready(() => {

    $('#date').datepicker();

    $('#acordeon').tabs();

    $('#oscuro').click(() => {
        sessionStorage.setItem('modoNoche', !$(':root').hasClass('modo_oscuro'));
        modoOscuro();
    });
    modoOscuro();
    

    $('#volverArriba').on('click', function () {
        $('.content__page').animate({
            scrollTop: 0
        }, 600);
        return false;
    });




    $('.layout').hide(400, () => {
        $('.layout').show(400);
    });

    $('.page__name').slideUp(600, () => {
        $('.page__name').slideDown(600);
    });

    $('.certificates__certificate').click(() => {
        $('#popup').dialog();
    });

    $('.user-infon__ame').slideUp(600, () => {
        $('.user-info__name').slideDown(600);
    });

    $('.user-info__job').slideUp(600, () => {
        $('.user-info__job').slideDown(600);
    });
});
let modoOscuro = () => {
        if (!sessionStorage.getItem('modoNoche') || sessionStorage.getItem('modoNoche') === 'false') {
            $(':root').removeClass('modo_oscuro');
            $('#oscuro i').addClass('fa-moon').removeClass('fa-sun');
            $('#oscuro span').text('Modo Oscuro');
        } else {
            $(':root').addClass('modo_oscuro');
            $('#oscuro i').addClass('fa-sun').removeClass('fa-moon');
            $('#oscuro span').text('Modo Claro');
        }
    }