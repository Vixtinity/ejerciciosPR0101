function ejercicio5() {
        var numero1 = prompt("Primer numero: ");

        numero1 = Number(numero1);

        var resultado = numero1 % 2;
        
        if(resultado == 0){
            alert("Par")
        } else {
            alert("Impar")
        }
    }