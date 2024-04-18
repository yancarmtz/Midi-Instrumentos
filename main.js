function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//SE GENERA UNA CONSTANTE CON EL MOMBRE ListaDeTeclas PARA GUARDAR EL 
//NODO DE LA LISTA DE TECLAS.
// La línea "const ListaDeTeclas = document.querySelectorAll('.tecla');" se utiliza para seleccionar todos 
// los elementos HTML que tienen la clase 'tecla' y almacenarlos en una lista.
// Esto es útil cuando se necesita realizar operaciones en varios elementos que 
// comparten la misma clase, como por ejemplo, agregar o eliminar eventos a todos 
// los elementos de la lista, o modificar su estilo en conjunto.
// En el contexto de la aula, esta línea de código se utiliza para seleccionar 
// todas las teclas de Alura Midi que tienen la clase 'tecla' y manipularlas para agregar o eliminar 
// la clase 'activa' cuando se presionan o sueltan, respectivamente. De esta manera, se logra dar 
// la retroalimentación visual al usuario cuando interactúa con las teclas.
//                                   EJEMPLO: LA class="tecla tecla_pom"> .tecla en la class es "tecla" para seleccionar 
//                                   todas las teclas.
const ListaDeTeclas = document.querySelectorAll('.tecla'); // <= NO REQUIERE . DESPUES DEL PARENTESIS )
console.log('ListaDeTeclas: ' + ListaDeTeclas);

//SE SELECCIONA CADA TECLA DE LA LISTA DE TECLAS
// EXPLICACION DEL SIGUIENTE CICLO FOR:
// 1.-La variable "contador" se inicializa en 0. Mientras el valor de "contador" sea menor que 
//    la longitud de la lista de teclas, el bucle se ejecutará. En cada iteración, "contador" se incrementa en 1.
// 2.-Se selecciona la tecla actual en la iteración y se almacena en la variable "tecla".
// 3.- Se obtiene el segundo elemento de la lista de clases de la tecla actual y se almacena en la variable 
//     "instrumento". Esto asume que el segundo elemento de la lista de clases es el identificador del instrumento asociado a la tecla.
// 4.-Se imprime en la consola el valor de "contador" y el valor de "instrumento" para cada tecla.
// 5.-Se construye el identificador del audio correspondiente al instrumento 
//    de la tecla actual utilizando el template string y se almacena en la variable "idAudio".
// 6.- Se asigna un evento "onclick" a la tecla actual. Cuando se hace clic en la tecla, se llama a la función "playSonido" 
//     pasando como argumento el identificador del audio correspondiente.
//
//En resumen, este código recorre la lista de teclas, obtiene el identificador del instrumento asociado a cada tecla, 
//imprime información en la consola y asigna un evento de clic a cada tecla para reproducir el sonido correspondiente
//al instrumento cuando se hace clic en la tecla.

//  C I C L O  F O R:
//  INICIALIZACION     CONDICION     INCREMENTO
for(let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador);
    console.log(instrumento);

    //SE SELECCIONA EL AUDIO CORRESPONDIENTE A LA TECLA
    const idAudio = `#sonido_${instrumento}`;

    //SE SELECCIONA EL AUDIO CORRESPONDIENTE A LA TECLA
    tecla.onclick = function (){
      playSonido(idAudio);
    };

   //********************************************************************************************************************************************************************************* */
   // La primera función (tecla.onkeydown = function ()) se activa cuando se presiona una tecla (evento "onkeydown"). Cuando esto sucede, se agrega la clase 'activa'
   // al botón del audio correspondiente a la tecla, lo que hace que el fondo del botón se ponga en rojo para resaltarse.
   // La segunda función (tecla.onkeyup = function ()) se activa cuando se suelta la tecla (evento "onkeyup"). En este caso, se elimina la clase 'activa' 
   // del botón del audio correspondiente a la tecla, lo que hace que el fondo del botón vuelva a su estado original.
  //  Estas funciones son importantes para dar retroalimentación visual al usuario sobre qué tecla ha presionado, resaltando la tecla en rojo mientras está presionada.

    //SE SELECCIONA EL FONDO ROJO DEL BOTON DEL
    // AUDIO CORRESPONDIENTE A LA TECLA
    tecla.onkeydown = function (evento) {
      
      if (evento.code === 'Space' || evento.code === 'Enter') {
         tecla.classList.add('activa');
      }
      console.log(evento.code == 'Space' || evento.code === 'Enter');
      
    }

    //SE DESACTVA EL FONDO ROJO DEL BOTON DEL
    // AUDIO CORRESPONDIENTE A LA TECLA
    tecla.onkeyup = function () {
      tecla.classList.remove('activa');
    }

}


