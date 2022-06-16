// Só funciona para descrição de obetos


/**
 * Interface Game describe atributs 
 * @param {string} title describe title Game
 * @param {string} description describe sinopse of the Game 
 */
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}


const residentEvil: Game = {
  title: "Resident Evil",
  description: "Raccon City",
  genre: "Terror",
  platform: ["PS3", "PS4", "PC"],

  getSimilars: (title: string) => {
    console.log(`The ${title} is similar to Alone In the Dark`);
  },
};

//type guard
// verifica se a propriedade existe depois chama. Evita erro de compilação para metodos opcionais
if (residentEvil.getSimilars) {
  residentEvil.getSimilars("Resident Evil");
  console.log("Teste call props interface", residentEvil.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string;
}

const nemesis: DLC = {
  title: "Resident Evil Nemesis",
  originalGame: residentEvil,
  newContent: "monster",
  description: "Monster Resident Evil mutation",
  genre: "terror",
};

console.log("Call props extend DLC", nemesis.originalGame)
