(()=>{

    const greetUser = (name: string, age: number):string => {

        return `Hola ${name}, tiene ${age} años`;
    } 

    const user = greetUser('Daniel', 6);

    console.log(user);

})();