const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('edfe7ab3a3b0ec62090543be52930a7b600221b86c575b74929cf47201cd80b7');
const myWalletAddress = myKey.getPublic('hex');

let mentisCoin = new Blockchain();

//Mining Block Demonstration (Time delay in adding blocks to chain to avoid spammers)
//Single block single transaction
const tx1 = new Transaction(myWalletAddress, 'public key of receiver',10);
tx1.signTransaction(myKey);
mentisCoin.addTransaction(tx1);


console.log('\nStarting the miner........');
mentisCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Pritesh is '+mentisCoin.getBalanceOfAddress(myWalletAddress));

//Single block multiple transaction
const tx2 = new Transaction(myWalletAddress, 'public key of receiver',40);
tx2.signTransaction(myKey);
mentisCoin.addTransaction(tx2);

const tx3 = new Transaction(myWalletAddress, 'public key of receiver',20);
tx3.signTransaction(myKey);
mentisCoin.addTransaction(tx3);


console.log('\nStarting the miner Again........');
mentisCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Pritesh is '+mentisCoin.getBalanceOfAddress(myWalletAddress));

/*
// Uncomment this line if you want to test tampering with the chain
mentisCoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid?\n', mentisCoin.isChainValid());
*/


//Printing Chain
console.log(JSON.stringify(mentisCoin, null, 4));
