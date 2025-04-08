import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/index.css"
import "../styles/themes.css"  // Import the themes CSS
import "../styles/theme-toggle.css"  // Import the toggle CSS
import "../styles/sandbox-mockup.css"  // Import the mockup CSS
import { Helmet } from "react-helmet"
import ThemeToggle from "../components/ThemeToggle"

const IndexPage = () => {
  // Theme state management
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode
  
  useEffect(() => {
    // Check for saved preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
    
    // Apply theme to body
    document.body.className = isDarkMode ? 'dark-mode' : ''
  }, [isDarkMode])
  
  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <main className="main-container">
      <Helmet>
        <title>SINS - Secure Interactive Malware Sandbox</title>
        <meta name="description" content="Safely analyze and understand malware in an isolated environment" />
        <meta name="theme-color" content={isDarkMode ? "#0f1419" : "#e0e5ec"} />
      </Helmet>

      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <header className="header">
        <div className="logo-container">
          <div className="logo">SINS</div>
          <div className="logo-subtitle">Secure Interactive Malware Sandbox</div>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="login-button">Login</button></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Analyze Malware in a <span className="highlight">Secure Sandbox</span></h1>
          <p>
            Safely dissect, analyze, and understand malicious code in an isolated 
            environment without risking your infrastructure.
          </p>
          <div className="cta-buttons">
            <button className="signup-button">Sign Up for Free Access</button>
            <button className="demo-button">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sandbox-visual">
            <div className="code-window">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-number">01</span>
                  <span className="code-text">class MalwareAnalyzer {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-number">02</span>
                  <span className="code-text">  constructor() {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-number">03</span>
                  <span className="code-text">    this.sandbox = new SecureEnvironment();</span>
                </div>
                <div className="code-line">
                  <span className="code-number">04</span>
                  <span className="code-text">    this.threats = [];</span>
                </div>
                <div className="code-line">
                  <span className="code-number">05</span>
                  <span className="code-text">  {'}'}</span>
                </div>
                <div className="code-line">
                  <span className="code-number">06</span>
                  <span className="code-text">  </span>
                </div>
                <div className="code-line">
                  <span className="code-number">07</span>
                  <span className="code-text">  analyze(sample) {'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-number">08</span>
                  <span className="code-text">    const result = this.sandbox.execute(sample);</span>
                </div>
                <div className="code-line">
                  <span className="code-number">09</span>
                  <span className="code-text">    return this.generateReport(result);</span>
                </div>
                <div className="code-line">
                  <span className="code-number">10</span>
                  <span className="code-text">  {'}'}</span>
                </div>
                <div className="code-line">
                  <span className="code-number">11</span>
                  <span className="code-text">{'}'}</span>
                </div>
              </div>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </section>

      <section className="sandbox-preview">
        <h2>Experience the Interactive Sandbox</h2>
        <p className="section-intro">
          Get a glimpse of our powerful malware analysis environment that puts you in control
          while revealing everything happening beneath the surface.
        </p>
        
        <div className="mockup-container">
          <div className="mockup-window">
            <div className="window-controls">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-content">
              <div className="vm-interaction-panel">
                <div className="vm-screen">
                  <div className="vm-toolbar">
                    <span className="vm-control">▶ Run</span>
                    <span className="vm-control">⏸ Pause</span>
                    <span className="vm-control">⟳ Reset</span>
                    <span className="vm-status active">● Recording</span>
                  </div>
                  <div className="vm-display">
                    <div className="windows-desktop">
                      <div className="desktop-icon">
                        <div className="icon-image"></div>
                        <span>My Computer</span>
                      </div>
                      <div className="desktop-icon">
                        <div className="icon-image"></div>
                        <span>Recycle Bin</span>
                      </div>
                      <div className="malware-window">
                        <div className="window-header">
                          <span>suspicious_file.exe</span>
                          <span className="close-btn">×</span>
                        </div>
                        <div className="window-content">
                          <div className="loading-bar">
                            <div className="progress"></div>
                          </div>
                          <p>Installing components...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vm-controls">
                    <button className="vm-button">Snapshot</button>
                    <button className="vm-button active">Network</button>
                    <button className="vm-button">Processes</button>
                    <button className="vm-button">Files</button>
                  </div>
                </div>
                <div className="vm-sidebar">
                  <div className="sidebar-section">
                    <h4>Analysis Controls</h4>
                    <ul className="control-list">
                      <li className="control-item">Upload Sample</li>
                      <li className="control-item active">Run Analysis</li>
                      <li className="control-item">Compare Reports</li>
                      <li className="control-item">Export Results</li>
                    </ul>
                  </div>
                  <div className="sidebar-section">
                    <h4>Environment</h4>
                    <div className="environment-selector">
                      <div className="os-option selected">Windows 10</div>
                      <div className="os-option">Windows 7</div>
                      <div className="os-option">Ubuntu 20.04</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="analysis-dashboard">
                <div className="dashboard-panel network-panel">
                  <h4>Network Activity</h4>
                  <div className="network-graph">
                    <div className="connection-line c1"></div>
                    <div className="connection-line c2"></div>
                    <div className="connection-line c3 malicious"></div>
                    <div className="connection-dot d1"></div>
                    <div className="connection-dot d2"></div>
                    <div className="connection-dot d3 malicious"></div>
                    <div className="alert-badge">3</div>
                  </div>
                  <div className="network-stats">
                    <div className="stat-item">
                      <span className="stat-label">Connections:</span>
                      <span className="stat-value">12</span>
                    </div>
                    <div className="stat-item alert">
                      <span className="stat-label">Suspicious IPs:</span>
                      <span className="stat-value">3</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Data Transfer:</span>
                      <span className="stat-value">1.2 MB</span>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-panel system-panel">
                  <h4>System Impact</h4>
                  <div className="resource-meters">
                    <div className="meter">
                      <div className="meter-label">CPU</div>
                      <div className="meter-bar">
                        <div className="meter-fill" style={{width: "78%"}}></div>
                      </div>
                      <div className="meter-value">78%</div>
                    </div>
                    <div className="meter">
                      <div className="meter-label">Memory</div>
                      <div className="meter-bar">
                        <div className="meter-fill" style={{width: "45%"}}></div>
                      </div>
                      <div className="meter-value">45%</div>
                    </div>
                    <div className="meter">
                      <div className="meter-label">Disk</div>
                      <div className="meter-bar">
                        <div className="meter-fill" style={{width: "32%"}}></div>
                      </div>
                      <div className="meter-value">32%</div>
                    </div>
                  </div>
                  <div className="process-list">
                    <div className="process-item suspicious">
                      <span className="process-name">suspicious_file.exe</span>
                      <span className="process-usage">45%</span>
                    </div>
                    <div className="process-item suspicious">
                      <span className="process-name">hidden_service.exe</span>
                      <span className="process-usage">23%</span>
                    </div>
                    <div className="process-item">
                      <span className="process-name">explorer.exe</span>
                      <span className="process-usage">5%</span>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-panel threat-panel">
                  <h4>Threat Assessment</h4>
                  <div className="threat-meter">
                    <div className="threat-indicator" style={{transform: "rotate(135deg)"}}></div>
                    <div className="threat-level high">High Risk</div>
                  </div>
                  <div className="threat-details">
                    <div className="threat-item">
                      <span className="threat-type">Behavior:</span>
                      <span className="threat-desc">Registry Persistence</span>
                    </div>
                    <div className="threat-item">
                      <span className="threat-type">Classification:</span>
                      <span className="threat-desc">Trojan Downloader</span>
                    </div>
                    <div className="threat-item">
                      <span className="threat-type">Obfuscation:</span>
                      <span className="threat-desc">High (Encrypted Payload)</span>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-panel activity-panel">
                  <h4>Activity Timeline</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <span className="timeline-time">00:01</span>
                      <span className="timeline-event">File execution started</span>
                    </div>
                    <div className="timeline-item suspicious">
                      <span className="timeline-time">00:12</span>
                      <span className="timeline-event">Modified system registry</span>
                    </div>
                    <div className="timeline-item suspicious">
                      <span className="timeline-time">00:23</span>
                      <span className="timeline-event">Connected to unknown IP</span>
                    </div>
                    <div className="timeline-item suspicious">
                      <span className="timeline-time">00:40</span>
                      <span className="timeline-event">Created persistence mechanism</span>
                    </div>
                    <div className="timeline-item">
                      <span className="timeline-time">01:15</span>
                      <span className="timeline-event">Analysis completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mockup-caption">
            <p>Our interactive sandbox provides complete visibility into malware behavior with real-time monitoring and analysis.</p>
            <button className="signup-button">Try It Now</button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Advanced Sandbox Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Isolation Technology</h3>
            <p>Complete isolation from your network and infrastructure ensures zero risk of infection.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Behavioral Analysis</h3>
            <p>Advanced runtime analysis with comprehensive reports on malware behavior.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Custom Environments</h3>
            <p>Simulate various OS configurations to analyze target-specific behavior.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Deep Inspection</h3>
            <p>Static and dynamic code analysis with detailed memory and network monitoring.</p>
          </div>
        </div>
      </section>

      <section className="access-panel">
        <div className="access-content">
          <h2>Ready to explore the sandbox?</h2>
          <div className="access-options">
            <div className="signup-area">
              <h3>New Users</h3>
              <p>Create an account to get started with our secure malware analysis platform.</p>
              <button className="signup-button">Sign Up Now</button>
            </div>
            <div className="login-area">
              <h3>Existing Users</h3>
              <p>Already have an account? Access the sandbox directly.</p>
              <a href="https://sandbox.example.com" className="login-link">Go to Sandbox</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Why Choose Our Sandbox?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Traditional malware analysis is risky and resource-intensive. Our interactive sandbox
              provides a secure, isolated environment where security professionals, researchers, and
              cybersecurity students can safely analyze and understand malicious code.
            </p>
            <p>
              Built by security experts with a focus on usability and comprehensive analysis,
              our platform helps you stay ahead of emerging threats while protecting your infrastructure.
            </p>
          </div>
          <div className="stats-panel">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Containment Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Malware Samples Analyzed Daily</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message"></textarea>
          </div>
          <button className="submit-button">Send Message</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">SINS</div>
          <div className="footer-links">
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SINS Malware Sandbox. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>SINS - Secure Interactive Malware Sandbox</title>