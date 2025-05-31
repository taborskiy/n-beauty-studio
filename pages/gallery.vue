<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-light text-center mb-12">Our Gallery</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(image, index) in galleryImages" :key="index" class="group relative overflow-hidden">
          <div class="aspect-w-4 aspect-h-3 bg-gray-100">
            <img 
              :src="image.url" 
              :alt="image.alt"
              class="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p class="text-white text-lg">{{ image.title }}</p>
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