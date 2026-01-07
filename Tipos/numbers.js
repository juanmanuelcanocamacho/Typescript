(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (villians > avengers) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Estamos a salvo");
    }
    avengers = 55;
    console.log({ avengers });
})();
export {};
