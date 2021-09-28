var resultado;
var numeroSecreto;
var count = 5;

function Chutar() {
  count = count - 1;
  numeroSecreto = parseInt(Math.random() * 11);

  if (count >= 1) {
    var chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
      mensagem = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
      mensagem =
        "Número inválido. Entre com um número de 0 a 10! Restam " +
        count +
        " tentativas.";
    } else {
      mensagem =
        "Você errou! O número correto era " +
        numeroSecreto +
        ". Restam " +
        count +
        " tentativas.";
    }
    var resposta = document.getElementById("resultado");
    resposta.innerHTML = mensagem;
  } else {
    mensagem = "Tentativas esgotadas";
    var resposta = document.getElementById("resultado");
    resposta.innerHTML = mensagem;
  }
}