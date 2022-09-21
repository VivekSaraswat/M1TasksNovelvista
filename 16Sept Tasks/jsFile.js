function filterAccountBasedOnBalance(allAccounts,threshold)
{
    let result=new Set();
    for(let account of allAccounts){
        if(account.balance<threshold){
            result.add(account);
        }
    }
    console.log("Accounts having balance less than "+threshold);
    doPrintList(result);
}

function filterAccountBasedOnPolicyPremium(allAccounts,threshold)
{
    let result=new Set();
    for(let account of allAccounts){
        for(let policy of account.policy){
            if(policy.premium<threshold){
                result.add(account);
            }
        }
    }
    console.log("Accounts having Policy Premium less than "+threshold);
    doPrintList(result);
}

function filterAccountBasedOnLocation(allAccounts,place)
{
    let result=new Set();
    for(let account of allAccounts){
        if(account.location==place){
            result.add(account);
        }
    }
    console.log("Accounts having Location "+place);
    doPrintList(result);
}

function doPrintList(result){
    for(let account of result)
    {
        doPrint(account);
    }
}

function doPrint(account)
{
    console.log("Account Number "+account.accountNumber);
    console.log("Account HolderName "+account.accountHolderName);
    console.log("Account Balance "+account.balance);
    doPrintPolicyList(account.policy);
    console.log("Account Location "+account.location);
}

function doPrintPolicyList(result){
    for(let policy of result)
    {
        doPrintPolicy(policy);
    }
}

function doPrintPolicy(policy)
{
    console.log("Policy "+policy.policyName);
    console.log("Premium "+policy.premium);
    console.log("Sum Assured "+policy.sumAssured);
}

function Account(accountHolderName,balance,policy,location)
{
    this.accountNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.policy = policy;
    this.location = location;
}

function Policy(policyName,premium,sumAssured)
{
    this.policyName = policyName;
    this.premium = premium;
    this.sumAssured = sumAssured;
}

function Transaction(transactionId,accountNumber1,accountNumber2,typeOfTransaction,dateOfTransaction,amount){
    this.transactionId=transactionId;
    this.accountNumber1=accountNumber1;
    this.accountNumber2=accountNumber2;
    this.typeOfTransaction=typeOfTransaction;
    this.dateOfTransaction=dateOfTransaction;
    this.amount=amount;
}

function operations(allTransactions)
{
    for(transaction of allTransactions){
        if(transaction.typeOfTransaction=="deposit"){
            console.log("Deposit");
            doDeposit(transaction.accountNumber1,transaction.amount);
        }
        else if(transaction.typeOfTransaction=="withdrawl"){
            console.log("Withdrawl");
            doWithdrawl(transaction.accountNumber1,transaction.amount);
        }
        else if(transaction.typeOfTransaction=="fundTransfer"){
            doFundTransfer(transaction.accountNumber1,transaction.accountNumber2,transaction.amount);
        }
    }
}

function doFundTransfer(a1,a2,amount)
{
    let validToTransfer = false;
    for(let account of allAccounts)
    {
        if(account.accountNumber == a1 && account.balance>amount)
        {
            validToTransfer = true;
            account.balance -= amount;
            console.log("After Fund Transfer");
            doPrint(account);
        }

        if(account.accountNumber == a2 && validToTransfer == true)
        {
            account.balance += amount; 
            doPrint(account);
        }
    }
}

function doDeposit(accountNumber1,amount)
{
    for(account of allAccounts){
        if(account.accountNumber==accountNumber1){
            console.log("Before Deposit");
            doPrint(account);
            account.balance=account.balance+amount;
            console.log("After Deposit");
            doPrint(account);
            break;
        }
    }
}

function doWithdrawl(accountNumber1,amount)
{
    for(account of allAccounts){
        if(account.accountNumber==accountNumber1 && account.balance>=amount){
            console.log("Before Withdrawl");
            doPrint(account);
            account.balance=account.balance-amount;
            console.log("After Withdrawl");
            doPrint(account);
            break;
        }
    }
}


var policy1 = new Policy("LIC - 1 ",200,5000);
var policy2 = new Policy("HDFC Life - 1 ",600,8000);
var policy3 = new Policy("SBI Life - 1 ",3200,50000);
var policy4 = new Policy("LIC - 2 ",1200,500000);

var account1 = new Account("Ramesh",12000,[policy1,policy2],"Delhi");
var account2 = new Account("Suresh",20000,[policy3],"Jaipur");
var account3 = new Account("Ram",2000,new Set([policy2,policy3,policy4,policy2]),"Jaipur");

var transaction1 = new Transaction(101,account1.accountNumber,account3.accountNumber,"fundTransfer",new Date(),2000);
var transaction2 = new Transaction(112,account2.accountNumber,account2.accountNumber,"withdrawl",new Date(),4000);
var transaction3 = new Transaction(123,account3.accountNumber,account3.accountNumber,"deposit",new Date(),6000);

allAccounts = [account1,account2,account3];
allTransactions=[transaction1,transaction2,transaction3];

filterAccountBasedOnBalance(allAccounts,10000);
filterAccountBasedOnPolicyPremium(allAccounts,1000);
filterAccountBasedOnLocation(allAccounts,"Jaipur");

operations(allTransactions);
