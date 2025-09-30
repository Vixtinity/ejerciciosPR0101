
function modificarContenidoYEstilos() {
    // === 1. Modificar el body (Elemento Existente) ===
    const bodyElement = document.body;

    // Cambiar el estilo del elemento existente (body)
    if (bodyElement) {
        bodyElement.style.backgroundColor = '#f0f4f8'; // Color de fondo suave
        bodyElement.style.padding = '20px'; // Un poco de padding
        console.log('Estilo del body modificado a color de fondo #f0f4f8.');
    } else {
        console.error('El elemento <body> no se encontró.');
        return;
    }

    // === 2. Crear y añadir un Nuevo Elemento ===
    const nuevoDiv = document.createElement('div');
    
    // Modificar el Contenido
    nuevoDiv.innerHTML = `
        <h2>¡He cambiado todo esto porque yo lo valgo!</h2>
        <p>Este contenido fue insertado y estilizado con JavaScript usando la consola.</p>
        <p>¡Abre la pestaña **Elements** en DevTools para inspeccionar y ver los cambios realizados!</p>
    `;

    // Modificar el CSS (Estilos)
    nuevoDiv.style.color = '#1e3a8a';         // Texto azul oscuro
    nuevoDiv.style.border = '2px solid #3b82f6'; // Borde azul brillante
    nuevoDiv.style.padding = '15px';
    nuevoDiv.style.marginTop = '20px';
    nuevoDiv.style.textAlign = 'center';
    nuevoDiv.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.1)';
    
    // Insertar el nuevo elemento al inicio del body
    bodyElement.prepend(nuevoDiv);

    console.log('Nuevo elemento div con contenido y estilos CSS insertado al inicio del body.');
}

// Ejecutar la función para realizar los cambios
modificarContenidoYEstilos();