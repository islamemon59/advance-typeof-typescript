type User = {
  name: string;
  age: number;
};

//interface : object type: array, object, function
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "Emon",
  age: 20,
  role: "admin",
};

const user2: IUser = {
  name: "Hossain",
  age: 23,
};


type Add = (num1: number, num2: number) => number;
interface IAdd {
    (num1:number, num2:number) : number
}

const add: IAdd = (num1, num2) => num1 + num2;



type Friends = string[]
//  0    1   2

interface IFriends {
    [index: number] : string
}

const friends: IFriends = ["A", "B", "C"];
