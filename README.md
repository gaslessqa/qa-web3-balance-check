# QA Web3 - Balance Check

This project demonstrates a simple Web3 test script that connects to an Ethereum-compatible network and retrieves the ETH balance of a wallet address.

## 📊 Objective

As a QA automation engineer transitioning into Web3, this test validates that:

- The dApp can connect to a provider (e.g. Infura or Alchemy).
- The wallet address is valid.
- The balance is retrieved correctly in Ether (ETH).

## 🚀 How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qa-web3-balance-check.git
cd qa-web3-balance-check
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with the following content:

```env
RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
WALLET_ADDRESS=0xYourWalletHere
```

4. Run the script:

```bash
node qa-web3-balance-check.js
```

## 📊 Sample Output

```
✅ Wallet balance for 0x1234...abcd: 2.735 ETH
```

## ✅ Testing (optional)

You can add a test to assert that the retrieved balance is a valid number and the address format is correct. A sample test will be provided using Jest or Mocha.

## 📃 Author

**Raúl Casado – GaslessQA**  
🔗 [https://www.linkedin.com/in/gaslessqa/](https://www.linkedin.com/in/gaslessqa/)

## 📚 License

MIT
