$(document).ready(() => {

    $('#date').datepicker();

    

    $('#oscuro').click(() => {
        // oscuro
        if ($(':root').css('--color-principal') == '#FFFFFF') {
            $(':root').css('--color-principal', '#333333');
            $(':root').css('--color-secondary', '#cacaca');
            $(':root').css('--color-title', '#FFFFFF');
            $(':root').css('--color-subtitle', '#FFFFFF');
            $(':root').css('--color-text', '#FFFFFF');
            $('.oscuro').addClass('fa-regular fa-sun').removeClass('fa-solid fa-moon');
            $('#cambiarSpan').text('Modo Claro');
            // claro
        } else {
            $(':root').css('--color-principal', '#FFFFFF');
            $(':root').css('--color-secondary', '#77b95e');
            $(':root').css('--color-title', '#222222');
            $(':root').css('--color-subtitle', '#888');
            $(':root').css('--color-text', '#555');
            $('.oscuro').addClass('fa-solid fa-moon').removeClass('fa-regular fa-sun');
            $('#cambiarSpan').text('Modo Oscuro');

        }
    });


});