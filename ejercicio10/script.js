function ejercicio10() {
    let numeromasgrande = document.getElementById("numeromasgrande").value;

    let arraynumeros = numeromasgrande.split(',');

    let max = Math.max(...arraynumeros);

    document.getElementById("resultado").innerHTML = "Numero mas grande: " + max;
}
