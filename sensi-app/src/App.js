import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // Fungsi buat scroll mulus ke bagian fitur
  const scrollToFeatures = () => {
    const featureSection = document.getElementById('features-section');
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setShowLogin(false)}>SENSI.PROD</div>
        <ul className="nav-links">
          <li onClick={() => setShowLogin(false)}>Beranda</li>
          <li onClick={scrollToFeatures}>Fitur</li>
          <li>Kontak</li>
        </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="main-content">
        <section className="text-section">
          <h2 className="section-title">OUR PRODUCT</h2>
          
          <div className="content-switch-area">
            {!showLogin ? (
              /* TAMPILAN DASHBOARD AWAL */
              <div className="fade-in">
                <h1 className="brand-name">
                  SENSI : <span className="highlight">Sistem Presensi Efisiensi</span>
                </h1>
                <p className="description">
                  Solusi mutakhir untuk memangkas birokrasi absen yang rawan kesalahan. 
                  Berhenti membuang waktu pada hal manual dan mulai fokus pada produktivitas.
                </p>
                <div className="button-group">
                  <button className="btn btn-primary" onClick={() => setShowLogin(true)}>
                    Masuk ke Sistem
                  </button>
                  <button className="btn btn-secondary" onClick={scrollToFeatures}>
                    Pelajari Fitur
                  </button>
                </div>
              </div>
            ) : (
              /* TAMPILAN LOGIN FORM */
              <div className="fade-in">
                <h1 className="brand-name">Selamat Datang <span className="highlight">Kembali</span></h1>
                <p className="description">Silahkan masukkan kredensial untuk mengakses dashboard presensi.</p>
                <div className="login-form">
                  <input type="text" placeholder="Username / Email" className="form-input" />
                  <input type="password" placeholder="Password" className="form-input" />
                  <div className="button-group">
                    <button className="btn btn-primary">Login</button>
                    <button className="btn btn-secondary" onClick={() => setShowLogin(false)}>Kembali</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- VISUAL SECTION (BOX MERAH & LOGO) --- */}
        <section className="visual-section">
          <div className="visual-wrapper">
            <div className="red-accent-box"></div>
            <img 
              src="https://raw.githubusercontent.com/ryann-bot/sensii/main/assets/logo1.png" 
              alt="SENSI Logo" 
              className="floating-logo"
            />
          </div>
        </section>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section id="features-section" className="features-container">
        <div className="feature-card">
          <h3 className="highlight">01. Real-time</h3>
          <p>Laporan presensi instan tanpa delay untuk manajemen yang lebih responsif.</p>
        </div>
        <div className="feature-card">
          <h3 className="highlight">02. Secure</h3>
          <p>Keamanan data tingkat tinggi menggunakan enkripsi SHA256.</p>
        </div>
        <div className="feature-card">
          <h3 className="highlight">03. Integrated</h3>
          <p>Terhubung langsung dengan cloud untuk akses di mana saja, kapan saja.</p>
        </div>
      </section>
      
      <footer className="footer">
        PROD BY RF.CAPTR &copy; 2026
      </footer>
    </div>
  );
}

export default App;