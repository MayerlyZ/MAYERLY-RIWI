
# 🛠️ Data Management Project with JavaScript

This project is a basic product management application using **pure JavaScript**, allowing you to register, classify, and display products with visual styling in the browser.

## 🚀 Main Features

- **Product registration** with name and price.
- **Validations** to prevent invalid or duplicate data.
- Automatic classification by **category** (`Clothing`, `Accessories`, `Food`, or `Others`).
- Data storage in:
  - An **object** (`productos`) for manipulation by ID.
  - A **Set** (`productoSet`) to ensure uniqueness.
  - A **Map** (`productoMap`) to associate products with categories.
- **Visual listing** of products on screen with attractive design and soft shadows.
- **Automatic tests** via console to display data from each structure (`Object`, `Set`, `Map`).
- **Visual validation** for existence by name or category.

## 📦 Technologies Used

- Basic HTML + CSS
- JavaScript
- DOM manipulation
- Use of data structures: `Object`, `Set`, `Map`

## 🧠 Implemented Functions

- `producto()`: Triggered on form submission. Validates, creates, and displays a product.  
- `detectCategoria(nombre)`: Detects and returns a product’s category based on its name.  
- `listarProductos()`: Loops through all products and displays them on screen with styles.

Additionally, control structures used include:
- `for...in` and `for...of`: To iterate over `Object`, `Set`, and `Map`.
- `console.log()`, `alert()`, `createElement()`, `appendChild()`, and DOM manipulation to show results.

## 🎨 Visual Styling

- Cards with:
  - Rounded borders
  - Translucent backgrounds with blur effect
  - Soft violet-colored shadows
- Input fields highlight their border color when focused (using `:focus` in CSS) for better UX.

## 🧪 Implemented Validations

- Price greater than 0
- Non-empty name
- No duplicate product (case-insensitive name check)

## 🗂️ Initial Data Structure

```js
{
  1: { id: 1, nombre: "Camiseta", precio: 20000 },
  2: { id: 2, nombre: "Aretes", precio: 30000 },
  3: { id: 3, nombre: "Leche", precio: 5000 }
}
```
