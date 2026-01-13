(() => {
    const userName = 'Juan Manuel';
    function getUserName() {
        return userName;
    }
    ;
    const getWelcomeMessage = () => {
        return `Bienvenido ${getUserName()}`;
    };
    const name = getUserName();
    const message = getWelcomeMessage();
    console.log(name);
    console.log(message);
})();
export {};
