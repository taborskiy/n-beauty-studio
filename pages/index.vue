<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__texture"></div>
      <div class="hero__background" :style="{ backgroundImage: `url(${currentBackgroundImage})` }"></div>
      
      <div class="hero__container">
        <!-- Swiper -->
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :navigation="true"
          :pagination="{ 
            clickable: true,
            renderBullet: renderCustomBullet
          }"
          class="hero__swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <!-- Slide 1 - Permanent Makeup -->
          <SwiperSlide>
            <div class="hero__content">
              <!-- Left content -->
              <div class="hero__text-section">
                <div class="hero__text-wrapper">
                  <!-- Small Promotional Tags -->
                  <div class="hero__tags">
                    <div class="hero__tag hero__tag--sale">
                      <div class="hero__tag-badge">ACTION</div>
                    </div>

                    <div class="hero__tag hero__tag--price">
                      <div class="hero__tag-badge">PRICE</div>
                    </div>
                  </div>

                  <h1 class="hero__title">
                    <span class="hero__title-main">SET 1 "MY LOVELY"</span>
                  </h1>
                  
                  <div class="hero__divider"></div>

                  <ul class="hero__list">
                    <li>💜 UNDERARMS</li>
                    <li>💜 BRAZILIAN</li>
                    <li>💜 FULL LEGS</li>
                  </ul>
                  
                  <p class="hero__description">
                    (REGULAR PRICE $270) - YOU SAVE $40 <br> PRICE LOCKED FOR YOUR ENTIRE COURSE OF PROCEDURES
                    <span class="hero__pricing">
                       <span class="hero__price-new">230 $</span> <span class="hero__price-old">270 $</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">BOOK NOW</span>
                    <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Slide 2 - Eyelash Extension -->
          <SwiperSlide>
            <div class="hero__content">
              <div class="hero__text-section">
                <div class="hero__text-wrapper">
                  <div class="hero__tags">
                    <div class="hero__tag hero__tag--sale">
                      <div class="hero__tag-badge">NEW</div>
                    </div>
                    <div class="hero__tag hero__tag--price">
                      <div class="hero__tag-badge">HOT</div>
                    </div>
                  </div>

                  <h1 class="hero__title">
                    <span class="hero__title-main">SET 2 "MY LOVELY"</span>
                  </h1>
                  
                  <div class="hero__divider"></div>

                  <ul class="hero__list">
                    <li>💜 UNDERARMS</li>
                    <li>💜 BRAZILIAN</li>
                    <li>💜 HALF LEGS</li>
                  </ul>
                  
                  <p class="hero__description">
                    (REGULAR PRICE 210$) - YOU SAVE $30 <br> PRICE LOCKED FOR YOUR ENTIRE COURSE OF PROCEDURES.
                    <span class="hero__pricing">
                       <span class="hero__price-new">180 $</span> <span class="hero__price-old">210 $</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">BOOK NOW</span>
                    <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Slide 3 - Eyebrow Services -->
          <SwiperSlide>
            <div class="hero__content">
              <div class="hero__text-section">
                <div class="hero__text-wrapper">
                  <div class="hero__tags">
                    <div class="hero__tag hero__tag--sale">
                      <div class="hero__tag-badge">ALL</div>
                    </div>
                    <div class="hero__tag hero__tag--price">
                      <div class="hero__tag-badge">BEST</div>
                    </div>
                  </div>

                  <h1 class="hero__title">
                    <span class="hero__title-main">SET 3 "ALL INCLUDES"</span>
                  </h1>
                  
                  <div class="hero__divider"></div>
                  
                  <p class="hero__description">
                    ALL FOR JUST $350.
                    <span class="hero__pricing">
                       <span class="hero__price-new">350 $</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">BOOK NOW</span>
                    <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="why-us section">
      <div class="container">
        <div class="why-us__header">
          <h2 class="section__title">Why Us</h2>
          <div class="section__divider"></div>
          <p class="section__whyus__subtitle">At LaserNice, we combine certified technology, a medical approach, and genuine care for your well-being.</p>
        </div>
        <div class="why-us__grid">
          <div class="why-us__item">
            <div class="why-us__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3>Certified Safety</h3>
            <p>We use the Soprano Titanium, a Health Canada-certified laser that suits all skin types and offers a comfortable, virtually painless experience.</p>
          </div>
          <div class="why-us__item">
            <div class="why-us__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3>Professional Expertise</h3>
            <p>Your skin is in the hands of a specialist with a medical degree. Olya isn't just a technician — she truly understands skin physiology and upholds the highest hygiene standards.</p>
          </div>
          <div class="why-us__item">
            <div class="why-us__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3>Fixed Pricing</h3>
            <p>The price is fixed for the entire course. No hidden fees or surprises — ever.</p>
          </div>
          <div class="why-us__item">
            <div class="why-us__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3>Personalized care</h3>
            <p>Each treatment plan is customized to your skin, hair type, and hormonal profile.</p>
          </div>
          <div class="why-us__item">
            <div class="why-us__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3>Cozy and clean space</h3>
            <p>Our studio is designed to make you feel cared for and relaxed — not just another client.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="about-me section">
      <div class="container">
        <div class="about-me__content">
          <div class="about-me__image">
            <img src="/images/about.jpg" alt="Beauty Master" class="about-me__photo">
            <div class="about-me__experience">
              <span class="about-me__years">6+</span>
              <span class="about-me__text">years of experience</span>
            </div>
          </div>
          <div class="about-me__info">
            <h2 class="section__title">About Me</h2>
            <div class="section__divider"></div>
            <p class="about-me__description">
              Hi! I'm Olya — your laser hair removal specialist. <br/>
              <br/>
              I hold a medical degree and have over 6 years of international experience in this field. <br/>
              <br/>
              I use only Soprano Titanium — a Health Canada-certified laser device. <br/>
              <br/>
              My goal is to help every woman feel confident and free. <br/>
              To have smooth skin, forget about daily shaving, irritation, and waxing. <br/>
              <br/>
              💜Smooth skin is not a luxury — it's self-care.🌸
            </p>
            <!-- <div class="about-me__achievements">
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
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Before & After Section -->
    <section class="before-after section">
      <div class="container">
        <div class="before-after__header">
          <h2 class="section__title">Before & After Results</h2>
          <div class="section__divider"></div>
          <p class="section__subtitle">See the incredible transformations achieved with our professional laser hair removal treatments</p>
        </div>
        <div class="before-after__gallery">
          <div class="before-after__item" v-for="(result, index) in beforeAfterResults" :key="index">
            <div class="before-after__images">
              <div class="before-after__image-container">
                <div class="before-after__label before-after__label--before">Before</div>
                <img :src="result.before" :alt="`Before treatment - ${result.area}`" class="before-after__image">
              </div>
              <div class="before-after__image-container">
                <div class="before-after__label before-after__label--after">After</div>
                <img :src="result.after" :alt="`After treatment - ${result.area}`" class="before-after__image">
              </div>
            </div>
            <div class="before-after__info">
              <h3>{{ result.area }}</h3>
              <p>{{ result.sessions }} sessions completed</p>
              <div class="before-after__details">
                <span class="before-after__timeline">{{ result.timeline }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="before-after__note">
          <p><strong>Please note:</strong> Results may vary depending on individual skin type, hair color, and hormonal factors. These photos show real client results after completing the recommended treatment course.</p>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3>Soprano Titanium</h3>
            <p>This top-tier diode laser works on all skin types, offers a virtually painless experience, and is FDA & Health Canada approved.</p>
          </div>
          <!-- <div class="equipment__item">
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
          </div> -->
        </div>
      </div>
    </section>

    <!-- Process Section -->

    <!-- FAQ Section -->
    <section class="faq section">
      <div class="container">
        <div class="faq__header">
          <h2 class="section__title">Top 10 Questions About Laser Hair Removal</h2>
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
          <div class="pricing__category">
            <h3 class="pricing__category-title">Women</h3>
            <div class="pricing__services">
              <div class="grid md:grid-cols-1 gap-4" v-for="(block, blcokIndex) in laserWomenServices" :key="blcokIndex">
                <h2 class="text-lg font-medium text-pink-700">{{ block.blockName }}</h2>
                <div v-for="(service, serviceIndex) in block.items" :key="serviceIndex" class="pricing__service ">

                  <div class="pricing__service-info" >
                    <h4>{{ service.name }}</h4>
                    <p>{{ service.description }}</p>
                  </div>
                  <div class="pricing__service-price">{{ service.price }}</div>
                </div>

              </div>
            </div>
          </div>

          <div class="pricing__category">
            <h3 class="pricing__category-title">Man</h3>
            <div class="pricing__services">
              <div class="grid md:grid-cols-1 gap-4" v-for="(block, blcokIndex) in laserMenServices" :key="blcokIndex">
                <h2 class="text-lg font-medium text-pink-700">{{ block.blockName }}</h2>
                <div v-for="(service, serviceIndex) in block.items" :key="serviceIndex" class="pricing__service ">

                  <div class="pricing__service-info" >
                    <h4>{{ service.name }}</h4>
                    <p>{{ service.description }}</p>
                  </div>
                  <div class="pricing__service-price">{{ service.price }}</div>
                </div>

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
                  <p>Address suite 209  - 264 Midpark Way SE, Calgary , Alberta, T2X 1J6</p>
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
                  <p>+1 368-886-5148</p>
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
                  <p>9 a.m. - 19 p.m</p>
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
                  <p>go82350@gmail.com </p>
                </div>
              </div>
            </div>
            <div class="contacts__social">
              <h4>Social Media</h4>
              <div class="social__links">
                <a href="https://www.instagram.com/laser_hair_removal_calgary/" target="_blank" class="social__link">Instagram</a>
                <!-- <a href="https://www.facebook.com/profile.php?id=61563491519738#" target="_blank" class="social__link">Facebook</a>
                <a href="https://t.me/Holub_O" target="_blank" class="social__link">Telegram</a> -->
              </div>
            </div>
          </div>
          <div class="contacts__form">
            <h3>Book a Consultation</h3>
            <form @submit.prevent="handleSubmit" class="contact__form">
              <input 
                type="text" 
                v-model="form.name" 
                placeholder="Your name" 
                required
                :disabled="isSubmitting"
              >
              <input 
                type="tel" 
                v-model="form.phone" 
                @input="handlePhoneInput"
                placeholder="+1 (XXX) XXX-XXXX" 
                required
                :disabled="isSubmitting"
                maxlength="18"
              >
              <select v-model="form.service" required :disabled="isSubmitting">
                <option value="">Select service</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
              <textarea 
                v-model="form.message" 
                placeholder="Comment (optional)" 
                rows="4"
                :disabled="isSubmitting"
              ></textarea>
              <button 
                type="submit" 
                class="form__submit"
                :disabled="isSubmitting"
                :class="{ 'submitting': isSubmitting }"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Book Now</span>
              </button>
            </form>
          </div>
          <div 
            class="map-wrapper"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4215.692014985311!2d-114.06529220000002!3d50.911549400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717680a4e55555%3A0x4c27cac3d85a7b2f!2zMjY0IE1pZHBhcmsgV2F5IFNFICMyMDksIENhbGdhcnksIEFCIFQyWCAxSjYsINCa0LDQvdCw0LTQsA!5e1!3m2!1sru!2sua!4v1749798038188!5m2!1sru!2sua" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>{{ modalTitle }}</h3>
          <button @click="closeModal" class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p>{{ modalMessage }}</p>
        </div>
        <div class="modal-footer">
          <button @click="closeModal" class="modal-btn">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {laserMenServices, laserWomenServices} from '../data/price.js'

// Swiper modules
const modules = [Navigation, Pagination]

// Form functionality
const form = ref({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const showModal = ref(false)
const modalTitle = ref('')
const modalMessage = ref('')

const resetForm = () => {
  form.value = {
    name: '',
    phone: '',
    service: '',
    message: ''
  }
}

// Функція для форматування телефону (канадський формат)
const formatPhone = (value) => {
  // Видаляємо всі нецифрові символи
  const numbers = value.replace(/\D/g, '')
  
  // Обмежуємо до 11 цифр (1 + 10 цифр)
  const truncated = numbers.substring(0, 11)
  
  // Форматуємо в канадський формат +1 (XXX) XXX-XXXX
  if (truncated.length === 0) return ''
  if (truncated.length <= 1) return `+1`
  if (truncated.length <= 4) return `+1 (${truncated.substring(1)}`
  if (truncated.length <= 7) return `+1 (${truncated.substring(1, 4)}) ${truncated.substring(4)}`
  return `+1 (${truncated.substring(1, 4)}) ${truncated.substring(4, 7)}-${truncated.substring(7)}`
}

// Валідація канадського телефону
const validatePhone = (phone) => {
  const numbers = phone.replace(/\D/g, '')
  // Канадський номер: 1 + 10 цифр
  return numbers.length === 11 && numbers.startsWith('1')
}

// Обробка введення телефону
const handlePhoneInput = (event) => {
  const formatted = formatPhone(event.target.value)
  form.value.phone = formatted
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    // Валідація на клієнті
    if (!form.value.name.trim()) {
      modalMessage.value = 'Please enter your name.'
      modalTitle.value = 'Validation Error'
      showModal.value = true
      return
    }
    
    if (!form.value.phone.trim()) {
      modalMessage.value = 'Please enter your phone number.'
      modalTitle.value = 'Validation Error'
      showModal.value = true
      return
    }
    
    if (!validatePhone(form.value.phone)) {
      modalMessage.value = 'Please enter a valid Canadian phone number.'
      modalTitle.value = 'Validation Error'
      showModal.value = true
      return
    }
    
    if (!form.value.service) {
      modalMessage.value = 'Please select a service.'
      modalTitle.value = 'Validation Error'
      showModal.value = true
      return
    }

    // Формування повідомлення для Telegram
    const text = `🏥 Нова заявка з Laser Nice Beauty:
👤 Ім'я: ${form.value.name.trim()}
📞 Телефон: ${form.value.phone.trim()}
💅 Послуга: ${form.value.service}${form.value.message.trim() ? `
📝 Повідомлення: ${form.value.message.trim()}` : ''}
📅 Дата: ${new Date().toLocaleString('uk-UA', { 
  timeZone: 'Europe/Kiev',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`

    // Налаштування Telegram
    const token = '8559796605:AAHHohPIr72iyrzOUf6npG59NBldEO8GiFY'
    const chatId = '-4980152340'
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    console.log('Sending to Telegram:', { chatId, text })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text
      })
    })

    const data = await response.json()
    console.log('Telegram response:', data)
    
    if (data.ok) {
      modalMessage.value = 'Thank you for your message! We will get back to you soon.'
      modalTitle.value = 'Success'
      showModal.value = true
      resetForm()
    } else {
      modalMessage.value = data.description || 'Sorry, there was an error sending your message. Please try again.'
      modalTitle.value = 'Error'
      showModal.value = true
      console.error('Telegram error:', data)
    }
  } catch (error) {
    console.error('Form submission error:', error)
    modalMessage.value = `Error: ${error.message}. Please check console for details.`
    modalTitle.value = 'Network Error'
    showModal.value = true
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  showModal.value = false
}

// Swiper functionality
const swiperInstance = ref(null)
const activeSlide = ref(0)

// Background images for each slide
const backgroundImages = [
  '/images/hero_bg.jpg', // Slide 1 - SET 1 "MY LOVELY"
  '/images/hero_bg_2.jpg', // Slide 2 - SET 2 "MY LOVELY" 
  '/images/hero_bg_3.jpg'     // Slide 3 - SET 3 "ALL INCLUDES"
]

const currentBackgroundImage = computed(() => {
  return backgroundImages[activeSlide.value] || backgroundImages[0]
})

// Navigation items data
const navigationItems = [
  'Permanent Makeup',
  'Eyelash Extension', 
  'Eyebrow',
  'Lip'
]

const renderCustomBullet = (index, className) => {
  return `
    <div class="${className} hero__nav-item">
      <div class="hero__nav-dot"></div>
      <span class="hero__nav-text">${navigationItems[index]}</span>
    </div>
  `
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper) => {
  activeSlide.value = swiper.realIndex
}

// FAQ data
const activeFaq = ref(null)
const faqs = ref([
  {
    question: 'Why isn\'t one session enough?',
    answer: 'Laser targets only hairs in the active growth phase. Since hair grows in cycles, several sessions (usually 5–10) are needed to treat all phases effectively.'
  },
  {
    question: 'Does laser hair removal hurt?',
    answer: 'Everyone\'s sensitivity is different. Most clients describe the feeling as a light tingling or gentle warmth. Modern devices include cooling systems, making the treatment as comfortable as possible.'
  },
  {
    question: 'Is laser hair removal permanent?',
    answer: 'Yes, the laser destroys the hair follicle. However, due to hormonal changes or stress, new hairs may appear over time. These can be easily managed with maintenance sessions.'
  },
  {
    question: 'How long does the result last?',
    answer: 'After completing the full course, results last for years. To maintain silky-smooth skin, only 1–2 touch-up sessions per year are usually needed.'
  },
  {
    question: 'How long should the hair be before treatment?',
    answer: 'Before your appointment, simply shave the area 12–24 hours in advance. Avoid waxing, sugaring, or tweezing, as the laser needs the root of the hair to work effectively.'
  },
  {
    question: 'Can I tan during the course of laser hair removal?',
    answer: 'It\'s best to avoid tanning and solariums, as they increase the risk of burns or pigmentation. We recommend staying out of direct sun for at least 3 days before and after your session.'
  },
  {
    question: 'Can I remove hair between sessions?',
    answer: 'Yes, but only with a razor. Waxing, sugaring, or tweezing should be avoided, as they remove the follicle that the laser targets.'
  },
  {
    question: 'Who should avoid laser hair removal?',
    answer: 'Contraindications include pregnancy, cancer, uncontrolled diabetes, severe skin conditions, fresh tan, and taking photosensitizing medications.'
  },
  {
    question: 'Is it safe during my period?',
    answer: 'Yes, the procedure is allowed. Keep in mind that the bikini area may feel more sensitive during this time, so it\'s often more comfortable to book after your cycle.'
  },
  {
    question: 'Are there any side effects?',
    answer: 'Mild redness or swelling is a normal reaction that disappears within a few hours. Complications are extremely rare if you follow your specialist\'s aftercare advice.'
  }
])

// Reviews data
const reviews = ref([
  {
    name: 'Elena K.',
    // service: 'Permanent Eyebrow Makeup',
    text: 'I had an amazing experience with the laser technician! Their expertise and professionalism were top-notch. The results from the laser treatment were fantastic, and I highly recommend their services to anyone looking for effective and safe laser treatments. Thank you for the great experience!".',
    avatar: '/images/review-1.jpg'
  },
  {
    name: 'Ira Korchmaruk',
    // service: 'Facial Care',
    text: 'Thank you for the procedure. My skin in delicate areas is simply incredible, I already have a good result after the second procedure! I recommend Olga!',
    avatar: '/images/review-2.jpg'
  },
  {
    name: 'Svetlana P.',
    // service: 'Permanent Lip Makeup',
    text: 'excellent laser hair removal!',
    avatar: '/images/review-3.jpg'
  }
])

// Before & After Results data
const beforeAfterResults = ref([
  {
    area: 'UNDERARMS',
    before: '/images/before_1.jpg',
    after: '/images/after_1.jpg',
    sessions: '1',
    timeline: '1 months'
  },
  {
    area: 'FACE',
    before: '/images/before_2.jpg',
    after: '/images/after_2.jpg',
    sessions: '4',
    timeline: '4 months'
  },
  {
    area: 'BRAZILIAN',
    before: '/images/before_3.jpg',
    after: '/images/after_3.jpg',
    sessions: '10',
    timeline: '10 months'
  },
  {
    area: 'UNDERARMS',
    before: '/images/before_4.jpg',
    after: '/images/after_4.jpg',
    sessions: '4',
    timeline: '4 months'
  },
  {
    area: 'UNDERARMS',
    before: '/images/before_5.jpg',
    after: '/images/after_5.jpg',
    sessions: '1',
    timeline: '1 PROCEDURE'
  },
  {
    area: 'BRAZILIAN',
    before: '/images/before_6.jpg',
    after: '/images/after_6.jpg',
    sessions: '5',
    timeline: '5 months'
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
  background: linear-gradient(135deg, #000000 0%, #ff5172 50%, #c61562 100%);
  overflow: hidden;
}

/* Hero Swiper */
.hero__swiper {
  height: 100%;
  width: 100%;
}

.hero__swiper .swiper-wrapper {
  transition-timing-function: ease-in-out;
}

/* Hero Tags */
.hero__tags {
  display: flex;
  gap: 1rem;
}

.hero__tag {
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hero__tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.hero__tag-badge {
  background: #ec4899;
  color: white;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hero Description Pricing */
.hero__pricing {
  display: block;
  margin-top: 0.3rem;
}

.hero__price-new {
  color: #ec4899;
  font-weight: 700;
  font-size: 1.9rem;
  margin-right: 0.5rem;
}

.hero__price-old {
  color: #d5d5d5;
  text-decoration: line-through;
  font-size: 1.7rem;
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
.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.hero__container {
  position: relative;
  z-index: 20;
  max-width: 1700px;
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
  justify-items: start;
  max-width: 80%;
  padding-left: 10%;
  @media (max-width: 820px) {
    max-width: 100%;
  }
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
  @media (max-width: 820px) {
    gap: 10px;
  }
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

.hero__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #ec4899, #db2777);
}

.hero__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 820px) {
    gap: 0;
  }
}

.hero__list li {
  font-size: 1.25rem;
  color: #d1d5db;
  font-weight: 300;
  line-height: 1.6;
  @media (max-width: 820px) {
    font-size: 12px;
  }
}

.hero__list li::before {
  content: '';
  position: absolute;
  left: 0;
  color: #ec4899;
  font-weight: bold;
}

.hero__description {
  font-size: 1.25rem;
  color: #d1d5db;
  font-weight: 300;
  line-height: 1.6;
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

/* Desktop Styles */
@media (min-width: 1024px) {
  .hero__title {
    font-size: 6rem;
  }

  .hero__actions {
    flex-direction: row;
  }

  .why-us__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  .reviews__grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
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

/* Mobile 375px Styles */
@media (max-width: 600px) {
  .hero {
    height: 85vh;
  }
  .hero__container {
    padding: 0 1rem;
  }

  .hero__content {
    height: calc(100vh - 150px);
    padding-top: 40px;
    max-width: 100%;
    padding-left: 0;
  }

  .hero__tags {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .hero__tag {
    width: 120px;
    height: 32px;
  }

  .hero__tag-badge {
    font-size: 7px;
    min-width: 28px;
  }

  .hero__title {
    font-size: 38px;
    line-height: 1.1;
  }

  .hero__divider {
    width: 4rem;
    margin-bottom: 1rem;
  }

  .hero__description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .hero__pricing {
    margin-top: 0.5rem;
  }

  .hero__price-new {
    font-size: 1.4rem;
    margin-right: 0.3rem;
  }

  .hero__price-old {
    font-size: 1.2rem;
  }

  .hero__button {
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
  }

  .hero__button-text {
    margin-right: 0.3rem;
  }

  .hero__button-icon {
    width: 0.75rem;
    height: 0.75rem;
  }
}

/* Common Section Styles */
.section {
  padding: 3rem 0;
}

.section--dark {
  background: linear-gradient(135deg, #591b5f 0%, #140016 33%, #992c61 150%);
  color: white;
}

.container {
  max-width: 1700px;
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

.section__whyus__subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section__title--light {
  color: white;
}

.section__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #ec4899, #db2777);
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
  grid-template-rows: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-me__image {
  position: relative;
  text-align: center;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  flex-shrink: 0;
}

.about-me__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  filter: grayscale(20%);
  display: block;
}

.about-me__experience {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  background: #ec4899;
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  z-index: 10;
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
  color: #ec4899;
  font-weight: bold;
}

/* Why Us Section */
.why-us__header {
  text-align: center;
  margin-bottom: 4rem;
}

.why-us__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.why-us__item {
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  border: 1px solid #f3f4f6;
  transition: all 0.3s ease;
}

.why-us__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  border-color: #ec4899;
}

.why-us__icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  color: #ec4899;
  background: rgba(236, 72, 153, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.why-us__item:hover .why-us__icon {
  background: #ec4899;
  color: white;
  transform: scale(1.1);
}

.why-us__icon svg {
  width: 2rem;
  height: 2rem;
}

.why-us__item h3 {
  color: #111827;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.why-us__item p {
  color: #6b7280;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Before & After Section */
.before-after__header {
  text-align: center;
  margin-bottom: 4rem;
}

.before-after__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.before-after__item {
  background: #f9fafb;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.before-after__item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #ec4899;
}

.before-after__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.before-after__image-container {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
}

.before-after__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.before-after__image:hover {
  transform: scale(1.05);
}

.before-after__label {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 10;
}

.before-after__label--before {
  background: rgb(87 22 60);
}

.before-after__label--after {
  background: rgb(236 72 153);
}

.before-after__info {
  text-align: center;
}

.before-after__info h3 {
  color: #111827;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.before-after__info p {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.before-after__details {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.before-after__timeline {
  background: #180118;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.before-after__note {
  background: #f0f9ff;
  border: 1px solid #e0f2fe;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.before-after__note p {
  color: #0f172a;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
}

.before-after__note strong {
  color: #ec4899;
}

@media (max-width: 768px) {
  .before-after__gallery {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .before-after__images {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .before-after__image {
    height: 250px;
  }
  
  .before-after__item {
    padding: 1rem;
  }
  
  .before-after__note {
    padding: 1rem;
  }
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
  margin: 0;
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
  color: #ec4899;
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

.process__advantages {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.advantages__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.advantage__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.advantage__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #ec4899;
}

.advantage__number {
  background: #ec4899;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.advantage__content {
  flex: 1;
}

.advantage__content h4 {
  color: #111827;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.advantage__content p {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
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
  border-bottom: 1px solid #e5e7eb;
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
  color: #ec4899;
}

.faq__question h3 {
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
  color: #111827;
}

.faq__toggle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ec4899;
}

.faq__answer {
  padding-bottom: 1.5rem;
  color: #6b7280;
  line-height: 1.6;
}

.faq__item--active .faq__question {
  color: #ec4899;
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
  border-bottom: 2px solid #ec4899;
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
  color: #ec4899;
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
  align-items: stretch;
}

.review__item {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.review__content {
  flex: 1;
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
  margin-top: auto;
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
  color: #ec4899;
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
  display: flex;
  width: 100%;
  justify-content: center
}

.social__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social__link {
  color: #ec4899;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social__link:hover {
  color: #db2777;
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
  border-color: #ec4899;
}

.form__submit {
  background: #ec4899;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form__submit:hover {
  background: #db2777;
}

.form__submit:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.form__submit.submitting {
  background: #9ca3af;
  cursor: not-allowed;
}

.contact__form input:disabled,
.contact__form select:disabled,
.contact__form textarea:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Стилі для поля телефону */
.contact__form input[type="tel"] {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
}

.contact__form input[type="tel"]:focus {
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 1rem;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  margin: 0;
  color: #111827;
  font-size: 1.25rem;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: #374151;
}

.modal-body {
  padding: 1.5rem;
}

.modal-body p {
  margin: 0;
  color: #6b7280;
  line-height: 1.6;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
}

.modal-btn {
  background: #ec4899;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal-btn:hover {
  background: #db2777;
}

/* Responsive Design */
@media (min-width: 768px) {
  .about-me__content {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    text-align: left;
  }

  .about-me__achievements {
    grid-template-columns: 1fr 1fr;
  }

  .why-us__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .equipment__grid {
    grid-template-columns: 1fr;
    margin: 0 25%;
  }

  .process__content {
    grid-template-columns: 1fr;
  }

  .advantages__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pricing__categories {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews__grid {
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
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

  /* About Me responsive */
  .about-me__image {
    width: 100%;
    height: 500px;
  }
}

/* Mobile About Me */
@media (max-width: 767px) {
  .why-us__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .why-us__item {
    padding: 1.5rem;
  }

  .about-me__image {
    width: 100%;
    height: 500px;
  }

  .about-me__experience {
    padding: 1rem;
    bottom: -0.5rem;
    right: -0.5rem;
  }

  .about-me__years {
    font-size: 1.5rem;
  }

  .about-me__text {
    font-size: 0.75rem;
  }
}
</style>

<style>
/* Global Swiper Pagination Styles */
.hero__swiper .swiper-pagination {
  bottom: 100px !important;
  top: auto !important;
  left: 50% !important;
  right: auto !important;
  transform: translateX(-50%) !important;
  width: auto !important;
  display: flex !important;
  flex-direction: row !important;
  gap: 1.5rem !important;
  justify-content: center !important;
  display: none !important;
}

.hero__swiper .swiper-pagination-bullet {
  background: transparent !important;
  opacity: 1 !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  border-radius: 0 !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  align-items: center !important;
  gap: 1rem !important;
  cursor: pointer !important;
  padding: 0.5rem !important;
}

.hero__swiper .swiper-pagination-bullet:hover {
  transform: translateY(-0.25rem) !important;
}

.hero__swiper .swiper-pagination-bullet:hover .hero__nav-dot {
  background: white !important;
}

.hero__swiper .swiper-pagination-bullet:hover .hero__nav-text {
  color: white !important;
}

.hero__swiper .swiper-pagination-bullet-active .hero__nav-dot {
  background: #ec4899 !important;
}

.hero__swiper .swiper-pagination-bullet-active .hero__nav-text {
  color: white !important;
}

/* Navigation Arrows */
.hero__swiper .swiper-button-next,
.hero__swiper .swiper-button-prev {
  color: rgba(255, 255, 255, 0.7) !important;
  width: 50px !important;
  height: 50px !important;
  margin-top: -25px !important;
  transition: all 0.3s ease !important;
  background: rgba(0, 0, 0, 0.2) !important;
  border-radius: 50% !important;
  backdrop-filter: blur(10px) !important;
}

.hero__swiper .swiper-button-next {
  right: 30px !important;
}

.hero__swiper .swiper-button-prev {
  left: 30px !important;
}

.hero__swiper .swiper-button-next:hover,
.hero__swiper .swiper-button-prev:hover {
  color: #ec4899 !important;
  background: rgba(236, 72, 153, 0.2) !important;
  transform: scale(1.1) !important;
}

.hero__swiper .swiper-button-next::after,
.hero__swiper .swiper-button-prev::after {
  font-size: 20px !important;
  font-weight: 600 !important;
}

/* Hero Nav Styles for Pagination */
.hero__nav-item {
  display: flex !important;
  align-items: center !important;
  gap: 1rem !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
}

.hero__nav-dot {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background: #6b7280 !important;
  transition: background 0.3s ease !important;
  flex-shrink: 0 !important;
}

.hero__nav-text {
  color: #d1d5db !important;
  font-weight: 300 !important;
  letter-spacing: 0.1em !important;
  transition: color 0.3s ease !important;
  white-space: nowrap !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero__swiper .swiper-pagination {
    bottom: 50px !important;
    flex-direction: column !important;
    gap: 0.8rem !important;
  }

  .hero__swiper .swiper-pagination-bullet {
    gap: 0.8rem !important;
    padding: 0.3rem !important;
  }

  .hero__nav-text {
    font-size: 12px !important;
  }

  .hero__swiper .swiper-button-next,
  .hero__swiper .swiper-button-prev {
    width: 40px !important;
    height: 40px !important;
    margin-top: -20px !important;
  }

  .hero__swiper .swiper-button-next {
    right: 15px !important;
  }

  .hero__swiper .swiper-button-prev {
    left: 15px !important;
  }

  .hero__swiper .swiper-button-next::after,
  .hero__swiper .swiper-button-prev::after {
    font-size: 16px !important;
  }
}

/* Mobile 375px and smaller */
@media (max-width: 600px) {
  .hero__swiper .swiper-pagination {
    display: flex !important;
    bottom: 30px !important;
    flex-direction: row !important;
  }

  .hero__swiper .swiper-pagination-bullet {
    padding: 0.2rem !important;
  }

  .hero__nav-text {
    display: none !important;
  }

  .hero__nav-dot {
    width: 10px !important;
    height: 10px !important;
  }

  .hero__swiper .swiper-button-next,
  .hero__swiper .swiper-button-prev {
    display: none !important;
  }

  .map-wrapper {
    padding-bottom: 150% !important;
    grid-column: span 1 !important;
  }
}

.map-wrapper {
  width: 100%;
  /* height: 100%; */
  padding-bottom: 50%;
  position: relative;
  /* border-radius: 10px; */
  overflow: hidden;
  padding-bottom: 50%;
  margin-top: 40px;
  border-radius: 4px;
  grid-column: span 2;
}

.map-wrapper iframe {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
}
</style> 