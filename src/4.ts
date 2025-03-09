class Person {
    constructor(public name: string, public age: number) {}
}

let people: Person[] = []
people.push(new Person("John", 28))
people.push(new Person("Alice", 31))
people.push(new Person("Bob", 45))

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`)
}
