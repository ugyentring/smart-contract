const hre = require("hardhat");

async function main() {
  const Subject = await hre.ethers.getContractFactory("SubjectList");
  const subject = await Subject.deploy();

  await subject.deployed();

  console.log("subjectList deployed to:", subject.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
