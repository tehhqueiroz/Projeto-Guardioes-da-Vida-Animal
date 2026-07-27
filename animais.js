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

   PARA ESCONDER UMA INFORMAÇÃO DE UM ANIMAL:
   Deixe o campo com as aspas vazias:  peso: "",
   Aquela linha simplesmente não aparece no card daquele animal.
   Funciona em qualquer campo: idade, peso, sexo, vacinado, castrado,
   comportamento e história.
   Se deixar  castrado: ""  a etiqueta em cima da foto também some.

   REGRAS RÁPIDAS:
   - tipo: escreva "cachorro" ou "gato"  (isso alimenta o filtro)
   - whatsapp: o número de quem cuida DAQUELE animal. Pode escrever do
     jeito que quiser: "19 99999-9999" ou "(19) 99999-9999". É esse número
     que abre quando alguém clica em "Quero adotar".
   - nome: também é opcional. Se deixar  nome: ""  o card fica sem nome e
     o botão vira só "Quero adotar".
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
     whatsapp: "19 99999-9999",
     sexo: "Fêmea",
     idade: "Aprox. 1 ano",
     peso: "10 kg",
     castrado: true,
     vacinado: false,      // use "" para não mostrar esta linha
     adotado: false,
     comportamento: "Descrição curta do jeitinho dele.",
     historia: "Onde foi resgatado e o que aconteceu até aqui.",
   },

   ============================================================ */

const ANIMAIS = [

  {
    nome: "Lupi",
    tipo: "cachorro",
    foto: "lupi.jpeg",
    whatsapp: "19 99999-9999",
    sexo: "Macho",
    idade: "Aprox. 8 meses",
    peso: "Aprox. 12 kg",
    castrado: false,
    vacinado: true,
    adotado: false,
    comportamento: "Muito dócil.",
    historia: "Em situação de rua.",
  },

  {
    nome: "Pipoca",
    tipo: "cachorro",
    foto: "pipoca.jpeg",
    whatsapp: "19 99999-9999",
    sexo: "Fêmea",
    idade: "Aprox. 2 anos",
    peso: "Aprox. 13 kg",
    castrado: true,
    vacinado: true,
    adotado: false,
    comportamento: "Muito carinhosa e muito dócil.",
    historia: "Em situação de rua.",
  },

  {
    nome: "Thor",
    tipo: "cachorro",
    foto: "thor.jpeg",
    whatsapp: "19 99999-9999",
    sexo: "Macho",
    idade: "Aprox. 2 anos",
    peso: "Aprox. 14 kg",
    castrado: true,
    vacinado: true,
    adotado: false,
    comportamento: "Muito dócil.",
    historia: "Em situação de rua.",
  },

  {
    nome: "Pingo",
    tipo: "cachorro",
    foto: "pingo.jpeg",
    whatsapp: "19 99999-9999",
    sexo: "Macho",
    idade: "Aprox. 2 anos",
    peso: "Aprox. 12 kg",
    castrado: true,
    vacinado: true,
    adotado: true,
    comportamento: "Dócil.",
    historia: "",
  },

];
