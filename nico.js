let a = 3;
const b = 4;

const carrello =  {
     prodotti: [ {

        nome: "PlaySation",
        prezzo: 500,
        quantita: 10,

},
{
        nome: "Mac",
        prezzo: 3000,
        quantita: 10,
}
],

getTot() {

    let tot = 0;
    for (let i = 0; i < this.prodotti.length; i++) {
      let n = this.prodotti[i].prezzo * this.prodotti[i].quantita
        tot += n;
        
    }
    return tot;
}
}
console.log(carrello.getTot());