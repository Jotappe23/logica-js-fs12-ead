//nst n1 = 20;
//nst n2 = 30;

//console.log(n1+n2);

//nst soma = n1+n2;

//console.log(soma);

//const media = (n1+n2) / 2;

//nst media = (soma) / 2;

//nsole.log(media);

// ultilizando função
// 1-função anônima (não possui nome)
//nction () {



// 2-função com nome tem a importância de ser chamada e executada quando chamado pelo nome. Ex: somar()
//function somar() {
    //const n1 = 80;
    //const n2 = 40;

    //const resultado = n1 + n2;
    //console.log(10+80)
//}

//somar(); //chama a função

// Parâmetros e argumentos

// function somar(n1, n2) {
//     const resultado = n1 + n2;
//     console.log(resultado);
// }

// chamando a função e passando os parâmetros
// somar(80, 40);
// somar(100, 50);
// somar(80.99, 500);
// somar(802, 140);

/* criar uma função para calcular a média e exibir no console desta forma
a soma é: 45
a media é: 25

*/

function media2(n1, n2) {
    const soma = n1 + n2;
    console.log('a soma é=', soma);

    const media =  soma / 2;
    console.log('a média é=', media);
}

media2(85, 52);

// concatenar strings no console.
// 1- ultilizando virgula(texto, seorado de outro texto ou varável por virgula)
console.log('a média é:', media);
console.log('a média é:', 'não temos média');

// 2-Ultilizando o sinal de +
console.log('A média é: ' + média);
console.log('A média é ' + 'Não temos média');

// 3-Interpolação de string, dentro das chaves é javascript, posso colocar uma variável, uma
//  condição (algo que retorne true ou flase) função...
console.log('A média é: ${media}');
console.log('A média é: ${1>2}');
console.log('A média é: ${media2(85, 52)}');
