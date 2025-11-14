
import React, { useState } from "react";

const Marketplace = ({ ownedNFTs }) => {
  const [marketItems, setMarketItems] = useState([]);

  const listNFTForSale = (nft) => {
    setMarketItems([...marketItems, nft]);
    alert(`${nft.name} listed for sale!`);
  };

  return (
    <div>
      <h2>Marketplace</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {ownedNFTs.map((nft) => (
          <div key={nft.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={nft.image} alt={nft.name} width="150" />
            <h3>{nft.name}</h3>
            <button onClick={() => listNFTForSale(nft)}>List for Sale</button>
          </div>
        ))}
      </div>

      {marketItems.length > 0 && (
        <div>
          <h3>Items on Sale</h3>
          {marketItems.map((nft) => (
            <p key={nft.id}>{nft.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;
