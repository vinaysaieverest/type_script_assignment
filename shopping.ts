class ShoppingCart {
    private count1: number;
    private count2: number;
    private placeholder: HTMLInputElement;
    private addButton: HTMLButtonElement;
    private container2: HTMLUListElement;
    private count1Display: HTMLElement;
    private count2Display: HTMLElement;

    constructor() {
        this.count1 = 0;
        this.count2 = 0;
        this.placeholder = document.getElementById('placeholder') as HTMLInputElement;
        this.addButton = document.getElementById('add_button') as HTMLButtonElement;
        this.container2 = document.getElementById('container2') as HTMLUListElement;
        this.count1Display = document.getElementById('count1') as HTMLElement;
        this.count2Display = document.getElementById('count2') as HTMLElement;

        this.addButton.addEventListener('click', () => this.addFunction())
        this.placeholder.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === 'Shift') {
                this.addFunction();
            }
        });
    }
    
    private addFunction(): void {
        const value = this.placeholder.value;
        if (value === "") {
            alert("Please enter something");
        } else {
            this.addItem(value);
            this.placeholder.value = "";
        }
    }
    
    
    private addItem(value: string): void {
        const li = document.createElement('li');
        li.innerHTML = `${value} <button class='delete_button'>X</button>`;
        li.style.height = "30px";
        li.style.marginBottom = "10px";
        li.style.border = "1px solid";
        li.style.width = "500px";
        li.style.textAlign = "center";
        li.style.marginRight = "80px";
        li.style.justifyContent = "center";
        li.style.color = "black";
        li.style.textDecoration = "none";

        li.querySelector('.delete_button').addEventListener('click', () => this.deleteFunction(li));
        li.addEventListener('click', () => this.changeFunction(li));

        this.container2.appendChild(li);
        this.count2++;
        this.updateCount2();
    }
    
    private deleteFunction(li: HTMLLIElement): void {
        this.container2.removeChild(li);
        this.count2--;
        this.updateCount2();
    }
    
    private changeFunction(li: HTMLLIElement): void {
        if (li.style.backgroundColor === "rgb(175, 225, 175)") {
            li.style.backgroundColor = "beige";
            li.style.textDecoration = "none";
            this.count1--;
        } else {
            li.style.backgroundColor = "rgb(175, 225, 175)";
            li.style.textDecoration = "line-through";
            this.count1++;
        }
        this.updateCount1();
    }
    
    private updateCount1(): void {
        this.count1Display.innerHTML = `no.of selected items = ${this.count1}`;
    }

    private updateCount2(): void {
        this.count2Display.innerHTML = `no.of added items = ${this.count2}`;
    }
}

const shoppingCart = new ShoppingCart();
