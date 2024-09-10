import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = []; // []-lel inicializálni
  #szuloElem;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.kartyakKiir();
  }

  kartyakKiir() {
    this.#lista.forEach((elem) => {
      //console.log(elem)
      new Kartya(elem, this.#szuloElem);
    });
  }
}

// feladata, hogy tobb kartyat tudjon egymas melle tenni