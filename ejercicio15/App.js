/**
 * Función auxiliar: Verifica si un número dado es primo.
 * Un número es primo si es mayor que 1 y solo es divisible por 1 y por sí mismo.
 * Optimización: Solo comprueba divisores hasta la raíz cuadrada del número.
 * * @param {number} num - El número entero a verificar.
 * @returns {boolean} True si el número es primo, False en caso contrario.
 */
function esPrimo(num) {
    // 1. Casos base y triviales
    if (num <= 1) {
        return false;
    }
    // 2. 2 y 3 son primos
    if (num <= 3) {
        return true;
    }
    
    // 3. Los múltiplos de 2 y 3 no pueden ser primos
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    
    // 4. Bucle de optimización: Solo necesitamos verificar divisores 
    //    hasta la raíz cuadrada de 'num'. Utilizamos el patrón 6k ± 1.
    //    Si un número tiene un divisor mayor que su raíz cuadrada, 
    //    necesariamente tiene uno menor.
    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    
    // Si no se encuentra ningún divisor, es primo.
    return true;
}

// --- Función principal que usa la función esPrimo ---

/**
 * Función principal: Imprime todos los números primos entre 1 y un límite dado.
 * * @param {number} limiteMaximo - El número máximo dado por el usuario.
 */
function encontrarPrimosHasta(limiteMaximo) {
    // Aseguramos que el límite sea un número entero
    limiteMaximo = parseInt(limiteMaximo, 10);
    
    if (isNaN(limiteMaximo) || limiteMaximo < 1) {
        console.error("Por favor, introduce un número entero positivo válido.");
        return;
    }

    const primosEncontrados = [];

    // Iteramos desde 2 (el primer número primo) hasta el límite
    for (let i = 2; i <= limiteMaximo; i++) {
        if (esPrimo(i)) {
            primosEncontrados.push(i);
        }
    }

    console.log(`\nNúmeros primos entre 1 y ${limiteMaximo}:`);
    if (primosEncontrados.length > 0) {
        console.log(primosEncontrados.join(', '));
    } else {
        console.log("No se encontraron números primos en ese rango.");
    }
}

// --- Ejemplo de uso (simulando la entrada del usuario) ---

// Cambia este valor para probar diferentes límites
const numeroDelUsuario = 50; 

console.log(`Buscando primos hasta: ${numeroDelUsuario}`);

// Llamar a la función principal
encontrarPrimosHasta(numeroDelUsuario);

// --- Prueba con otro valor ---
// encontrarPrimosHasta(10);