
import {Invoice} from "./classes/invoice.js"

const invoiceOne = new Invoice('mario', 'building mario game', 300);
const invoiceTwo = new Invoice('luigi', 'playing mario game', 400);

console.log(invoiceOne, invoiceTwo);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach(invoice => {
    console.log(invoice.client, invoice.details, invoice.amount, invoice.format());
    
})

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "Bob",
    age: 25,
    speak(text: string): void {
        console.log(text); 
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount; 
    }
}
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})