const hre = require("hardhat");

async function main() {
  const Student = await hre.ethers.getContractFactory("StudentList");
  const student = await Student.deploy();

  await student.deployed();

  console.log("student deployed to:", student.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
