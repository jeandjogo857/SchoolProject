interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 }
];

function getOldestUser(users: User[]): User | null {
    let oldestUser = null;
    for (const user of users) {
        if (!oldestUser || user.age > oldestUser.age) {
            oldestUser = user;
        }
    }
    return oldestUser;
}
