import {Node} from "./Node.js";

export class LinkedList {
	constructor() {
		this.headNode = null;
		this.tail = null;
		this.length = 0;
	}

	append(value) {
		const node = new Node(value);
		if (this.headNode === null) {
			this.headNode = node;
			this.tail = node;
		} else {
			this.tail.nextNode = node;
			this.tail = node;
		}

		this.length++;
	}

	prepend(value) {
		const node = new Node(value);
		if (this.headNode === null) {
			this.headNode = node;
			this.tail = node;
		} else {
			node.nextNode = this.headNode;
			this.headNode = node;
		}

		this.length++;
	}

	size() {
		return this.length;
	}

	head() {
		if (this.headNode === null) return;
		return this.headNode.value;
	}

	tail() {
		if (this.headNode === null) return;
		return this.tail.value;
	}

	at(index) {
		if (this.headNode === null || index < 0) return;

		let currentIndex = 0;
		let currentNode = this.headNode;

		while (index !== currentIndex && currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			currentIndex++;
		}

		if (index !== currentIndex) return;
		return currentNode.value;
	}

	pop() {
		if (this.headNode === null) return;

		const value = this.headNode.value;

		if (this.headNode === this.tail) {
			this.headNode = null;
			this.tail = null;
		} else {
			this.headNode = this.headNode.nextNode;
		}

		this.length--;
		return value;
	}

	contains(value) {
		if (this.headNode === null) return false;
		if (this.headNode.value === value) return true;

		let currentNode = this.headNode;

		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			if (currentNode.value === value) return true;
		}

		return false;
	}

	findIndex(value) {
		if (this.headNode === null) return -1;
		if (this.headNode.value === value) return 0;

		let index = 0;
		let currentNode = this.headNode;

		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			index++;
			if (currentNode.value === value) return index;
		}

		return -1;
	}

	toString() {
		if (this.headNode === null) return "";

		let currentNode = this.headNode;
		let listStr = `(${this.headNode.value}) -> `;

		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;

			listStr += `(${currentNode.value}) -> `;
		}

		return (listStr += "null");
	}

	insertAt(index, ...values) {
		if (index < 0 || index + 1 > this.size()) throw new RangeError();
		if (values.length === 0) return;

		const tempList = new LinkedList();
		for (let i = 0; i <= values.length - 1; i++) {
			this.length++;
			tempList.append(values[i]);
		}

		if (index === 0) {
			tempList.tail.nextNode = this.headNode;
			this.headNode = tempList.headNode;
			if (this.tail === null) this.tail = tempList.tail;
			return;
		}

		let beforeNode = this.headNode;
		for (let i = 0; i < index - 1; i++) {
			beforeNode = beforeNode.nextNode;
		}

		tempList.tail.nextNode = beforeNode.nextNode;
		beforeNode.nextNode = tempList.headNode;

		if (this.tail === beforeNode) {
			this.tail = tempList.tail;
		}
	}

	removeAt(index) {
		if (index < 0 || index + 1 > this.size()) throw new RangeError();

		this.length--;

		if (index === 0) {
			this.headNode = this.headNode.nextNode;
            if (this.headNode === null) {
                this.tail = null;
            }
			return;
		}

		let beforeNode = this.headNode;
		for (let i = 0; i < index - 1; i++) {
			beforeNode = beforeNode.nextNode;
		}

		if (beforeNode.nextNode.nextNode === null) {
			beforeNode.nextNode = null;
			this.tail = beforeNode;
			return;
		}

		beforeNode.nextNode = beforeNode.nextNode.nextNode;
	}
}
