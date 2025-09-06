class ashish{
    constructor(name,age,color)//Although if i don't create constructor it will run because of creation of default constructor by JS Engine.
    {
        this.color=color;
        this.Name=name;  // Here I created new variable as well Name and this for variable of this instace of class (object)
        this.Age=age;
    }
    Umar() // In class we don't use function keyword to create function inside the class.
    {

        console.log(this.Name+" is  "+this.Age+" year old"); //Note only we can this.variable name in entire class not only with variable name;
    }
    paint()
    {
        return this.color;
    }
}
let obj=new ashish("Ashish",23,"White");
obj.Umar();
let color=obj.paint();
console.log(color);
console.log(obj.color); // we can access variable of class using object . variable name ;
