(() => {


    const userName:string = 'Juan Manuel';


    function getUserName ():string {
        return userName;
    };


    const getWelcomeMessage = ():string => {

        return `Bienvenido ${getUserName()}`;
    };


    const name = getUserName();

    const message = getWelcomeMessage();

    console.log(name);
    console.log(message);






})();