(() => {
    const greetUser = (name, age) => {
        return `Hola ${name}, tiene ${age} años`;
    };
    const user = greetUser('Daniel', 6);
    console.log(user);
})();
export {};
