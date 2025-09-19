// QA Web3 - Balance Check
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

async function checkBalance() {
  try {
    // Use Infura/Alchemy or default to mainnet public provider
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

    const address = process.env.WALLET_ADDRESS;
    if (!ethers.utils.isAddress(address)) {
      throw new Error("Invalid wallet address");
    }

    const balanceWei = await provider.getBalance(address);
    const balanceEth = ethers.utils.formatEther(balanceWei);

    console.log(`✅ Wallet balance for ${address}: ${balanceEth} ETH`);
  } catch (error) {
    console.error("❌ Error checking balance:", error.message);
  }
}

checkBalance();
