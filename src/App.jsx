import { useState } from "react";
import "./App.css";

function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Tombol lift ditekan
  const handleElevatorButton = () => {
    if (isPressed) return;
    setIsPressed(true);

    // Pintu mulai terbuka dramatis
    setTimeout(() => {
      setDoorsOpen(true);
    }, 600);

    // Munculkan panel login setelah pintu terbuka lebar
    setTimeout(() => {
      setShowLogin(true);
    }, 1400);
  };

  // Tutup login
  const closeLogin = () => {
    setShowLogin(false);
    setTimeout(() => {
      setDoorsOpen(false);
      setIsPressed(false);
    }, 600);
  };

  // Submit Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Wah, username atau password-nya masih kosong nih.");
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <div className="velvet-page">
      {/* Background Ambient Glow */}
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>

      {/* Header */}
      <header className="velvet-header">
        <div className="brand-logo">
          <div className="logo-badge">✦</div>
          <span>AURA // LIFT</span>
        </div>
        <div className="header-badge">
          <span className="pulse-dot"></span>
          SYSTEM ONLINE
        </div>
      </header>

      {/* Main Content */}
      <main className="velvet-main">
        {/* Left Hero Text */}
        <section className="hero-text-area">
          <div className="tagline-pill">EXECUTIVE ACCESS</div>
          <h1>
            Step into the <br />
            <span>next dimension.</span>
          </h1>
          <p>
            Tekan tombol lift di sebelah kanan untuk memanggil kabin eksklusif Anda dan masuk ke portal autentikasi personal.
          </p>

          <div className="action-hint">
            {!doorsOpen ? (
              <div className="hint-card">
                <span className="pointer-icon">👆</span>
                <div>
                  <strong>Panggil Lift Sekarang</strong>
                  <span>Pintu akan terbuka secara sinematik.</span>
                </div>
              </div>
            ) : (
              <div className="hint-active">
                <span className="glow-dot"></span>
                <span>Portal Terbuka • Silakan Masuk</span>
              </div>
            )}
          </div>
        </section>

        {/* Elevator Visualizer Area */}
        <section className="elevator-stage">
          <div className="elevator-shaft">
            {/* Ceiling Light Strip */}
            <div className="shaft-roof-light"></div>

            {/* Elevator Interior */}
            <div className="elevator-interior">
              <div className="interior-backwall">
                <div className="wall-neon-strip"></div>

                {/* Login Portal Inside */}
                <div className={`portal-container ${showLogin ? "portal-active" : ""}`}>
                  <div className="glass-card">
                    <button className="exit-btn" onClick={closeLogin}>×</button>
                    
                    <div className="portal-header">
                      <div className="portal-icon">✦</div>
                      <span className="portal-subtitle">SECURE GATEWAY</span>
                    </div>

                    {!isLoggedIn ? (
                      <>
                        <h2>Welcome back.</h2>
                        <p className="portal-desc">Autentikasi identitas Anda untuk melanjutkan.</p>

                        <form onSubmit={handleLogin} className="portal-form">
                          <div className="input-field">
                            <label>Username / Email</label>
                            <input
                              type="text"
                              placeholder="cth: alex.velvet"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>

                          <div className="input-field">
                            <label>Password</label>
                            <input
                              type="password"
                              placeholder="••••••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>

                          <div className="form-extra">
                            <label className="remember-me">
                              <input type="checkbox" /> Ingat saya
                            </label>
                            <a href="#forgot" onClick={(e) => e.preventDefault()}>Lupa sandi?</a>
                          </div>

                          <button type="submit" className="submit-portal-btn">
                            Masuk Ruangan <span>→</span>
                          </button>
                        </form>
                      </>
                    ) : (
                      <div className="success-screen">
                        <div className="success-icon">✨</div>
                        <h2>Akses Diterima</h2>
                        <p>Selamat datang kembali, <strong>{username}</strong>! Lift bersiap meluncur.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Realistic Elevator Doors */}
              <div className={`elevator-door left-door ${doorsOpen ? "open-left" : ""}`}>
                <div className="door-seam"></div>
              </div>
              <div className={`elevator-door right-door ${doorsOpen ? "open-right" : ""}`}>
                <div className="door-seam"></div>
              </div>

              {/* Floor Base */}
              <div className="elevator-floor"></div>
            </div>

            {/* Control Panel (Call Button Outside) */}
            <div className="hall-lantern-panel">
              <div className="lcd-display">
                <span className="lcd-arrow">{doorsOpen ? "▲" : "▼"}</span>
                <span className="lcd-floor">{doorsOpen ? "01" : "G"}</span>
              </div>
              <div className="speaker-grille">
                <span></span><span></span><span></span>
              </div>

              <button
                className={`call-button ${isPressed ? "pressed" : ""}`}
                onClick={handleElevatorButton}
                disabled={isPressed}
              >
                <div className="button-rim">
                  <div className="button-core">
                    <span>▲</span>
                  </div>
                </div>
              </button>
              <span className="call-label">CALL LIFT</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="velvet-footer">
        <span>✦</span> Designed with aesthetic & code precision <span>✦</span>
      </footer>
    </div>
  );
}

export default App;