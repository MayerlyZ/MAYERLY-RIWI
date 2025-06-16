estudiantes = {}

def menu():
    print("Bienvenido al registro de estudiantes\n 1. Agregar nuevo estudiante\n 2. Modificar la calificacion de un estudiante" \
    "\n 3. Informacion de los estudiantes\n 4. Eliminar estudiantes\n 5. Salir del programa")

def info_estudiantes():
    if not estudiantes:
        print("No hay estudintes registrados")
    else:
        for nombre,datos in estudiantes.items():
            print(f"Nombre: {nombre}, Edad: {datos['edad']}, Calificacion: {datos['calificacion']}")

def agregar_estudiante(nombre,edad,calificacion):
    estudiantes[nombre] = {
        "edad": edad,
        "calificacion": calificacion
    }
print("Estudiante ingresado con exito")

def modificar_calificacion(nombre,nueva_calificacion):
    if nombre in estudiantes:
        estudiantes[nombre]["calificacion"] = nueva_calificacion
        print(f"Calificacion de {nombre} actualizada a {nueva_calificacion}.")
    else:
        print(f"Estudiante {nombre} no encontrado")

def eliminar_estudiante(nombre):
    if nombre in estudiantes:
        del estudiantes[nombre]
        print(f"El estudiante {nombre} fue eliminado con exito")
        return
    print(f"El estudiante {nombre} no se encuentra en la lista")

while True:
    menu()
    opcion_str = input("Ingrese la opcion deseada: ").strip()
    opcion = int(opcion_str)
    if not opcion_str.isdigit():
        print("Opcion no valida, por favor elija una opcion del menu")
        continue

    match opcion:
        case 1:
            nombre = input("Ingrese el nombre del estudiante: ")
            edad = int(input("Ingrese la edad del estudiante: "))
            calificacion = float(input("Ingrese la calificacion de " + nombre + " :" ))
            agregar_estudiante(nombre,edad,calificacion)
        case 2:
            nombre = input("Ingrese el nombre del estudiante para modificar la calificacion: ")
            nueva_calificacion = float(input("Ingrese la nueva calificacion del estudiante: "))
            modificar_calificacion(nombre,nueva_calificacion)
        case 3: 
            info_estudiantes()
        case 4:
            nombre = input("Ingrese el nombre del estudiante que desea eliminar: ")
            eliminar_estudiante(nombre)
        case 5:
            print("Saliendo del programa")
            break