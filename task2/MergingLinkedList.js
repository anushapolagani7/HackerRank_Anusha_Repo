'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    var head = new SinglyLinkedList;

    var temp = head;



    if (head1.data <= head2.data) {

        temp.data = head1.data;

        head1 = head1.next;

    } else {

        temp.data = head2.data;

        head2 = head2.next;

    }



    while (head1 != null && head2 != null) {

        var temp2 = new SinglyLinkedList;

        if (head1.data <= head2.data) {

            temp2.data = head1.data;

            temp.next = temp2;

            temp = temp2;

            temp.next = null;

            head1 = head1.next;

            //console.log("head1" + temp.data);

        } else {

            temp2.data = head2.data;

            temp.next = temp2;

            temp = temp2;

            temp.next = null;

            head2 = head2.next;

            //console.log("head2" + temp.data);

        }

    }



    while (head1 != null) {

        var temp2 = new SinglyLinkedList;

        temp2.data = head1.data;

        temp.next = temp2;

        temp = temp2;

        head1 = head1.next;

        //console.log("head1" + temp.data);

    }



    while (head2 != null) {

        var temp2 = new SinglyLinkedList;

        temp2.data = head2.data;

        temp.next = temp2;

        temp = temp2;

        head2 = head2.next;

        //console.log("head2" + temp.data);

    }



    return head;

}

function main() {