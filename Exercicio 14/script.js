var PesoPeixe = parseFloat(prompt("Digite o peso dos peixes em kg: "));
var multa = 4
var Pesolimite = 50
var excesso = PesoPeixe - Pesolimite  
var totalmulta = excesso * multa


if(PesoPeixe > 50){
    
   alert("O peso dos peixes está em excesso")
}

if(excesso > 0){

    alert("o valor da multa é: "+ totalmulta)

}else{

alert(" excesso é: " +  excesso  + " total multa é: "  +  totalmulta)


}

