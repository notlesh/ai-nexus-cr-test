#[cfg(test)]
mod tests {
    #[test]
    fn test_push_and_pop() {
        let mut stack = buen_fla_project::Stack::<i32>::new();
        stack.push(1);
        stack.push(2);
        assert_eq!(stack.pop(), Ok(Some(2)));
        assert_eq!(stack.pop(), Ok(Some(1)));
    }

    #[test]
    fn test_is_empty() {
        let mut stack = buen_fla_project::Stack::<i32>::new();
        assert_eq!(stack.is_empty(), true);
        stack.push(1);
        assert_eq!(stack.is_empty(), false);
        stack.pop().unwrap();
        assert_eq!(stack.is_empty(), true);
    }

    #[test]
    fn test_pop_empty_stack() {
        let mut stack = buen_fla_project::Stack::<i32>::new();
        assert_eq!(stack.pop(), Err("Cannot pop from an empty stack"));
    }
}
