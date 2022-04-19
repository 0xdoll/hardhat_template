const hre = require("hardhat");

async function main() {
  // await hre.run('compile');

  const Helloer = await hre.ethers.getContractFactory("Helloer");
  const helloer = await Helloer.deploy("Hello, Shuge!");

  await helloer.deployed();

  console.log("Helloer deployed to:", helloer.address);

  // require("@nomiclabs/hardhat-etherscan");
  // await hre.run("verify:verify", {
  //   address: helloer.address,
  //   constructorArguments: [
  //       "Hello, Shuge!",
  //   ],
  // });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
