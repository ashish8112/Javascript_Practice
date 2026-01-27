f=open("demo.txt","r")
print(f.read())

f=open("deo.txt","w")
f.write("This is a new file")
f.close()

f=open("deo.txt","r")
print(f.read())

f.close()

f=open("ashish.txt","x")
f.write("sfjsjf")
f.close()

f=open("ashish.txt","r")
print(f.read())
f.close()

f=open("ashish.txt","a")
f.write("\nGarbage string")
f.close()

f=open("ashish.txt","r")
print(f.read())