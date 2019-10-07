function Student(name,age,semester){
    this.name=name
    this.age=age
    this.semester=semester
}
stu1 = new Student("Zeeshan",22,8)
stu2 = new Student("Faizan",21,8)
stu3 = new Student("Nouman",23,8)
console.log("\nThe the created student objects are")
console.log(stu1)
console.log(stu2)
console.log(stu3)
Student.prototype.program="BCS"
console.log("\nThe student Objects after adding the program through prototype")
console.log(stu1)
console.log(stu2)
console.log(stu3)
console.log("\nThe array of students objects is;")
array=[stu1,stu2,stu3]
console.log(array)
function check_and_print(){
    input=prompt("Enter the property name")
    console.log("\nThe "+input+"s of students are;")
    for(i=0;i<3;i++){
        if(array[i][input]!=undefined){
            console.log(array[i][input])
        }
        else{
            console.log("\nSorry! The entered property is not present")
            break
        }
    }
}
check_and_print()
console.log("\nSHowing the students record by using display() method in each student")
Object.defineProperty(Student.prototype, 'display', {
  value: function dip_lay(){
      console.log(this.name+","+ this.age+","+this.semester+","+this.program)
},
  writable: true
});
stu1.display()
stu2.display()
stu3.display()