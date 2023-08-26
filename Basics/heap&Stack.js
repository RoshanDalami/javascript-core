//stack(primitive) , Heap(non-primitive)

let myYoutubeName = "Tech Channel";
let anotherName = myYoutubeName;
anotherName = "New Channel";

// console.log(anotherName);
// console.log(myYoutubeName);

let userOne = {
  email: "roshandalami0@gmail.com",
  upi: "9108715098@ybl",
};

let userTwo = userOne;

userTwo.email = "roshandalami7@gmail.com";

console.log(userOne);
console.log(userTwo);
