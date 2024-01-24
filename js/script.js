$(document).ready(() => {

    $('#date').datepicker();

    

    $('#oscuro').click(() => {
        // oscuro
        if ($(':root').css('--color-principal') == '#FFFFFF') {
            $(':root').css('--color-principal', '#1a1110');
            $(':root').css('--color-secondary', '#a9a9a9');
            $(':root').css('--color-title', '#FFFFFF');
            $(':root').css('--color-subtitle', '#FFFFFF');
            $(':root').css('--color-text', '#1a1110');
            $(':root').css('--color-background', 'lightgrey');
            $('.oscuro').addClass('fa-regular fa-sun').removeClass('fa-solid fa-moon');
            $('#cambiarSpan').text('Modo Claro');
            // claro
        } else {
            $(':root').css('--color-principal', '#FFFFFF');
            $(':root').css('--color-secondary', '#77b95e');
            $(':root').css('--color-title', '#565656');
            $(':root').css('--color-subtitle', '#888');
            $(':root').css('--color-text', '#555');
            $(':root').css('--color-background', '#FFFFFF');
            $('.oscuro').addClass('fa-solid fa-moon').removeClass('fa-regular fa-sun');
            $('#cambiarSpan').text('Modo Oscuro');

        }
    });

    $('#volverArriba').on('click', function() {
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