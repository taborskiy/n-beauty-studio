<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__texture"></div>
      <div class="hero__background"></div>
      
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
                    <span class="hero__title-main">Permanent Makeup</span>
                  </h1>
                  
                  <div class="hero__divider"></div>
                  
                  <p class="hero__description">
                    permanent makeup, tattoo, eyelash extension, eyebrow, lip. New action! for your beauty!
                    <span class="hero__pricing">
                       <span class="hero__price-new">120₴</span> <span class="hero__price-old">180₴</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">BOOK CONSULTATION</span>
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
                    <span class="hero__title-main">Eyelash Extension</span>
                  </h1>
                  
                  <div class="hero__divider"></div>
                  
                  <p class="hero__description">
                    Professional eyelash extension services. Volume, classic, hybrid techniques available.
                    <span class="hero__pricing">
                       <span class="hero__price-new">800₴</span> <span class="hero__price-old">1200₴</span>
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
                      <div class="hero__tag-badge">PROMO</div>
                    </div>
                    <div class="hero__tag hero__tag--price">
                      <div class="hero__tag-badge">BEST</div>
                    </div>
                  </div>

                  <h1 class="hero__title">
                    <span class="hero__title-main">Eyebrow Styling</span>
                  </h1>
                  
                  <div class="hero__divider"></div>
                  
                  <p class="hero__description">
                    Professional eyebrow shaping, tinting, and styling services for perfect brows.
                    <span class="hero__pricing">
                       <span class="hero__price-new">300₴</span> <span class="hero__price-old">450₴</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">GET PERFECT BROWS</span>
                    <svg class="hero__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <!-- Slide 4 - Lip Services -->
          <SwiperSlide>
            <div class="hero__content">
              <div class="hero__text-section">
                <div class="hero__text-wrapper">
                  <div class="hero__tags">
                    <div class="hero__tag hero__tag--sale">
                      <div class="hero__tag-badge">LUXURY</div>
                    </div>
                    <div class="hero__tag hero__tag--price">
                      <div class="hero__tag-badge">TOP</div>
                    </div>
                  </div>

                  <h1 class="hero__title">
                    <span class="hero__title-main">Lip Enhancement</span>
                  </h1>
                  
                  <div class="hero__divider"></div>
                  
                  <p class="hero__description">
                    Professional lip enhancement, permanent lip makeup, and lip care treatments.
                    <span class="hero__pricing">
                       <span class="hero__price-new">950₴</span> <span class="hero__price-old">1400₴</span>
                    </span>
                  </p>
                </div>

                <div class="hero__actions">
                  <NuxtLink to="/contacts" class="hero__button hero__button--primary">
                    <span class="hero__button-text">BEAUTIFUL LIPS</span>
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
            <p>Your skin is in the hands of a specialist with a medical degree. Olya isn’t just a technician — she truly understands skin physiology and upholds the highest hygiene standards.</p>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
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
              <span class="about-me__years">8+</span>
              <span class="about-me__text">years of experience</span>
            </div>
          </div>
          <div class="about-me__info">
            <h2 class="section__title">About Me</h2>
            <div class="section__divider"></div>
            <p class="about-me__description">
              Hi! I’m Olya — your laser hair removal specialist. <br/>
              <br/>
              I hold a medical degree and have over 6 years of international experience in this field. <br/>
              <br/>
              I use only Soprano Titanium — a Health Canada-certified laser device. <br/>
              <br/>
              My goal is to help every woman feel confident and free. <br/>
              To have smooth skin, forget about daily shaving, irritation, and waxing. <br/>
              <br/>
              💜Smooth skin is not a luxury — it’s self-care.🌸
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
    <section class="process section">
      <div class="container">
        <div class="process__header">
          <h2 class="section__title">Process</h2>
          <div class="section__divider"></div>
          <p class="section__subtitle">Advantages of working with us</p>
        </div>
        <div class="process__content">
          <div class="process__advantages">
            <div class="advantages__grid">
              <div class="advantage__item">
                <div class="advantage__number">1</div>
                <div class="advantage__content">
                  <h4>Individual Approach</h4>
                  <p>Every client receives a personalized consultation and treatment plan tailored to their unique needs and skin type.</p>
                </div>
              </div>
              <div class="advantage__item">
                <div class="advantage__number">2</div>
                <div class="advantage__content">
                  <h4>High Professionalism</h4>
                  <p>8+ years of experience, certified qualifications, and continuous education in the latest beauty techniques.</p>
                </div>
              </div>
              <div class="advantage__item">
                <div class="advantage__number">3</div>
                <div class="advantage__content">
                  <h4>Premium Materials</h4>
                  <p>Only top-quality, hypoallergenic pigments and materials from leading international brands are used.</p>
                </div>
              </div>
              <div class="advantage__item">
                <div class="advantage__number">4</div>
                <div class="advantage__content">
                  <h4>Quick Results</h4>
                  <p>See immediate improvements with long-lasting effects that save you time on daily makeup routine.</p>
                </div>
              </div>
              <div class="advantage__item">
                <div class="advantage__number">5</div>
                <div class="advantage__content">
                  <h4>Quality Guarantee</h4>
                  <p>Free touch-up included within 6 weeks and full satisfaction guarantee for all permanent makeup procedures.</p>
                </div>
              </div>
              <div class="advantage__item">
                <div class="advantage__number">6</div>
                <div class="advantage__content">
                  <h4>Comfortable Atmosphere</h4>
                  <p>Relaxing, private studio environment with modern amenities to ensure your complete comfort during treatments.</p>
                </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Swiper modules
const modules = [Navigation, Pagination]

// Swiper functionality
const swiperInstance = ref(null)
const activeSlide = ref(0)

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
  background-image: url('/images/hero_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
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
  max-width: 70%;
  padding-left: 10%;
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

.hero__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #ec4899, #db2777);
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
    font-size: 2.5rem;
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
  color: #ec4899;
}

.faq__question h3 {
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0;
}

.faq__toggle {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ec4899;
}

.faq__answer {
  padding-bottom: 1.5rem;
  color: #d1d5db;
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