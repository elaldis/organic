let currentIndex = 0; // Índice de la imagen actual
const items = document.querySelectorAll('.carousel-item'); // Selecciona todos los items del carrusel

// Función para mostrar la imagen actual
function showCurrentImage() {
    // Oculta todas las imágenes
    items.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Función para ir a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % items.length; // Aumenta el índice y resetea al inicio si es necesario
    showCurrentImage(); // Muestra la imagen actual
}

// Función para ir a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Disminuye el índice y resetea al final si es necesario
    showCurrentImage(); // Muestra la imagen actual
}

// Inicializa el carrusel mostrando la primera imagen
showCurrentImage();

// Crea los botones de navegación
// const nextButton = document.createElement('button');
// nextButton.textContent = 'Siguiente';
// nextButton.onclick = nextImage;
// nextButton.style.margin = '10px'; // Añade un margen para un mejor espaciado
// document.body.appendChild(nextButton); // Añade el botón siguiente al cuerpo

// const prevButton = document.createElement('button');
// prevButton.textContent = 'Anterior';
// prevButton.onclick = prevImage;
// prevButton.style.margin = '10px'; // Añade un margen para un mejor espaciado
// document.body.appendChild(prevButton); // Añade el botón anterior al cuerpo

// Avance automático cada 3 segundos
setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos
