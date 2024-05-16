function tocaSomPom () {
    /*a nossa funcao vai armazenar o código abaixo, que vai procurar em html o botao de id som tecla pom e dar play. A função só vai funcionar, quando alguém solicitar ela. FUNCTION eh um conjunto de instruções que executa uma tarefa ou calcula um valor, por exemplo.*/
    document.querySelector('#som_tecla_pom').play();
    }
    
    document.querySelector('.tecla_pom').onclick = tocaSomPom;
    /*aq, fizemos primeiramente, o js ir la no html e identificar o botao bom, e ao clicar, ou seja, o.onlick (o '.'vc pode pensar que ele "entra" naquele elemento que voce buscou no html (atraves do document....) e executar uma ação. nesse caso, ao clicar, será executado a função TocaSomPom, que por sua vez, como definimos, selecionará o elemento som, la em html, e irá dar play. o "=" eh responsavel por fazer essa associação, por atribuir tudo oq vem do lado direito com o esquerdo. Voce nao coloca (), pq vc só está chamando a função. () eh qnd vc vai nomear/definir a função*/ 
