// const sales = [
//   { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
//   { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
//   { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
//   { category: "Home", item: "Chair", price: 150, quantity: 1 },
//   { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
//   { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
// ];

// const dataSales = sales.reduce((table, cuurent) => {
//   if (table[cuurent.category]) {
//     table[cuurent.category]++;
//   } else {
//     cuurent;
//   }
//   return table;
// }, {});

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const dataSales = sales.reduce((table, current) => {
  const category = current.category;

  // যদি সেই category আগেই থাকে
  if (table[category]) {
    table[category].totalRevenue += current.price * current.quantity;
    table[category].totalItems += current.quantity;
  } else {
    // না থাকলে নতুন object তৈরি করো
    table[category] = {
      totalRevenue: current.price * current.quantity,
      totalItems: current.quantity,
    };
  }

  return table;
}, {});

console.log(dataSales);
