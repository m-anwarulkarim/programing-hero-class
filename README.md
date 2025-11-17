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

---

# 1. any, unknown, never — পার্থক্য

## any

**যেকোনো ভ্যালু হতে পারে এবং যেকোনো অপারেশন করা যায়।**
TypeScript কোনো warning দেবে না।

Flexible
Unsafe

**উদাহরণ:**

```ts
let data: any;
data = 10;
data = "Hello";
data.toUpperCase(); // No error, but risky
```

---

## unknown

**যেকোনো ভ্যালু রাখা যায়, কিন্তু ব্যবহার করতে চাইলে টাইপ চেক করতে হবে।**

Safe any
Type-check ছাড়া ব্যবহার করা যায় না

**উদাহরণ:**

```ts
let value: unknown;
value = "Hello";

// value.toUpperCase();  Error

if (typeof value === "string") {
  console.log(value.toUpperCase());
  Safe;
}
```

---

## never

**এই টাইপে কোনো ভ্যালু থাকতে পারে না।**
সাধারণত error throw অথবা infinite loop ফাংশনে ব্যবহৃত হয়।

**উদাহরণ:**

```ts
function throwError(): never {
  throw new Error("Error occured");
}
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

## 🔹 **2. Declaration Merging**

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

## 🔹 **3. Primitive Type Support**

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
