<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-light text-center mb-12">Contact Us</h1>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <div class="mb-8">
            <h2 class="text-2xl font-light mb-4">Get in Touch</h2>
            <p class="text-gray-600 mb-6">We'd love to hear from you. Please fill out the form or use our contact information below.</p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <span class="text-xl">📍</span>
                <div>
                  <h3 class="font-medium">Address</h3>
                  <p class="text-gray-600">123 Beauty Street<br>New York, NY 10001</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-xl">📞</span>
                <div>
                  <h3 class="font-medium">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <span class="text-xl">✉️</span>
                <div>
                  <h3 class="font-medium">Email</h3>
                  <p class="text-gray-600">info@nbeautystudio.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-light mb-4">Working Hours</h2>
            <div class="space-y-2">
              <p class="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </p>
              <p class="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </p>
              <p class="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                required
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-gray-900 text-white py-3 px-6 rounded-sm hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically handle the form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}
</script> 