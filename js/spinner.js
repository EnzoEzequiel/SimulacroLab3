
// Función para mostrar el spinner
export function mostrarSpinner() {
    action(true);
    setTimeout(ocultarSpinner, 1000); 
}

// Función para ocultar el spinner
export function ocultarSpinner() {
    action();
}

function action(visible = false) {
    const display = visible ? 'flex' : 'none';
    document.getElementById('spinner').style.display = display;
}
