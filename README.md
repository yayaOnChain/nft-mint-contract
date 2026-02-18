# 🎨 NFT Mint Contract

A secure and efficient **ERC721 NFT minting smart contract** built with **Hardhat**, **TypeScript**, and **OpenZeppelin Contracts v5**. This project provides a complete development environment for deploying and testing an NFT collection with minting functionality.

---

## 📋 Table of Contents

- [Features](#-features)
- [Contract Overview](#-contract-overview)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## ✨ Features

- 🔒 **Security First**: Built with OpenZeppelin's battle-tested contracts
- 💰 **Fixed Mint Price**: Configurable mint price (default: 0.01 ETH)
- 📊 **Max Supply Cap**: Limited collection size (1000 NFTs)
- 🛡️ **Reentrancy Protection**: Protected against reentrancy attacks
- 👤 **Owner Controls**: Exclusive withdraw functionality for contract owner
- 📝 **TypeScript Support**: Full TypeScript integration for type safety
- ✅ **Comprehensive Tests**: Unit tests covering core functionality
- ⛽ **Gas Optimized**: Configured optimizer for efficient deployment

---

## 📜 Contract Overview

### MyNFT Contract

| Parameter            | Value        |
| -------------------- | ------------ |
| **Name**             | MyProjectNFT |
| **Symbol**           | MPNFT        |
| **Max Supply**       | 1000 NFTs    |
| **Mint Price**       | 0.01 ETH     |
| **Standard**         | ERC721       |
| **Solidity Version** | ^0.8.20      |

### Key Functions

| Function                 | Description                       | Access      |
| ------------------------ | --------------------------------- | ----------- |
| `mint(uint256 quantity)` | Mint NFTs by sending required ETH | Public      |
| `withdraw()`             | Withdraw collected ETH to owner   | Owner Only  |
| `totalMinted()`          | View total minted NFTs            | Public View |
| `MINT_PRICE()`           | View current mint price           | Public View |
| `MAX_SUPPLY()`           | View maximum supply cap           | Public View |

---

## 🛠️ Tech Stack

| Category                  | Technology                       |
| ------------------------- | -------------------------------- |
| **Blockchain**            | Ethereum / EVM-compatible chains |
| **Smart Contract**        | Solidity ^0.8.20                 |
| **Development Framework** | Hardhat                          |
| **Library**               | OpenZeppelin Contracts ^5.0.0    |
| **Language**              | TypeScript                       |
| **Testing**               | Mocha + Chai                     |
| **Type Generation**       | TypeChain (ethers-v6)            |
| **Deployment**            | Hardhat Ethers                   |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/yayaOnChain/nft-mint-contract.git

# Navigate to project directory
cd nft-mint-contract

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```bash
# Alchemy/Infura RPC URL for testnet/mainnet
ALCHEMY_API_URL="your_alchemy_api_url"

# Deployer private key (DO NOT SHARE)
PRIVATE_KEY="your_private_key"

# Etherscan API key for contract verification
ETHERSCAN_API_KEY="your_etherscan_api_key"
```

---

## 📦 Available Scripts

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `npm run compile`       | Compile smart contracts       |
| `npm run test`          | Run all tests                 |
| `npm run test:gas`      | Run tests with gas reporting  |
| `npm run test:coverage` | Generate test coverage report |
| `npm run typechain`     | Generate TypeScript types     |
| `npm run clean`         | Clean build artifacts         |

---

## ⚙️ Configuration

### Network Configuration

The project is configured for:

- **Hardhat Local Network** (Chain ID: 31337) - Default for testing
- **Sepolia Testnet** - For public testnet deployment

Modify networks in [`hardhat.config.ts`](./hardhat.config.ts):

```typescript
networks: {
  sepolia: {
    url: process.env.ALCHEMY_API_URL || "",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
}
```

### Solidity Configuration

- **Version**: 0.8.20
- **Optimizer**: Enabled (200 runs)

---

## ✅ Testing

Run the test suite:

```bash
# Standard test run
npm run test

# With gas reporting
npm run test:gas

# Generate coverage report
npm run test:coverage
```

### Test Coverage

The test suite covers:

- ✅ Contract deployment
- ✅ Successful minting with correct price
- ✅ Reverting on insufficient ETH
- ✅ Owner withdrawal functionality

---

## 🌐 Deployment

### Deploy to Local Network

```bash
npx hardhat run scripts/deploy.ts
```

### Deploy to Sepolia Testnet

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Verify Contract (Optional)

```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> <OWNER_ADDRESS>
```

---

## 📁 Project Structure

```
nft-mint-contract/
├── contracts/
│   └── MyNFT.sol              # Main NFT contract
├── scripts/
│   └── deploy.ts              # Deployment script
├── test/
│   └── MyNFT.test.ts          # Unit tests
├── hardhat.config.ts          # Hardhat configuration
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/yayaOnChain/nft-mint-contract/issues)
- **Repository**: [https://github.com/yayaOnChain/nft-mint-contract](https://github.com/yayaOnChain/nft-mint-contract)

---

<div align="center">

**Built with ❤️ using Hardhat & Solidity**

</div>
