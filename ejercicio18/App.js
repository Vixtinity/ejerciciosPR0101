/**
 * Encuentra la palabra más larga dentro de una cadena de texto (frase).
 * La función usa split() para separar las palabras y un bucle for para la comparación.
 * * @param {string} frase - La cadena de texto ingresada por el usuario.
 * @returns {string} La palabra más larga encontrada en la frase.
 */
function encontrarPalabraMasLarga(frase) {
    if (typeof frase !== 'string' || frase.trim() === "") {
        return "Error: Por favor, ingrese una frase válida.";
    }

    // 1. Usar split() para dividir la frase en un array de palabras.
    // Usamos un espacio como delimitador.
    const palabras = frase.split(' ');

    let palabraMasLarga = "";

    // 2. Recorrer el array con un bucle (for...of es conciso y claro).
    for (const palabra of palabras) {
        // Limpiamos la palabra de posibles signos de puntuación (comas, puntos, etc.)
        // La expresión regular /\W/g elimina todos los caracteres no alfanuméricos.
        const palabraLimpia = palabra.replace(/[\W_]/g, '');

        // 3. Comparar la longitud de la palabra limpia con la longitud actual de la palabra más larga.
        if (palabraLimpia.length > palabraMasLarga.length) {
            palabraMasLarga = palabraLimpia;
        }
    }

    return palabraMasLarga;
}

// --- Ejemplos de uso ---
const frase1 = "El programador senior busca la solución más eficiente y elegante.";
const frase2 = "JavaScript es fundamental para el desarrollo frontend y backend.";
const frase3 = "Rápido"; 

console.log(`Frase: "${frase1}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase1)}"`);
// Resultado: "eficiente"

console.log(`Frase: "${frase2}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase2)}"`);
// Resultado: "fundamental"

console.log(`Frase: "${frase3}" -> Palabra más larga: "${encontrarPalabraMasLarga(frase3)}"`);
// Resultado: "Rápido"