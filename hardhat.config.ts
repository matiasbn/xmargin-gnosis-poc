require("dotenv").config();

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat";
import "hardhat-deploy";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.6.12" },
      { version: "0.5.17" },
      { version: "0.8.0" },
    ],
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      chainId: 1337,
      accounts: {
        mnemonic:
          "myth like bonus scare over problem client lizard pioneer submit female collect",
      },
      url: "http://localhost:8545",
    },
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      allowUnlimitedContractSize: true,
      saveDeployments: true,
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    alwaysGenerateOverloads: false,
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
  },
};
