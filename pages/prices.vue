<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-light text-center mb-12">Our Prices</h1>

      <div class="max-w-4xl mx-auto">
        <!-- Hair Services -->
        <div class="mb-12">
          <h2 class="text-2xl font-light mb-6 pb-2 border-b">Hair Services</h2>
          <div class="space-y-4">
            <div v-for="(service, index) in hairServices" :key="index" 
                 class="flex justify-between items-center py-2">
              <div>
                <h3 class="text-lg">{{ service.name }}</h3>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
              </div>
              <span class="text-lg font-medium">{{ service.price }}</span>
            </div>
          </div>
        </div>

        <!-- Nail Services -->
        <div class="mb-12">
          <h2 class="text-2xl font-light mb-6 pb-2 border-b">Nail Services</h2>
          <div class="space-y-4">
            <div v-for="(service, index) in nailServices" :key="index" 
                 class="flex justify-between items-center py-2">
              <div>
                <h3 class="text-lg">{{ service.name }}</h3>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
              </div>
              <span class="text-lg font-medium">{{ service.price }}</span>
            </div>
          </div>
        </div>

        <!-- Facial Services -->
        <div class="mb-12">
          <h2 class="text-2xl font-light mb-6 pb-2 border-b">Facial Services</h2>
          <div class="space-y-4">
            <div v-for="(service, index) in facialServices" :key="index" 
                 class="flex justify-between items-center py-2">
              <div>
                <h3 class="text-lg">{{ service.name }}</h3>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
              </div>
              <span class="text-lg font-medium">{{ service.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const hairServices = [
  {
    name: 'Haircut',
    description: 'Includes consultation and styling',
    price: 'from $45'
  },
  {
    name: 'Hair Coloring',
    description: 'Full color application',
    price: 'from $85'
  },
  {
    name: 'Hair Styling',
    description: 'Blow dry and styling',
    price: 'from $35'
  }
]

const nailServices = [
  {
    name: 'Manicure',
    description: 'Basic nail care and polish',
    price: 'from $30'
  },
  {
    name: 'Pedicure',
    description: 'Foot care and polish',
    price: 'from $40'
  },
  {
    name: 'Nail Art',
    description: 'Custom design and decoration',
    price: 'from $15'
  }
]

const facialServices = [
  {
    name: 'Basic Facial',
    description: 'Cleansing and moisturizing treatment',
    price: 'from $60'
  },
  {
    name: 'Deep Cleansing',
    description: 'Intensive skin treatment',
    price: 'from $80'
  },
  {
    name: 'Anti-Aging Treatment',
    description: 'Premium facial with specialized products',
    price: 'from $100'
  }
]
</script> 