num1 = 42   # variable declaration, int
num2 = 2.3  # variable declaration, float
boolean = True  # variable declaration, boolean
string = 'Hello World'  # variable declaration, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']  # variable declaration, list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration, dictionary
fruit = ('blueberry', 'strawberry', 'banana')   # variable declaration, tuple
print(type(fruit))  # log statement, type check
print(pizza_toppings[1]) # log statement, access list value
pizza_toppings.append('Mushrooms') # add list value
print(person['name'])   # log statement, access dictionary value
person['name'] = 'George'   # change dictionary value
person['eye_color'] = 'blue'    # add dictionary value
print(fruit[2]) # log statement, access tuple value

if num1 > 45:   # if statement
    print("It's greater")   # log statement, string
else:   # else statement
    print("It's lower") # log statement, string

if len(string) < 5: # if statement, length check
    print("It's a short word!") # log statement, string
elif len(string) > 15:  # elif statement, length check
    print("It's a long word!")  # log statement, string
else:   # else statement
    print("Just right!")    # log statement, string

for x in range(5):  # for loop start
    print(x)    # log statement, end of 1st for loop
for x in range(2,5):    # for loop start
    print(x)    # log statement, end of 2nd for loop
for x in range(2,10,3): # for loop start
    print(x)    # log statement, end of 3rd for loop
x = 0   # variable assignment, int
while(x < 5):   # while loop start
    print(x)    # log statement
    x += 1  # while increment, loop stop

pizza_toppings.pop()    # list delete value
pizza_toppings.pop(1)   # list delete value 

print(person)   # log statement, dictionary access
person.pop('eye_color') # dictionary delete value
print(person)   # log statement, dictionary access

for topping in pizza_toppings:  # for loop start
    if topping == 'Pepperoni':  # if statement, list access/comparison
        continue    # for loop continue
    print('After 1st if statement') # log statement, string
    if topping == 'Olives': # if statement, list access/comparison
        break # for loop break

def print_hello_ten_times(): # function definition
    for num in range(10): # for loop
        print('Hello') # log statement, string

print_hello_ten_times() # function call

def print_hello_x_times(x): # function definition with parameter
    for num in range(x):    # for loop with parameter called
        print('Hello')  # log statement, string

print_hello_x_times(4)  # function call with argument

def print_hello_x_or_ten_times(x = 10): # function definition with variable declaration passed as parameter
    for num in range(x): # for loop
        print('Hello') # log statement, string

print_hello_x_or_ten_times() # function call
print_hello_x_or_ten_times(4) # function call + argument


"""
Bonus section
"""

# print(num3) # NameError
# num3 = 72 # no errors?
# fruit[0] = 'cranberry' # tuple does not support item assignment
# print(person['favorite_team']) # KeyError  
# print(pizza_toppings[7]) # index out of range
#   print(boolean) # unexpected indent
# fruit.append('raspberry') # no attribute append
# fruit.pop(1) # no attribute pop