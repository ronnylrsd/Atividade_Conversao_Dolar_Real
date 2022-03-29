const buttonConfirmarTaxa = document.getElementById("confirmar");
const buttonLimpar = document.getElementById("limpar");

const taxaConversao = document.getElementById("taxaDeConversao");

const buttonConversorRD = document.getElementById("converterRealParaDolar");
const buttonConversorDR = document.getElementById("converterDolarParaReal");

const valorDolar = document.getElementById("valorDolar");
const valorReal = document.getElementById("valorReal");

const resultadoReal = document.getElementById("valorConvertidoEmReal");
const resultadoDolar = document.getElementById("valorConvertidoEmDolar");

let taxa;

buttonLimpar.disabled = true;
buttonConversorRD.disabled = true;
buttonConversorDR.disabled = true;

function confirmTaxa() {
  if (taxaConversao.value === "") {
    return alert("Informe um número para a taxa.");
  }
  taxa = taxaConversao.value;
  console.log(taxa);
  buttonConfirmarTaxa.disabled = true;
  buttonLimpar.disabled = false;
  buttonConversorDR.disabled = false;
  buttonConversorRD.disabled = false;
}

function limparTaxa() {
  taxaConversao.value = "";
  valorDolar.value = "";
  valorReal.value = "";
  resultadoReal.value = "";
  resultadoDolar.value = "";
  buttonConfirmarTaxa.disabled = false;
  buttonLimpar.disabled = true;
  buttonConversorDR.disabled = true;
  buttonConversorRD.disabled = true;
}

function conveterDR() {
  if (valorDolar.value === "") {
    return alert("Preencha o campo de dólar.");
  }
  buttonConversorDR.disabled = true;
  resultadoReal.value = (valorDolar.value * taxa).toFixed(2);
}

function converterRD() {
  if (valorReal.value === "") {
    return alert("Preencha o campo de real.");
  }
  buttonConversorRD.disabled = true;
  resultadoDolar.value = (valorReal.value / taxa).toFixed(2);
}
