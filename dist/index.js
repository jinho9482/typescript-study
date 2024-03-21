"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer1 = getCustomer(1);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday);
let log = null;
console.log(log("a"));
//# sourceMappingURL=index.js.map