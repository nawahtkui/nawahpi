import React, { useState } from "react";
import { PiWallet } from "./PiWallet";

const ConnectPiWallet = ({ setUserAddress }) => {
  const [user, setUser] = useState(null);
  const connectWallet = async () => {
    const wallet = await PiWallet.connect();
    setUser(wallet);
    setUserAddress(wallet.address);
  };
  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={connectWallet}>
        {user ? `Connected: ${user.address}` : "Connect Pi Wallet"}
      </button>
    </div>
  );
};
export default ConnectPiWallet;
