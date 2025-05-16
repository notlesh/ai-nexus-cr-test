import sys

def main():
    args = sys.argv[1:]
    numbers = [float(x) for x in args]
    total = sum(numbers)
    print(total)

if __name__ == "__main__":
    main()
