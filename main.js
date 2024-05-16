function tocaSom (idElementoAudio) {
//"quem utilizar a funcao tocaSom, irá informá-la com o id do elemento audio. vc n usa aspas, pq eh um PARAMETRO, ou seja, algo que informará a função para a função tocar o som corretamente"
    document.querySelector(idElementoAudio).play();
//vai selecionar um elemento de audio no HTML com o id especificado e dar .play, ou seja, reproduzi-lo//
}
 const listadeTeclas = document.querySelectorAll('.tecla');
//aq temos uma constante com o nome listadeTeclas, que selecionará um conjunto de elementos HTML que possuem a classe "tecla".

let contador = 0;
//temos uma variavel chamada contador com o valor zero, esta variavel sera usada para contar as repetições e compare com o numero total da nossa lista

 while (contador < listadeTeclas.length) {
//while eh enquanto. Enquanto algo for verdadeiro, ele vai executar tal ação. Neste caso, enquanto o contador for menor que o numero de botoes, ele vai realizar um evento de clique (onclick) para cada elemento da lista de teclas, e quando uma tecla eh clicada, a função "tocaSom" será chamada. ele faz um looping, ent ele começa com o zero, faz ele ir la na lista de teclas, no valor zero ou seja o primeiro botao, clicar e executar a função tocaSom, que la em cima está definida para informar a própria função com o id do elemento audio, que por sua vez vai (executar) procurar em html o id do audio definido quando voce solicitou, e dar play no audio.
  
    listadeTeclas[contador].onclick = function () {
//função anonima. função sem nome que apenas é utilizado nesse contexto, quando ela é um valor de um atributo, ou estao sendo armazenados dentro de uma referencia constante ou variável, para so ser acionada apenas quando o usuário o acionar, eh como se estamos criando uma nova função.
        tocaSom('#som_tecla_pom')
    };

    contador = contador + 1;

    console.log(contador);
 }

