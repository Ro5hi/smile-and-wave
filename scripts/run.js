const { hexZeroPad } = require("ethers/lib/utils")

const main = async () => {
    const waveContractFactory = await hexZeroPad.ethers.getContractFactory("WavePortal");
    const waveContact = await waveContractFactory.deploy();
    await waveContractFactory.deployed();
    console.log("Contract Deployed To:", waveContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();