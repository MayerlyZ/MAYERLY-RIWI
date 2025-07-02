const url = "http://localhost:3000/products";
const container = document.getElementById("products");
const form = document.getElementById("formAdd");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");

// Elementos del modal
const modal = document.getElementById("modal");
const formModal = document.getElementById("formModal");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const btnCancel = document.getElementById("btnCancel");

let productActual = null;

// Cargar productos en pantalla
function uploadProducts() {
  fetch(url)
    .then(res => res.json())
    .then(products => {
      container.innerHTML = "";

      products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
          <p><strong>${product.name}</strong></p>
          <p>price: $${product.price}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>`;

        // Botón eliminar
        div.querySelector(".delete").addEventListener("click", () => {
          fetch(`${url}/${product.id}`, {
            method: "DELETE"
          }).then(() => uploadProducts());
        });

        // Botón editar abre el modal
        div.querySelector(".edit").addEventListener("click", () => {
          showModal(product);
        });

        container.appendChild(div);
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
    uploadProducts();
  });
});

// Mostrar modal con datos del producto actual
function showModal(product) {
  productActual = product;
  modalName.value = product.name;
  modalPrice.value = product.price;
  modal.classList.remove("hidden");
}

// Cancelar edición
btnCancel.addEventListener("click", () => {
  modal.classList.add("hidden");
  productActual = null;
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

  fetch(`${url}/${productActual.id}`, {
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
      productActual = null;
      uploadProducts();
    });
});

uploadProducts();
