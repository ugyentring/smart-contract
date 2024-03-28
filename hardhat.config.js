require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to

// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config

// Go to https://hardhat.org/config/ to learn more

/** 

 * @type import('hardhat/config').HardhatUserConfig 

 */

const SEPOLIA_PRIVATE_KEY =
  "2669ce15f01dba9b4251411f4f76ed2b30ead2f0b6fed9367b1332ad6669ff9d";

module.exports = {
  solidity: "0.8.0",

  networks: {
    SEPOLIA: {
      url: "https://eth-sepolia.g.alchemy.com/v2/4JawdF2zd4K47wDGnjMJvL1o4TaOO4Z3",

      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
