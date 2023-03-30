// let num1: number = 10;

// let num: number = 0.444;
// let hex: number = 0xbeef;
// let bin: number = 0b0010;

// let yes: boolean = true;
// let no: boolean = false;

// const arr3: (Date| string[])[] = [new Date(), new Date(), ["1", "a"]];



console.log("hello world")

function welcomePerson(person: Person):string{
    console.log(`hey ${person.firstName} ${person.lastName}`);
    return `hey ${person.firstName} ${person.lastName}`
}
const person2 = {
    firstName: "shazad",
    lastName: "khan"
};

welcomePerson(person2)

interface Person{
    firstName: string;
    lastName: string;
}