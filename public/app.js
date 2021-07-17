import { Invoice } from "./classes/invoice.js";
const invoiceOne = new Invoice('mario', 'building mario game', 300);
const invoiceTwo = new Invoice('luigi', 'playing mario game', 400);
console.log(invoiceOne, invoiceTwo);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
});
const me = {
    name: "Bob",
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
