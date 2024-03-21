type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday); // undefined

let customer1 = getCustomer(1);
console.log(customer1?.birthday); // There's an error without optional chaining since it can be null
