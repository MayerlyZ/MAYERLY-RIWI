console.log("Welcome to the interactive order management system");

// Validación de nombre
let name;

do {
    name = prompt("Please, enter your full name :");

    if (name === null || name.trim() === "") { //Para que no acepte espacios en blanco como entrada
        alert("Error: The name field cannot be empty.");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {  //Para que solo acepte letras y espacios
        alert("Error: The name must only contain letters and spaces. No numbers or special characters allowed.");
    } else {
    name = name.trim().toUpperCase(); // Convertir a mayúsculas y eliminar espacios al inicio y al final
        console.log("Name entered:", name);
        break;
    }

    console.error("Invalid name input.");

} while (true);

// Validación de edad
let age = parseInt(prompt("Please enter your age:"));

if (isNaN(age)) { // Verifica si la entrada es un número
    console.error("Error: Please enter a valid age in numbers.");
} else if (age < 18) {
    alert('Hi ' + name + ', unfortunately you cannot make inquiries because you are a minor. Keep dreaming big! You have a bright future waiting for you!');
} else {
    alert('Hi ' + name + ', you can ask questions because you are of legal age. Go ahead, everything you need is inside!');
}
