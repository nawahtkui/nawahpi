import React from "react";

function PiIntegration() {
  return (
    <section id="pi" className="pi-section" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Connect with Pi Network</h2>
      <p>Follow these simple steps to claim your Nawah Token:</p>
      <ol style={{ textAlign: "left", display: "inline-block", marginTop: "1rem" }}>
        <li>Install Pi Wallet</li>
        <li>Connect your account</li>
        <li>Claim your Nawah Token</li>
      </ol>
      <a
        href="https://minepi.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#4CAF50",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Connect with Pi
      </a>
    </section>
  );
}

export default PiIntegration;
