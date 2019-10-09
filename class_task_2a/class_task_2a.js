//                                          MULTILEVEL INHERITANCE
class Person {
    constructor(name,age,height,gender){
        this.name=name
        this.age=age
        this.height=height
        this.gender=gender
    }
    print_person_info() {
        console.log("My name is "+this.name+" and age is "+this.age)
    }
}
class Student extends Person{
    constructor(name,age,height,gender,roll_number,CGPA,semester){
        super(name,age,height,gender)
        this.roll_number=roll_number
        this.CGPA=CGPA
        this.semester=semester
    }
    print_student_info(){
        console.log("I am in "+this.semester+" semester with "+this.CGPA+" CGPA")
    }
}
class CS_Student extends Student{
    constructor(name,age,height,gender,roll_number,CGPA,semester,FYP_title){
        super(name,age,height,gender,roll_number,CGPA,semester)
        this.FYP_title=FYP_title
    }
    print_cs_student_info(){
        console.log("My FYP title is "+this.FYP_title)
    }
    set set_FYP_title(FYP_title){
        this.FYP_title=FYP_title
    }
    get get_FYP_title(){
        return this.FYP_title
    }
}
cs_stu=new CS_Student("Zeeshan",22,"171cm","SP16-BCS-024",3.97,"8th","BE-Wallet")
cs_stu.print_person_info()
cs_stu.print_student_info()
cs_stu.print_cs_student_info()
//                                          MULTIPLE INHERITANCE
class Person1 {
    constructor(name,age,height,gender){
        this.name=name
        this.age=age
        this.height=height
        this.gender=gender
    }
    print_person_info() {
        console.log("My name is "+this.name+" and age is "+this.age)
    }
}
class Student1 {
    constructor(roll_number,CGPA,semester){
        this.roll_number=roll_number
        this.CGPA=CGPA
        this.semester=semester
    }
    print_student_info(){
        console.log("I am in "+this.semester+" semester with "+this.CGPA+" CGPA")
    }
}
                /* JavaScript does not support multiple inheritance.
                Because an object has a single associated prototype, 
                JavaScript cannot dynamically inherit from more than 
                one prototype chain. In JavaScript, you can have a 
                constructor function call more than one other constructor 
                function within it */
                
// class CS_Student1 extends Person1,Student1 {
//     constructor(name,age,height,gender,roll_number,CGPA,semester,FYP_title){
        
//     }
// }