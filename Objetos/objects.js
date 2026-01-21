(() => {
    /*     let hero = {
            name: 'Daniel',
            age: 6,
            power: ['Fuerza', 'Invisible'],
            getName ():string {
                return this.name
            }
    
        }
    
        console.log(hero.name);
    
        console.log(hero.getName()) */
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash.getNombre());
})();
export {};
