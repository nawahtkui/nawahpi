
import React, { useState, useEffect } from "react";
import { PiWallet } from "@pi-apps/pi-wallet-sdk";

const ConnectPiWallet = ({ setUserAddress }) => {
  const [user, setUser] = useState(null);

  const connectWallet = async () => {
    try {
      const wallet = await PiWallet.connect();
      setUser(wallet);
      setUserAddress(wallet.address);
    } catch (error) {
      console.error("Failed to connect Pi wallet:", error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {user ? `Connected: ${user.address}` : "Connect Pi Wallet"}
      </button>
    </div>
  );
};

export default ConnectPiWallet;
