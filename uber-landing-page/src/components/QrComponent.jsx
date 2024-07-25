import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import QR1 from "../assets/QR1.webp";
import QR2 from "../assets/QR2.webp";

const QrComponent = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">It's easier in the apps</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="qr-box card">
            <img src={QR1} alt="Uber App QR Code" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">Download the Uber app</p>
              <span className="text-muted">Scan to download</span>
              <div className="arrow-container">
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="qr-box card">
            <img src={QR2} alt="Driver App QR Code" className="card-img-top" />
            <div className="card-body">
              <p className="card-text">Download the Driver app</p>
              <span className="text-muted">Scan to download</span>
              <div className="arrow-container">
                <span className="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrComponent;
