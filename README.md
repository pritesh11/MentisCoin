# MentisCoin

=================================================================================

#Server side scripting Using node.js

node -version should be latest stable v10.15.3

create package.json file
We will need SHA256 algorithm - not present by default hence we import node module

 npm install --save crypto-js

First block in Blockchain is a genesis Block add it manually

Note: datatypes dont work in js so use const and let

Proof of Work ---- Mining (TO prove that you put lots of effort computing the hash)
Appending 0000 in hash (This happens by setting difficulty )
For eg, Bitcoin has new block available every 10 min.

Mining Rewards and putting transactions in the blocks

Pending transactions array is used to store transactions that can go to the block as the block are generated every
10 min. In between transactions are stored in transactions array;

Rewards to the miner is put under pendingTransactions hence they will get the Rewards when new block is mined.

Doubt why hash function is not changed

Signing transactions
spend coin that are yours that way you can only spend coin if you have the private key of it

sign transactions with the privateKey of yours.
fromAddress and toAddress will be publicKey of the sender's and receiver's

Increase difficulty value to Demonstrate the mining takes time

=========================================================================================

# UI Development

Will use Angular js

Install angular cli globally on your system
sudo npm install -g @angular/cli

ng new MentisCoin

cd mentisCoin

ng serve - to run the angular project
http://localhost:4200/

Open new terminal and create service this will be used to contact to our node js blockchain app i.e. Server side scripts
g stands for generate
ng g service services/blockchain

This is where the services will reside the endpoint and the only point through which we will interact with our server side blockchain script.

Now lets include our blockchain app through github in our angular project
npm install --save github:<username>/<projectname>
npm install -save github:pritesh11/MentisCoin

We will add components which acts as view hence pages in angular
ng g component pages/blockchain-viewer



