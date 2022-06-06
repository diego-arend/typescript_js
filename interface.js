"use strict";
// Só funciona para descrição de obetos
const residentEvil = {
    title: "Resident Evil",
    description: "Raccon City",
    genre: "Terror",
    platform: ["PS3", "PS4", "PC"],
    getSimilars: (title) => {
        console.log(`The ${title} is similar to Alone In the Dark`);
    },
};
//type guard
// verifica se a propriedade existe depois chama. Evita erro de compilação para metodos opcionais
if (residentEvil.getSimilars) {
    residentEvil.getSimilars("Resident Evil");
    console.log("Teste call props interface", residentEvil.title);
}
const nemesis = {
    title: "Resident Evil Nemesis",
    originalGame: residentEvil,
    newContent: "monster",
    description: "Monster Resident Evil mutation",
    genre: "terror",
};
console.log("Call props extend DLC", nemesis.originalGame);
