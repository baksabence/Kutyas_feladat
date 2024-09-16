export default class Kartya{
    //adattagok
    //tagfüggvények
    //konstruktor
    #kutyaAdat = {} // objektum -- inicializálni kell {}-lel
    #szuloELEM // html dom elem
    constructor(adat, szuloElem){
        this.#kutyaAdat = adat
        this.#szuloELEM = szuloElem
        this.kutyaKiir()
        

        // létrehozzuk a gomb elemet
        this.gombElem = $(".kiv:last")
        this.gombKattint()
        //console.log(gombElem)
    }

    kutyaKiir(){
        let tartalom = ` <div class="card col-lg-4 col-md-6"> <div class="card-body">`

        for(let kulcs in this.#kutyaAdat){
            tartalom += `<h4 class="card-title">${this.#kutyaAdat}</h4>
            <p class="card-text">${this.#kutyaAdat}</p>
            <p class="card-text">${this.#kutyaAdat}</p>`
        }

        tartalom += `</div>
        <button class="kiv btn btn-success">Kiválaszt</button>
      </div>`

        
    }

    gombKattint(){
      this.gombElem.on("click", ()=>{
        console.log(this)
    // saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat
        const e = new CustomEvent("kiválaszt",{detail:this.#kutyaAdat})
        window.dispatchEvent(e)
      })
    }
}

// HF : a kutyakiir tetszőleges objektumokat jelenítsen meg

// nyilfuggveny es a function névtelen fv között a különbség a this használatában van - function esetén a this azt az elemet jelenti, amelyik az eseményt kiváltotta (jellemzően html elem) - nyílfüggvény esetén a nyílfüggvényt körül ölelő osztályra fog mutatni
