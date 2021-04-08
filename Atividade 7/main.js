let x, y, z;

do{
    x = parseFloat(prompt("Informe o primeiro número:"));
    if (isNaN(x)){
        alert("Entrada inválida!");
    }
}while(isNaN(x))

do{
    y = parseFloat(prompt("Informe o segundo número:"));
    if (isNaN(y)){
        alert("Entrada inválida!");
    }
}while(isNaN(y))

do{
    z = parseFloat(prompt("Informe o terceiro número:"));
    if (isNaN(z)){
        alert("Entrada inválida!");
    }
}while(isNaN(z))

function maxNum (x,y,z) {
    if(x>y && x>z){
        return x;
    }if(y>x && y>z){
        return y;
    }else{
        return z;
    }
}

alert(`O maior número inserido foi ${maxNum(x,y,z)}`);