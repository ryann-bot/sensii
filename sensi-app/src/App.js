import React from 'react';
import './App.css';

function App() {
  // Fungsi Scroll ke 3 Kontainer (Summary)
  const scrollToSummary = () => {
    const summarySection = document.getElementById('manual-book');
    if (summarySection) summarySection.scrollIntoView({ behavior: 'smooth' });
  };

  // Fungsi Buka README (Panduan Pemakaian)
  const openReadme = () => {
    window.open("https://github.com/ryann-bot/sensii/blob/main/README.md", "_blank");
  };

  // Links
  const githubRyanBot = "https://github.com/ryann-bot/";
  const githubRepo = "https://github.com/ryann-bot/sensii/tree/main/sensi-app/src";
  const appLink = "https://joy-glyph-77113954.figma.site/";
  const instagramLink = "https://instagram.com/rf.captr";

  return (
    <div className="app-container">
      <div className="ambient-bg">
        <div className="blur-circle circle-1"></div>
        <div className="blur-circle circle-2"></div>
      </div>

      <nav className="navbar">
        {/* Pojok Kiri Atas jadi RF.CAPTR */}
        <div className="nav-logo">RF.CAPTR</div>
        <ul className="nav-links">
          {/* Official Page jadi Connect (Langsung ke IG) */}
          <li><a href={instagramLink} target="_blank" rel="noreferrer" className="nav-git-link">Connect</a></li>
          {/* Manual Book jadi Summary (Scroll ke bawah) */}
          <li onClick={scrollToSummary}>Summary</li>
          <li><a href={githubRyanBot} target="_blank" rel="noreferrer" className="nav-git-link">GitHub</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="text-section">
          <div className="content-wrapper">
            {/* Official Product jadi Documentation */}
            <h2 className="section-subtitle">DOCUMENTATION</h2>
            
            <div className="fade-container">
              <h1 className="brand-title">
                SENSI : <span className="highlight">Efficiency Redefined</span>
              </h1>
              <p className="description">
                Laman dokumentasi resmi <b>SENSI</b>. Sistem presensi open-source 
                yang bisa Anda gunakan, modifikasi, dan kembangkan sesuai kebutuhan instansi Anda.
              </p>
              <div className="button-group">
                <a href={appLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Masuk ke Sistem
                </a>
                <a href={githubRepo} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Explore Code
                </a>
              </div>
              {/* Tetap arah ke README GitHub */}
              <p className="manual-link" onClick={openReadme}>
                Baca panduan pemakaian &rarr;
              </p>
            </div>
          </div>
        </section>

        <section className="visual-section">
          <div className="visual-box-container">
            <div className="red-bg-box"></div>
            <img 
              src="https://raw.githubusercontent.com/ryann-bot/sensii/main/assets/logo1.png" 
              alt="Logo" 
              className="center-logo"
            />
            <div className="scanline"></div>
          </div>
        </section>
      </main>

      {/* Target Scroll Summary */}
      <section id="manual-book" className="features-container">
        <div className="manual-grid">
          <div className="feature-card">
            <h3 className="highlight">01. Setup Environment</h3>
            <p>Clone repository kami, lalu jalankan <code>npm install</code> untuk menyiapkan dependensi sistem.</p>
          </div>
          <div className="feature-card">
            <h3 className="highlight">02. Configuration</h3>
            <p>Sesuaikan file <code>.env</code> dengan database atau API presensi yang Anda gunakan.</p>
          </div>
          <div className="feature-card">
            <h3 className="highlight">03. Deployment</h3>
            <p>Build aplikasi Anda dan deploy ke server pilihan. SENSI siap melayani presensi efisiensi.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href={instagramLink} target="_blank" rel="noreferrer">
          PROD BY RF.CAPTR &copy; 2026 | OPEN SOURCE
        </a>
      </footer>
    </div>
  );
}

export default App;