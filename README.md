<!--

জনপ্রিয় ৭ ধরনের অ্যালগরিদম

| ধরন                 | উদাহরণ                    | প্রধান ব্যবহার
| ------------------- | ------------------------- | ----------------------------- |
| Brute Force         | Linear Search             | সহজ পদ্ধতি, সব চেষ্টা            |
| Divide & Conquer    | Quick Sort                | বড় সমস্যা ছোট করে সমাধান      |
| Greedy              | Dijkstra                  | প্রতিটি ধাপে সেরা নির্বাচন          |
| Dynamic Programming | Fibonacci                 | আগের ফল সংরক্ষণ              |
| Backtracking        | Sudoku Solver             | চেষ্টা → ব্যর্থ → ফিরে যাওয়া         |
| Recursive           | Factorial                 | নিজেকে ডাকে                   |
| Searching & Sorting | Binary Search, Merge Sort | ডেটা সাজানো বা খোঁজা            |
 -->

1. **any, unknown, never** এর পার্থক্য
2. **interface এবং type** এর মধ্যে পার্থক্য

### ==> 1. any, unknown, never — পার্থক্য

## any

**A. any যেকোনো ভ্যালুর type হতে পারে এবং তার দ্বারা সাধারনত যেকোনো type এর কাজ করা যায়। TypeScript কোনো warning দেবে না।**
B. এটা ব্যবহার করলে রানটাইমে error আসতে পারে কিন্তূ তাতখনাত ঝামেলা থেকে মূক্ত হয়া জায়
C. এটা সরাসরি javscript এর মত কাজ করে

**উদাহরণ:**

```ts
type Data = any;

let data1: Data = "hello";
data1 = 5;
data1 = undefined;

let data2: any;
data2 = 10;
data2 = "Hello";
data2.toUpperCase();
```

## unknown

**A.যেকোনো ভ্যালু রাখা যায়, কিন্তু ব্যবহার করতে চাইলে টাইপ চেক করতে হবে। বা Type Assertion ব্যবোহার করতে হবে**
B.এটা any থেকে বেশি safety দেয় । এটা সরাসরি javscript এর মত কাজ করে না ।
C. type check করা ছাড়া ব্যবহার করলে error আসতে পারে

**উদাহরণ:**

```ts
const usingunknown = (value: unknown) => {
  if (typeof value === "string") {
    return "i'm string type";
  } else if (typeof value === "number") {
    return "i'm number type";
  } else {
    return "avabe onno type o hote pare";
  }
};

usingunknown("");
usingunknown(1);
usingunknown(true);
```

## never

**A.কোন type এর কোন value ই return করে না ।**
B.never সাধারণত তখনই হয় যখন ফাংশন error throw করে
C.অথবা infinit loop যখন হয়

**উদাহরণ:**

```ts
const usingNeverThrow = (mas: string): never => {
  throw Error(mas);
};

usingNeverThrow("Something  wrong!");

const usingNeverLoop = (): never => {
  while (true) {}
};

console.log(usingNeverLoop());
```

---

# Interface vs Type — পার্থক্য

## **1. Extension / Inheritance**

- interface → `extends` ব্যবহার করে
- type → `&` (intersection) ব্যবহার করে

```ts
interface User {
  name: string;
}
interface Admin extends User {
  role: string;
}

type Person = {
  name: string;
};
type Employee = Person & {
  salary: number;
};
```

---

## **2. Declaration Merging**

- interface → merge হয়
- type → merge হয় না

```ts
interface Box {
  height: number;
}
interface Box {
  width: number;
}
// Result: { height: number; width: number }
```

---

## **3. Primitive Type Support**

type → primitive, union, tuple, function সবই করা যায়
interface → object structure only

```ts
type ID = string | number; // possible
// interface ID = string | number  not possible
```

---

# Conclusion

- **any** → সম্পূর্ণ আনলিমিটেড ও unsafe
- **unknown** → সীমিত কিন্তু নিরাপদ
- **never** → কখনোই return করে না
- **interface** → structure modeling ও merging-friendly
- **type** → flexible ও powerful
