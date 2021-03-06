import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('form');
const type = document.querySelector('#type');
const pName = document.querySelector('#name');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const listTemplate = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let temp;
    if (type.value == 'invoice') {
        temp = new Invoice(pName.value, details.value, amount.valueAsNumber);
    }
    else {
        temp = new Payment(pName.value, details.value, amount.valueAsNumber);
    }
    listTemplate.render(temp, type.value);
});
