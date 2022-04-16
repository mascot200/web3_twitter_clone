require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dXQbnUX4PIRZbW8EoToGXmb0T4uMo9FH',
      accounts: ['226e5149b7ff20d34d2eba28796bebf4996e8e09c6fd3cf4d8592b7ff212ef46']
    }
  }
};
