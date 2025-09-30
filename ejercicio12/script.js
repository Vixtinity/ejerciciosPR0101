function ejercicio12() {

    let arrayNumeros = document.getElementById("numeros").value.split(',')

    let pares = arrayNumeros.filter(num => num % 2 === 0);

    document.getElementById("resultado").innerHTML = "Pares: " +  pares;

    
}
