<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-light text-gray-800">N-Beauty Studio</NuxtLink>
          <div class="space-x-6">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">Home</NuxtLink>
            <NuxtLink to="/gallery" class="text-gray-600 hover:text-gray-900">Gallery</NuxtLink>
            <NuxtLink to="/prices" class="text-gray-600 hover:text-gray-900">Prices</NuxtLink>
            <NuxtLink to="/contacts" class="text-gray-600 hover:text-gray-900">Contacts</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-50 py-8">
      <div class="container mx-auto px-4">
        <div class="text-center text-gray-600">
          <p>&copy; {{ new Date().getFullYear() }} N-Beauty Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style> 