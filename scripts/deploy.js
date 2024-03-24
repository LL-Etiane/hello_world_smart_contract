async function main(){
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    const hello_world = await HelloWorld.deploy("Hello World!");

    console.log("Contract Deployed to address: ", hello_world.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1)
})

// address: 0x245e45f4C25B0b20161f9369121b441904Dea757