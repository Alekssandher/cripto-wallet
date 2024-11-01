const express = require('express');
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const path = require('path');

const app = express();
const network = bitcoin.networks.bitcoin;
const derivationPath = `m/49'/1'/0'/0`;

// Configura a pasta 'src' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Serve o 'index.html' ao acessar a raiz do servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Rota para gerar carteira
app.get('/generate-wallet', (req, res) => {
    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    let root = bip32.fromSeed(seed, network);
    let account = root.derivePath(derivationPath);
    let node = account.derive(0).derive(0);

    let btcAddress = bitcoin.payments.p2pkh({
        pubkey: node.publicKey,
        network: network,
    }).address;

    res.json({
        address: btcAddress,
        privateKey: node.toWIF(),
        seed: mnemonic
    });
});

// Define a porta e inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
