const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MyContract", function () {
  let contract;
  let signer;

  beforeEach(async function () {
    const accounts = await ethers.getSigners();
    signer = accounts[0];

    const MyContract = await ethers.getContractFactory("MyContract", signer);
    contract = await MyContract.deploy();
    await contract.deployed();
  });

  it("should store two values into var1 and var2", async function () {
    const a = 1;
    const b = 2;

    await contract.connect(signer).storeVals(a, b);

    expect(await contract.var1()).to.equal(a);
    expect(await contract.var2()).to.equal(b);
  });

  it("should correctly add two stored values", async function () {
    const a = 5;
    const b = 3;

    await contract.storeVals(a, b);

    const result = await contract.addOperations();
    expect(result).to.equal(a + b);
  });

  it("should correctly subtract two stored values", async function () {
    const a = 10;
    const b = 4;

    await contract.storeVals(a, b);

    const result = await contract.subtractOperation();
    expect(result).to.equal(a - b);
  });
});
