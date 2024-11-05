var h = parseFloat(prompt("Digite sua altura: "));
var sexo = prompt("Digite seu sexo M/F: ");
var pesoideal;
var M;

if(sexo == "M"){
    pesoideal = (72.7 * h) - 58;
    alert("Seu peso ideal é: " + pesoideal);
    
}else{
    pesoideal = (62.1 * h) - 44.7;
    alert("Seu peso ideal é: " + pesoideal);
    
}


var peso = parseFloat(prompt("Digite seu peso atual: "));


if(peso < pesoideal){

    alert("Você esta abaixo do peso ideal ")

}else if (peso > pesoideal){

    alert("Você esta acima do peso ideal ")

}else{

    alert("Você está no peso ideal ")



}






