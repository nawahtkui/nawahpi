
import React, { useState } from "react";
import { PiWallet } from "@pi-apps/pi-wallet-sdk";

const MintNFT = ({ userAddress }) => {
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  const nftList = [
    { id: 1, name: "Pi NFT #1", price: 5, image: "https://ipfs.io/ipfs/QmExample1" },
    { id: 2, name: "Pi NFT #2", price: 10, image: "https://ipfs.io/ipfs/QmExample2" }
  ];

  const mintNFT = async (nft) => {
    if (!userAddress) return alert("Please connect your Pi wallet!");

    try {
      await PiWallet.sendTransaction({
        to: "YOUR_PROJECT_ADDRESS",
        amount: nft.price
      });
      setOwnedNFTs([...ownedNFTs, nft]);
      alert(`Minted ${nft.name} successfully!`);
    } catch (error) {
      console.error(error);
      alert("Transaction failed!");
    }
  };

  return (
    <div>
      <h2>Available NFTs</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {nftList.map((nft) => (
          <div key={nft.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={nft.image} alt={nft.name} width="150" />
            <h3>{nft.name}</h3>
            <p>Price: {nft.price} Pi</p>
            <button onClick={() => mintNFT(nft)}>Mint / Buy</button>
          </div>
        ))}
      </div>

      {ownedNFTs.length > 0 && (
        <div>
          <h2>My NFTs</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {ownedNFTs.map((nft) => (
              <div key={nft.id}>
                <img src={nft.image} alt={nft.name} width="100" />
                <p>{nft.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MintNFT;
