class Stack {
    #list = [];
    constructor(initialList) {
        if(initialList) this.#list = initialList;
    }

    push(item) {
        this.#list.push(item);
    }

    pop() {
        const list = this.#list;
        return list.length ? list.pop() : null;
    }

    addFront(item) {
        this.#list.unshift(item);
    }

    get readableList() {
        return this.#list.toString();
    }
}

const stack = new Stack([4, 6, 8]);

stack.addFront(7);
stack.addFront(2);
stack.addFront(5);
stack.push(3);


console.log(stack.readableList);
console.log(stack.pop());
