// === Funciones Auxiliares para Manipulación de Cookies ===

/**
 * Lee una cookie específica por su nombre.
 * @param {string} name - El nombre de la cookie a buscar.
 * @returns {string | null} El valor de la cookie o null si no existe.
 */
function leerCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

/**
 * Crea o actualiza una cookie.
 * @param {string} name - Nombre de la cookie.
 * @param {string} value - Valor de la cookie.
 * @param {number} days - Días de caducidad.
 */
function crearCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Lax";
}

const COOKIE_PREFERENCIAS = "user_preferences";
const COOKIE_ULTIMA_VISITA = "last_visit_date";
const COOKIE_ID_SESION = "session_id_marcos";

function inicializarAplicacion() {
    const preferenciasGuardadas = leerCookie(COOKIE_PREFERENCIAS);
    const ultimaVisita = leerCookie(COOKIE_ULTIMA_VISITA);
    const statusDisplay = document.getElementById('status-display');
    const form = document.getElementById('preference-form');
    mostrarDatosCookies();
    if (preferenciasGuardadas) {
        statusDisplay.className = 'status-message status-success';
        statusDisplay.innerHTML = `
            <strong>¡Bienvenido de nuevo!</strong> Tus preferencias de cookies ya están guardadas.<br>
            Última visita registrada: <strong>${ultimaVisita || 'No registrada'}</strong>
        `;
        form.style.display = 'none';
        aplicarPreferencias(preferenciasGuardadas);
    } else {
        statusDisplay.className = 'status-message status-info';
        statusDisplay.innerHTML = '<strong>¡Primera visita!</strong> Por favor, establece tus preferencias de cookies.';
        form.style.display = 'block';
    }
    crearCookie(COOKIE_ULTIMA_VISITA, new Date().toLocaleString(), 7);
    crearCookie(COOKIE_ID_SESION, 'abc-' + Date.now(), 1);
}

function guardarPreferencias() {
    const analitica = document.getElementById('cookie-analitica').checked ? '1' : '0';
    const publicidad = document.getElementById('cookie-publicidad').checked ? '1' : '0';
    const preferencias = `T:1|A:${analitica}|P:${publicidad}`;
    crearCookie(COOKIE_PREFERENCIAS, preferencias, 30);
    alert('Preferencias guardadas. Recarga la página para ver cómo se recuerda la información.');
}

function mostrarDatosCookies() {
    const dataElement = document.getElementById('cookie-data');
    const allCookies = document.cookie;
    if (allCookies) {
        const cookieArray = allCookies.split('; ');
        let html = '<ul>';
        cookieArray.forEach(cookie => {
            const [name, value] = cookie.split('=');
            html += `<li><strong>${name}</strong>: ${decodeURIComponent(value || '')}</li>`;
        });
        html += '</ul>';
        dataElement.innerHTML = html;
    } else {
        dataElement.textContent = 'No hay cookies almacenadas para este dominio.';
    }
}

function aplicarPreferencias(prefString) {
    const prefs = prefString.split('|').map(p => p.split(':'));
    const analiticaAceptada = prefs.find(([key]) => key === 'A')?.[1] === '1';
    const publicidadAceptada = prefs.find(([key]) => key === 'P')?.[1] === '1';
    if (analiticaAceptada) {
        console.log('📈 Analíticas activadas. Insertando código de seguimiento...');
    } else {
        console.log('🚫 Analíticas denegadas. No se insertará código.');
    }
    if (publicidadAceptada) {
        document.body.style.borderTop = '5px solid orange';
        console.log('💰 Publicidad activada. Se cargan anuncios. (Se añadió un borde naranja al body)');
    } else {
        document.body.style.borderTop = 'none';
        console.log('🚫 Publicidad denegada.');
    }
}

document.addEventListener('DOMContentLoaded', inicializarAplicacion);