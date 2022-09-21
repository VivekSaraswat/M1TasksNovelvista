class Student
{
    constructor(name,rollNumber,totalFees,feesSubmitted){
        this.name=name;
        this.rollNumber=rollNumber;
        this.feesSubmitted=feesSubmitted;
        this.totalFees=totalFees;
        if(feesSubmitted < totalFees){
            this.isFeesDue=true;
        }
        else{
            this.isFeesDue=false;
        }
    }

    submitFees(amount){
        if(this.isFeesDue==true){
            this.feesSubmitted+=amount;
            if(this.feesSubmitted < this.totalFees){
                this.isFeesDue=true;
            }
            else{
                this.isFeesDue=false;
            }
        }
    }

    doPrint(){
        console.log("Name=" + this.name);
        console.log("Roll Number=" + this.rollNumber);
        console.log("Fees submitted=" + this.feesSubmitted);
        console.log("Total Fees=" + this.totalFees);
        console.log("Is Fees Due=" + this.isFeesDue);
    }
}

    let student1=new Student("Ram","101",10000,8000);
    let student2=new Student("Shyam","102",8000,8000);
    let student3=new Student("Krish","103",12000,5000);

    student1.doPrint();
    student1.submitFees(2000);
    student1.doPrint();

    student3.doPrint();
    student3.submitFees(3000);
    student3.doPrint();


