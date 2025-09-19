// QA Web3 - Balance Check Test with Jest
// Author: Raúl Casado – GaslessQA
// https://www.linkedin.com/in/gaslessqa/

const { ethers } = require("ethers");
require("dotenv").config();

describe("Balance Check", () => {
  let provider;
  const address = process.env.WALLET_ADDRESS;

  beforeAll(() => {
    provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  });

  test("Wallet address is valid", () => {
    expect(ethers.utils.isAddress(address)).toBe(true);
  });

  test("Wallet has a numeric ETH balance", async () => {
    const balanceWei = await provider.getBalance(address);
    const balanceEth = parseFloat(ethers.utils.formatEther(balanceWei));

    expect(typeof balanceEth).toBe("number");
    expect(balanceEth).toBeGreaterThanOrEqual(0);
  });
});
