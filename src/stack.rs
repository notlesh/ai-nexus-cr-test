#[derive(Debug)]
pub struct Stack {
    items: Vec<i32>,
}

impl Stack {
    pub fn new() -> Self {
        Stack {
            items: Vec::new(),
        }
    }

    pub fn push(&mut self, item: i32) {
        self.items.push(item);
    }

    pub fn pop(&mut self) -> Result<i32, &'static str> {
        match self.items.pop() {
            Some(item) => Ok(item),
            None => Err("Cannot pop from an empty stack"),
        }
    }

    pub fn is_empty(&self) -> bool {
        self.items.is_empty()
    }
}
