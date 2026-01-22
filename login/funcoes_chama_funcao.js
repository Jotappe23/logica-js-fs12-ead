// Função para somar dois números
// function somar(n1, n2) {
//     const resultado = n1 + n2;
//     console.log(`A soma é: ${resultado}`);
// }

// somar(70, 30);

//Reescrevendo a função média ultilizando a função soma
function media(n1, n2) {
    // Quando chamo uma função dentro de outra função que estou chamando
    //precisa ter um return, que neste exemplo é o valor da soma, pois será ultilizado para
    //calcular a média. Na função soma acima adicionamos p 'return resultado'.
    const soma = somar(n1, n2);
    console.log(`A soma é: ${soma}`);

    const resultado = soma / 2;
    console.log(`A Média é: ${resultado}`);

    return resultado;
}

console.log(media(85, 52));