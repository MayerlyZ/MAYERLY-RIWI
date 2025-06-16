#Ejercicio: Gestión de Contactos


contactos = {}

def agregarcontacto():
    nombre = str(input("Ingrese el nombre del contacto: ")).lower()
    telefono = int(input("Ingrese el número de teléfono: "))
    print("Contacto agregado correctamente.")
    contactos[nombre] = telefono


def listarcontactos():
    if len(contactos) == 0:
        print("No hay contactos en la lista.")
    else:
        print("Lista de contactos: \n")
        for contacto,telefono in contactos.items():
            print(f"Contacto:{contacto} Numero telefonico: {telefono}")

def buscarcontacto():
    buscado = str(input("Ingrese el contacto que desea buscar: ")).lower()
    if buscado in contactos:
        print(f"Contacto: {buscado} Telefono: {contactos.get(buscado)}")


def showmenu():
    while True:
        print("Bienvenido a tu agenda")
        opc1 = input("1. Agregar contacto 2. Listar contactos 3. Buscar contactos\n")
        match opc1:
            case "1":
                agregarcontacto()
            case "2":
                listarcontactos()
            case "3":
                buscarcontacto()
            
    
        

showmenu()