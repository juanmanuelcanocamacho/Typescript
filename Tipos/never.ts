(()=> {



    const fail = (message: string ): never => {

        throw new Error(message);
        
    };


    const validateNumber = (value: number):void =>{

        if( value < 0){
            fail('Número inválido: es negativo ');
        }else{
            console.log('Es correcto')};
    };


    validateNumber(3);
    validateNumber(-3);


})();