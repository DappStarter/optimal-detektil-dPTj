require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth muscle purse grace forum bottom submit'; 
let testAccounts = [
"0x04672741b5f1e2d4d38b80a6fcba5612da74f53c4af8f5609b6ea85a5e7fd729",
"0x20ce437f4a9a0da71085f875f205e1d1c358caa9bfab86cbd4753b8dd137fe5b",
"0x2854ebba4d93d6266ffefa8cb7398016d3e8bf6cdda60d51b8e28d12324b703f",
"0xda7832ed060145c8657455b160ce7e3709f7af82ef84b7ad1dc2d74097dcd052",
"0x8c511a06fa2af45f65aa2c9a2914c6f87f30ed9c8401fbfcfdfb4b449ebc5e63",
"0xdabcba88a7f26432011645b947ac6ae0f1d56334598d555330cc4a142132598b",
"0xfbceb3184a5d37e5ecfd9028705e54aba544890e4dad718e0d92a458ad234b2b",
"0x91b0301efb3a9fdee9dffd512fe22ba4162c92a8a8bb252741eee7dda05bb4c9",
"0xb6fa4c8f1fe184a41b1d518e18c056f512173b3b287143a1cc4cf9790c63838b",
"0xa1b51e9916d62200ea298410224e8717d2bde05f2c6ba5417cacf14eae2422ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

