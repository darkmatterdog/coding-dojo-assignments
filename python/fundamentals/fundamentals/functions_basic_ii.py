# Countdown
from more_itertools import first


def countdown(top):
    countList = []
    for i in range(top,-1,-1):
        countList.append(i)
    return countList

print(countdown(10))


# Print and Return
def print_and_return(input_list):
    print(input_list[0])
    return input_list[1]

print(print_and_return([1,7]))


# First Plus Length
def first_plus_length(input_list):
    return input_list[0]+len(input_list)

print(first_plus_length([1999,7,4,5,21,17]))


# Values Greater Than Second
def values_greater_than_second(input_list):
    if(len(input_list) < 2):
        return False
    
    second_value = input_list[1]
    output_list = []
    for i in input_list:
        if (i > second_value):
            output_list.append(i)
    print(len(output_list))
    return output_list

print(values_greater_than_second([1,6,4,3,8,14,5,99]))


# This Length, That Value
def length_and_value(size, value):
    output_list = []  
    for i in range(size):
        output_list.append(value)
    return output_list

print(length_and_value(10,17))