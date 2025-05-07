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
const myCar = new Car("Toyota", 2020, "Corolla");
