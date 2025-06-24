//Console.table() example
const person = {
  name: 'Miguel',
  twitter: 'midudev',
  frontend: true,
}
console.table(person);



//CONSOLE.GROUP
console.group("General Information");
console.log("This is a simple JavaScript program that displays a greeting message.");
console.log("Hi, Maye");
console.groupEnd();


//CONSOLE.TIME
console.time("Execution Time");
console.log("This message will be displayed before the timer stops.");
console.timeEnd("Execution Time");  