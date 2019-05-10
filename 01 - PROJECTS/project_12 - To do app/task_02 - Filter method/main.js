const arr = [212, 12343, 324, 123, 12, 22, 333];

//liczby niepazyste
const oddNumbers = arr.filter(number => number % 2);

//liczby parzyste
const evenNumbers = arr.filter(number => !(number % 2));

//liczby wieksze od 100
const numberBiggerThen100 = arr.filter(number => number > 100);

const double = arr.map(number => number * 2);

arr.forEach((number, index) => arr[index] = number * 2);