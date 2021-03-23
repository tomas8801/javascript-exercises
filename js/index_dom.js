import countdown from "./cuenta-regresiva.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {moveBall, shortcuts} from "./teclado.js";
import scrollTopButton from "./boton-scroll.js";
import responsiveMedia from "./objeto_responsive.js";
import userDeviceInfo from "./deteccion-dispositivos.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

hamburgerMenu('.panel-btn', '.panel', '.menu a');
digitalClock('#reloj', '#iniciar-reloj', '#detener-reloj');
alarm('assets/alarma.mp3', '#iniciar-alarma', '#detener-alarma');
countdown('countdown', 'Jun 11, 2021', 'Feliz cumple para mi');
scrollTopButton('.scroll-top-btn');
responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://www.youtube.com/watch?v=gcHJsipCqAA&t=65s" target="_blank">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/gcHJsipCqAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
responsiveMedia('gmaps', '(min-width: 1024px)', `<a href="https://goo.gl/maps/ViARdnkpUZHPuwj86" target="_blank">Ir al mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.4000958075308!2d-60.67673858510946!3d-32.91402597756706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654a08896e0f7%3A0x4ee98cd74ab24d07!2sGigante%20de%20Arroyito!5e0!3m2!1ses!2sar!4v1616425268249!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
userDeviceInfo('user-device')
});


d.addEventListener('keydown', (e) => {

shortcuts(e);
moveBall(e, '.ball','.stage');
})

