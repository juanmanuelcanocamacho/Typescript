(() => {
    function showMessage() {
        console.log('Mostrando mensaje por consola (función)');
    }
    ;
    const logWarning = () => {
        console.log('Mostrando mensaje por consola (Función flecha)');
    };
    showMessage();
    const a = logWarning();
    console.log(a);
})();
export {};
