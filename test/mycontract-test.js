const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MyContract", function () {
  let contract;

  beforeEach(async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    contract = await MyContract.deploy();
    await contract.deployed();
  });

  it("should store two values into var1 and var2", async function () {
    const a = 1;
    const b = 2;

    await contract.storeVals(a, b);

    expect(await contract.var1()).to.equal(a);
    expect(await contract.var2()).to.equal(b);
  });
});
