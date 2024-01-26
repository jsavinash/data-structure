function DoublyLinkedListNode(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

function DoublyLinkedListOperations() {
    this.head = null;
    this.tail = null;
    this.addNode = function (data) {
        if (this.head) {
            newNode = new DoublyLinkedListNode(data, this.head, null);
            this.head.prev = newNode;
            this.tail = this.head;
            this.head = newNode;
        } else {
            this.tail = this.head = new DoublyLinkedListNode(data, null, null);
        }

    }
    this.displayNode = function () {
        let output = "";
        while (this.head) {
            output = `${output} => ${this.head.data}`;
            this.head = this.head.next;
        }
        console.log("output ::", output);
    }
}

const doublyLinkedListOperationInstance = new DoublyLinkedListOperations();
doublyLinkedListOperationInstance.addNode(1);
doublyLinkedListOperationInstance.addNode(2);
doublyLinkedListOperationInstance.addNode(3);
doublyLinkedListOperationInstance.addNode(4);
doublyLinkedListOperationInstance.displayNode();