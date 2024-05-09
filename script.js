// Función para abrir popup
function openPopup(tableNumber) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');

    // Oculta todas las tablas
    hideAllTables();

    // Muestra la tabla correspondiente al botón presionado
    var tablaContainer = document.getElementById('tabla' + tableNumber);
    if (tablaContainer) {
        tablaContainer.style.display = 'block';
    }

    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Oculta el popup
function closePopup() {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');

    popup.style.display = 'none';
    overlay.style.display = 'none';

    // Oculta todas las tablas al cerrar el popup
    hideAllTables();
}

function hideAllTables() {
    var tablaContainers = document.querySelectorAll('.tabla-container');
    tablaContainers.forEach(function(tablaContainer) {
        tablaContainer.style.display = 'none';
    });
}