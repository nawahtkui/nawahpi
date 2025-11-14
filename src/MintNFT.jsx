import React, { useState } from "react";
import { PiWallet } from "./PiWallet";
import { create } from "ipfs-http-client";

// إعداد IPFS client (Public gateway)
const client = create("https://ipfs.infura.io:5001/api/v0");

const MintNFT = ({ userAddress, setOwnedNFTs, ownedNFTs }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const mintNFT = async () => {
    if (!userAddress) return alert("Connect your Pi wallet first!");
    if (!file) return alert("Select a file first!");

    try {
      setUploading(true);
      const added = await client.add(file);
      const ipfsUrl = `https://ipfs.io/ipfs/${added.path}`;

      // محاكاة عملية الدفع
      await PiWallet.sendTransaction({ to: "PROJECT_ADDRESS", amount: 5 });

      const nft = { id: Date.now(), name: file.name, image: ipfsUrl, price: 5 };
      setOwnedNFTs([...ownedNFTs, nft]);
      alert(`${file.name} minted successfully on IPFS!`);
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Error uploading to IPFS");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Mint Your NFT</h2>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={mintNFT}
        disabled={uploading}
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
      >
        {uploading ? "Uploading..." : "Mint NFT"}
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Owned NFTs</h3>
        <div className="flex gap-4 mt-2">
          {ownedNFTs.map(nft => (
            <div key={nft.id} className="border p-2 rounded">
              <img src={nft.image} alt={nft.name} className="w-32" />
              <h3>{nft.name}</h3>
              <p>{nft.price} Pi</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MintNFT;

