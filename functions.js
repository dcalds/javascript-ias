// Conversões
const binDec = (bin) => { return parseInt(bin, 2) } // Converte um número binário em decimal
const decBin = (dec) => { return parseInt(parseInt(dec).toString(2)) } // Converte um número decimal em binário

// Memória Principal
M = {
    0: '0000000100000000101000000001000000001011',  // 0 load M(10)    load M(11)
    1: '0000001000000000101000000010000000001011',  // 1 load -M(10)   load -M(11)
    2: '0000001100000000101000000011000000001011',  // 2 load |M(10)| |load M(11)|
    3: '0000010000000000101000000100000000001011',  // 3 load |M(10)| |load M(11)|
    4: '0000100100000000101000001010000000000000',  // 4 load MQ,M(10) load MQ
    5: '0010000100000000110000000000000000000000',  // 5 load M(12),AC
    6: '0000000000000000000000000000000000000000',  // 6
    7: '0000000000000000000000000000000000000000',  // 7
    8: '0000000000000000000000000000000000000000',  // 8
    9: '0000000000000000000000000000000000000000',  // 9
    10: '0000000000000000000000000000000000000001', // 10
    11: '1000000000000000000000000000000000000001' // 11
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


while (IR != '00000000') { // Enquanto as instruções não forem 00000000 (Fim do programa), continua-se a buscar novas instruções

    console.log(`// ------------ Ciclo: ${contadorDeCiclos} ------------ //`)

    // Ciclo de Busca
    if (IBR.length > 1) {   // Caso haja alguma coisa no IBR significa que há instrução na direita para ser executada

        IR = IBR.slice(0, 8)    // Instrução da Direita
        MAR = IBR.slice(8, 20)  // Endereço de Memória da Direita
        PC += 1                 // PC vai apontar para a próxima instrução a ser executada
        IBR = '0'               // IBR resetado, indicando que a instrução da direita foi executada

        console.log("DIREITA >>>")
        console.log("PC :", PC)
    }

    else {                  // Caso não haja nenhuma instrução na direita (IBR vazio), é neste condicial onde separam-se os dois lados

        MAR = PC                // PC passa o endereço para o MAR
        MBR = M[MAR]            // MBR recebe o conteúdo armazenado no endereço de memória indicado pelo MAR

        IR = MBR.slice(0, 8)    // IR recebe a instrução da esquerda
        MAR = MBR.slice(8, 20)  // MAR recebe agora apenas o endereço de memória do lado esquerdo da instrução
        IBR = MBR.slice(20, 40) // O IBR recebe o lado direito com OPCODE e Endereço de Memória, agora não está mais vazio

        console.log("ESQUERDA <<<")
        console.log("PC :", PC)
    }

    // Ciclo de Execução

        // Transferência de Dados ---------------------------------------------------------- //

    if (IR === '00001010') {
        AC = MQ
        console.log("LOAD MQ") // 1
        console.log("AC :", AC)        
    }

    if (IR === '00001001') {
        MQ = M[binDec(MAR)]
        console.log(`LOAD MQ, M[${binDec(MAR)}]`) // 2 
        console.log("MQ :", MQ)        
    }

    if (IR === '00100001') {
        M[binDec(MAR)] = AC
        console.log(`STOR M[${binDec(MAR)}]`) // 3
        console.log("M[MAR] :", M[binDec(MAR)])
    }

    if (IR === '00000001') {
        
        AC = M[binDec(MAR)]
        console.log(`LOAD M[${binDec(MAR)}]`) // 4
        console.log("AC :", AC)        
    }
    if (IR === '00000010') {
        
        ACpos = M[binDec(MAR)]
        AC = '1' + ACpos.slice(1,40)
        console.log(`LOAD -M[${binDec(MAR)}]`) // 5
        console.log("AC :", AC)        
    }
    if (IR === '00000011') {
        AC = M[binDec(MAR)]
        console.log(`LOAD |M[${binDec(MAR)}]|`) // 6
        console.log("AC :", AC)        
    }

    if (IR === '00000100') {
        ACpos = M[binDec(MAR)]
        AC = '1' + ACpos.slice(1,40)
        console.log(`LOAD -|M[${binDec(MAR)}]|`) // 7
        console.log("AC :", AC)        
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

    contadorDeCiclos += 1
}

// -------------------------------------------- //

console.log("// ------------ MEMÓRIA PRINCIPAL ------------ //")
console.log(M)

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