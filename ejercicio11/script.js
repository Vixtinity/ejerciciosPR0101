function ejercicio11() {
  let numeros = [];
    //voy a poner que genere 20 para que se note mejor, con 100 casi siempre sale 20.
  for (let i = 0; i < 20; i++) {
    let n = Math.floor(Math.random() * 20) + 1;
    numeros.push(n);
  }

  let unicos = new Set(numeros);

  document.getElementById("numerogenerados").innerText = "Números: " + numeros;
  document.getElementById("resultado").innerText = "Diferentes: " + unicos.size;
}
