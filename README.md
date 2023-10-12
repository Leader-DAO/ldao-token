# LeaderDAO Token

This project implements an ERC20 token contract with Permit and Vote counting using [OpenZeppelin](https://openzeppelin.com/) contracts.

## Contracts

The token contract is `LeaderDAO.sol` which inherits from the OpenZeppelin `ERC20` implementation. 

The contract is deployed to the `artifacts/` folder during compilation.

## Testing

Tests are located in the `test/` folder and can be run with:

```npm test```

## Deployment

To deploy the contract run:

```npx hardhat run scripts/deploy.js --network <network>```

This will deploy the contract to the selected network, save the deployment address, and verify the contract.

## Security

This project uses OpenZeppelin contracts which are designed to be secure and avoid common pitfalls.

The contract does not include any additional privileges beyond standard ERC20 functionality.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.
