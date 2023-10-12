// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const LeaderDAO = await ethers.getContractFactory('LeaderDAO');
    console.log('Deploying LDAO Token...');
    const ldao = await LeaderDAO.deploy();
    await ldao.deployed();
    console.log('LeaderDAO deployed to:', ldao.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });