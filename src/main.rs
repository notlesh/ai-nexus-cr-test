use clap::Parser;
mod fibonacci;
use fibonacci::functions::fibonacci;

#[derive(Parser, Debug)]
#[clap(author = "", version, about, long_about = None)]
struct Args {
    /// Operation to perform: ADD or MULTIPLY
    #[clap(short, long, value_parser, default_value = "ADD")]
    op: String,

    /// Numbers to operate on
    #[clap(value_parser)]
    numbers: Vec<f64>,

    /// Calculate fibonacci number
    #[clap(short, long, value_parser)]
    fib: Option<u32>,
}

fn main() {
    let args = Args::parse();

    if let Some(n) = args.fib {
        println!("Fibonacci({}): {}", n, fibonacci(n));
        return;
    }

    let result = match args.op.as_str() {
        "ADD" => args.numbers.iter().sum::<f64>(),
        "MULTIPLY" => args.numbers.iter().product::<f64>(),
        _ => {
            eprintln!("Invalid operation. Please use ADD or MULTIPLY.");
            return;
        }
    };

    println!("Result: {}", result);
}
