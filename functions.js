// Conversões
const binDec = (bin) => { return parseInt(bin, 2) } // Converte um número binário em decimal
const decBin = (dec) => { return parseInt(dec, 10) } // Converte um número decimal em binário

// Memória Principal
M = {
    0: '0000000100000000101000000001000000001011',
    1: '0000001000000000101000000010000000001011',
    2: '0000001100000000101000000011000000001011',
    3: '0000010000000000101000000100000000001011',
    4: '0000100100000000101000001010000000000000',
    5: '0010000100000000110000000000000000000000',
    6: '0000000000000000000000000000000000000000',
    7: '0000000000000000000000000000000000000000',
    8: '0000000000000000000000000000000000000000',
    9: '0000000000000000000000000000000000000000',
    10: '0000000000000000000000000000000000000000',
    11: '0000000000000000000000000000000000000001',
    12: '1000000000000000000000000000000000000001'
}

// Unidade de Controle
PC = 0
MAR = '0'
IR = '0'
IBR = '0'

// Unidade Lógica e Aritimética
MBR = '0'
AC = '0'
MQ = '0'

// -------------------------------------------- //

contadorDeCiclos = 1

while (IR != '00000000') {

    // Ciclo de Busca
    if (IBR.length > 1) {

        IR = IBR.slice(0, 8)
        MAR = IBR.slice(8, 20)
        PC += 1
        IBR = '0'

        console.log("IF - 1 CASO")
    }

    else {

        MAR = PC
        MBR = M[MAR]

        console.log(PC)

        IR = MBR.slice(0, 8)
        MAR = MBR.slice(8, 20)
        IBR = MBR.slice(20, 40)

        console.log("ELSE - 2 CASO")
    }

    // Ciclo de Execução

        // Transferência de Dados ---------------------------------------------------------- //

    if (IR === '00001010') {
        AC = MQ
        console.log("LOAD MQ") // 1
    }

    if (IR === '00001001') {
        MQ = M[binDec(MAR)]
        console.log("LOAD MQ, M[X]") // 2 
    }

    if (IR === '00100001') {
        M[binDec(MAR)] = AC
        console.log("STOR M[X]") // 3
    }

    if (IR === '00000001') {
        AC = M[MAR]
        console.log("LOAD M[X]") // 4
    }
    if (IR === '00000010') {
        AC = -M[MAR]
        console.log("LOAD -M[X]") // 5
    }
    if (IR === '00000011') {

        console.log("LOAD |M[X]|") // 6
    }

    if (IR === '00000100') {

        console.log("LOAD -|M[X]|") // 7
    }

        // Desvio Incondicional ---------------------------------------------------------- //

    if (IR === '00001101') {

        console.log("JUMP M[X, 0:19]") // 8
    }

    if (IR === '00001110') {

        console.log("JUMP M[X, 20:39]") // 9
    }

        // Desvio Condicional ---------------------------------------------------------- //

    if (IR === '00001111') {

        console.log("JUMP + M[X, 0:19]") // 10
    }

    if (IR === '00010000') {

        console.log("JUMP + M[X, 20:39]") // 11
    }

        // Aritmética ---------------------------------------------------------- //

    if (IR === '00000101') {

        console.log("ADD M[X]") // 12
    }

    if (IR === '00000111') {

        console.log("ADD |M[X]|") // 13
    }

    if (IR === '00000110') {

        console.log("SUB M[X]") // 14
    }

    if (IR === '00001000') {

        console.log("SUB M|[X]|") // 15
    }

    if (IR === '00001011') {

        console.log("MUL M[X]") // 16
    }

    if (IR === '00001100') {

        console.log("DIV M[X]") // 17
    }

    if (IR === '00010100') {

        console.log("LSH") // 18
    }

    if (IR === '00010101') {

        console.log("RSH") // 19
    }

        // Modificação de Endereço ---------------------------------------------------------- //

    if (IR === '00010010') {

        console.log("STOR M[X, 8:19]") // 20
    }

    if (IR === '00010011') {

        console.log("STOR M[X, 28:39]") // 21
    }

    console.log("Ciclo de Busca", contadorDeCiclos)
    contadorDeCiclos += 1
}

// -------------------------------------------- //

// Gera uma palavra de 40 bits no formato string
function gerarPalavra() {
    palavra = ''
    binario = '01'
    for (let index = 0; index <= 39; index++) {
        palavra += binario.charAt(Math.floor(Math.random() * binario.length))
    }
    return palavra
}

// Atualiza a memória com objetos por meio de um id e uma palavra
function atualizarPalavra(memoria, posicao, novoValor) {
    for (let index = 0; index < Object.keys(memoria).length; index++) {
        if (Object.keys(memoria)[index] == posicao) {
            memoria[posicao] = novoValor
            return memoria
            break
        }
    }
}