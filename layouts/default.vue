<template>
  <div class="page">
    <header class="header">
      <div class="header__texture"></div>
      
      <nav class="header__nav">
        <div class="header__container">
          <NuxtLink to="/" class="header__logo">
            N-Beauty Studio
          </NuxtLink>
          
          <div class="header__menu">
            <NuxtLink to="/" class="header__menu-item header__menu-item--active">
              <span class="header__menu-text">Home</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            <NuxtLink to="/gallery" class="header__menu-item">
              <span class="header__menu-text">Gallery</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            <NuxtLink to="/prices" class="header__menu-item">
              <span class="header__menu-text">Prices</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            <NuxtLink to="/contacts" class="header__menu-item">
              <span class="header__menu-text">Contacts</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            
            <NuxtLink to="/contacts" class="header__button">
              BOOK NOW
            </NuxtLink>
          </div>

          <button class="header__mobile-toggle">
            <svg class="header__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="page__content">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer__container">
        <div class="footer__content">
          <p class="footer__copyright">&copy; {{ new Date().getFullYear() }} N-Beauty Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Page Layout */
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page__content {
  flex-grow: 1;
}

/* Header Block */
.header {
  position: relative;
  z-index: 30;
  background: linear-gradient(to right, #374151, #111827, #334155);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.header__texture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
  background-size: 20px 20px;
  pointer-events: none;
}

.header__nav {
  position: relative;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Logo Element */
.header__logo {
  font-size: 1.5rem;
  font-weight: 300;
  color: white;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.header__logo:hover {
  color: #d1d5db;
}

/* Menu Element */
.header__menu {
  display: none;
  align-items: center;
  gap: 3rem;
}

.header__menu-item {
  position: relative;
  color: #d1d5db;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.header__menu-item:hover {
  color: white;
}

.header__menu-item:hover .header__menu-underline {
  width: 100%;
}

.header__menu-text {
  display: block;
}

.header__menu-underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  transition: width 0.3s ease;
}

/* Button Element */
.header__button {
  margin-left: 2rem;
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 1px solid #fbbf24;
  color: #fbbf24;
  text-decoration: none;
  font-weight: 300;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.header__button:hover {
  background: #fbbf24;
  color: #111827;
}

/* Mobile Toggle Element */
.header__mobile-toggle {
  display: block;
  background: none;
  border: none;
  color: #d1d5db;
  cursor: pointer;
  transition: color 0.3s ease;
}

.header__mobile-toggle:hover {
  color: white;
}

.header__mobile-icon {
  width: 24px;
  height: 24px;
}

/* Desktop Menu Visibility */
@media (min-width: 768px) {
  .header__menu {
    display: flex;
  }
  
  .header__mobile-toggle {
    display: none;
  }
}

/* Footer Block */
.footer {
  background: #f9fafb;
  padding: 2rem 0;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer__content {
  text-align: center;
}

.footer__copyright {
  color: #6b7280;
  margin: 0;
}
</style> 