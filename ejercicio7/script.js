    function ejercicio7() {
        let plalabra = document.getElementById("vocales").value;

        let vocales = "aeiouAEIOU";
        let contador = 0;

        for (let i = 0; i < plalabra.length; i++){
            if (vocales.includes(plalabra[i])){
                contador++;
            }
        }

        if (contador == 1){
            alert("Tiene una vocal.")
        } else {
            alert("Tiene " + contador + " vocales.");
        }
    }