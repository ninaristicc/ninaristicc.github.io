const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//toggle nav
    burger.addEventListener('click',() => {
nav.classList.toggle('nav-active');
//animacija linka
navLinks.forEach((link, index) => {
    if (link.style.animation){
        link.style.animation = ''
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
    }
});
//burger animacija
burger.classList.toggle('toggle');
    });
}    

navSlide();


$(document).ready(function() {
    // document.querySelector('.burger');
    // $('.galerija')
    console.log('document ready');


    var isTouchDevice = function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers
        || navigator.maxTouchPoints; // works on IE10/11 and Surface
    };

    if (isTouchDevice()) {
        $('body').addClass('td');
    } else {
        $('body').addClass('no-td');
    }
    

    if ($('.galerija').length) {
        $('.galerija').magnificPopup({
            type:'image', 
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });
    }
    document.onkeydown = checkKey;

        function checkKey(e) {

          e = e || window.event;

          if (e.keyCode == '37') {
            if (current === 0) {
              current = sliderImages.length;
            }
            slideLeft();
          }
          else if (e.keyCode == '39') {
            if (current === sliderImages.length - 1) {
              current = -1;
            }
            slideRight();
          }
        }
    $('.myButton').on('click', function(e) {
        // e.preventDefault(); // sprecava da se forma submituje
        var name = $('#zeljeno-ime').val();
        var nameLength = name.length;
        var vrednostRadio = $(".forma input[type='radio']:not([name='Jezik']):checked").data('cena'); // prebaciti u int
        var intVrednost = parseInt(vrednostRadio, 10);

        if(nameLength == 3 && intVrednost == 100){
            nameLength = 4;
        }
        else if(nameLength == 3 && intVrednost == 150){
            nameLength = 6;
            intVrednost = 100;
        }
        else if(nameLength == 3 && intVrednost == 250){
            nameLength = 6;
            intVrednost = 150;
        }
        else if(nameLength == 3 && intVrednost == 330){
            nameLength = 12;
            intVrednost = 100;
        }
        else if(nameLength == 3 && intVrednost == 400){
            nameLength = 14;
            intVrednost = 100;
        }
        else if(nameLength == 3 && intVrednost == 500){
            nameLength = 18;
            intVrednost = 100;
        }
        else if(nameLength == 3 && intVrednost == 330){
            nameLength = 6.5;
            intVrednost = 100;
        }
        else if(nameLength == 3 && intVrednost == 600){
            nameLength = 20;
            intVrednost = 100;
        }
        else if(nameLength == 4 && intVrednost == 150){
            nameLength = 7;
            intVrednost = 100;
        }
        else if(nameLength == 4 && intVrednost == 100){
            nameLength = 5;
        }
        else if(nameLength == 4 && intVrednost == 330){
            nameLength = 13.5;
            intVrednost = 100;
        }
        else if(nameLength == 4 && intVrednost == 500){
            nameLength = 22;
            intVrednost = 100;
        }
        else if(nameLength == 4 && intVrednost == 600){
            nameLength = 26;
            intVrednost = 100;
        }
        else if(nameLength == 6 && intVrednost == 330){
            nameLength = 22;
            intVrednost = 100;
        }
        else if(nameLength == 6 && intVrednost == 400){
            nameLength = 26;
            intVrednost = 100;
        }
        else if(nameLength == 7 && intVrednost == 150){
            nameLength = 11;
            intVrednost = 100;
        }
        else if(nameLength == 7 && intVrednost == 330){
            nameLength = 13.5;
            intVrednost = 100;
        }
        else if(nameLength == 8 && intVrednost == 330){
            nameLength = 26.5;
            intVrednost = 100;
        }
        else if(nameLength == 9 && intVrednost == 330){
            nameLength = 29.5;
            intVrednost = 100;
        }
        else if(nameLength == 10 && intVrednost == 330){
            nameLength = 10;
            intVrednost = 350;
        }
        else if(nameLength == 10 && intVrednost == 330){
            nameLength = 10;
            intVrednost = 350;
        }
        else if(nameLength == 1 && intVrednost == 400 ){
            nameLength = 4;
            intVrednost = 100;
        }
        else if(nameLength == 1 && intVrednost == 500 ){
            nameLength = 5;
            intVrednost = 100;
        }
        else if(nameLength == 1 && intVrednost == 600 ){
            nameLength = 6;
            intVrednost = 100;
        }
        else if(nameLength == 1 && intVrednost <= 330) {
            $('.cena').text('Jedno slovo/broj izrađuje se u visinama od 15, 17.5 i 20cm.');
            return false;
        }    
        else if(nameLength >= 5 && intVrednost >= 500) {
            $('.cena').text('Ime ' + name + ' možda nije moguće izraditi u odabranoj visini slova. Molimo kontaktirajte nas.');
            return false;

        } else if (nameLength < 1 || nameLength == 2) {
            $('.cena').text('Molimo unesite ime.');
            return false;
        }
        
        var sum = nameLength * intVrednost;

        $('#konacna-cena').val(sum);
        $('.cena').html('Cena je:<br/>' + sum + ' din.');


        console.log($('#konacna-cena').val());
    })
});

