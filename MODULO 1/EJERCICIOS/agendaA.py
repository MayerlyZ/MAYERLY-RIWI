contactos = []

def agrega_contacto(nombre, telefono, estado_civil, genero):
    contacto = {
        "nombre": nombre,
        "telefono": telefono,
        "estado civil": estado_civil,
        "genero": genero
    }
    contactos.append(contacto)

def buscar_contacto(nombre, telefono=None):
    for contacto in contactos:
        if contacto["nombre"] == nombre or contacto["telefono"] == telefono:
            return contacto
    return None

def eliminar_contacto(nombre):
    for contacto in contactos:
        if contacto["nombre"] == nombre:
            contactos.remove(contacto)
            return True
    return False

def modificar_contacto(nombre, nuevo_telefono=None, nuevo_estado_civil=None, nuevo_genero=None):
    contacto = buscar_contacto(nombre)
    if contacto:
        if nuevo_telefono:
            contacto["telefono"] = nuevo_telefono
        if nuevo_genero:
            contacto["genero"] = nuevo_genero
        if nuevo_estado_civil:
            contacto["estado civil"] = nuevo_estado_civil
        return True
    return False

def mostrar_contactos():
    if not contactos:
        print("No hay contactos registrados.")
    else:
        for contacto in contactos:
            print(f"\n| Nombre: {contacto['nombre']}| Telefono: {contacto['telefono']}| Estado civil: {contacto['estado civil']}| Genero: {contacto['genero']}")

def menu():
    print("Bienvenido a la agenda de contactos")
    print("1. Agregar contacto")
    print("2. Buscar contacto")
    print("3. Eliminar contacto")
    print("4. Modificar contacto")
    print("5. Mostrar contactos")
    print("6. Salir del programa")

while True:
    menu()
    opcion = input("Ingrese la opción deseada: ")
    match opcion:
        case "1":
            nombre = input("Ingrese el nombre del contacto: ")
            telefono = input("Ingrese el telefono del contacto: ")
            genero = input("Ingrese el genero del contacto: ")
            estado_civil = input("Ingrese el estado civil del contacto: ")
            agrega_contacto(nombre, telefono, genero, estado_civil)
        case "2":
            nombre = input("Ingrese el nombre o el telefono del contacto a buscar: ")
            contacto = buscar_contacto(nombre,telefono)
            if contacto:
                print(f"\n| Nombre: {contacto['nombre']}| Telefono: {contacto['telefono']}| Estado civil: {contacto['estado civil']}| Genero: {contacto['genero']}")
            else:
                print("Contacto no encontrado.")
        case "3":
            nombre = input("Ingrese el nombre del contacto a eliminar: ")
            if eliminar_contacto(nombre):
                print(f"Contacto {nombre} eliminado con éxito.")
            else:
                print("Contacto no encontrado.")
        case "4":
            nombre = input("Ingrese el nombre del contacto a modificar: ")
            nuevo_telefono = input("Ingrese el nuevo telefono (dejar vacío para no modificar): ")
            estado_civil = input("Ingrese el nuevo estado civil (dejar vacío para no modificar): ")
            nuevo_genero = input("Ingrese el nuevo genero (dejar vacío para no modificar): ")
            if modificar_contacto(nombre, nuevo_telefono, estado_civil, nuevo_genero):
                print(f"Contacto {nombre} modificado con éxito.")
            else:
                print("Contacto no encontrado.")
        case "5":
            mostrar_contactos()
        case "6":
            print("Saliendo del programa.")
            break
        case _:
            print("Opción no válida. Por favor, elija una opción del menú.")