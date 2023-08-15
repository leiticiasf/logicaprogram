
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
    let hihi = Number(document.getElementById("primo").value);
    let divisores = 0;

    for(let i = 2; i < hihi; i++){
        if(hihi % i == 0){
        divisores++
        break;
        }
    }
        if(divisores != 0 || hihi <=1){
            alert("Esse número não é primo!!!!")
    } else{
       alert("Este número é primo.")
    }
}

function questao5(){
    let num = Number(document.getElementById("fibbs").value)
    let cont = 2
    let seqAtual = 1
    let seqAnterior = 0
    let seqProx = 0

    while(cont < num){
        seqProx = seqAtual + seqAnterior
        seqAnterior = seqAtual
        seqAtual = seqProx

        cont++
    }
    alert(seqProx)

}
