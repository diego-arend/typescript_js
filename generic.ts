// Generics é utilizado quando queremos deixar algo mais genérico, podendo receber mais de um tipo. Porém após a implementação definir, dentro do universo de tipos possíveis a primeira utilização, este tipo não pode ser alterado posteriormente dentro do arquivo.

// Alguns padrões informais de uso letras para definir generics
// S=> state
// T=> Type
// K=> Key
// V=> Value
// E=> Element

type tState = number | string;
// <S extends tState = string> define que é do tipo tState mas tem como padrão string.
function useState<S extends tState = string>() {
  let state: S;

  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// se chamado sem definição é string
// const state = useState();

// definido como number
const state = useState<number>();

// definido com tipo não permitido
// const state = useState<boolean>();

state.setState(123); // funciona com string
console.log(state.getState());

// tem que dar erro com numero pois já foi definido como string
// state.setState("foo"); 
// console.log(state.getState());
