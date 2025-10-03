function ejercicio2() {
var array100 = [];

for (var i = 1; i<= 100; i++){
    array100.push(i);
}

var resultado = array100.filter(numero => numero >= 10 && numero <= 20)

console.log(resultado)
console.table(resultado)
document.getElementById("comprueba").innerText = "Comprueba la terminal";
}

ejercicio2();