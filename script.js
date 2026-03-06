function gerarMensagem() {
      let nome = document.getElementById("nomeUsuario").value;
        
          if(nome === "") {
              document.getElementById("resultado").innerText = "Por favor, insira o nome do Player 1!";
                } else {
                    let mensagem = nome + ", você tem potencial para zerar este fliperama!";
                        document.getElementById("resultado").innerText = mensagem;
                          }
                          }
}