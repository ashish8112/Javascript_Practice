//As we know object is key value pair 
//where key can be in double quote or not (Not mandatory)
//But in Json key must be in double quote 

let Obj = {
    name: "Ashish",
    standard : "MCA",
    marks : [90,89,80],
    nest : [2,3 ,[20,30,{lang:"Javascript"}]]
}

//Accessing the Obj

console.log(Obj.name);
//console.log(Obj[marks]);// ReferenceError: marks is not defined
console.log(Obj["standard"]); // we need give key in double quote for accessing .
console.log(Obj["marks"][0])
console.log(Obj.marks[2]);

console.log(Obj.nest);
console.log(Obj.nest[2][0]);
console.log(Obj.nest[2][2].lang)
console.log(Obj["nest"][2][2]["lang"])

//How to freeze the Object 
Obj.name="Rahul" //Here we can change the value of Object 
console.log(Obj.name);
Object.freeze(Obj); // After Freezing we cannot change the value of Object.
Obj.name="Ashish"
console.log(Obj.name);