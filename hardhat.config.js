require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/0C1TIGSLy4s6VUTi9RBlyjwsIIVyjMa-',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
