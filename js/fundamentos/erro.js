function tratarErroELanacar(erro) {
    // throw new Error ('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date:  new Date
    }
}
function imprimirMoneGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELanacar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: "Roberto" }
imprimirMoneGritado(obj)