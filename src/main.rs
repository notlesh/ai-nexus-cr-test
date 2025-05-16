use clap::Parser;

#[derive(Parser, Debug)]
#[clap(author = "", version, about, long_about = None)]
struct Args {
    /// Operation to perform: ADD or MULTIPLY
    #[clap(short, long, value_parser, default_value = "ADD")]
    op: String,

    /// Numbers to operate on
    #[clap(value_parser)]
    numbers: Vec<f64>,
}

fn main() {
    let args = Args::parse();

    let result = match args.op.as_str() {
        "ADD" => args.numbers.iter().sum(),
        "MULTIPLY" => args.numbers.iter().product(),
        _ => {
            eprintln!("Invalid operation. Please use ADD or MULTIPLY.");
            return;
        }
    };

    println!("Result: {}", result);
}
