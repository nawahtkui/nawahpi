import React, { useState } from "react";

const Marketplace = ({ ownedNFTs }) => {
  const [marketItems, setMarketItems] = useState([]);
  const listNFTForSale = (nft) => {
    setMarketItems([...marketItems, nft]);
    alert(`${nft.name} listed for sale!`);
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Marketplace</h2>
      <div className="flex gap-4">
        {ownedNFTs.map(nft => (
          <div key={nft.id} className="border p-2 rounded">
            <img src={nft.image} alt={nft.name} className="w-32" />
            <h3>{nft.name}</h3>
            <button className="bg-yellow-500 text-white px-2 py-1 rounded mt-1" onClick={() => listNFTForSale(nft)}>List for Sale</button>
          </div>
        ))}
      </div>
      {marketItems.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Items on Sale</h3>
          {marketItems.map(nft => <p key={nft.id}>{nft.name}</p>)}
        </div>
      )}
    </div>
  );
};
export default Marketplace;
