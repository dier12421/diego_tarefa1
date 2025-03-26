
let monthNumber = prompt ("Digite o Número do Mẽs de aniversário (1-12)");
let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

if (monthNumber >= 1 && monthNumber <= 12) {
  alert("Mês correspondente: " + month[monthNumber - 1]);
} else {
  alert("Número inválido, insira um número de 1 a 12.");
}