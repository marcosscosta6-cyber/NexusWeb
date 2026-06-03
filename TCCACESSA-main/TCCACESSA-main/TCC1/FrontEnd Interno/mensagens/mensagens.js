function abrirChat(nome) {

    document.getElementById("chatVazio").style.display = "none";

    document.getElementById("chatContent").style.display = "flex";

    document.getElementById("nomeUsuario").innerText = nome;
}

function abrirChat(nome) {

    document.getElementById("chatVazio").style.display = "none";
    document.getElementById("chatContent").style.display = "flex";

    document.getElementById("nomeUsuario").innerText = nome;
}

function voltarMensagens() {

    document.getElementById("chatContent").style.display = "none";
    document.getElementById("chatVazio").style.display = "flex";
}