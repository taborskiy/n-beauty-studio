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

    <!-- About Me Section -->
    <section class="about-me section">
      <div class="container">
        <div class="about-me__content">
          <div class="about-me__image">
            <img src="" alt="Beauty Master" class="about-me__photo">
            <div class="about-me__experience">
              <span class="about-me__years">8+</span>
              <span class="about-me__text">years of experience</span>
            </div>
          </div>
          <div class="about-me__info">
            <h2 class="section__title">About Me</h2>
            <div class="section__divider"></div>
            <p class="about-me__description">
              Hello! I'm Anna, a certified beauty master with 8 years of experience in professional cosmetology and aesthetics. My passion is enhancing the natural beauty of every woman, creating a unique look that reflects your individuality.
            </p>
            <div class="about-me__achievements">
              <div class="achievement">
                <h4>Education & Certificates</h4>
                <ul>
                  <li>Cosmetologist-Aesthetician Diploma</li>
                  <li>Permanent Makeup Certificate</li>
                  <li>Advanced Training Courses in Europe</li>
                </ul>
              </div>
              <div class="achievement">
                <h4>Specialization</h4>
                <ul>
                  <li>Permanent Makeup</li>
                  <li>Professional Cosmetology</li>
                  <li>Facial Skin Care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Section -->
    <section class="equipment section section--dark">
      <div class="container">
        <div class="equipment__header">
          <h2 class="section__title section__title--light">Professional Equipment</h2>
          <div class="section__divider"></div>
          <p class="section__subtitle">I use only the latest equipment and quality materials from leading global brands</p>
        </div>
        <div class="equipment__grid">
          <div class="equipment__item">
            <div class="equipment__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3>Laser Equipment</h3>
            <p>Latest laser systems for painless and effective procedures for rejuvenation and correction of skin imperfections</p>
          </div>
          <div class="equipment__item">
            <div class="equipment__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3>Ultrasonic Devices</h3>
            <p>Professional ultrasonic systems for deep cleansing and skin nourishment at the cellular level</p>
          </div>
          <div class="equipment__item">
            <div class="equipment__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3>Electroporation</h3>
            <p>Innovative technology for painless introduction of active substances into deep skin layers</p>
          </div>
          <div class="equipment__item">
            <div class="equipment__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </div>
            <h3>LED Therapy</h3>
            <p>Light therapy for stimulating cell regeneration and improving overall skin condition</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process section">
      <div class="container">
        <div class="process__header">
          <h2 class="section__title">Work Process</h2>
          <div class="section__divider"></div>
          <p class="section__subtitle">Individual approach to each client with high quality guarantee</p>
        </div>
        <div class="process__content">
          <div class="process__steps">
            <div class="process__step">
              <div class="process__step-number">01</div>
              <h3>Consultation</h3>
              <p>Detailed skin condition analysis and discussion of your wishes. Selection of individual treatment program.</p>
            </div>
            <div class="process__step">
              <div class="process__step-number">02</div>
              <h3>Preparation</h3>
              <p>Cleansing and preparing the skin for the procedure. Application of numbing agents when necessary.</p>
            </div>
            <div class="process__step">
              <div class="process__step-number">03</div>
              <h3>Procedure</h3>
              <p>Performing the procedure using professional equipment and quality materials.</p>
            </div>
            <div class="process__step">
              <div class="process__step-number">04</div>
              <h3>Aftercare</h3>
              <p>Post-procedure care and home care recommendations to achieve the best results.</p>
            </div>
          </div>
          <div class="process__advantages">
            <h3>Advantages of Working with Me</h3>
            <div class="advantages__grid">
              <div class="advantage__item">
                <div class="advantage__icon">✨</div>
                <span>Individual Approach</span>
              </div>
              <div class="advantage__item">
                <div class="advantage__icon">🎯</div>
                <span>High Professionalism</span>
              </div>
              <div class="advantage__item">
                <div class="advantage__icon">💎</div>
                <span>Premium Materials</span>
              </div>
              <div class="advantage__item">
                <div class="advantage__icon">⚡</div>
                <span>Quick Results</span>
              </div>
              <div class="advantage__item">
                <div class="advantage__icon">🛡️</div>
                <span>Quality Guarantee</span>
              </div>
              <div class="advantage__item">
                <div class="advantage__icon">💝</div>
                <span>Comfortable Atmosphere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq section section--dark">
      <div class="container">
        <div class="faq__header">
          <h2 class="section__title section__title--light">Frequently Asked Questions</h2>
          <div class="section__divider"></div>
        </div>
        <div class="faq__list">
          <div class="faq__item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)" :class="{ 'faq__item--active': activeFaq === index }">
            <div class="faq__question">
              <h3>{{ faq.question }}</h3>
              <span class="faq__toggle">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq__answer" v-show="activeFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing section">
      <div class="container">
        <div class="pricing__header">
          <h2 class="section__title">Service Price List</h2>
          <div class="section__divider"></div>
          <p class="section__subtitle">Professional services at affordable prices</p>
        </div>
        <div class="pricing__categories">
          <div class="pricing__category" v-for="(category, index) in pricingCategories" :key="index">
            <h3 class="pricing__category-title">{{ category.name }}</h3>
            <div class="pricing__services">
              <div class="pricing__service" v-for="(service, serviceIndex) in category.services" :key="serviceIndex">
                <div class="pricing__service-info">
                  <h4>{{ service.name }}</h4>
                  <p>{{ service.description }}</p>
                </div>
                <div class="pricing__service-price">{{ service.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="pricing__note">
          <p>* Final cost may vary depending on work complexity and individual characteristics</p>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews section section--dark">
      <div class="container">
        <div class="reviews__header">
          <h2 class="section__title section__title--light">Client Reviews</h2>
          <div class="section__divider"></div>
        </div>
        <div class="reviews__grid">
          <div class="review__item" v-for="(review, index) in reviews" :key="index">
            <div class="review__content">
              <div class="review__stars">
                <span v-for="n in 5" :key="n">⭐</span>
              </div>
              <p>"{{ review.text }}"</p>
            </div>
            <div class="review__author">
              <div class="review__avatar">
                <img :src="review.avatar" :alt="review.name">
              </div>
              <div class="review__info">
                <h4>{{ review.name }}</h4>
                <span>{{ review.service }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacts Section -->
    <section class="contacts section">
      <div class="container">
        <div class="contacts__content">
          <div class="contacts__info">
            <h2 class="section__title">Contacts</h2>
            <div class="section__divider"></div>
            <div class="contacts__details">
              <div class="contact__item">
                <div class="contact__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Beauty Street<br>Kyiv, 01001</p>
                </div>
              </div>
              <div class="contact__item">
                <div class="contact__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+38 (097) 123-45-67</p>
                </div>
              </div>
              <div class="contact__item">
                <div class="contact__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon-Fri: 9:00 - 20:00<br>Sat: 10:00 - 18:00<br>Sun: by appointment</p>
                </div>
              </div>
              <div class="contact__item">
                <div class="contact__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@beautystudio.ua</p>
                </div>
              </div>
            </div>
            <div class="contacts__social">
              <h4>Social Media</h4>
              <div class="social__links">
                <a href="#" class="social__link">Instagram</a>
                <a href="#" class="social__link">Facebook</a>
                <a href="#" class="social__link">Telegram</a>
              </div>
            </div>
          </div>
          <div class="contacts__form">
            <h3>Book a Consultation</h3>
            <form class="contact__form">
              <input type="text" placeholder="Your name" required>
              <input type="tel" placeholder="Phone number" required>
              <select required>
                <option value="">Select service</option>
                <option value="consultation">Consultation</option>
                <option value="permanent-makeup">Permanent Makeup</option>
                <option value="facial">Facial Care</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Comment (optional)" rows="4"></textarea>
              <button type="submit" class="form__submit">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// FAQ data
const activeFaq = ref(null)
const faqs = ref([
  {
    question: 'Is permanent makeup procedure painful?',
    answer: 'During the procedure, quality numbing agents are used, so discomfort is minimal. Most clients feel only light tingling.'
  },
  {
    question: 'How long does the result last?',
    answer: 'Permanent makeup lasts from 1 to 3 years depending on skin type, lifestyle and care. Touch-up is recommended 4-6 weeks after the first procedure.'
  },
  {
    question: 'How to prepare for the procedure?',
    answer: 'A week before the procedure, avoid sun exposure, do not consume alcohol 24 hours before. Detailed recommendations are provided during consultation.'
  },
  {
    question: 'Can procedures be done during pregnancy?',
    answer: 'Permanent makeup procedures are not recommended during pregnancy and breastfeeding for safety reasons.'
  },
  {
    question: 'How long does the procedure take?',
    answer: 'Depending on the type of procedure: eyebrows - 2-3 hours, lips - 2-2.5 hours, eyeliner - 1.5-2 hours. Includes consultation and sketch.'
  }
])

// Pricing data
const pricingCategories = ref([
  {
    name: 'Permanent Makeup',
    services: [
      {
        name: 'Eyebrows (Powder Technique)',
        description: 'Natural powder effect',
        price: '$150'
      },
      {
        name: 'Eyebrows (Hair Stroke Technique)',
        description: 'Natural hair imitation',
        price: '$170'
      },
      {
        name: 'Lips (Outline + Shading)',
        description: 'Full lip filling',
        price: '$190'
      },
      {
        name: 'Eyeliner',
        description: 'Classic or extended eyeliner',
        price: '$130'
      }
    ]
  },
  {
    name: 'Cosmetology',
    services: [
      {
        name: 'Facial Cleansing',
        description: 'Mechanical + ultrasonic',
        price: '$50'
      },
      {
        name: 'Chemical Peel',
        description: 'Depending on acid type',
        price: 'from $35'
      },
      {
        name: 'Lifting Massage',
        description: 'Anti-aging program',
        price: '$40'
      },
      {
        name: 'Mesotherapy',
        description: 'Injectable rejuvenation',
        price: 'from $65'
      }
    ]
  }
])

// Reviews data
const reviews = ref([
  {
    name: 'Elena K.',
    service: 'Permanent Eyebrow Makeup',
    text: 'Incredible result! The eyebrows look absolutely natural. Anna is a true professional in her field.',
    avatar: '/images/review1.jpg'
  },
  {
    name: 'Maria V.',
    service: 'Facial Care',
    text: 'After the course of procedures, my skin became much better. I highly recommend this beauty studio!',
    avatar: '/images/review2.jpg'
  },
  {
    name: 'Svetlana P.',
    service: 'Permanent Lip Makeup',
    text: 'I always dreamed of bright lips without daily makeup. Now it\'s a reality!',
    avatar: '/images/review3.jpg'
  }
])

// FAQ toggle function
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
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

/* Common Section Styles */
.section {
  padding: 6rem 0;
}

.section--dark {
  background: linear-gradient(135deg, #374151 0%, #111827 50%, #334155 100%);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section__title {
  font-size: 3rem;
  font-weight: 200;
  color: #111827;
  margin-bottom: 1rem;
  text-align: center;
}

.section__title--light {
  color: white;
}

.section__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  margin: 0 auto 2rem;
}

.section__subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section--dark .section__subtitle {
  color: #d1d5db;
}

/* About Me Section */
.about-me__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}

.about-me__image {
  position: relative;
  text-align: center;
}

.about-me__photo {
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 1rem;
  filter: grayscale(20%);
}

.about-me__experience {
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  background: #fbbf24;
  color: #111827;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.about-me__years {
  display: block;
  font-size: 2rem;
  font-weight: 700;
}

.about-me__text {
  font-size: 0.875rem;
  font-weight: 300;
}

.about-me__info {
  text-align: center;
}

.about-me__description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #6b7280;
  margin-bottom: 3rem;
}

.about-me__achievements {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.achievement h4 {
  color: #111827;
  font-weight: 500;
  margin-bottom: 1rem;
}

.achievement ul {
  list-style: none;
  padding: 0;
}

.achievement li {
  color: #6b7280;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.achievement li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #fbbf24;
  font-weight: bold;
}

/* Equipment Section */
.equipment__header {
  text-align: center;
  margin-bottom: 4rem;
}

.equipment__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.equipment__item {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.equipment__item:hover {
  transform: translateY(-0.5rem);
}

.equipment__icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  color: #fbbf24;
}

.equipment__icon svg {
  width: 100%;
  height: 100%;
}

.equipment__item h3 {
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.equipment__item p {
  color: #d1d5db;
  line-height: 1.6;
}

/* Process Section */
.process__header {
  text-align: center;
  margin-bottom: 4rem;
}

.process__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.process__steps {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.process__step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.process__step-number {
  background: #fbbf24;
  color: #111827;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.process__step h3 {
  color: #111827;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.process__step p {
  color: #6b7280;
  line-height: 1.6;
}

.process__advantages h3 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
}

.advantages__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.advantage__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.advantage__icon {
  font-size: 1.5rem;
}

.advantage__item span {
  color: #374151;
  font-weight: 500;
}

/* FAQ Section */
.faq__header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq__list {
  max-width: 800px;
  margin: 0 auto;
}

.faq__item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.faq__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
}

.faq__question:hover {
  color: #fbbf24;
}

.faq__question h3 {
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
}

.faq__toggle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #fbbf24;
}

.faq__answer {
  padding-bottom: 1.5rem;
  color: #d1d5db;
  line-height: 1.6;
}

.faq__item--active .faq__question {
  color: #fbbf24;
}

/* Pricing Section */
.pricing__header {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing__categories {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.pricing__category {
  background: #f9fafb;
  border-radius: 1rem;
  padding: 2rem;
}

.pricing__category-title {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid #fbbf24;
  padding-bottom: 1rem;
}

.pricing__services {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pricing__service {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.pricing__service:last-child {
  border-bottom: none;
}

.pricing__service-info h4 {
  color: #111827;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.pricing__service-info p {
  color: #6b7280;
  font-size: 0.875rem;
}

.pricing__service-price {
  color: #fbbf24;
  font-weight: 600;
  font-size: 1.125rem;
  flex-shrink: 0;
  margin-left: 1rem;
}

.pricing__note {
  text-align: center;
  margin-top: 3rem;
  color: #6b7280;
  font-style: italic;
}

/* Reviews Section */
.reviews__header {
  text-align: center;
  margin-bottom: 4rem;
}

.reviews__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.review__item {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
}

.review__content {
  margin-bottom: 1.5rem;
}

.review__stars {
  margin-bottom: 1rem;
}

.review__content p {
  color: #d1d5db;
  line-height: 1.6;
  font-style: italic;
}

.review__author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.review__avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
}

.review__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review__info h4 {
  color: white;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.review__info span {
  color: #9ca3af;
  font-size: 0.875rem;
}

/* Contacts Section */
.contacts__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.contacts__info {
  text-align: center;
}

.contacts__details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
}

.contact__icon {
  width: 2rem;
  height: 2rem;
  color: #fbbf24;
  flex-shrink: 0;
}

.contact__icon svg {
  width: 100%;
  height: 100%;
}

.contact__item h4 {
  color: #111827;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contact__item p {
  color: #6b7280;
  line-height: 1.5;
}

.contacts__social h4 {
  color: #111827;
  font-weight: 500;
  margin-bottom: 1rem;
}

.social__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social__link {
  color: #fbbf24;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social__link:hover {
  color: #f59e0b;
}

.contacts__form {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
}

.contacts__form h3 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact__form input,
.contact__form select,
.contact__form textarea {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.contact__form input:focus,
.contact__form select:focus,
.contact__form textarea:focus {
  outline: none;
  border-color: #fbbf24;
}

.form__submit {
  background: #fbbf24;
  color: #111827;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form__submit:hover {
  background: #f59e0b;
}

/* Responsive Design */
@media (min-width: 768px) {
  .about-me__content {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }

  .about-me__achievements {
    grid-template-columns: 1fr 1fr;
  }

  .equipment__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process__content {
    grid-template-columns: 1fr;
  }

  .process__steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantages__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pricing__categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contacts__content {
    grid-template-columns: 1fr 1fr;
  }

  .contacts__details {
    grid-template-columns: repeat(2, 1fr);
  }

  .contacts__info {
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .equipment__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .process__steps {
    grid-template-columns: repeat(4, 1fr);
  }

  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 