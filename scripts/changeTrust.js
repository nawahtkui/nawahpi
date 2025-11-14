import { Keypair, Server, Asset, TransactionBuilder, BASE_FEE, Networks } from 'stellar-sdk';
import dotenv from 'dotenv';
dotenv.config();

async function changeTrust() {
    const distrib = Keypair.fromSecret(process.env.DISTRIB_SECRET);
    const issuerPublic = process.env.ISSUER_PUBLIC;
    const asset = new Asset(process.env.ASSET_CODE, issuerPublic);

    console.log(`Adding trustline for ${asset.code} to ${distrib.publicKey()}`);
}

changeTrust();
