(() => {


    const getProfile = (name:string, age?: number): string => {

        return `Nombre: ${name}, Edad: ${age || 'Edad no especificada'}`;
    };

    const user1 = getProfile('Daniel', 6);
    const user2 = getProfile('Juan Manuel')

    console.log(user1);
    console.log(user2);





})();