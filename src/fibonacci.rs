pub fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => functions::fibonacci(n - 1) + functions::fibonacci(n - 2),
    }
}

pub mod functions {
    pub use super::fibonacci;
}
