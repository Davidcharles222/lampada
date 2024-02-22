// ******** EXEMPLO 1 DO PROJETO ********** //
/* fazendo da maneira mais fácil */
// funções da lâmpada
let lamp1 = document.querySelector('#lamp1 img');
const ligar = document.querySelector('#ligar');
const desligar = document.querySelector('#desligar');

const ligarLampada = () => lamp1.src = "img/ligada.jpg";
const desligarLampada = () => lamp1.src = "img/desligada.jpg";

function quebrarLampada(){
    lamp1.src = "img/quebrada.jpg";
    ligar.removeEventListener('click',ligarLampada);
    desligar.removeEventListener('click',desligarLampada);
    lamp1.removeEventListener('mouseenter',ligarLampada);
    lamp1.removeEventListener('mouseout',desligarLampada); 
}

// Eventos da lampada
ligar.addEventListener('click',ligarLampada);
desligar.addEventListener('click',desligarLampada);
lamp1.addEventListener('dblclick',quebrarLampada);
lamp1.addEventListener('mouseenter',ligarLampada);
lamp1.addEventListener('mouseout',desligarLampada);


//--------------------------------------------------


// ******** EXEMPLO 2 DO PROJETO ********** //
/* fazendo da maneira mais fácil */
/*
const ligar = document.querySelector('#ligar');
const desligar = document.querySelector('#desligar');
const res = document.querySelector('#res');
const lamp1 = document.querySelector('#lamp1');
const lamp2 = document.querySelector('#lamp2');
const lamp3 = document.querySelector('#lamp3');
const resLamp = document.querySelectorAll('#res img')

let verificadorAceso = 0;
let verificadorDesligado = 0;

function ligarLampada(){
    lamp2.classList.remove('hide');
    lamp1.classList.add('hide');
    verificadorAceso = 1;
    verificadorDesligado = 0;
}

function desligarLampada(){
    lamp1.classList.remove('hide');
    lamp2.classList.add('hide');
    verificadorDesligado = 1;
    verificadorAceso = 0;
}

function lampadaQuebrada(){
    lamp2.classList.add('hide');
    lamp3.classList.remove('hide');
    verificadorAceso = 2;
    verificadorDesligado = 2;
}

// evento de click de ligar
ligar.addEventListener('click',(evt) => {
    
    if(verificadorAceso == 2){
        return;
    };

    ligarLampada();
});

// evento de desligar
desligar.addEventListener('click',(evt) => {
    
    if(verificadorDesligado == 2){
        return;
    };

    desligarLampada() ;
});


// evento de mouse move
resLamp.forEach((img) => {

    // evento de entrar
    img.addEventListener('mouseenter',(evt) => {
        if(verificadorAceso == 0){
            ligarLampada();
        }
    });

    // evento de sair
    img.addEventListener('mouseout',(evt) => {
        if(verificadorAceso == 1){
            desligarLampada();
        }
    });

    // evento de duplo clique
    img.addEventListener('dblclick',(evt) => {
        lampadaQuebrada();
    });
});
*/


