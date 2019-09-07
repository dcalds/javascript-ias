// Memória Principal
memoriaPrincipal = []
// Unidade de Controle
// Unidade Lógica e Aritimética
// Entrada/Saída

// Gera uma palavra de 40 bits
function gerarPalavra () {
    palavra = []
    for (let index = 0; index <= 39; index++) {
        palavra.push(Math.floor(Math.random() * 2))
    }
    return palavra.toString()
}

// Popula a memória com objetos possuindo id e uma palavra
function popularMemoria (memoria) {
    for (let i = 0; i <= 39; i++) {
        memoria.push( {id: i, palavra: gerarPalavra()} )
    }
}

popularMemoria(memoriaPrincipal)

console.log(memoriaPrincipal)

// Iniciar  primeiro cliclo de busca
function cicloDeBusca() {
    console.log("Ciclo de busca")
}

// Iniciar  primeiro cliclo de busca
function cicloDeExecucao() {
    console.log("Ciclo de Execução")
}