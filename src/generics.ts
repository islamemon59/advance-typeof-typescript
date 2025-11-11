//? Generic -> dynamically normalize

type IsGeneric<value> = Array<value>;

const friends: IsGeneric<string> = ["Mr.X", "Mr.Y", "Mr.Z"];
const rollNumber: IsGeneric<number> = [1, 3, 5];
const isBoolean: IsGeneric<boolean> = [true, false, true];

//Tuple generic
type Age<X, Y> = [X, Y];
const age1: Age<number, number> = [20, 20];
const age2: Age<string, string> = ["20", "20"];

type User = {name: string, age: number}

const user: IsGeneric<User> = [
  {
    name: "emon",
    age: 20,
  },
  {
    name: "Hossain",
    age: 22,
  },
];
