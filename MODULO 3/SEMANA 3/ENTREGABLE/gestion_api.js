
fetch('http://localhost:3000/productos')
.then(response => response.json())
.then(data => console.log("Productos disponibles:", data))
.catch(error => console.error("Error al obtener prodcuto", error));


//CREACION DE NUEVOS DATOS POST
const newProduct= {id: 4, nombre: "Monitor", precio:500};

fetch('http://localhost:3000/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'aplication/json'},
    body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => console.log("Productos agregado:", data))
.catch(error => console.error("Error al agregar producto", error));


//ACTUALIZACION DATOS PUT 
const updateProduct= {id: 4, nombre: "Monitor", precio:500};

fetch('http://localhost:3000/productos/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'aplication/json'},
    body: JSON.stringify(updateProduct)
})
.then(response => response.json())
.then(data => console.log("Productos actualizado:", data))
.catch(error => console.error("Error al actualizar producto", error));


//ELIMINACION DE DATOS DELETE
fetch('http://localhost:3000/productos/2', {
    method: 'DELETE',
})
.then(data => console.log("Productos eliminado:", data))
.catch(error => console.error("Error al eliminar producto", error));

//MANEJO DE ERRORES
function validarProdruct(producto){
    if (!producto.nombre || typeof producto.precio !=="number"){
        console.error("Datos del producto no validos");
        return false;
    }
    return true;
}



