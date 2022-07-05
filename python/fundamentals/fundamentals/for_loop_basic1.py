for i in range(151):
    print(i)


for i in range(5,1005,5):
    print(i)


for i in range(1,101):
    if not i % 10: 
        print("Coding Dojo")
    elif not i % 5:
        print("Coding")
    else:
        print(i)


sum = 0
for i in range(1,500001,2):
    sum += i
print(sum)


for i in range(2018,0,-4):
    print(i)


lowNum = 19
highNum = 150
mult = 5

for i in range(lowNum,highNum+1):
    if not(i % mult):
        print(i)