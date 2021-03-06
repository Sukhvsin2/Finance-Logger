import { HasFormatter } from "../interfaces/HasFormatter";
import { Invoice } from "./Invoice";
import { Payment } from "./Payment";

export class ListTemplate{
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string) {
        const li = document.createElement('li');
        li.className = 'entry'
        const div = document.createElement('div');

        div.innerText = heading;
        div.className = 'title'
        li.appendChild(div);
        
        const p = document.createElement('p');
        p.className = 'description'
        p.innerText = item.format();
        li.appendChild(p);

        this.container.appendChild(li);
    }

    renderExisted(transaction: { entry: string, type: string }) {
        const li = document.createElement('li');
        li.className = 'entry'
        const div = document.createElement('div');

        div.innerText = transaction.type;
        div.className = 'title'
        li.appendChild(div);
        
        const p = document.createElement('p');
        p.className = 'description'
        p.innerText = transaction.entry;
        li.appendChild(p);

        this.container.appendChild(li);
    }

    existed(transactions: { entry: string, type: string }[]) {
        transactions.forEach((item, i) => {
            this.renderExisted(item);
        } )
    }

}