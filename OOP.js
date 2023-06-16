class Employee{
    constructor(name, role, company, dept){
        this.name;
        this.role;
        this.company;
        this.dept;
    }
    showEmployee(){
        return this.name "is an" + this.role + 'at' + this.company
    }
}
let myEmployee = new Employee("Daniel","Developer","Equest","Poject")
console.log(myEmployee.showEmployee())