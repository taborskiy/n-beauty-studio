<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] bg-gray-50">
      <div class="absolute inset-0 bg-black/30 z-10"></div>
      <div class="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      <div class="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-5xl font-light mb-6">Welcome to N-Beauty Studio</h1>
          <p class="text-xl mb-8">Where beauty meets expertise. Experience the art of transformation.</p>
          <NuxtLink to="/contacts" class="bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-gray-100 transition">
            Book Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-light text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">💇‍♀️</span>
            </div>
            <h3 class="text-xl mb-2">Hair Styling</h3>
            <p class="text-gray-600">Professional hair cutting, coloring, and styling services.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">💅</span>
            </div>
            <h3 class="text-xl mb-2">Nail Care</h3>
            <p class="text-gray-600">Manicure, pedicure, and nail art services.</p>
          </div>
          <div class="text-center p-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span class="text-2xl">✨</span>
            </div>
            <h3 class="text-xl mb-2">Facial Treatments</h3>
            <p class="text-gray-600">Rejuvenating facial treatments and skincare services.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 