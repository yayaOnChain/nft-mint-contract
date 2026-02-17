import { expect } from "chai";
import { ethers } from "hardhat";
import { MyNFT } from "../typechain-types"; // Auto-generated types

describe("MyNFT Contract", function () {
  let myNFT: MyNFT;
  let owner: any;
  let addr1: any;

  beforeEach(async function () {
    // Get signers from the hardhat environment
    [owner, addr1] = await ethers.getSigners();

    // Deploy the contract before each test
    const MyNFTFactory = await ethers.getContractFactory("MyNFT");
    myNFT = (await MyNFTFactory.deploy(owner.address)) as MyNFT;
    await myNFT.waitForDeployment();
  });

  it("Should deploy correctly", async function () {
    expect(await myNFT.totalMinted()).to.equal(0);
  });

  it("Should allow a user to mint one NFT with correct price", async function () {
    const mintPrice = await myNFT.MINT_PRICE();

    // Call mint function with correct value
    await myNFT.connect(addr1).mint(1, { value: mintPrice });

    expect(await myNFT.totalMinted()).to.equal(1);
    expect(await myNFT.ownerOf(0)).to.equal(addr1.address);
  });

  it("Should fail if insufficient ETH is sent", async function () {
    const insufficientPrice = ethers.parseEther("0.005"); // Less than 0.01

    await expect(
      myNFT.connect(addr1).mint(1, { value: insufficientPrice }),
    ).to.be.revertedWith("Insufficient ETH sent");
  });

  it("Should allow owner to withdraw funds", async function () {
    const mintPrice = await myNFT.MINT_PRICE();
    await myNFT.connect(addr1).mint(1, { value: mintPrice });

    const initialBalance = await ethers.provider.getBalance(owner.address);

    // Withdraw funds
    await myNFT.withdraw();

    const finalBalance = await ethers.provider.getBalance(owner.address);

    // Balance should increase (minus gas fees roughly)
    expect(finalBalance).to.be.greaterThan(initialBalance);
  });
});
