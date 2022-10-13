import './styles.css';

/**
 * Clubs = Trebol
 * Diamonds = Diamante
 * Hearts = Corazon
 * Spades = Pica
 */


 let deck = [];
 const tipos = ['C','D','H','S'];
 const cartEsp = ['A','J','Q','K'];
 
 let puntosJugador = 0;
 let puntosComputadora = 0;
 
 // Referencias del HTML
 const btnPedir = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNJuego = document.querySelector('#btnNuevo');
 const puntosHTML = document.querySelectorAll('small');
 const divCartasJugador = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');
 const ubicNombre = document.querySelector('nombre');
 let nombre = sessionStorage.getItem("nombre");
 ubicNombre.innerText = nombre;
 
 //Función para registrar nombre del jugador
 const RegNombre = () => {
         nombre = prompt('Enter your name, human');
         sessionStorage.setItem("nombre",nombre);
         ubicNombre.innerText = nombre;
 }
 
 
 // Función para crear una nueva baraja
 const crearDeck = () => {
 
     for( let i = 2; i <= 10; i++) {
         for (let tipo of tipos) {
             deck.push(i + tipo);
         }
     }
 
     for (let tipo of tipos) {
         for (let esp of cartEsp) {
             deck.push(esp + tipo);
         }
     }
   
     deck = _.shuffle(deck);
     //console.log(deck);
     return deck;
 }
 
 
 //Función para pedir una nueva carta
 const pedirCarta = () => {
 
     if (deck.length === 0) {
         throw "There is no more cards on the deck";
     }
 
     let carta = deck.pop(deck);
     
     return carta;
 }
 
 
 // Función para asignar valor a la carta
 const valorCarta = (carta) => {
     const valor = (carta.substring(0,carta.length - 1));
 
     return ((isNaN(valor)) ?
             ((valor === 'A') ? (confirm('You got an Ace. Do you want to count it as 11? (If you cancel, its value is 1)') ? 11 : 1) 
             : 10)
             : valor * 1)
 
         // valor = parseInt(carta);
  }
    
 
 // Función para asignar valor a la carta de la CPU
 const valorCartaCPU = (carta) => {
     const valor = (carta.substring(0,carta.length - 1));
 
     return ((isNaN(valor)) ?
             ((valor === 'A') ? ((puntosComputadora<10) ? 11 : 1) 
             : 10)
             : valor * 1)
 
         // valor = parseInt(carta);
  }
    
 
   
 // Funcion para actualizar tablas de puntos
 const contarPuntos = (puntosJugador,puntosHTML) => {
     puntosHTML[0].innerText = puntosJugador;
     puntosHTML[1].innerText = puntosComputadora;
 }
  
 
 
 
 //Turno computadora
 const turnoComputadora = (puntosMinimos) => {
 do {
     const carta = pedirCarta();
 
     puntosComputadora = puntosComputadora + valorCartaCPU(carta);
     puntosHTML[1].innerText = puntosComputadora;
 
     //<img class = "carta" src="assets/cartas/grey_back.png">
     const imgCarta = document.createElement('img');
     imgCarta.src = `assets/cartas/${carta}.png`;
     imgCarta.classList.add('carta');
     divCartasComputadora.append(imgCarta); 
 
     if (puntosJugador > 21) {
         break;
     }
 
 } while ((puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );
 }
 
 
 
 
 
 
    
     // Eventos
 //Boton Pedir Carta
 btnPedir.addEventListener('click', () => {
 
     const carta = pedirCarta();
 
     puntosJugador = puntosJugador + valorCarta(carta);
     contarPuntos(puntosJugador,puntosHTML);
 
     //<img class = "carta" src="assets/cartas/grey_back.png">
     const imgCarta = document.createElement('img');
     imgCarta.src = `assets/cartas/${carta}.png`;
     imgCarta.classList.add('carta');
     divCartasJugador.append(imgCarta);
   
     if (puntosJugador > 21) {
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
         setTimeout (() => {
             alert('Greed makes man blind and foolish, and makes him an easy prey for robots. You lose!');
         },20);
     } else if (puntosJugador === 21) {
         btnPedir.disabled = true;
         setTimeout (() => {
             alert('You got a 21! It is your lucky day. End your turn');
         },20);    
     }
 })
 
 //Boton Detener
 btnDetener.addEventListener('click', () => {
     btnPedir.disabled = true;
     btnDetener.disabled = true;
     turnoComputadora(puntosJugador);
 
 setTimeout (() => {
     if (puntosComputadora > 21) {
         alert('Congratulations! You defeated the CPU, someday the androids will revenge its death');
     } else if (puntosComputadora > puntosJugador) {
         alert('Did you believe that you can defeat an artificial intelligence? Beep bop.. how innocent.');
     } else if (puntosComputadora === puntosJugador && puntosJugador != 21) {
         alert('Good try, but it is a draw, whoever has the most screws win, and you already lose it all');
     } else if (puntosComputadora === 21 && puntosJugador === 21) {
         alert('Not so fast, robots has nice days too. Draw.');
     }
 }, 30); 
 })
 
 
 
 //Boton Nuevo Juego
 btnNJuego.addEventListener('click', () => {
     location.reload();
 })
 
 
 
 crearDeck();
 
 if (ubicNombre.innerText != sessionStorage.getItem("nombre") || ubicNombre.innerText === "" || ubicNombre.innerText === "null" ) {
     RegNombre();
 }
 
