import { Keypair, Server, Asset, TransactionBuilder, BASE_FEE, Networks } from 'stellar-sdk';
import dotenv from 'dotenv';
dotenv.config();

async function revokeTrust() {
    console.log("Revoking trustline / freezing tokens if supported by Pi Network");
}

revokeTrust();
