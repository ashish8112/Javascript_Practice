#A tuple is an ordered collection of items, just like a list,
#but the main difference is — tuples are immutable (cannot be changed).

#Immutable means: once created, you can’t add, remove, or modify its elements.

tuple=(1,"Ashish")
print(tuple)

t3=("a",1,(2,4)) # Nested tuple
print(t3)

t4=1,4,"Ashish" #Tuple without paranthesis. 
print(t4)

#But you can convert it to a list, modify it, and then make it tuple again: