function ejercicio1() {
  let numero = 1;
  let string = "Hola adios";

  let verdadero = true;
  let falso = false;
  let arrayprueba = ["Prueba1", "Prueba2"];

  console.log("Numero: ", typeof(numero), numero);
  console.info("Cadena:", typeof(string), string);
  console.error("Boolean true:", typeof(verdadero), verdadero);
  console.debug("Boolean false:", typeof(falso), falso);
  console.warn("Array:", typeof(arrayprueba), arrayprueba);
  document.getElementById("comprueba").innerText = "Comprueba la consola del navegador";
}

ejercicio1();
