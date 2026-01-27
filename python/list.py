i = int(input("Enter the size of list "))
mark=[]
for j in range(i):
    value=int(input("Enter the value in mark list of "))
    mark.append(value)

print(mark)

mark.reverse()
print(mark) 

mark.insert(2,"Ashish")
print(mark)

del mark[2] 
#or mark.pop(2) 
mark.sort() # don't mix numeric with sequence type data type
print(mark)

a=["a","b"]
print(a)
a.sort(reverse=True)
print(a)

# for item in mark: #means item=mark[0] and till end of mark 
#     print(item)

# for i in range(len(mark)):
#     print(mark[i])

# r = range(5)
# print(r)
# print(list(r))

