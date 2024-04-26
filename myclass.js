class Emp
{
    constructor(ename)
    {
        this.ename=ename
    }
    getEmp()
    {
        console.log(this.ename);
    }
}

const e1={ename:"Aravind"}

const emp1=new Emp("Bala")
const emp2=new Emp("Aravind")
const emp3=new Emp("Siva")

emp2.getEmp()

module.exports.Emp=Emp