function exemploWhile(){
     let num = Number(document.getElementById("entrada").value);
     let i = 0;
     while(i < num){
        alert(i);
        i ++;
     }    
}

function exemploFor(){
     let num = Number(document.getElementById("entrada").value)
     for(let i = 0; i < num; i ++){
        alert(i);       
     }
}

function primos(){
     let num = Number(document.getElementById("entrada").value);
     let qtd = 0
     let i = 1
     while(i <= num ){
        let divisores = 0;
        let c = 1;
        while(c <= i){
            if(i % c == 0){
                divisores ++;
            }
            c++
        }
        if (divisores == 2){
            qtd ++;
        }
        i++;
     }
     alert(qtd);
}

function teste(){
    let num = Number(document.getElementById("entrada").value);
    qtd = 0 
    for(let i = 1; i <= num; i++){
        let divisores = 0;
        for (let c = 1; c <= i; c++){
            if(i % c == 0){
                divisores ++;
            }
        }
        if(divisores == 2){
            qtd ++;
        }
    }
    alert(qtd);
}