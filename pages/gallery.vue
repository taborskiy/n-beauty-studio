<template>
  <div class="gallery">
    <div class="gallery__texture"></div>
    <div class="gallery__gradient"></div>
    
    <div class="gallery__container">
      <div class="gallery__header">
        <h1 class="gallery__title">Our Gallery</h1>
        <div class="gallery__divider"></div>
        <p class="gallery__description">
          Discover the artistry and elegance that defines our luxury beauty studio through our curated collection of transformations.
        </p>
      </div>
      
      <div class="gallery__grid">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery__item">
          <div class="gallery__image-wrapper">
            <img 
              :src="image.url" 
              :alt="image.alt"
              class="gallery__image"
            />
          </div>
          <div class="gallery__overlay">
            <div class="gallery__overlay-content">
              <p class="gallery__overlay-text">{{ image.title }}</p>
              <div class="gallery__overlay-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const galleryImages = [
  {
    url: '/images/gallery/hair-1.jpg',
    title: 'Hair Styling',
    alt: 'Hair styling service'
  },
  {
    url: '/images/gallery/nails-1.jpg',
    title: 'Nail Art',
    alt: 'Nail art design'
  },
  {
    url: '/images/gallery/facial-1.jpg',
    title: 'Facial Treatment',
    alt: 'Facial treatment service'
  },
  {
    url: '/images/gallery/hair-2.jpg',
    title: 'Hair Coloring',
    alt: 'Hair coloring service'
  },
  {
    url: '/images/gallery/nails-2.jpg',
    title: 'Manicure',
    alt: 'Manicure service'
  },
  {
    url: '/images/gallery/facial-2.jpg',
    title: 'Skin Care',
    alt: 'Skin care treatment'
  }
]
</script>

<style scoped>
/* Gallery Block */
.gallery {
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #374151 0%, #111827 50%, #334155 100%);
  overflow: hidden;
}

.gallery__texture {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
}

.gallery__gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
  background-size: 20px 20px;
}

.gallery__container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.gallery__header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.gallery__title {
  font-size: 4rem;
  font-weight: 200;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.gallery__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  margin: 0 auto 1.5rem;
}

.gallery__description {
  font-size: 1.125rem;
  color: #d1d5db;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.025em;
  margin: 0;
}

/* Grid */
.gallery__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.gallery__item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
}

.gallery__item:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(251, 191, 36, 0.3);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(251, 191, 36, 0.1);
}

.gallery__image-wrapper {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.9) contrast(1.1);
}

.gallery__item:hover .gallery__image {
  transform: scale(1.1);
  filter: brightness(1) contrast(1.2);
}

/* Overlay */
.gallery__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.7) 0%, 
    rgba(17, 24, 39, 0.8) 50%, 
    rgba(0, 0, 0, 0.9) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  border-radius: 12px;
}

.gallery__item:hover .gallery__overlay {
  opacity: 1;
}

.gallery__overlay-content {
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.gallery__item:hover .gallery__overlay-content {
  transform: translateY(0);
}

.gallery__overlay-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.gallery__overlay-line {
  width: 3rem;
  height: 1px;
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  margin: 0 auto;
  transform: scaleX(0);
  transition: transform 0.4s ease 0.1s;
}

.gallery__item:hover .gallery__overlay-line {
  transform: scaleX(1);
}

/* Media Queries */
@media (min-width: 768px) {
  .gallery__title {
    font-size: 5rem;
  }

  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .gallery__title {
    font-size: 6rem;
  }

  .gallery__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  .gallery__item:nth-child(3n-1) {
    transform: translateY(2rem);
  }
}

@media (min-width: 1280px) {
  .gallery__container {
    padding: 0 3rem;
  }
}
</style> 