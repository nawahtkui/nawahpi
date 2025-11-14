import { Keypair, Server, Asset, TransactionBuilder, BASE_FEE, Networks } from 'stellar-sdk';
import dotenv from 'dotenv';
dotenv.config();

const server = new Server(process.env.HORIZON_URL);

async function issueAsset() {
    const issuer = Keypair.fromSecret(process.env.ISSUER_SECRET);
    const distrib = Keypair.fromSecret(process.env.DISTRIB_SECRET);
    const asset = new Asset(process.env.ASSET_CODE, issuer.publicKey());

    console.log(`Issuing ${process.env.ISSUE_AMOUNT} ${asset.code} to ${distrib.publicKey()}`);
}

issueAsset();
