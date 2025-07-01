const url = 'http://localhost:3000/productos';
const contenedor = document.getElementById('productos');
const form = document.getElementById('formAdd');
const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');

// Leer productos
function cargarProductos() {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      contenedor.innerHTML = '';
      data.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
          <span><strong>${producto.nombre}</strong></span>
          <span>$${producto.precio}</span>
          <button onclick="eliminarProducto(${producto.id})">Delete</button>
          <button onclick="editarProducto(${producto.id}, '${producto.nombre}', ${producto.precio})">Edit</button>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(error => console.error("erroror al cargar productos", error));
}

// Crear producto
form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = nombreInput.value;
  const precio = parseFloat(precioInput.value);

  if (!nombre || isNaN(precio)) return alert("Datos inválidos");

  const nuevoProducto = { nombre, precio };

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoProducto)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarProductos();
    })
    .catch(error => console.error("erroror al agregar producto", error));
});

// Eliminar producto
function eliminarProducto(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarProductos())
    .catch(error => console.error("erroror al eliminar producto", error));
}

// Editar producto (PUT)
function editarProducto(id, nombre, precio) {
  const nuevoNombre = prompt("Nuevo nombre:", nombre);
  const nuevoPrecio = parseFloat(prompt("Nuevo precio:", precio));

  if (!nuevoNombre || isNaN(nuevoPrecio)) return alert("Datos inválidos");

  const actualizado = { nombre: nuevoNombre, precio: nuevoPrecio };

  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(actualizado)
  })
    .then(() => cargarProductos())
    .catch(error => console.error("erroror al actualizar producto", error));
}

// Inicializar
cargarProductos();
