console.log("Proyecto de gestión de datos iniciado");

// Datos iniciales
let productos = {
    1: { id: 1, nombre: "Camiseta", precio: 20000 },
    2: { id: 2, nombre: "Aretes", precio: 30000 },
    3: { id: 3, nombre: "Leche", precio: 5000 },
};

let nextId = 4;

// Set de productos únicos
const productoSet = new Set(Object.values(productos));

// Map de productos por categoría
const productoMap = new Map([
    ["Vestuario", "Camiseta"],
    ["Accesorios", "Aretes"],
    ["Alimentos", "Leche"]
]);

// Validaciones iniciales
Object.values(productos).forEach(producto => {
    if (producto.precio <= 0) {
        console.error(`¡Error! Precio inválido: ${producto.nombre}`);
    } else {
        console.log(` Producto válido: ${producto.nombre}`);
    }
});

// Función principal que se ejecuta al enviar el formulario
function producto() {
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("number");
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const display = document.getElementById("dataDisplay");

    // Validación de entrada
    if (!name || isNaN(price) || price <= 0) {
        alert("¡Error! Nombre y precio válidos requeridos.");
        return;
    }

    // Validar duplicado (nombre en objeto)
    const nombreYaExiste = Object.values(productos).some(p => p.nombre.toLowerCase() === name.toLowerCase());
    if (nombreYaExiste) {
        alert("¡Error! Ese producto ya existe.");
        return;
    }

    // Crear nuevo producto
    const newProduct = { id: nextId, nombre: name, precio: price };

    // Agregar a las estructuras
    productos[nextId] = newProduct;
    productoSet.add(newProduct);
    const categoria = detectCategoria(name);
    productoMap.set(categoria, name);

    // Mostrar en pantalla
    const card = document.createElement("div");
    card.style.margin = "10px 0";
    card.style.padding = "10px";
    card.style.borderRadius = "20px";
    card.style.background = "rgba(255,255,255,0.3)";
    card.style.backdropFilter = "blur(10px)";
    card.style.boxShadow = "0 0 10px rgba(200, 150, 255, 0.2)";
    card.innerHTML = `<strong>${name}</strong>: $${price.toFixed(2)} <br><small>Categoría: ${categoria}</small>`;
    display.appendChild(card);

    // Limpiar campos
    nameInput.value = "";
    priceInput.value = "";
    nextId++;

    // Mostrar estructuras actualizadas
    console.log("Productos (Objeto):", productos);
    console.log("Productos únicos (Set):", [...productoSet]);
    console.log("Categorías y productos (Map):", [...productoMap.entries()]);
}

// Detección de categoría (simple)
function detectCategoria(nombre) {
    const lower = nombre.toLowerCase();
    if (lower.includes("camiseta") || lower.includes("ropa")) return "Vestuario";
    if (lower.includes("arete") || lower.includes("pulsera")) return "Accesorios";
    if (lower.includes("leche") || lower.includes("pan") || lower.includes("comida")) return "Alimentos";
    return "Otros";
}

// 🧪 Pruebas automáticas al cargar
console.log(" Listado desde el objeto:");
for (const [id, producto] of Object.entries(productos)) {
    console.log(` ${id} - ${producto.nombre} ($${producto.precio})`);
}

console.log("Listado desde el Set:");
for (const producto of productoSet) {
    console.log(` ${producto.nombre} - $${producto.precio}`);
}

console.log(" Listado desde el Map:");
for (const [categoria, producto] of productoMap) {
    console.log(` ${categoria}: ${producto}`);
}

// Validación de existencia
const buscarPorNombre = "Camiseta";
if ([...productoSet].some(p => p.nombre === buscarPorNombre)) {
    console.log(` Producto '${buscarPorNombre}' encontrado en el Set`);
} else {
    console.warn(` Producto '${buscarPorNombre}' no está en el Set`);
}

const categoriaBuscar = "Vestuario";
if (productoMap.has(categoriaBuscar)) {
    console.log(` Categoría '${categoriaBuscar}' encontrada: ${productoMap.get(categoriaBuscar)}`);
} else {
    console.warn(` Categoría '${categoriaBuscar}' no encontrada`);
}
