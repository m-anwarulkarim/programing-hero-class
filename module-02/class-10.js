// Step 1: Create lookup table using reduce
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

const postLookup = posts.reduce((acc, post) => {
  if (!acc[post.userId]) {
    acc[post.userId] = [];
  }
  acc[post.userId].push(post);
  return acc;
}, {});

// Step 2: Map users and attach posts
const result = users.map((user) => ({
  ...user,
  posts: postLookup[user.id] || [],
}));

console.log(JSON.stringify(result));
