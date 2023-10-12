require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    mainnet: {
      url: "https://nd-124-196-782.p2pify.com/fcba1ddfb2eac1f07edfa321123aacdd",
      accounts: ["<KEY>"]
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 50000
  }
}