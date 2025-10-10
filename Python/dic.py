student={
    "name":"Ashish",
    "Rollno":25,
}
print(student)

student["age"]=22
student["Rollno"]=12
print(student)
print(student["age"])
student.pop("Rollno")
print(student)

student.clear()
print(student)