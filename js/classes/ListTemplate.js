export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement('li');
        li.className = 'entry';
        const div = document.createElement('div');
        div.innerText = heading;
        div.className = 'title';
        li.appendChild(div);
        const p = document.createElement('p');
        p.className = 'description';
        p.innerText = item.format();
        li.appendChild(p);
        this.container.appendChild(li);
    }
    renderExisted(transaction) {
        const li = document.createElement('li');
        li.className = 'entry';
        const div = document.createElement('div');
        div.innerText = transaction.type;
        div.className = 'title';
        li.appendChild(div);
        const p = document.createElement('p');
        p.className = 'description';
        p.innerText = transaction.entry;
        li.appendChild(p);
        this.container.appendChild(li);
    }
    existed(transactions) {
        transactions.forEach((item, i) => {
            this.renderExisted(item);
        });
    }
}
