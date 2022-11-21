require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note script company install basic equal general'; 
let testAccounts = [
"0x2863ecb3294648ba212bc1e1cd7f35f254edc8fcf08caf2633f87772d2fb343d",
"0xcf27217efa2331462ac542bd34a5ab2fcf1236a5bf19e432e747b69a43fa7630",
"0x94b416c1fca6a2aeba85b0482d1f258fdf1e35fe760ca18287b2f50270ee5530",
"0x25c7445f72aa99d4a36692ddf66fb49e1d43af0a69c319e9c0948698cf80fa6c",
"0xdc7d2e483b6fbdda43ccb2ef8a79a2ae88278a024d79fc94b9186635e586c460",
"0xacb44fa98183cef2049588c99f005400d0c27f77b538209cf2daec316c4d2b07",
"0x9cac769effa292cc538a71212fd6c4f78c8d7d6691199c89de7bbc521d613ef9",
"0x2438f385576164978d4275be8c7245ee9050ee53161269e9853f83165991cb80",
"0x1031ec895d05d334203831101ef2f4061cc9f6f73f14fb4648a3ae910d356b2a",
"0x37c49a9c95b857865f81fb59c9c8e2dc6649909e4ce1440ae27774a54d0246c1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

