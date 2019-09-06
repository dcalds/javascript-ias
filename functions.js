function gerarPalavra () {
    palavra = []
    for (let i = 0; i <= 39; i++){
        palavra.push(Math.floor(Math.random() * 2))
    }
    return palavra
}

ir = []
ibr = []
mar = null
mbr = null
pc = 0


nova = gerarPalavra()

mar = nova.slice(1,8)

console.log(mar)

// Iniciar  primeiro cliclo de busca
function cicloDeBusca () {

    gerarPalavra()

    while (ir != [0,0,0,0,0,0,0,0] ) {
        if ( ibr.length > 1 ) {
            console.log("Executou")
        }
        else {
            console.log("Não executou")
        }
    }
}