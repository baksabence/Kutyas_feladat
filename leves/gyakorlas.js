//import { kutyaKiir } from "./fuggveny.js"; 
import { kutyaLISTA } from "../modell/adat.js";
import Kartya from "../view/Kartya.js";
let cim = "Minden, amit a kutyákról tudni kell!" 
const nev = "Dézi"
// nev = "morzsa"

// var - globális, függvényszintű
// let - globális, blokkszintű {}
// const - globális, blokkszintű {}

// írjuk a cím alá a cím változó tartalmát
// megfogjuk a html elemet
const cimELEM = $("header")
cimELEM.append(`<p>${cim}</p>`)
// kutya adatait szeretném tárolni, név, kor. nem
//kutya1.nev = "Feri"
//console.log(kutya1)


