function SinglyLinkedListNode(data, next) {
    this.data = data;
    this.next = next;
}

function SinglyLinkedListOperations() {
    this.head = null;

    this.addNode = function (data) {
        if (this.head) {
            newNode = new SinglyLinkedListNode(data, null);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = new SinglyLinkedListNode(data, null);
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

const singlyLinkedListOperationInstance = new SinglyLinkedListOperations();
singlyLinkedListOperationInstance.addNode(1);
singlyLinkedListOperationInstance.addNode(2);
singlyLinkedListOperationInstance.addNode(3);
singlyLinkedListOperationInstance.addNode(4);
singlyLinkedListOperationInstance.displayNode();