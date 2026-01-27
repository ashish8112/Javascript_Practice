list =[]
size=int(input("Enter the size of list "))
for i in range(size):
    value=int(input("Enter the value "))
    list.append(value)

tuple=tuple(list)
print(tuple)

# for item in tuple:
#     print(item)

print(tuple[2])

t=("Ashish",1,"Shukla")
print(t)

# list1=[1,2,5,2,1]
# list2=list1

# list1.reverse()

# if(list1==list2):
#     print(list1,"is palindrome number")
# else:
#     print("Not a palindrome number")