#include <stdio.h>

#define MAX 5   // maximum size of the stack

int stack[MAX];
int top;

// Initialize the stack
void init() {
    top = -1;
    printf("Stack initialized.\n");
}

// Check if stack is full
int isFull() {
    return top == MAX - 1;
}

// Check if stack is empty
int isEmpty() {
    return top == -1;
}

// Push operation
void push(int value) {
    if (isFull()) {
        printf("Stack is full! Cannot push %d\n", value);
    } else {
        top++;
        stack[top] = value;
        printf("%d pushed into stack.\n", value);
    }
}

// Pop operation
int pop() {
    if (isEmpty()) {
        printf("Stack is empty! Nothing to pop.\n");
        return -1;
    } else {
        int value = stack[top];
        top--;
        printf("%d popped from stack.\n", value);
        return value;
    }
}

// Display elements
void display() {
    if (isEmpty()) {
        printf("Stack is empty.\n");
        return;
    }
    printf("Stack elements: ");
    for (int i = 0; i <= top; i++) {
        printf("%d ", stack[i]);
    }
    printf("\n");
}

// Display size and top element
void stackInfo() {
    if (isEmpty()) {
        printf("Stack is empty.\n");
    } else {
        printf("Current size: %d\n", top + 1);
        printf("Top element: %d\n", stack[top]);
    }
}

int main() {
    int choice, value;

    init(); // Initialize the stack first

    while (1) {
        printf("\n---- Stack Menu ----\n");
        printf("1. Push\n");
        printf("2. Pop\n");
        printf("3. Display\n");
        printf("4. Stack Info\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice) {
            case 1:
                printf("Enter value to push: ");
                scanf("%d", &value);
                push(value);
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                stackInfo();
                break;
            case 5:
                printf("Exiting program...\n");
                return 0;
            default:
                printf("Invalid choice. Try again.\n");
        }
    }
}