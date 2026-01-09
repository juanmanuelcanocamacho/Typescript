(() => {
    function showMessage (): void {
        console.log('Mostrando mensaje por consola (función)');
    };



    const logWarning = ():void => {
        console.log('Mostrando mensaje por consola (Función flecha)')
    }



    showMessage();

    const a = logWarning();

    console.log(a);

})()