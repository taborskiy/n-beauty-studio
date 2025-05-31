<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__texture"></div>
      <div class="hero__gradient"></div>
      
      <div class="hero__container">
        <!-- Hero content -->
        <div class="hero__content">
          <!-- Left content -->
          <div class="hero__text-section">
            <div class="hero__text-wrapper">
              <h1 class="hero__title">
                <span class="hero__title-main">Luxury Beauty</span>
                <span class="hero__title-sub">Experience</span>
              </h1>
              
              <div class="hero__divider"></div>
              
              <p class="hero__description">
                Where sophisticated beauty meets unparalleled expertise. 
                Discover the art of transformation in our exclusive studio sanctuary.
              </p>
            </div>

            <div class="hero__actions">
              <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                <span class="hero__button-text">BOOK CONSULTATION</span>
                <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </NuxtLink>
              
              <button class="hero__button hero__button--secondary">
                <span class="hero__button-text">STUDIO TOUR</span>
                <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Right side navigation -->
          <div class="hero__sidebar">
            <div class="hero__sidebar-wrapper">
              <!-- Vertical address text -->
              <div class="hero__address">
                1234 BEAUTY BOULEVARD
              </div>
              
              <!-- Side navigation -->
              <div class="hero__nav">
                <div class="hero__nav-item hero__nav-item--active">
                  <div class="hero__nav-dot"></div>
                  <span class="hero__nav-text">Hair Salon</span>
                </div>
                <div class="hero__nav-item">
                  <div class="hero__nav-dot"></div>
                  <span class="hero__nav-text">Nail Studio</span>
                </div>
                <div class="hero__nav-item">
                  <div class="hero__nav-dot"></div>
                  <span class="hero__nav-text">Facial Spa</span>
                </div>
                <div class="hero__nav-item">
                  <div class="hero__nav-dot"></div>
                  <span class="hero__nav-text">Massage Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="hero__scroll">
          <div class="hero__scroll-wrapper">
            <span class="hero__scroll-text">SCROLL</span>
            <div class="hero__scroll-line"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="services">
      <div class="services__container">
        <h2 class="services__title">Our Services</h2>
        <div class="services__grid">
          <div class="services__item">
            <div class="services__icon">
              <span class="services__emoji">💇‍♀️</span>
            </div>
            <h3 class="services__item-title">Hair Styling</h3>
            <p class="services__item-text">Professional hair cutting, coloring, and styling services.</p>
          </div>
          <div class="services__item">
            <div class="services__icon">
              <span class="services__emoji">💅</span>
            </div>
            <h3 class="services__item-title">Nail Care</h3>
            <p class="services__item-text">Manicure, pedicure, and nail art services.</p>
          </div>
          <div class="services__item">
            <div class="services__icon">
              <span class="services__emoji">✨</span>
            </div>
            <h3 class="services__item-title">Facial Treatments</h3>
            <p class="services__item-text">Rejuvenating facial treatments and skincare services.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <GalleryComponent />
  </div>
</template>

<script setup>
// Import gallery component
import GalleryComponent from './gallery.vue'
</script>

<style scoped>
/* Hero Block */
.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #374151 0%, #111827 50%, #334155 100%);
  overflow: hidden;
}

.hero__texture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
}

.hero__gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
  background-size: 20px 20px;
}

.hero__container {
  position: relative;
  z-index: 20;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
}

/* Hero Content */
.hero__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  height: calc(100vh - 200px);
  align-items: center;
  padding-top: 70px;
}

.hero__text-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero__text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Title Elements */
.hero__title {
  font-size: 4rem;
  font-weight: 200;
  color: white;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

.hero__title-main {
  display: block;
}

.hero__title-sub {
  display: block;
  font-weight: 300;
  color: #d1d5db;
}

.hero__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
}

.hero__description {
  font-size: 1.25rem;
  color: #d1d5db;
  font-weight: 300;
  line-height: 1.6;
  max-width: 32rem;
  margin: 0;
}

/* Actions */
.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.hero__button--primary {
  background: transparent;
  border: 1px solid white;
  color: white;
}

.hero__button--primary:hover {
  background: white;
  color: #111827;
}

.hero__button--secondary {
  background: transparent;
  color: #d1d5db;
}

.hero__button--secondary:hover {
  color: white;
}

.hero__button-text {
  margin-right: 0.5rem;
}

.hero__button-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.hero__button--primary:hover .hero__button-icon {
  transform: translateX(0.25rem);
}

.hero__button--secondary:hover .hero__button-icon {
  transform: scale(1.1);
}

/* Sidebar */
.hero__sidebar {
  display: none;
  justify-content: flex-end;
  align-items: center;
}

.hero__sidebar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero__address {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  color: #9ca3af;
  font-weight: 300;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  margin-bottom: 3rem;
}

/* Navigation */
.hero__nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero__nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__nav-item:hover {
  transform: translateX(0.25rem);
}

.hero__nav-item:hover .hero__nav-dot {
  background: #fbbf24;
}

.hero__nav-item:hover .hero__nav-text {
  color: white;
}

.hero__nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #6b7280;
  transition: background 0.3s ease;
}

.hero__nav-item--active .hero__nav-dot {
  background: white;
}

.hero__nav-text {
  color: #d1d5db;
  font-weight: 300;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
}

.hero__nav-item--active .hero__nav-text {
  color: #d1d5db;
}

/* Scroll Indicator */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.hero__scroll-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.hero__scroll-text {
  color: #9ca3af;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.2em;
}

.hero__scroll-line {
  width: 1px;
  height: 3rem;
  background: linear-gradient(to bottom, #9ca3af, transparent);
}

/* Services Block */
.services {
  padding: 5rem 0;
  background: white;
}

.services__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.services__title {
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.services__item {
  text-align: center;
  padding: 1.5rem;
}

.services__icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services__emoji {
  font-size: 2rem;
}

.services__item-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #111827;
}

.services__item-text {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .hero__title {
    font-size: 6rem;
  }

  .hero__content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .hero__sidebar {
    display: flex;
  }

  .hero__actions {
    flex-direction: row;
  }

  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet Styles */
@media (min-width: 768px) {
  .hero__title {
    font-size: 5rem;
  }

  .hero__actions {
    flex-direction: row;
  }
}
</style> 