const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function countDownTimer() {
    const countDownDate = new Date('08/20/2024 18:00:00').getTime();

    //convertir a milisegundos
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        daysElement.innerText = formatNumber(Math.floor(distance / day));
        hoursElement.innerText = formatNumber(Math.floor((distance % day) / hour));
        minutesElement.innerText = formatNumber(Math.floor((distance % hour) / minute));
        secondsElement.innerText = formatNumber(Math.floor((distance % minute) / second));

        //cuando llegue la fecha estimada
        if(distance < 0) {
            document.getElementById('headline').innerText = 'Llegó nomás el día, vamos a festejar!!';
            document.getElementById('countdown').style.display = 'none';

            clearInterval(interval);
        }

    }, 1000);
}

function formatNumber (number) {
    if(number < 10){
        return '0' + number;
    }
    return number;
}

countDownTimer();


//fancybox codigo para la galeria
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

/*Boton de audio */

const sound = new Audio();
sound.src = 'assets\Abel Pintos - Sin Principio Ni Final (Official Video) (128 kbps).mp3';
