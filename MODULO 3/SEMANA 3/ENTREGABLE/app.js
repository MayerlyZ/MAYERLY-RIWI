const url = "http://localhost:3000/productos";
const contenedor = document.getElementById("products");
const form = document.getElementById("formAdd");
const nameInput = document.getElementById("name");
const precioInput = document.getElementById("price");

// Elementos del modal
const modal = document.getElementById("modal");
const formModal = document.getElementById("formModal");
const modalname = document.getElementById("modalname");
const modalprice = document.getElementById("modalprice");
const btnCancelar = document.getElementById("btnCancelar");

let productoActual = null;

// Cargar productos en pantalla
function cargarProductos() {
  fetch(url)
    .then(res => res.json())
    .then(productos => {
      contenedor.innerHTML = "";

      productos.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
          <p><strong>${product.name}</strong></p>
          <p>price: $${product.price}</p>
          <button class="editar">Editar</button>
          <button class="eliminar">Eliminar</button>
        `;

        // Botón eliminar
        div.querySelector(".eliminar").addEventListener("click", () => {
          fetch(`${url}/${producto.id}`, {
            method: "DELETE"
          }).then(() => cargarProductos());
        });

        // Botón editar abre el modal
        div.querySelector(".editar").addEventListener("click", () => {
          mostrarModal(producto);
        });

        contenedor.appendChild(div);
      });
    });
}

// Agregar new producto
form.addEventListener("submit", e => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(price)) {
    alert("Datos inválidos");
    return;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  }).then(() => {
    form.reset();
    cargarProductos();
  });
});

// Mostrar modal con datos del producto actual
function mostrarModal(producto) {
  productoActual = producto;
  modalname.value = producto.name;
  modalprice.value = producto.price;
  modal.classList.remove("hidden");
}

// Cancelar edición
btnCancelar.addEventListener("click", () => {
  modal.classList.add("hidden");
  productoActual = null;
});

// Guardar cambios desde el modal
formModal.addEventListener("submit", e => {
  e.preventDefault();

  const newName = modalName.value.trim();
  const newPrice = parseFloat(modalPrice.value);

  if (!newName || isNaN(newPrice)) {
    alert("Datos inválidos");
    return;
  }

  fetch(`${url}/${productoActual.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: newName,
      price: newPrice
    })
  })
    .then(res => res.json())
    .then(() => {
      modal.classList.add("hidden");
      productoActual = null;
      cargarProductos();
    });
});

cargarProductos();
