// setup faker
import { faker } from '@faker-js/faker';
import express from 'express'

// setup express
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// faker functions
const createUser = () => {
  const user = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number()
  }
  return user;
}

const createCompany = () => {
  const company = {
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      number: faker.address.buildingNumber(),
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return company;
}









// api routing
app.get("/api", (req, res) => {
  res.send("Faker test API");
});

app.get("/api/users/new", (req, res) => {
  res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
  res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
  res.json({ user: createUser(), company: createCompany()});
});

// post
app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.json( { status: "ok" } );
});





// run the server
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
