export const PiWallet = {
  connect: async () => ({ address: "pi_user_address" }),
  getBalance: async (address) => 100,
  sendTransaction: async ({ to, amount }) => true
};
