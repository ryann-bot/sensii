import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        {/* Sisi Kiri: Branding & Text */}
        <section className="text-section">
          <h2 className="section-title">OUR PRODUCT</h2>
          <div className="product-info">
            <h1 className="brand-name">SENSI : <span className="highlight">Sistem Presensi Efisiensi</span></h1>
            <p className="description">
              Berhenti membuang waktu pada hal manual dan mulai fokus pada produktivitas. 
              Solusi mutakhir untuk memangkas birokrasi absen yang rawan kesalahan.
            </p>
            <button className="cta-button">Masuk ke Sistem</button>
          </div>
        </section>

        {/* Sisi Kanan: Visual & Logo */}
        <section className="visual-section">
          <div className="red-accent-box">
             <img 
               src="https://raw.githubusercontent.com/ryann-bot/sensii/main/assets/logos.png" 
               alt="SENSI Logo" 
               className="floating-logo"
             />
             <h2 className="logo-text">SENSI</h2>
             <p className="logo-tagline">SIMPLE & SENSIBLE PRESENSI</p>
          </div>
        </section>
      </div>
      
      <footer className="footer">
        PROD BY RF.CAPTR
      </footer>
    </div>
  );
}

export default App;