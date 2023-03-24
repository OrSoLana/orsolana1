$(window).on('load',function() {

    // Vide.js - video background
    $('#header').vide('./video/cover', {
        bgColor: '#1f2c25b'
    });
});

/* Подключение лоадера к сайту через скрипт */
let mask = document.querySelector('.mask'); /* обратимся ко всей маске лоадера */
/* Далее пишем событие, при котором маска будет исчезать вместе с лоадером */
window.addEventListener('load', () => {
    mask.classList.add('hide'); /* чтобы маска скрывалась + в css пропишем класс hide */
    setTimeout(() => { /* задержка лоадера */
        mask.remove(); /* полностью удалит элемент из DOM-дерева */
     }, 600); /* выставили маске transition 0.6s(600мсек) */
})