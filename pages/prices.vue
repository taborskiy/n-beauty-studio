<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-light text-center mb-12">Our Prices</h1>

      <div class="max-w-4xl mx-auto mb-12">
        <h2 class="text-2xl font-light mb-6 pb-2 border-b border-gray-200 text-gray-800">
          Laser Hair Removal - Women
        </h2>

        <div v-for="(block, blockIndex) in laserWomenServices" :key="block.blockName" 
            :class="blockIndex < laserWomenServices.length - 1 ? 'mb-6' : ''">
          
          <h3 class="text-lg font-medium mb-4 text-pink-700">{{ block.blockName }}</h3>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="(service, index) in block.items" 
                :key="`${block.blockName}-${index}`" 
                class="flex justify-between items-center py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
              <div>
                <h4 class="font-medium text-gray-800">{{ service.name }}</h4>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
              </div>
              <span class="text-lg font-semibold text-pink-600">{{ service.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-light mb-6 pb-2 border-b border-gray-200 text-gray-800">
          Laser Hair Removal - Man
        </h2>

        <div v-for="(block, blockIndex) in laserMenServices" :key="block.blockName" 
            :class="blockIndex < laserMenServices.length - 1 ? 'mb-6' : ''">
          
          <h3 class="text-lg font-medium mb-4 text-pink-700">{{ block.blockName }}</h3>
          
          <div class="grid md:grid-cols-1 gap-4">
            <div v-for="(service, index) in block.items" 
                :key="`${block.blockName}-${index}`" 
                class="flex justify-between items-center py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors">
              <div>
                <h4 class="font-medium text-gray-800">{{ service.name }}</h4>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
              </div>
              <span class="text-lg font-semibold text-pink-600">{{ service.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {laserMenServices, laserWomenServices} from '../data/price.js'
</script> 