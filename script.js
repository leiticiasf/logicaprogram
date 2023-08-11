
function questao1(){
    let i = 10;
    while(i > 0){
        alert(i);
        i = i - 1;
    }
    if(i = 1){
        alert("Feliz ano novo!")
    }

}

function questao2(){
    let num = (document.getElementById("numero").value)
    let qtd = 1
    let primeiroNum = num
    for (let i = 10; qtd <= i; qtd++ ){
        num = primeiroNum * qtd
        alert(num)
    }

}

function questao3(){
    let par = 0
    let contador = 0
    let adicao = 0
    while(contador <= 50){
        if (par % 2 == 0){
            adicao = par + adicao
            par++
        }
        else{
            par++
        }
        contador++
    }
    alert(adicao)
    
}

function questao4(){
    let hihi = Number(getElementById("primo").value)
    let divisores = 0;
    for(let i = 2; i <= hihi; i++){
        if(num % i == 0){
        divisores++
        }
        break;
    }
        if(divisores == 2){
    }
    alert("é primo") 

}
