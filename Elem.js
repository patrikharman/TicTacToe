export default class Elem{

    #ertek="";
    #szuloElem;
    #divElem;
    #id=0;
    constructor(id,ertek,szuloElem){
        this.#id=id;
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit()
        this.#divElem = this.#szuloElem.children("div:last-child");
        //console.log(this.#divElem)
        this.#divElem.on("click", () => {
            console.log(this.#id);
            if (this.#ertek === " ") {
                this.#esemenyTrigger("lepes")
            }
           
        })
    }
    #megjelenit(){
        let txt = `<div><p>${this.#ertek}</p></div>`;
        this.#szuloElem.append(txt);
    }
    #esemenyTrigger(esemenyNev){
        const e = new CustomEvent(esemenyNev,{detail:this.#id})
        window.dispatchEvent(e)
    }
    
}