# 1. What are some differences between interfaces and types in TypeScript?

Interface , which is used to define the structure of an object also it acts like classes , or function - specifying what properties or methods they should have , without providing the implementation. On the other hand, type is used to define a custom type alias. Especially, a name for a specific type or combination of types. Actually,
Both are smiler but type is more flexible.

### let's see the difference between these :

## Extending

### interface :

Using `extend` keyword to build on existing interfaces it can be extended, making it ideal for hierarchical and object-based designs.

### type :

Using Intersection (`&`) cal also be extended, allowing combination of multiple types into one, not just objects but also for primitives.

## Declaration merging

### interface:

Supports declaration merging. If you define the same interface name more than once, TypeScript merges their properties automatically — useful in extending existing types like third-party libraries.

### type:

Does not support declaration merging. Redefining the same type name causes an error; you need to use intersections manually to combine.

## Use with primitives

### interface:

Only works with object-like structures. You can't use it to represent primitives like strings, numbers, or unions of those.

### type:

Can represent anything — primitives (string, number), tuples, unions, intersections, functions, or objects.

## example:

## Shape

### interface

`interface User {
  name: string;
  age: number;
}`

### type

`type User = {
  name: string;
  age: number;
}`

## Extending

### interface

`interface Animal {
name: string;
}

interface Dog extends Animal {
breed: string;
}`

### type

`type Animal = {
name: string;
};

type Dog = Animal & {
breed: string;
}`

_Both can extend, but the syntax is different._

## Union (Only type support)

`type Status = "success" | "error" | "loading"`

`// ❌ Not possible with interface
// interface Status = "success" | "error" | "loading"; // Error`

_`type` supports unions and primitives, but `interface` doesn’t._

## Use with Primitives & Tuples

`type ID = string | number;

type Point = [number, number]`

`// ❌ Not allowed with interface
// interface ID = string | number; // Error`

_`type` can define unions, tuples, and primitives — `interface` can't._
