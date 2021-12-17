 const sequencia = {
     _valor: 1, // convenção
     get valor() { return this._valor++ },
     set valor(valor) {
         if(valor > this._valor) {
             this._valor = valor
         }
     }
 }
console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 5
console.log(sequencia.valor)
console.log(sequencia.valor)