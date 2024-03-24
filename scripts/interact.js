const ethers = require('ethers')
const contract = require("../artifacts/contracts/helloWorld.sol/HelloWorld.json")

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL)
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main(){
    const message = await helloWorldContract.message();
    console.log("The message is: ", message);

    console.log("Updating the message to etiane its gonna be okay .....................")
    const tx = await helloWorldContract.update("etiane its gonna be okay")
    await tx.wait()

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage)
}

main();

// https://sepolia.etherscan.io/address/0x245e45f4C25B0b20161f9369121b441904Dea757#code