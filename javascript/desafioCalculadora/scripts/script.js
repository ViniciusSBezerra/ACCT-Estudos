function setValue(number){

    let firstNumber = document.getElementById("result").innerHTML;

    let resultado = document.getElementById("result").innerHTML = firstNumber + number;

    return resultado
}


function clean(){
    let clean = document.getElementById("result").innerHTML = ""

    return clean
}

function deleteNumber(){

    let resultado = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = resultado.substring(0, resultado.length -1)
}


function result(){

    let resultado = document.getElementById("result").innerHTML;


    if(resultado){
        document.getElementById("result").innerHTML = eval(resultado)
    }else{
        document.getElementById("result").innerHTML = "0"
    }


    
}

