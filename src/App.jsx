import React, { useState } from "react";
import ConnectPiWallet from "./ConnectPiWallet";
import MintNFT from "./MintNFT";
import Marketplace from "./Marketplace";

const App = () => {
  const [userAddress, setUserAddress] = useState(null);
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  return (
    <div className="p-4">
      <ConnectPiWallet setUserAddress={setUserAddress} />
      {userAddress && (
        <>
          <MintNFT userAddress={userAddress} setOwnedNFTs={setOwnedNFTs} ownedNFTs={ownedNFTs} />
          <Marketplace ownedNFTs={ownedNFTs} />
        </>
      )}
    </div>
  );
};
export default App;
