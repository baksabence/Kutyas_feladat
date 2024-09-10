import { kutyaLISTA } from "./modell/adat.js";
import Kartyak from "./view/Kartyak.js";
import Kartya from "./view/Kartya.js";

// ha rákattintunk a kiválasztott kutyára, akkor a gombhoz tartozó kutya adata kerüljön bele a kivKutyaListába
const kivalasztottKutya = []


const taroloELEM = $(".tartalom")
const kivELEM = $(".kivalasztott")
new Kartyak(kutyaLISTA, taroloELEM)




// feliratkozunk a saját eseményünkre
$(window).on("kiválaszt", (event)=>{
    console.log(event.detail)
    kivalasztottKutya.push(event.detail) // a kutya listába küldjük a tulajdonságokat
    console.log(kivalasztottKutya)
    new Kartya(event.detail, kivELEM) // HF megoldani a problémát
})