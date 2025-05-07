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
