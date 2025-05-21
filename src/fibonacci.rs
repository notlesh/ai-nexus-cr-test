pub fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => functions::fibonacci(n - 1) + functions::fibonacci(n - 2),
    }
}

use std::collections::HashMap;
use std::sync::Mutex;

lazy_static::lazy_static! {
    static ref FIB_CACHE: Mutex<HashMap<u32, u64>> = Mutex::new(HashMap::new());
}

pub mod functions {
    use super::FIB_CACHE;
    use super::fibonacci;
    use std::sync::MutexGuard;

    pub fn fibonacci(n: u32) -> u64 {
        let mut cache: MutexGuard<std::collections::HashMap<u32, u64>> = FIB_CACHE.lock().unwrap();
        if let Some(&result) = cache.get(&n) {
            return result;
        }

        let result = match n {
            0 => 0,
            1 => 1,
            _ => fibonacci(n - 1) + fibonacci(n - 2),
        };

        cache.insert(n, result);
        result
    }
}
