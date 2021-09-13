const express = require("express");
const app = express();
const port = 8000;
var faker = require("faker");


class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.streetAddress = faker.address.streetAddress() 
        this.city = faker.address.city()
        this.state = faker.address.stateAbbr()
        this.zipCode = faker.address.zipCode()
        this.country = "US"
        
    }
}


app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})

app.get("/api/company/new", (req,res)=>{
    let newCompany = new Company()
    res.json({data: newCompany})
})

app.get("/api/user/company", (req,res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({userData: newUser, companyData: newCompany})
})







app.listen(port, ()=> console.log(`Listening on port: ${port}`))