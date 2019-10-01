# Arquitetura do Computador IAS

Simulação de um computador IAS, um dos primeiros primeiros computadores a implementar o conceito armazenamento na memória, baseado na arquitetura de Von Neumann.

### Memória Principal (MP)

A memória principal do IAS realiza duas operações básicas, escrita e leitura de valores nas palavras da memória.

### Unidade de Controle (UC)

A unidade de controle do IAS é responsável por coordenar cada um dos módulos para que o computador execute as instruções armazenadas na memória. Temos quatro registradores internos:

- PC: Armazena um valor que representa o endereço de memória da próxima instrução a ser executada.

- MAR: Armazena um valor que representa um endereço de memória que será lido pela Memória Principal durante a escrita ou leitura de dados.

- IR: Armazena a instrução que está sendo executada no momento. A Unidade de Controle lê e interpreta os bits armazenados dentro deste registrador e envia os dados para o resto do computador, coordenando esta instrução.

- IBR: Armazena temporariamente uma instrução, visto que cada palavra de instrução possui um par de instruções. Sendo a da esquerda armazenada no IR e a segunda no IBR. Ao término de executar a primeira instrução no IR, o conteúdo do IBR é passado de volta para o IR.

### Unidade Lógica e Aritmética (ULA)

Esta unidade é responsável por realizar operações lógicas e aritméticas nos dados armazenados dentro da memória. Temos três registradores internos:

- MBR: Armazena temporariamente dados que foram lidos ou que serão escritos na memória. Para se escrever um dado na memória, este deve estar presente no MBR e o seu respectivo endereço de memória no MAR e, por fim, enviar os sinais de controle para a memória realizar  as operações de escrita.

- AC & MQ: Armazenam temporariamente operandos e resultados de operações lógicas e aritméticas.

