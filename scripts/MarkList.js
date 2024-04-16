const hre = require("hardhat");
async function main() {
  const Mark = await hre.ethers.getContractFactory("MarksList");
  const mark = await Mark.deploy();
  await mark.deployed();
  console.log("MarksList deployed to:", mark.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
