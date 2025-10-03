function ejercicio3() {
const persona = {
    nombre: "Ismael",
    edad: 20,
    hijos: false,
    gustos: ["musica", "league of legends"],
    trabajo :{
        nombre: "Batchline Control",
        tiempo: "3 meses"
    }
}

console.log(persona)
console.table(persona)
document.getElementById("comprueba").innerText = "Comprueba la terminal";
}

ejercicio3();