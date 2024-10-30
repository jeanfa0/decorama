document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para agregar productos al carrito
    const agregarAlCarrito = (button) => {
        const nombre = button.dataset.productName; // Obtiene el nombre del atributo data
        const precio = parseFloat(button.dataset.productPrice); // Obtiene el precio del atributo data

        // Verifica que el precio sea un número válido
        if (!isNaN(precio) && nombre) {
            carrito.push({ nombre, precio });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito.');
        } else {
            console.error('Error: Nombre o precio no válidos');
        }
    };

    // Asigna el evento a cada botón de agregar al carrito
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            agregarAlCarrito(e.currentTarget); // Usa e.currentTarget para obtener el botón
        });
    });

    // Configuración del observador de intersección
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => observer.observe(producto));
});
