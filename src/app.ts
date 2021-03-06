import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js"

let invoices: Invoice[] = [];
let payments: Payment[] = [];

const form = document.querySelector('form')!;

const type = document.querySelector('#type') as HTMLSelectElement;
const pName = document.querySelector('#name') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;

const listTemplate = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let temp: HasFormatter;
    if (type.value == 'invoice') {
        temp = new Invoice(pName.value, details.value, amount.valueAsNumber);
    } else {
        temp = new Payment(pName.value, details.value, amount.valueAsNumber);
    }

    listTemplate.render(temp, type.value);
})

