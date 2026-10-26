const { chemicalEquationBalancer } = require('./balanceador');
const { run } = require('./ajudaIA')

inputEquacao = document.getElementById("inputEquacao").value; // placeholder do input da equacao (verificar se o id do input é "inputEquacao")
resultadoEquacao = document.getElementById("resultadoEquacao"); // placeholder do resultado da equacao (verificar se o id do input é "resultadoEquacao")
buttonAjudaIA = document.getElementById("buttonAjudaIA"); // placeholder do botão de ajuda da IA (verificar se o id do input é "buttonAjudaIA")




// formato da equação: H2 + O2 = H2O ou H2 + O2 -> H2O + H2O
let inputEquacao =`${equacao}`;
const resultado = chemicalEquationBalancer(inputEquacao);

resultadoEquacao.textContent = `Equação balanceada: ${resultado.text}`;// exibe o resultado no placeholder do resultado da equacao

