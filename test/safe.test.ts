import { expect } from "./chai-setup";
import Safe, {
  SafeFactory,
  SafeAccountConfig,
  EthersAdapter,
} from "@gnosis.pm/safe-core-sdk";
import { MultiSend } from "@typechain/MultiSend";
import { GnosisSafe } from "@typechain/GnosisSafe";
import { GnosisSafeProxyFactory } from "@typechain/GnosisSafeProxyFactory";
const hre = require("hardhat");
const { ethers, deployments } = hre;

type Fixture = {
  multiSend: MultiSend;
  gnosisSafe: GnosisSafe;
  safeProxyFactory: GnosisSafeProxyFactory;
  signer1;
  signer2;
};

const setup = deployments.createFixture(async () => {
  const [signer1, signer2] = await ethers.getSigners();
  await deployments.fixture("main-suite");
  const gnosisSafe: GnosisSafe = await ethers.getContract("GnosisSafe");
  const multiSend: MultiSend = await ethers.getContract("MultiSend");
  const safeProxyFactory: GnosisSafeProxyFactory = await ethers.getContract(
    "GnosisSafeProxyFactory"
  );
  return {
    multiSend,
    gnosisSafe,
    safeProxyFactory,
    signer1,
    signer2,
  };
});

describe("GnosisSafe", function () {
  let ethAdapterOwner1: EthersAdapter;
  let ethAdapterOwner2: EthersAdapter;
  let fixture: Fixture;

  before(async () => {
    fixture = await setup();
    ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signer: fixture.signer1,
    });
    ethAdapterOwner2 = new EthersAdapter({
      ethers,
      signer: fixture.signer2,
    });
  });

  it("Should create a Safe properly", async function () {
    const { signer1, signer2 } = fixture;
    console.log(await ethAdapterOwner1.getSignerAddress());
    const safeFactory = await SafeFactory.create({
      ethAdapter: ethAdapterOwner1,
      contractNetworks: {
        [hre.network.config.chainId]: {
          multiSendAddress: fixture.multiSend.address,
          safeMasterCopyAddress: fixture.gnosisSafe.address,
          safeProxyFactoryAddress: fixture.safeProxyFactory.address,
        },
      },
    });

    const owners = [signer1.address, signer2.address];
    const threshold = 1;
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
