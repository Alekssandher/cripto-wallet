//Importanto dependencias
const bip32 = require('bip32')
const bip39 =require('bip39')
const bitcoin = require('bitcoinjs-lib')
const prompt = require('prompt-sync')()

//define a rede
//bitcoin - rede princpal - mainNet 
//testnet -rede de teste
const network = bitcoin.networks.bitcoin

//derivação de carteiras hd
const path = `m/49'/1'/0'/0`

//criando um mnemonic 
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//carteira raiz hd
let root = bip32.fromSeed(seed, network)

//conta
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log('Carteira gerada')
console.log('Endereço: ', btcAddress)
console.log('Chave privada: ', node.toWIF())
console.log('Seed: ', mnemonic)
prompt('Pressionar enter sairá imediatamente do programa\n')