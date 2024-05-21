function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);
//para caso alguem use a função de maneira errada, receber tal aviso
   if (elemento && elemento.localName === 'audio') {
    //antes estava, se elemento !=null. mas nao precisa por isso, o if eh inteligente o bastante para verificar "Se o elemento existe (que ele nao seja nulo, sem valor) e o localName do elemento for audio, ..."
       elemento.play();
    }
    else {
    console.log('Elemento ou não encontrado ou seletor inválido');
    }   
}

 const listadeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador]
    const instrumento = tecla.classList[1]; // Obtém a segunda classe do elemento tecla, que corresponde ao nome do instrumento
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code ==='Enter') {
        //.code = ele detecta qual tecla está sendo pressionada. no caso, nomeamos como evento, mas poderiamos colocar qualquer nome. Usamos 3 espaços, por ser mais "seguro". o || = disjunção, ou seja, "OU". ou um ou o outro. se a tecla pressionada for space OU enter, adicionar a class ativa 
        tecla.classList.add('ativa');
        //criamos uma classe pelo js. (para adicionar, remover uma classe, usamos esse classList) ent qnd a tecla estiver clicada, onkeydown, criar/add uma class, chamada de "ativa".
        }
       
        if (evento.code ==='Enter') {
            tecla.classList.add('ativa');
            //class ativa, la em css, possui toda uma config para quando a tecla for clicada, eh uma tag q eu n conhecia ate entao
        }
        
    }   

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

 }

