# Cripto Wallet
<div align="center">
    <img src="https://github.com/user-attachments/assets/8e6176a6-fe51-4b04-94b9-dfbae6aed13e" alt="Cripto Wallet"></div></br>
</div>


**Cripto Wallet** é um gerador de carteiras Bitcoin que permite criar endereços seguros, com chaves privadas e seed.
> *Você pode estar executando ele através da web, localmente ou pelo executável. Conferir o indice.*
## Índice

- [Versão Web](#versão-web)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o projeto](#executando-o-projeto)
- [Dependências](#dependências)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Versão Web
A versão web do Cripto Wallet permite que você acesse o gerador de carteiras diretamente em seu navegador, sem necessidade de instalação. Você pode utilizar todas as funcionalidades disponíveis na versão desktop. Para acessar a versão web, [visite este link](https://cripto-wallet.vercel.app/).
## Pré-requisitos

Antes de executar o projeto, verifique se você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 20.18)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
  
## Dependências
As seguintes bibliotecas são utilizadas no projeto:

- `bip32` - Para gerar hierarquias de chaves Bitcoin.
- `bip39` - Para criar e verificar frases mnemônicas.
- `bitcoinjs-lib` - Biblioteca para manipulação de transações Bitcoin.
- `express` - Framework web para Node.js.
- `nodemon` - Ferramenta para reinicializar automaticamente o servidor durante o desenvolvimento.
- `prompt-sync` - Para ler entradas do usuário de forma síncrona.
## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Alekssandher/cripto-wallet.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd cripto-wallet
   ```
   
4. Instale as depêndencias:
   ```bash
   npm install
   ```
# Executando o projeto
## Execução local
Para iniciar o servidor localmente, utilize o seguinte comando:
  ```bash
  npm start
  ```
Ou
  ```bash
  npm run dev
  ```
## Executável
Este projeto também possui uma versão executável localizada na pasta `excs`. Para utilizá-la, siga as instruções abaixo:
1. Navegue até a apsta `excs` e execute o programa.
   
## Contribuição
Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Toda contribuição é bem-vinda!

## Licença

Este projeto é licenciado sob a GNU General Public License (GPL) versão 3. Você é livre para usar, modificar e distribuir este software, desde que todas as cópias e derivações também sejam licenciadas sob a GPL v3.

Para mais detalhes, consulte o arquivo `LICENSE` incluído neste repositório.
