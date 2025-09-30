function ejercicio13() {

    let palabras = document.getElementById("palabras").value.split(' ');

    let numeropalabras = palabras.length;

    document.getElementById("resultado").innerHTML = "Palabras: " + numeropalabras;
}
