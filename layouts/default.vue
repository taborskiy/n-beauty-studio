<template>
  <div class="page">
    <header class="header">
      
      <nav class="header__nav">
        <div class="header__container">
          <NuxtLink to="/" class="header__logo">
            <img src="/public/images/logo-horizontal.svg" alt="N-Beauty Studio Logo" class="header__logo-image">
          </NuxtLink>
          
          <div class="header__menu" :class="{ 'header__menu--open': isMobileMenuOpen }">
            <NuxtLink to="/" class="header__menu-item header__menu-item--active" @click="closeMobileMenu">
              <span class="header__menu-text">Home</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            <NuxtLink to="/prices" class="header__menu-item" @click="closeMobileMenu">
              <span class="header__menu-text">Prices</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            <NuxtLink to="/contacts" class="header__menu-item" @click="closeMobileMenu">
              <span class="header__menu-text">Contacts</span>
              <div class="header__menu-underline"></div>
            </NuxtLink>
            
            <NuxtLink to="/contacts" class="header__button" @click="closeMobileMenu">
              BOOK NOW
            </NuxtLink>
          </div>

          <button class="header__mobile-toggle" @click="toggleMobileMenu">
            <svg class="header__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
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

<script setup>
import { ref } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  console.log('Menu toggled:', isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  console.log('Menu closed')
}
</script>

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
  position: sticky;
  top: 0;
  z-index: 30;
  box-shadow: 0 10px 15px -3px rgba(236, 72, 153, 0.1), 0 4px 6px -2px rgba(236, 72, 153, 0.05);
  background-color: white;
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
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  img {
    max-width: 300px;
    height: auto;
  }
}

.header__logo:hover {
  color: #374151;
}

/* Menu Element */
.header__menu {
  display: none;
  align-items: center;
  gap: 3rem;
  transition: all 0.3s ease;
}

.header__menu-item {
  position: relative;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.header__menu-item:hover {
  color: #111827;
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
  background: linear-gradient(to right, #db2777, #be185d);
  transition: width 0.3s ease;
}

/* Button Element */
.header__button {
  margin-left: 2rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #ec4899, #db2777);
  border: none;
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.header__button:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #db2777, #be185d);
}

/* Mobile Toggle Element */
.header__mobile-toggle {
  display: block;
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  transition: color 0.3s ease;
}

.header__mobile-toggle:hover {
  color: #111827;
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

/* Mobile Menu Styles */
@media (max-width: 768px) {
  .header__menu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    border-top: 1px solid #e5e7eb;
    border: 3px solid #ec4899;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    z-index: 50;
    min-height: 200px;
  }

  .header__menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .header__menu-item {
    padding: 1rem 0;
    border-bottom: 1px solid #f3f4f6;
    color: #111827;
    font-size: 1.1rem;
  }

  .header__menu-item:hover {
    color: #ec4899;
    background: rgba(236, 72, 153, 0.05);
    padding-left: 1rem;
  }

  .header__menu-item:last-of-type {
    border-bottom: none;
  }

  .header__menu-underline {
    display: none;
  }

  .header__button {
    margin-left: 0;
    margin-top: 1rem;
    text-align: center;
    display: block;
    padding: 1rem 1.5rem;
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