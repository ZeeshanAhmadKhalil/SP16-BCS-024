class Student {
    constructor(name,father_name,age){
        this.name=name
        this.father_name=father_name
        this.age=age
    }
}
class Mgt_Student extends Student{
    constructor(industry_name,name,father_name,age){
        super(name,father_name,age)
        this.industry_name=industry_name
    }
    get get_industry_name(){
        return this.industry_name
    }
    set set_industry_name(industry_name){
        this.industry_name=industry_name
    }
}
class CS_Student extends Student{
    constructor(FYP_name,name,father_name,age){
        super(name,father_name,age)
        this.FYP_name=FYP_name
    }
    get get_FYP_name(){
        return this.FYP_name
    }
    set set_FYP_name(FYP_name){
        this.FYP_name=FYP_name
    }
}
cs_stu1=new CS_Student("BE-wallet","Zeeshan","Zulfiqar",22)
mgt_stu1=new Mgt_Student("Block-chain","Imran","Ahmad",28)
console.log("The one stu of CS and MGT are")
console.log(cs_stu1)
console.log(mgt_stu1)
console.log("\nThere FYP and industry names are")
console.log(mgt_stu1.get_industry_name)
console.log(cs_stu1.get_FYP_name)
console.log("\nThere FYP and industry name after setting them again are")
cs_stu1.set_FYP_name="Blockchain Electronic Wallet"
mgt_stu1.set_industry_name="Blockchain Industry"
console.log(mgt_stu1.get_industry_name)
console.log(cs_stu1.get_FYP_name)