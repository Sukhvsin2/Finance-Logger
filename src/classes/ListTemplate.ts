import { HasFormatter } from "../interfaces/HasFormatter";

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

}