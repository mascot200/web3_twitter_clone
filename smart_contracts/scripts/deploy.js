const hre = require("hardhat");


const main = async () => {
 // We get the contract to deploy
 const ProfileImageNfts = await hre.ethers.getContractFactory("ProfileImageNfts");
 const profileImageContract = await ProfileImageNfts.deploy();

 await profileImageContract.deployed();

 console.log("Profile Image Minter Contract deployed to:", profileImageContract.address);
}


const runMain = async() => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
