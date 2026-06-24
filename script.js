/* ======================== CSS VARIABLES ======================== */
:root {
  --bg-primary: #08080f;
  --bg-secondary: #0e0e1a;
  --bg-card: rgba(255, 255, 255, 0.03);
  --bg-card-hover: rgba(255, 255, 255, 0.06);
  --accent: #00e5ff;
  --accent-dim: rgba(0, 229, 255, 0.12);
  --accent-glow: rgba(0, 229, 255, 0.4);
  --purple: #7b61ff;
  --purple-dim: rgba(123, 97, 255, 0.12);
  --purple-glow: rgba(123, 97, 255, 0.3);
  --green: #00ff9d;
  --orange: #ff7043;
  --text-primary: #e8eaf0;
  --text-secondary: #8892a4;
  --text-muted: #4a5568;
  --border: rgba(255, 255, 255, 0.07);
  --border-accent: rgba(0, 229, 255, 0.2);
  --font-display: 'Oxanium', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow-glow: 0 0 30px rgba(0, 229, 255, 0.15);
  --shadow-purple: 0 0 30px rgba(123, 97, 255, 0.2);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="light"] {
  --bg-primary: #f0f2f8;
  --bg-secondary: #ffffff;
  --bg-card: rgba(0, 0, 0, 0.03);
  --bg-card-hover: rgba(0, 0, 0, 0.06);
  --text-primary: #0e0e1a;
  --text-secondary: #4a5568;
  --text-muted: #8892a4;
  --border: rgba(0, 0, 0, 0.08);
  --border-accent: rgba(0, 150, 200, 0.3);
  --accent: #0099bb;
  --accent-dim: rgba(0, 150, 200, 0.1);
  --purple: #6048e0;
  --shadow-glow: 0 0 30px rgba(0, 150, 200, 0.1);
}

/* ======================== RESET & BASE ======================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.7;
  overflow-x: hidden;

}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

::selection {
  background: var(--accent-dim);
  color: var(--accent);
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 2px;
}


/* ======================== SCROLL PROGRESS ======================== */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--accent));
  z-index: 9000;
  width: 0%;
  transition: width 0.1s;
  box-shadow: 0 0 8px var(--accent-glow);
}

/* ======================== LOADING SCREEN ======================== */
.loader {
  position: fixed;
  inset: 0;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  flex-direction: column;
  gap: 20px;
  transition: opacity 0.6s, visibility 0.6s;
}

.loader.hidden {
  opacity: 0;
  visibility: hidden;
}

.loader-name {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--text-primary);
}

.loader-name span {
  color: var(--accent);
}

.loader-bar-wrap {
  width: 200px;
  height: 2px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.loader-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--purple), var(--accent));
  border-radius: 2px;
  animation: loadBar 1.8s ease-in-out forwards;
  box-shadow: 0 0 8px var(--accent-glow);
}

@keyframes loadBar {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

.loader-text {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  font-family: var(--font-display);
  text-transform: uppercase;
}

/* ======================== NAV ======================== */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 clamp(1rem, 5vw, 3rem);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);
}

nav.scrolled {
  background: rgba(8, 8, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

[data-theme="light"] nav.scrolled {
  background: rgba(240, 242, 248, 0.85);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-primary);
}

.nav-logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: var(--transition);
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition);
  font-size: 1rem;
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.nav-cta {
  padding: 0.45rem 1.2rem;
  border: 1px solid var(--accent);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--accent);
  transition: var(--transition);
  font-family: var(--font-display);
}

.nav-cta:hover {
  background: var(--accent);
  color: #000;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(8, 8, 15, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 1.5rem clamp(1rem, 5vw, 3rem);
  z-index: 999;
}

.mobile-menu.open {
  display: block;
}

.mobile-menu a {
  display: block;
  padding: 0.75rem 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.04em;
  transition: var(--transition);
}

.mobile-menu a:hover {
  color: var(--accent);
  padding-left: 0.5rem;
}

/* ======================== SECTIONS ======================== */
section {
  padding: clamp(4rem, 8vw, 7rem) clamp(1rem, 5vw, 3rem);
  position: relative;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-label {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-label::before {
  content: '';
  width: 30px;
  height: 1px;
  background: var(--accent);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-sub {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin-bottom: 3rem;
  line-height: 1.8;
}

/* ======================== REVEAL ANIMATIONS ======================== */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}

.delay-1 {
  transition-delay: 0.1s;
}

.delay-2 {
  transition-delay: 0.2s;
}

.delay-3 {
  transition-delay: 0.3s;
}

.delay-4 {
  transition-delay: 0.4s;
}

.delay-5 {
  transition-delay: 0.5s;
}

.delay-6 {
  transition-delay: 0.6s;
}

/* ======================== HERO ======================== */
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
}

.hero-glow-1 {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
  top: 10%;
  right: 5%;
  animation: float1 8s ease-in-out infinite;
}

.hero-glow-2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123, 97, 255, 0.1) 0%, transparent 70%);
  bottom: 15%;
  left: 5%;
  animation: float2 10s ease-in-out infinite;
}

.hero-glow-3 {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 157, 0.07) 0%, transparent 70%);
  top: 50%;
  left: 30%;
  animation: float1 6s ease-in-out infinite reverse;
}

@keyframes float1 {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-30px) scale(1.05);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(20px) rotate(5deg);
  }
}

/* Floating particles */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0.4;
  animation: particleRise linear infinite;
}

@keyframes particleRise {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }

  10% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.4;
  }

  100% {
    transform: translateY(-20px) scale(1);
    opacity: 0;
  }
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: center;
  width: 100%;
  padding: clamp(2rem, 5vw, 4rem) 0;
}

.hero-content {
  max-width: 680px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border: 1px solid var(--border-accent);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 1.5rem;
  background: var(--accent-dim);
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  animation: fadeInDown 0.8s 0.2s both;
}

.hero-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.0;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  animation: fadeInUp 0.8s 0.4s both;
}

.hero-name .accent {
  color: var(--accent);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.03em;
  animation: fadeInUp 0.8s 0.5s both;
}

.hero-typing-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  animation: fadeInUp 0.8s 0.6s both;
  color: var(--text-primary);
}

.typing-prefix {
  color: var(--purple);
}

.typing-text {
  color: var(--accent);
  border-right: 2px solid var(--accent);
  padding-right: 4px;
  white-space: nowrap;
  overflow: hidden;
}

.hero-desc {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 560px;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.8s 0.7s both;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s 0.8s both;
  margin-bottom: 2.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--accent);
  color: #000;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-family: var(--font-display);
  transition: var(--transition);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(0, 229, 255, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border: 1px solid var(--border-accent);
  color: var(--text-primary);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-family: var(--font-display);
  transition: var(--transition);
  background: var(--accent-dim);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  font-family: var(--font-display);
  transition: var(--transition);
}

.btn-ghost:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.hero-socials {
  display: flex;
  gap: 0.75rem;
  animation: fadeInUp 0.8s 0.9s both;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 1rem;
  transition: var(--transition);
}

.social-icon:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}

/* Hero card (right side) */
.hero-card {
  width: 280px;
  background: linear-gradient(135deg, rgba(14, 14, 26, 0.8), rgba(20, 20, 40, 0.6));
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  position: relative;
  backdrop-filter: blur(20px);
  animation: fadeIn 1s 1s both;
  flex-shrink: 0;
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(123, 97, 255, 0.15), transparent 60%);
  z-index: -1;
}

.hero-card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: #000;
  margin: 0 auto 1.25rem;
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
  position: relative;
}

.hero-card-avatar::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(135deg, var(--accent), var(--purple)) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: rotateBorder 4s linear infinite;
}

@keyframes rotateBorder {
  to {
    filter: hue-rotate(360deg);
  }
}

.hero-card-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.25rem;
}

.hero-card-role {
  font-size: 0.72rem;
  color: var(--accent);
  text-align: center;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
  font-family: var(--font-display);
}

.hero-card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.hero-card-stat {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.6rem;
  text-align: center;
}

.hero-card-stat-num {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
}

.hero-card-stat-label {
  font-size: 0.62rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.hero-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.hero-tag {
  padding: 0.25rem 0.6rem;
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  border-radius: 4px;
  font-size: 0.62rem;
  color: var(--accent);
  font-family: var(--font-display);
  letter-spacing: 0.05em;
}

.hero-tag.purple {
  background: var(--purple-dim);
  border-color: rgba(123, 97, 255, 0.3);
  color: var(--purple);
}

.hero-tag.green {
  background: rgba(0, 255, 157, 0.08);
  border-color: rgba(0, 255, 157, 0.2);
  color: var(--green);
}

/* ======================== ABOUT ======================== */
#about {
  background: var(--bg-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.about-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-portrait {
  width: 380px;
  height: 450px;
  background: linear-gradient(135deg, var(--bg-primary), var(--bg-card));
  background-image: url("./images/JNpro1.png");
  background-size: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  gap: 0.75rem;
}

.about-portrait::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(123, 97, 255, 0.05));
}

.about-portrait-icon {
  font-size: 5rem;
  line-height: 1;
  filter: drop-shadow(0 0 20px rgba(0, 229, 255, 0.3));
}

.about-portrait-text {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.1em;
}

.about-portrait-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.about-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, var(--purple), var(--accent));
  border-radius: var(--radius);
  padding: 0.75rem 1rem;
  font-family: var(--font-display);
  font-size: 0.80rem;
  font-weight: 700;
  color: #000;
  box-shadow: var(--shadow-purple);
}

.about-shape {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 80px;
  height: 80px;
  border-radius: var(--radius);
  border: 1px solid var(--border-accent);
  background: var(--accent-dim);
  animation: float2 6s ease-in-out infinite;
}

.about-shape2 {
  position: absolute;
  bottom: 30px;
  right: -30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(123, 97, 255, 0.3);
  background: var(--purple-dim);
  animation: float1 8s ease-in-out infinite;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.about-text p strong {
  color: var(--text-primary);
  font-weight: 600;
}

.about-text p .highlight {
  color: var(--accent);
  font-weight: 600;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.about-stat {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.about-stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--purple));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s;
}

.about-stat:hover {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
}

.about-stat:hover::before {
  transform: scaleX(1);
}

.about-stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.about-stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 4px;
}

/* ======================== EXPERIENCE ======================== */
.timeline {
  position: relative;
  margin-top: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, var(--accent), var(--purple), transparent);
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-dot {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
  transition: var(--transition);
}

.timeline-item:hover .timeline-dot {
  border-color: var(--accent);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
}

.timeline-card {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.timeline-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--accent), var(--purple));
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s;
}

.timeline-item:hover .timeline-card {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
  transform: translateX(4px);
}

.timeline-item:hover .timeline-card::before {
  transform: scaleY(1);
}

.timeline-company {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.timeline-role {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-period {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
  margin-bottom: 1rem;
  font-family: var(--font-display);
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-list li {
  font-size: 0.88rem;
  color: var(--text-secondary);
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  line-height: 1.6;
}

.timeline-list li::before {
  content: '▹';
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 0.1rem;
  font-size: 0.85rem;
}

/* ======================== SKILLS ======================== */
#skills {
  background: var(--bg-secondary);
}

/* --- Domain card layout --- */
.skill-domains {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-domain {
  display: flex;
  align-items: stretch;
  gap: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
}

.skill-domain:hover {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
  transform: translateX(4px);
  box-shadow: -4px 0 0 var(--accent), var(--shadow-glow);
}

/* Stripe colour per domain via data attribute */
.skill-domain-left {
  width: 4px;
  flex-shrink: 0;
}

.skill-domain[data-domain="support"] .skill-domain-stripe { background: var(--accent); }
.skill-domain[data-domain="ops"]     .skill-domain-stripe { background: var(--purple); }
.skill-domain[data-domain="web"]     .skill-domain-stripe { background: linear-gradient(180deg, var(--accent), var(--purple)); }
.skill-domain[data-domain="media"]   .skill-domain-stripe { background: var(--green); }
.skill-domain[data-domain="soft"]    .skill-domain-stripe { background: var(--orange); }

.skill-domain-stripe {
  width: 4px;
  height: 100%;
  display: block;
}

.skill-domain[data-domain="support"]:hover { box-shadow: -4px 0 0 var(--accent), var(--shadow-glow); }
.skill-domain[data-domain="ops"]:hover     { box-shadow: -4px 0 0 var(--purple), var(--shadow-purple); }
.skill-domain[data-domain="web"]:hover     { box-shadow: -4px 0 0 var(--accent), var(--shadow-glow); }
.skill-domain[data-domain="media"]:hover   { box-shadow: -4px 0 0 var(--green), 0 0 30px rgba(0,255,157,0.12); }
.skill-domain[data-domain="soft"]:hover    { box-shadow: -4px 0 0 var(--orange), 0 0 30px rgba(255,112,67,0.12); }

.skill-domain-body {
  flex: 1;
  padding: 1.4rem 1.75rem;
}

.skill-domain-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.skill-domain-icon {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
}

.skill-domain-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.skill-domain-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

/* Pill tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.75rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-secondary);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  transition: var(--transition);
}

.skill-domain:hover .skill-tag {
  border-color: rgba(255,255,255,0.12);
  color: var(--text-primary);
}

.skill-tag.accent {
  background: var(--accent-dim);
  border-color: var(--border-accent);
  color: var(--accent);
}

/* ======================== TOOLS V2 ======================== */
#tools {
  background: var(--bg-primary);
}

.tools-groups {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.tool-group {}

.tool-group-label {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.tool-group-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.tool-group-dot.accent-dot  { background: var(--accent);  box-shadow: 0 0 6px var(--accent); }
.tool-group-dot.purple-dot  { background: var(--purple);  box-shadow: 0 0 6px var(--purple); }
.tool-group-dot.green-dot   { background: var(--green);   box-shadow: 0 0 6px var(--green); }
.tool-group-dot.orange-dot  { background: var(--orange);  box-shadow: 0 0 6px var(--orange); }

.tools-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.tool-card-v2 {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-width: 150px;
  flex: 1 1 150px;
  max-width: 220px;
  transition: var(--transition);
  cursor: default;
}

.tool-card-v2:hover {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.tool-card-v2-icon {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid transparent;
  flex-shrink: 0;
  transition: var(--transition);
}

.tool-card-v2:hover .tool-card-v2-icon {
  transform: scale(1.1);
}

.tool-card-v2-name {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 0.15rem;
}

.tool-card-v2-type {
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.tool-card-v2:hover .tool-card-v2-name {
  color: var(--accent);
}

/* ======================== SERVICES ======================== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  cursor: default;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--accent), var(--purple));
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
}

.service-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-6px);
  box-shadow: var(--shadow-glow);
}

.service-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  transition: var(--transition);
}

.service-card:hover .service-icon {
  background: var(--accent);
  box-shadow: 0 0 20px var(--accent-glow);
}

.service-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.service-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ======================== PROJECTS ======================== */
#projects {
  background: var(--bg-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
}

.project-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-6px);
  box-shadow: var(--shadow-glow);
}

.project-thumb {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  position: relative;
  overflow: hidden;
}

.project-thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(8, 8, 15, 0.9) 100%);
}

.project-body {
  padding: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.project-tag {
  padding: 0.2rem 0.55rem;
  background: var(--accent-dim);
  border: 1px solid var(--border-accent);
  border-radius: 4px;
  font-size: 0.65rem;
  color: var(--accent);
  font-family: var(--font-display);
  letter-spacing: 0.05em;
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
}

.project-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--border-accent);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  transition: var(--transition);
  font-family: var(--font-display);
  letter-spacing: 0.05em;
}

.project-btn:hover {
  background: var(--accent);
  color: #000;
}

.project-btn.ghost {
  border-color: var(--border);
  color: var(--text-muted);
}

.project-btn.ghost:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
  background: none;
}

.coming-soon-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(123, 97, 255, 0.15);
  border: 1px solid rgba(123, 97, 255, 0.3);
  color: var(--purple);
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
  font-size: 0.65rem;
  font-weight: 600;
  font-family: var(--font-display);
  letter-spacing: 0.1em;
}

/* ======================== LEARNING JOURNEY ======================== */
.learn-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.learn-roadmap {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.learn-step {
  display: flex;
  gap: 1rem;
  position: relative;
}

.learn-step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.learn-step-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  background: var(--bg-primary);
  z-index: 1;
  flex-shrink: 0;
  transition: var(--transition);
}

.learn-step.active .learn-step-dot {
  border-color: var(--accent);
  box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);
}

.learn-step.done .learn-step-dot {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
}

.learn-step-line {
  width: 1px;
  flex: 1;
  min-height: 30px;
  background: var(--border);
  margin: 4px 0;
}

.learn-step.active .learn-step-line {
  background: linear-gradient(180deg, var(--accent), var(--border));
}

.learn-step.done .learn-step-line {
  background: var(--accent);
}

.learn-step-content {
  padding: 0.4rem 0 1.5rem;
}

.learn-step-title {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.learn-step.active .learn-step-title {
  color: var(--accent);
}

.learn-step-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.learn-step-status {
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.65rem;
  font-family: var(--font-display);
  letter-spacing: 0.1em;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
}

.learn-step.done .learn-step-status {
  background: rgba(0, 255, 157, 0.1);
  color: var(--green);
  border: 1px solid rgba(0, 255, 157, 0.2);
}

.learn-step.active .learn-step-status {
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid var(--border-accent);
}

.learn-step.future .learn-step-status {
  background: var(--border);
  color: var(--text-muted);
}

.learn-milestones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.milestone-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
  transition: var(--transition);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.milestone-card:hover {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
}

.milestone-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.milestone-body {}

.milestone-title {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.milestone-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* old .tools-grid removed — replaced by .tools-groups / .tool-card-v2 above */

/* ======================== GAMER SECTION ======================== */
.gamer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
}

.gamer-main {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.gamer-main::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(123, 97, 255, 0.05), rgba(0, 229, 255, 0.03));
  pointer-events: none;
}

.gamer-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--purple), var(--accent), var(--green));
}

.gamer-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.gamer-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.pc-specs {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  margin-bottom: 1.25rem;
}

.pc-specs-title {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.pc-spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.82rem;
}

.pc-spec-row:last-child {
  border-bottom: none;
}

.pc-spec-key {
  color: var(--text-muted);
}

.pc-spec-val {
  color: var(--accent);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.78rem;
}

.gamer-hobbies {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hobby-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: var(--transition);
}

.hobby-item:hover {
  border-color: var(--border-accent);
  transform: translateX(4px);
}

.hobby-icon {
  font-size: 1.3rem;
}

.hobby-text {}

.hobby-name {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
}

.hobby-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* ======================== CONTACT ======================== */
#contact {
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

/* ======================== CONTACT ======================== */
#contact {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.contact-bg-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.contact-bg-glow-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 65%);
  top: -120px;
  right: -100px;
}
.contact-bg-glow-2 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 65%);
  bottom: -80px;
  left: -80px;
}

#contact .section-inner {
  position: relative;
  z-index: 1;
}

/* Heading block */
.contact-heading {
  max-width: 620px;
  margin-bottom: 3rem;
}

/* ---- HERO BAND ---- */
.contact-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem 3rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
}

/* Subtle left accent stripe */
.contact-hero::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--accent), var(--purple));
}

.contact-hero-left {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

/* Availability badge */
.contact-availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  background: rgba(0,255,157,0.07);
  border: 1px solid rgba(0,255,157,0.2);
  border-radius: 100px;
  width: fit-content;
  margin-bottom: 0.35rem;
}

.contact-avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 8px var(--green);
  animation: pulse 2s infinite;
}

.contact-avail-text {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--green);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.contact-hero-name {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.1;
}

.contact-hero-role {
  font-size: 0.8rem;
  color: var(--accent);
  font-family: var(--font-display);
  letter-spacing: 0.05em;
}

.contact-hero-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 520px;
  margin: 0.25rem 0 0;
}

.contact-hero-right {
  flex-shrink: 0;
}

/* Resume CTA */
.contact-resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, var(--purple), var(--accent));
  border-radius: var(--radius);
  color: #000;
  font-weight: 700;
  font-size: 0.85rem;
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
}

.contact-resume-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,229,255,0.28);
}

/* ---- CONTACT CARDS ROW ---- */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.contact-c-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  color: inherit;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.contact-c-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--purple));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

a.contact-c-card:hover::after {
  transform: scaleX(1);
}

a.contact-c-card:hover {
  border-color: var(--border-accent);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.contact-c-card.no-link {
  cursor: default;
}

.contact-c-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
  transition: var(--transition);
}

a.contact-c-card:hover .contact-c-icon {
  transform: scale(1.1);
}

.contact-c-body {
  flex: 1;
  min-width: 0;
}

.contact-c-label {
  font-size: 0.62rem;
  color: var(--text-muted);
  font-family: var(--font-display);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 3px;
}

.contact-c-val {
  font-size: 0.82rem;
  color: var(--text-primary);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

a.contact-c-card:hover .contact-c-val {
  color: var(--accent);
}

.contact-c-arrow {
  font-size: 1rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: var(--transition);
}

a.contact-c-card:hover .contact-c-arrow {
  color: var(--accent);
  transform: translateX(3px);
}

/* ---- SOCIAL PILLS ROW ---- */
.contact-social-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-social-row-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.contact-social-links {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.contact-social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-family: var(--font-display);
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: var(--transition);
}

.contact-social-pill:hover {
  border-color: var(--border-accent);
  color: var(--accent);
  background: var(--accent-dim);
  transform: translateY(-2px);
}

/* ======================== FOOTER ======================== */
footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border);
  padding: 2.5rem clamp(1rem, 5vw, 3rem);
  position: relative;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.footer-logo span {
  color: var(--accent);
}

.footer-tagline {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-nav a {
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: var(--transition);
}

.footer-nav a:hover {
  color: var(--accent);
}

.footer-socials {
  display: flex;
  gap: 0.6rem;
}

.footer-copy {
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  margin-top: 0.5rem;
}

.footer-copy span {
  color: var(--accent);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  z-index: 500;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  transition: var(--transition);
  opacity: 0;
  transform: translateY(10px);
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.5);
}

/* ======================== RESPONSIVE ======================== */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-card {
    display: none;
  }

  .about-grid,
  .learn-grid,
  .gamer-grid {
    grid-template-columns: 1fr;
  }

  .contact-hero {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 1.5rem;
  }

  .contact-cards {
    grid-template-columns: 1fr 1fr;
  }

  .about-visual {
    order: -1;
  }

  .about-portrait {
    width: 200px;
    height: 250px;
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .timeline::before {
    left: 16px;
  }

  .timeline-dot {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .about-stats {
    grid-template-columns: 1fr 1fr;
  }

  .hero-ctas {
    flex-direction: column;
  }

  .hero-ctas .btn-primary,
  .hero-ctas .btn-secondary,
  .hero-ctas .btn-ghost {
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  .contact-hero {
    padding: 1.5rem;
  }

  .contact-hero-name {
    font-size: 1.3rem;
  }

  .tools-row {
    gap: 0.65rem;
  }

  .tool-card-v2 {
    min-width: 130px;
    flex: 1 1 130px;
  }
}

@media (max-width: 420px) {
  .skill-domain-body {
    padding: 1.1rem 1.1rem;
  }

  .tool-card-v2 {
    min-width: 100%;
    max-width: 100%;
    flex: 1 1 100%;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: 1fr 1fr;
  }
}

/* Misc helpers */
.text-accent {
  color: var(--accent);
}

.text-purple {
  color: var(--purple);
}

.text-green {
  color: var(--green);
}

.grad-text {
  background: linear-gradient(90deg, var(--accent), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-border {
  border-color: var(--border-accent) !important;
  box-shadow: var(--shadow-glow);
}
