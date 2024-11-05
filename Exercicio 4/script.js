var nota1 = parseFloat(prompt("Digite a primeira nota: ")); 
var nota2 = parseFloat(prompt("Digite a segunda nota: ")) ;
var nota3 = parseFloat(prompt("Digite a terceira nota: ")) ;
var nota4 = parseFloat(prompt("Digite a quarta nota: ")) ;
var media;

media = nota1 + nota2 + nota3 + nota4 / 4 ;

console.log("A media das notas é: ", media);
alert("A media das notas é: " + media)