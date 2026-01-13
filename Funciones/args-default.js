(() => {
    const createMessage = (name, role, loud = false) => {
        if (loud) {
            return `Name: ${name}, role: ${role || 'usuario'}`.toUpperCase();
        }
        else {
            return `Name: ${name}, role: ${role || 'usuario'}`;
        }
        ;
    };
    const user1 = createMessage('Juan Manuel');
    const user2 = createMessage('Daniel', 'Desarrollador');
    const user3 = createMessage('Primitivo', 'Encargado Desarrollo', true);
    console.log(`
        ${user1};
        ${user2};
        ${user3};
        `);
})();
export {};
