# Projeto Guardiões da Vida Animal

Site do projeto de resgate e adoção de animais de Monte Mor — SP.

## Arquivos

Está tudo numa pasta só, sem subpastas:

- `index.html` — a página inteira (design, textos fixos, funcionamento).
- `animais.js` — a lista dos animais para adoção. **Arquivo onde utilizo para edição.**
- `logo.png` — a logo do projeto.
- `mel.jpeg`, `pipoca.jpeg`, `thor.jpeg` — fotos dos animais.

## Para adicionar um animal

1. Suba a foto aqui na mesma pasta (nome simples, sem espaço e sem acento: `luna.jpeg`).
2. Abra o `animais.js`, copie o bloco de exemplo que está comentado no topo e cole antes do `];` do final.
3. Preencha as informações e salve (commit).

O site atualiza sozinho em alguns segundos depois do commit.

## Quando um animal for adotado

No `animais.js`, troque `adotado: false` por `adotado: true`.

Ele sai da lista de quem espera e passa a aparecer no botão **Já adotados**,
com o carimbo ADOTADO por cima da foto. Se quiser tirar do site de vez,
aí sim apague o bloco inteiro, do `{` até o `},`.

## Publicação

Repositório no GitHub conectado à Vercel. Não precisa configurar nada: é um site estático, sem build.
