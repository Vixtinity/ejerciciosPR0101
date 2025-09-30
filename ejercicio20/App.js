/**
 * Convierte una cadena de texto a mayúsculas y luego a minúsculas,
 * mostrando ambos resultados en la consola.
 * * * @param {string} cadena - La cadena de texto a procesar.
 */
function convertirCaso(cadena) {
    // 1. Verificar si la entrada es una cadena válida
    if (typeof cadena !== 'string' || cadena.trim() === "") {
        console.error("Error: Por favor, ingrese una cadena de texto válida y no vacía.");
        return;
    }

    // 2. Conversión a mayúsculas
    const cadenaMayusculas = cadena.toUpperCase();

    // 3. Conversión a minúsculas
    // Se aplica toLowerCase() sobre la cadena original para asegurar que el resultado 
    // sea correcto, independientemente de si la cadena original tenía mayúsculas.
    const cadenaMinusculas = cadena.toLowerCase();

    // 4. Mostrar los resultados
    console.log("--- Resultados de Conversión ---");
    console.log(`Cadena Original: "${cadena}"`);
    console.log(`En Mayúsculas (toUpperCase()): "${cadenaMayusculas}"`);
    console.log(`En Minúsculas (toLowerCase()): "${cadenaMinusculas}"`);
    console.log("------------------------------");
}

// --- Ejemplos de uso ---
const texto1 = "Este Es un Texto de Prueba con Varias letras y ESPACIOS.";
const texto2 = "BACKEND Y FRONTEND";

convertirCaso(texto1);
convertirCaso(texto2);