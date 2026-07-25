/* ============================================================
   LISTA DE ANIMAIS PARA ADOÇÃO
   ------------------------------------------------------------
   É SÓ ESTE ARQUIVO QUE VOCÊ PRECISA EDITAR.
   Nunca precisa mexer no index.html.

   COMO ADICIONAR UM ANIMAL:
   1. Suba a foto no GitHub, na MESMA pasta do site.
      Use nome simples, sem espaço e sem acento: ex. "luna.jpeg"
   2. Copie o bloco de exemplo abaixo (de "{" até "},")
      e cole antes do "];" lá no final.
   3. Preencha as informações.

   QUANDO O ANIMAL FOR ADOTADO:
   NÃO apague o bloco. Só troque  adotado: false  por  adotado: true
   Ele sai da lista de quem espera e passa a aparecer no botão
   "Já adotados", com o carimbo ADOTADO em cima da foto.
   (Se quiser mesmo tirar do site, aí sim apague o bloco inteiro.)

   REGRAS RÁPIDAS:
   - tipo: escreva "cachorro" ou "gato"  (isso alimenta o filtro)
   - castrado / vacinado: escreva true (sim) ou false (não)
   - adotado: false enquanto procura lar / true quando for adotado
   - texto sempre entre "aspas"
   - toda linha termina com vírgula
   - a foto aparece sempre cortada em quadrado, então prefira
     fotos onde o bicho esteja mais ou menos no centro

   BLOCO DE EXEMPLO PARA COPIAR:

   {
     nome: "Nome do animal",
     tipo: "cachorro",
     foto: "arquivo.jpeg",
     sexo: "Fêmea",
     idade: "Aprox. 1 ano",
     peso: "10 kg",
     castrado: true,
     vacinado: false,
     adotado: false,
     comportamento: "Descrição curta do jeitinho dele.",
     historia: "Onde foi resgatado e o que aconteceu até aqui.",
   },

   ============================================================ */

const ANIMAIS = [

  {
    nome: "Mel",
    tipo: "cachorro",
    foto: "mel.jpeg",
    sexo: "Fêmea",
    idade: "Aprox. 2 anos",
    peso: "14 kg",
    castrado: true,
    vacinado: true,
    adotado: false,
    comportamento: "Muito dócil e grudenta. Adora colo, se dá bem com outros cachorros e é tranquila com crianças. Ainda tem um pouco de medo de barulho alto.",
    historia: "Resgatada no bairro Jardim Bela Vista, em Monte Mor, muito magra e cheia de carrapatos. Passou por tratamento veterinário, ganhou peso e hoje está pronta para uma família.",
  },

  {
    nome: "Pipoca",
    tipo: "cachorro",
    foto: "pipoca.jpeg",
    sexo: "Fêmea",
    idade: "Aprox. 1 ano e 6 meses",
    peso: "16 kg",
    castrado: true,
    vacinado: true,
    adotado: false,
    comportamento: "Brincalhona e cheia de energia. Ideal para casa com quintal. Aprende comando rápido e é carinhosa demais com gente.",
    historia: "Apareceu abandonada na entrada de um sítio na estrada de Monte Mor. Estava com sarna, já tratada e curada. Vive hoje em lar temporário.",
  },

  {
    nome: "Thor",
    tipo: "cachorro",
    foto: "thor.jpeg",
    sexo: "Macho",
    idade: "Aprox. 8 meses",
    peso: "18 kg (ainda em crescimento)",
    castrado: false,
    vacinado: true,
    adotado: true,   // <-- deixei como exemplo. Troque para false quando for editar.
    comportamento: "Filhote calmo para a idade, muito observador. Já faz as necessidades no lugar certo. Convive bem com outros cães.",
    historia: "Encontrado sozinho perto da rodovia, na divisa com Hortolândia. A castração está agendada e será feita antes da entrega ao adotante.",
  },

  {
    nome: "Nina",
    tipo: "gato",
    foto: "nina.jpeg",
    sexo: "Fêmea",
    idade: "Aprox. 6 meses",
    peso: "2,5 kg",
    castrado: false,
    vacinado: true,
    adotado: false,
    comportamento: "Tímida no começo, mas vira um chiclete depois que confia. Usa a caixa de areia direitinho e é ótima com outros gatos.",
    historia: "Resgatada com os irmãos dentro de um terreno baldio no centro de Monte Mor. Os irmãos já foram adotados e ela é a última esperando um lar.",
  },

];
