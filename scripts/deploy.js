const { ethers } = require("hardhat");

// scripts/deploy.js
async function main () {
    
  const deployer = await ethers.getSigners();
  console.log(`Deploying with account: ${deployer[0].address}`);

  // We get the contract to deploy
  const LeaderDAO = await ethers.getContractFactory('LeaderDAO');
  console.log('Deploying LDAO Token...');
  const ldao = await LeaderDAO.deploy(deployer[0].address);
  await ldao.deployed();
  console.log('LeaderDAO deployed to:', ldao.address);
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  });