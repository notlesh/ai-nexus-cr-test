mod stack;

use stack::Stack;

fn main() {
    let mut stack = Stack::new();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    println!("Stack: {:?}", stack);

    println!("Pop: {:?}", stack.pop());
    println!("Pop: {:?}", stack.pop());
    println!("Pop: {:?}", stack.pop());
    println!("Pop: {:?}", stack.pop()); // Should print an error

    println!("Is empty: {}", stack.is_empty());
}
