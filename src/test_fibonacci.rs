#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fibonacci_zero() {
        assert_eq!(fibonacci(0), 0);
    }

    #[test]
    fn test_fibonacci_one() {
        assert_eq!(fibonacci(1), 1);
    }

    #[test]
    fn test_fibonacci_positive() {
        assert_eq!(fibonacci(5), 5);
        assert_eq!(fibonacci(10), 55);
    }

    #[test]
    fn test_fibonacci_negative() {
        assert_eq!(fibonacci(-1), 0);
    }
}
