/**
 * Filtra un array de números para devolver solo aquellos que son mayores 
 * que un valor límite específico.
 * * * @param {number[]} arrNumeros - El array de números a filtrar.
 * @param {number} valorLimite - El valor con el que se comparará cada número.
 * @returns {number[]} Un nuevo array que contiene solo los números mayores que valorLimite.
 */
function filtrarMayoresQue(arrNumeros, valorLimite) {
    // 1. Verificación básica de la entrada
    if (!Array.isArray(arrNumeros) || typeof valorLimite !== 'number') {
        console.error("Error: Se requiere un array de números y un valor numérico.");
        return [];
    }

    // 2. Usar filter() para crear el nuevo array
    const numerosFiltrados = arrNumeros.filter(numero => {
        // La función de callback debe retornar true si el elemento debe incluirse 
        // en el nuevo array, o false si debe ser omitido.
        return numero > valorLimite;
    });

    return numerosFiltrados;
}

// --- Ejemplos de uso ---
const temperaturas = [15, 22, 18, 25, 30, 10, 28];
const limite1 = 20;
const limite2 = 27;

// Filtrar mayores que 20
const temperaturasAltas = filtrarMayoresQue(temperaturas, limite1);
console.log(`Temperaturas originales: [${temperaturas.join(', ')}]`);
console.log(`Mayores que ${limite1}: [${temperaturasAltas.join(', ')}]`);
// Resultado: [22, 25, 30, 28]

console.log('---');

// Filtrar mayores que 27
const temperaturasMuyAltas = filtrarMayoresQue(temperaturas, limite2);
console.log(`Mayores que ${limite2}: [${temperaturasMuyAltas.join(', ')}]`);
// Resultado: [30, 28]