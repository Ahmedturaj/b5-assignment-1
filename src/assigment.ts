function formatString(input: string, toUpper?: boolean): string {
  const result =
    toUpper && toUpper === true ? input.toUpperCase() : input.toLowerCase();
  return result;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((i) => i.rating >= 4);
  return result;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make:${this.make}, Year:${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  const result =
    typeof value === "number" ? value * 2 : value.toString().length;
  return result;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  let highest = products[0];
  for (let Product of products) {
    if (Product.price > highest.price) {
      highest = Product;
    }
  }
  return highest;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday || day === Day.Saturday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (n < 0 ? reject("Negative number not allowed") : resolve(n * n)),
      1000
    );
  });
}
