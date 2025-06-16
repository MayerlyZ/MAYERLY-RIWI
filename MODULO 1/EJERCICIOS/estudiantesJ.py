#Ejercicio 1: Registro de Estudiantes

students = {}

def aggstudent():
    name = str(input("Ingrese el nombre del estudiante: ")).lower()
    age = int(input("Ingrese la edad del estudiante: "))
    score = float(input("Ingrese la calificacion del estudiante: "))
    if score < 0 or score > 100:
        print("La calificacion debe estar entre 0-100")
    else:
        students[name] = {"age":age,"score":score}
        print("-"*10)
        print("Estudiante agregado correctamente")
        print("-"*10)

def modscore():
    modificado = str(input("Ingrese el nombre del estudiante que desea modificar: ")).lower()
    if modificado not in students:
        print("-"*10)
        print("Estudiante no encontrado")
        print("-"*10)
    else: 
        newscore = float(input("Ingrese la nueva calificacion: "))
        students[modificado]['score'] = newscore
        print("-"*10)
        print(f"La calificación de {modificado} ha sido modificada")
        print("-"*10)

def showstudents():
    if len(students) == 0:
        print("No hay estudiantes para mostrar")
    else:
        print("Los estudiantes ingresados son: ")
        print("-"*10)
        for name, data in students.items():
            print(f"Nombre: {name} Edad: {data['age']} Calificación: {data['score']}")
            print("-"*10)

def deletestudent():
    if len(students) == 0:
        print("No hay ningun estudiante para eliminar")
    else:
        deleted = input("Ingrese el nombre del estudiante a eliminar: ").lower()
        if deleted in students:
            del students[deleted]
            print("-"*10)
            print(f"Estudiante {deleted} eliminado correctamente")
            print("-"*10)


def showmenu():
    while True:
        print("Bienvenido al registro de estudiantes")
        option = int(input("Selecciona una opción\n 1. Agregar estudiante\n 2. Modificar calificacion\n" \
        " 3. Mostrar estudiantes\n 4. Borrar estudiantes\n")) 
        match option:
            case 1:
                aggstudent()
            case 2:
                modscore()
            case 3:
                showstudents()
            case 4:
                deletestudent()
            
showmenu()