/**
 * Calcula el promedio (media aritmética) de un array de números.
 * Utiliza Array.prototype.reduce() para sumar los elementos.
 * * * @param {number[]} numeros - El array de números.
 * @returns {number | null} El promedio del array o null si el array está vacío o no es un array.
 */
function calcularPromedio(numeros) {
    // Verificación de robustez: Asegurarse de que la entrada sea un array de números válido y no esté vacío.
    if (!Array.isArray(numeros) || numeros.length === 0) {
        console.error("Error: Se requiere un array de números no vacío para calcular el promedio.");
        return null;
    }

    // 1. Usar reduce() para sumar todos los números del array.
    // 'acumulador' (acc) es la suma que se va construyendo.
    // 'valorActual' (curr) es el elemento actual del array.
    // 0 es el valor inicial del acumulador.
    const sumaTotal = numeros.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    }, 0);

    // 2. Dividir la suma total entre la longitud del array.
    const promedio = sumaTotal / numeros.length;
    
    // Retornamos el resultado con dos decimales para mayor claridad.
    return parseFloat(promedio.toFixed(2));
}

// --- Ejemplos de uso ---
const notas = [75, 80, 92, 88, 95];
const salarios = [50000, 65000, 45000, 70000];

console.log(`Array de notas: [${notas.join(', ')}]`);
console.log(`El promedio de notas es: ${calcularPromedio(notas)}`); // 86.00

console.log(`\nArray de salarios: [${salarios.join(', ')}]`);
console.log(`El salario promedio es: ${calcularPromedio(salarios)}`); // 57500.00