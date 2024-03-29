let opcoes = 0;
let prato = "";
let preco_prato = 0;
let bebida = "";
let preco_bebida = 0;
let sobremesa = "";
let preco_sobremesa = 0;
let nome_cliente = "";
let endereco_cliente = "";
let preco_pedido = 0;
let texto = "";

function escolherPrato(opcaoPrato){
    const selecionado = document.querySelector(".prato .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido');
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoPrato);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon");
    check.classList.remove('escondido');
    opcoes++;

    prato = document.querySelector("."+opcaoPrato+" .nome").innerHTML;
    preco_prato = parseFloat(document.querySelector("."+opcaoPrato+" span").innerHTML.replace(",","."));

    habilitar_botao();
}

function escolherBebida(opcaoBebida){
    const selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido');
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoBebida);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon");
    check.classList.remove('escondido');
    opcoes++;

    bebida = document.querySelector("."+opcaoBebida+" .nome").innerHTML;
    preco_bebida = parseFloat(document.querySelector("."+opcaoBebida+" span").innerHTML.replace(",","."));

    habilitar_botao();
}

function escolherSobremesa(opcaoSobremesa){
    const selecionado = document.querySelector(".sobremesa .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove('selecionado');
        const check = selecionado.querySelector("ion-icon");
        check.classList.add('escondido');
        opcoes--;
    }
	
    const escolha = document.querySelector("." + opcaoSobremesa);
    escolha.classList.add('selecionado');
    const check = escolha.querySelector("ion-icon");
    check.classList.remove('escondido');
    opcoes++;

    sobremesa = document.querySelector("."+opcaoSobremesa+" .nome").innerHTML;
    preco_sobremesa = parseFloat(document.querySelector("."+opcaoSobremesa+" span").innerHTML.replace(",","."));

    habilitar_botao();
}


function habilitar_botao(){
    const selecionado = document.querySelector(".botao_confirmacao");
    
    if (opcoes===3) {
        selecionado.innerHTML="Fechar pedido";
        selecionado.disabled = false;
        selecionado.classList.add('habilitado');       
    }
}

function confirmar_itens(){
    const clique = document.querySelector(".fundo");
    clique.classList.remove("escondido");

    const opcaoprato = document.querySelector(".confirme_prato p");
    opcaoprato.innerHTML=prato;
    const valorprato = document.querySelector(".confirme_prato span");
    valorprato.innerHTML=preco_prato.toFixed(2);

    const opcaobebida = document.querySelector(".confirme_bebida p");
    opcaobebida.innerHTML=bebida;
    const valorbebida = document.querySelector(".confirme_bebida span");
    valorbebida.innerHTML=preco_bebida.toFixed(2);

    const opcaosobremesa = document.querySelector(".confirme_sobremesa p");
    opcaosobremesa.innerHTML=sobremesa;
    const valorsobremesa = document.querySelector(".confirme_sobremesa span");
    valorsobremesa.innerHTML=preco_sobremesa.toFixed(2);

    const total = document.querySelector(".total span");
    total.innerHTML="R$ " + (preco_prato + preco_sobremesa + preco_bebida).toFixed(2);
}

function pedido_confirmado(){
    nome_cliente = prompt("Qual o seu nome?");
    endereco_cliente = prompt("Qual o seu endereço?");

    preco_pedido = (preco_prato + preco_sobremesa + preco_bebida).toFixed(2);

    texto = "Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + preco_pedido + "\n\nNome: " + nome_cliente + "\nEndereço: " + endereco_cliente;
    texto = encodeURIComponent(texto);
    window.location.href="https://wa.me/5581991947182?text=" + texto;
}

function pedido_cancelado(){
    const cancelar = document.querySelector(".fundo");
    cancelar.classList.add("escondido")
}
