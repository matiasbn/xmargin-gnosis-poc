import { expect } from "./chai-setup";
import { OwnedContract } from "@typechain/OwnedContract";
import { ethers } from "hardhat";
import Safe, {
  SafeFactory,
  SafeAccountConfig,
  EthersAdapter,
} from "@gnosis.pm/safe-core-sdk";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("OwnedContract", function () {
  let signer1: SignerWithAddress;
  let ethAdapterOwner1;
  let signer2: SignerWithAddress;
  let ethAdapterOwner2;

  before(async () => {
    [signer1, signer2] = await ethers.getSigners();
    ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signer: signer1,
    });
    ethAdapterOwner2 = new EthersAdapter({
      ethers,
      signer: signer2,
    });
  });

  it("Should create a safe properly", async function () {
    console.log(ethers.getDefaultProvider());
    const safeFactory = await SafeFactory.create({
      ethAdapter: ethAdapterOwner1,
      // contractNetworks: {
      //   [ethers.pr]
      // },
    });

    const owners = [signer1.address, signer2.address];
    const threshold = 2;
    const safeAccountConfig: SafeAccountConfig = { owners, threshold };

    const safeSdk: Safe = await safeFactory.deploySafe(safeAccountConfig);
    expect(safeSdk.getAddress()).to.be.properAddress;
  });

  // it("Should create a safe properly", async function () {
  //   const Owned = await ethers.getContractFactory("OwnedContract");
  //   const ownedContract: OwnedContract = await Owned.deploy();
  //   await ownedContract.deployed();
  //   const owner = await ownedContract.owner();
  //   console.log(signer1);
  //   console.log(signer2);
  // });
});
