(() => {

    const buildMessage = (title: string, ...details: string[]): string =>{

        if(details.length == 0 ){
            return `Título: ${title} | Sin detalles`
        }else{
            return `Título: ${title} | Detalles: ${details.join(', ')}`
        };
    };

    const object1 = buildMessage('Tennis');
    const object2 = buildMessage('Fútbol', 'Pelota', 'Jugadores')

    console.log(object1);
    console.log(object2);








})();