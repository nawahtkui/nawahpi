export async function connectWallet() {
    if (!window.Pi) throw new Error("Pi Wallet not detected");
    const response = await window.Pi.request({ method: "connect" });
    return response; // user account info
}
