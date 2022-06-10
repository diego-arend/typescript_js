"use strict";
// Generics é utilizado quando queremos deixar algo mais genérico, podendo receber mais de um tipo. Porém após a implementação definir, dentro do universo de tipos possíveis a primeira utilização, este tipo não pode ser alterado posteriormente dentro do arquivo.
// <S extends tState = string> define que é do tipo tState mas tem como padrão string.
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
// se chamado sem definição é string
// const state = useState();
// definido como number
const state = useState();
// definido com tipo não permitido
// const state = useState<boolean>();
state.setState(123); // funciona com string
console.log(state.getState());
// tem que dar erro com numero pois já foi definido como string
// state.setState("foo"); 
// console.log(state.getState());
