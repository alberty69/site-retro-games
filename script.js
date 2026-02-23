function gerarMensagem() {

    let nome = document.getElementById("nomeUsuario").value;

    if(nome === "") {
        document.getElementById("resultado").innerText = 
        "Por favor, digite seu nome!";
    } else {

        let mensagem = nome + 
        ", relembre e jogue os jogos que você tanto amou";

        document.getElementById("resultado").innerText = mensagem;
    }
}
