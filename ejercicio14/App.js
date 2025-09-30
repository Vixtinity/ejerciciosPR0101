/**
 * Verifica si una cadena de texto (palabra o frase) es un palíndromo.
 * La función ignora espacios, puntuación y es insensible a mayúsculas/minúsculas.
 * * @param {string} texto - La cadena de texto a verificar.
 * @returns {boolean} True si es un palíndromo, False en caso contrario.
 */
function esPalindromo(texto) {
    // 1. Normalizar: convertir a minúsculas y eliminar caracteres no alfanuméricos (incluyendo espacios).
    // Usamos una expresión regular para limpiar la cadena.
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');

    // 2. Invertir la cadena.
    // split('') convierte el string en un array de caracteres.
    // reverse() invierte el orden del array.
    // join('') une los caracteres del array invertido de nuevo en un string.
    const textoInvertido = textoLimpio.split('').reverse().join('');

    // 3. Comparar la cadena limpia con la cadena invertida.
    return textoLimpio === textoInvertido;
}

// --- Ejemplos de uso para verlo por consola---
console.log(`Radar: ${esPalindromo("Radar")}`);
console.log(`reconocer: ${esPalindromo("reconocer")}`); // true (ignora espacios)
console.log(`Hola mundo: ${esPalindromo("Hola mundo")}`);
console.log(`Aibofobia: ${esPalindromo("Aibofobia")}`);
console.log(`Somos o no somos: ${esPalindromo("Somos o no somos")}`);