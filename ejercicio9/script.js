function ejercicio9() {
    let cadena = document.getElementById("cadena").value;

    //con split hago un array con cada letra, con reverse les doy la vuelta, y con join las uno.
    let invertida = cadena.split('').reverse().join('');

    document.getElementById("resultado").innerHTML = "Cadena invertida: " + invertida;
}
