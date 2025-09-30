function ejercicio8() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let min = Math.min(numero1, numero2);
    let max = Math.max(numero1, numero2);

    let numeroaletorio = Math.floor(Math.random() * (max - min + 1)) + min;
    
    document.getElementById("resultado").innerText = "Número aleatorio: " + numeroaletorio;
}
