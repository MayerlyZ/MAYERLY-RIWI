inventory=[
    {"name": "Rice", "price": 4000, "quantity": 10},
    {"name": "Sugar", "price": 3000, "quantity": 50},
    {"name": "Salt", "price": 1500, "quantity": 30},
    {"name": "Lemon", "price": 2000, "quantity": 42},
    {"name": "Bread", "price": 1000, "quantity": 5}
]


#--------------------------------------------------------------------------------------------------------

#Add product method

def addProduct (name, price, quantity):
    inventory.append({"name": name, "price": price, "quantity": quantity})
    print("¡Product added successfully!")
#-----------------------------------------------------------------------------------------------------------

#Consult product method 

def consultProduct (name):
    for product in inventory:
        if product["name"].lower()==name.lower():
            print("Product found")
            #Print dates of the product
            print(f"Product: {product["name"]}, Price: {product["price"]}, Quantity: {product["quantity"]}")
            return
    else:
        print("Product no found in the inventory")

#------------------------------------------------------------------------------------------------------------

def updateProduct (name):
    #Check if the product exists in the dictionary used For-Else
    for product in inventory:
        #We check if the product name in the position is the same as the entered name.
        try:
            if product["name"].lower()==name.lower():
                print("Product found")
                newPrice=float(input("Please, enter the new price of product: $"))

                #price input validation
            if newPrice >0: ##price input validation
                ##We search the product in the dictionary using the name as key and assign the new price using the price key
                product["price"]=newPrice 
                print("Price updated successfully")
            else:
                print("The price must be greater than 0")
            return
        except ValueError:
            print("Enter a valid number")
    else:
        print("Product not found in the inventory")
        

#-------------------------------------------------------------------------------------------------------------

def deleteProduct(name,delete):
    for product in inventory:
        if product["name"].lower()==name.lower():
            print("The product exists in the inventory")
           
            if delete.lower()=="yes":
                ###we search the product in the dictionary using the name as key and remove it with the remove method
                inventory.remove(product) 
                print(f"Product: {product["name"]} deleted successfully")
                return
            else:
                print("Product not deleted")
                return
    else:
        print("Product not found in the inventory")

#-------------------------------------------------------------------------------------------------------------------

def calculateTotal ():
    total=sum(product["price"] * product["quantity"] for product in inventory)
        #we calculate the total     
    return
print(f"The total inventory is: ${calculateTotal():,.2f}")


#-------------------------------------------------------------------------------------------------------------------

##MENU

while True: 
    print("\n------WELCOME TO MAYE'S STORE INVENTORY-----------")
    print("Please choose an option:")
    print("1. Add product")
    print("2. Consult product")
    print("3. Update price")
    print("4. Delete product")
    print("5. Calculate total inventory value")
    print("6. Exit")

    try:
        option = int(input("Choose an option (1-6): "))
    except ValueError:
        print("Invalid option. Please enter a number.")
        continue

    else: 
        match option:
            case 1:
                name=input("Please, enter the name of product: ").lower()
                while True:
                    try:
                        price=float(input("Please, enter the price of product: "))
                        if price<0:
                            print("Please, the price must be greater than 0")
                        else:
                            break   
                    except ValueError:
                        print("Enter the price valid")
                while True:
                    try:
                        quantity=float(input("Please, enter the quantity of product: "))
                        if quantity<0:
                            print("The value has to be a positive number ")
                        else:
                            break
                    except ValueError:
                        print("Enter a valid number")
                addProduct(name, price,quantity)

            case 2: 
                name=input("Please, enter the name of the product focus: ").lower()
                consultProduct(name)
            case 3:
                name=input("Please enter the name of the product you wish to update: ").lower()
                updateProduct(name)
            case 4:
                name=input("Please, enter the name of the product you wish to delete: ")
                delete=input("Do you want to delete the product? (yes/no): ")
                deleteProduct(name,delete)
            case 5:
                calculateTotal()
                
            case 6:
                print("Exit the inventory")
                break            





                

 






    

