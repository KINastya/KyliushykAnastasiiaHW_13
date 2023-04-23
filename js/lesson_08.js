// Методи перебору масива

// includes
// перевірити чи є в масиві переданий елемент
// includes(searchElement, fromIndex)
// fromIndex - необов'язково
// fromIndex - з якого індексу починати перебирати масив
// includes повертає boolean
// const fruits = ["Banana", "Apple", "Pear"];

// console.log(fruits.includes("Banana")); // true
// console.log(fruits.includes("John")); // false

// console.log(fruits.includes("Banana", 1)); // false

// =====
// indexOf()
// indexOf перебирає масив з початку та повертає індекс першого знайденого елемента
// fromIndex - необов'язково
// якщо indexOf не знайцшов елемент, то він поіертає -1
// const fruits = ["Banana", "Apple", "Pear"];

// console.log(fruits.indexOf("Banana")); // 0
// console.log(fruits.indexOf("Pear")); // 2

// console.log(fruits.indexOf("John")); // -1

// lastIndexOf()
// lastIndexOf перебирає масив з кінця та повертає індекс першого знайденого елемента
// fromIndex - з якого індексу починати перебирати масив
// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.indexOf("Dodo")); // 0
// console.log(animals.lastIndexOf("Dodo")); // 3

// console.log(animals.lastIndexOf("Dodo", 1)); // 3

// ========
// forEach
// forEach повертає undefined
// const fruits = ["Banana", "Apple", "Pear"];
// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },

//   {
//     name: "Bob",
//     status: "ACTIVE",
//   },
//   {
//     name: "Dave",
//     status: "ACTIVE",
//   },
// ];

// fruits.forEach((fruit) => {
//   fruit = fruit.toUpperCase();
// });
// users.forEach((user) => {
//   user.name = user.name.toUpperCase();
// });

// console.log(fruits); // ['Banana', 'Apple', 'Pear']
// console.log(users); // юзери з великої букви

// const newArr = fruits.forEach((element, index, array) => {
//   console.log(element, index, array);

//   return element;
// });

// console.log(newArr); // undefined

// for (let index = 0; index < fruits.length; index++) {
//   const element = fruits[index];
// }

// ========
// map()
// map повертає новий масив

// const animals = ["Dodo", "Tiger", "Penguin", "Bird"];

// const newAnimals = animals.map((element, index, array) => {
//   //   console.log(element);

//   return element.toUpperCase();
// });

// console.log(animals);
// console.log(newAnimals);

// const noTigers = animals.map((element) => {
//   if (element !== "Tiger") {
//     return element;
//   }
// });

// console.log(noTigers); // ['Dodo', undefined, 'Penguin', 'Bird']

// ========
// filter()

// const animals = ["Dodo", "Bird", "Tiger", "Penguin", "Bird", "Bird"];

// const noBirds = animals.filter((animal) => {
//   return animal !== "Bird";
// });

// console.log(noBirds); // ['Dodo', 'Tiger', 'Penguin']

// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
//   {
//     name: "Dave",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob2",
//     status: "INACTIVE",
//   },
//   {
//     name: "Bob1",
//     status: "INACTIVE",
//   },
// ];

// const onlyActiveUsers = users.filter((user) => {
//   return user.status !== "INACTIVE";
// });

// console.log(onlyActiveUsers);

// ========
// some()
// повертає boolean
// хочаб один
// const animals = ["Dodo", "Bird", "Tiger", "Penguin", "Bird", "Bird"];

// const isHasTiger = animals.some((animal) => {
//   return animal === "Tiger";
// });

// console.log(isHasTiger);

// every()
// повертає boolean
// всі
// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
// ];

// const isActive = users.every((user) => {
//   return user.status === "ACTIVE";
// });

// console.log(isActive);

// =======
// find()
// знайти елемент
// хочаб один
// повертає перший елемент для якого передана функція колбек повернула true
// поверне
// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
// ];

// const foundElement1 = users.find((user) => {
//   return user.name === "Bob";
// });

// const foundElement2 = users.find((user) => {
//   return user.name === "Krist";
// });

// console.log(foundElement1); // {name: 'Bob', status: 'ACTIVE'}
// console.log(foundElement2); // undefined

// ==================
// findIndex()
// повертає індекс першого елементу для якого передана функція колбек повернула true
// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
// ];

// const userIndex = users.findIndex((user) => {
//   return user.name === "Bob";
// });

// console.log(userIndex);

// ==================
// reduce()
// array.reduce(callback[, initialValue])
// reduce((acc, element, index, array) => {
//     ...
// }, acc initial value);

// const numbers = [11, 22, 33, 44, 55];

// const sum = numbers.reduce((acc, element, index, array) => {
//   return acc + element;
// }, 0);

// console.log(sum);

// const users = [
//   {
//     name: "Jack",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "ACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
//   {
//     name: "Bob",
//     status: "INACTIVE",
//   },
// ];

// const onlyActiveUsers = users.reduce((acc, user) => {
//   //   console.log(acc);
//   if (user.status === "ACTIVE") {
//     return [...acc, user];
//   }

//   return acc;
// }, []);

// console.log(onlyActiveUsers);

// myFilter
// function myFilter(array, callback) {
//   const res = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (callback(element, index, array)) {
//       res.push(element);
//     }
//   }
//   return res;
// }

// const animals = ["Dodo", "Bird", "Tiger", "Penguin", "Bird", "Bird"];

// const noBirds = myFilter(animals, (animal) => {
//   return animal !== "23132";
// });

// console.log(noBirds);

// =========
// sort()
// метод сортування масиву
// mutable method

// const fruits = ["арбузи", "банани", "Вишня"];
// fruits.sort();

// console.log(fruits); // ['Вишня', 'арбузи', 'банани']

// const scores = [1, 2, 10, 21, 100, 12, 13, 5, 66, 321];
// scores.sort(); // [1, 10, 2, 21]

// console.log(scores);

// const numbers = [1, 2, 10, 21, 100, 12, 13, 5, 66, 321];

// сортування за зростанням
// numbers.sort((a, b) => {
//   return a - b;
// });

// сортування за спаданням
// numbers.sort((a, b) => {
//   return b - a;
// });

// console.log(numbers);
