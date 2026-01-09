(() => {
    const fail = (message) => {
        throw new Error(message);
    };
    const validateNumber = (value) => {
        if (value < 0) {
            fail('Número inválido: es negativo ');
        }
        else {
            console.log('Es correcto');
        }
        ;
    };
    validateNumber(3);
    validateNumber(-3);
})();
export {};
