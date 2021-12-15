// usando a notação Literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 1000, 0.15)
const p2 = new Produto('Notebook', 5000, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return  (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario('Paulo', 1000, 2)
const f2 = new criarFuncionario('Ana', 5000, 5)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto ...
const fromJSON = JSON.parse('{"info":"Sou um Json"}')
console.log(fromJSON.info)