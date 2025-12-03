<template>
  <div>
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
          <div class="map-wrapper">
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
import { ref } from 'vue'

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
</script>

<style scoped>
/* Common Section Styles */
.section {
  padding: 3rem 0;
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

.section__divider {
  width: 6rem;
  height: 2px;
  background: linear-gradient(to right, #ec4899, #db2777);
  margin: 0 auto 2rem;
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

/* Mobile 375px and smaller */
@media (max-width: 600px) {
  .map-wrapper {
    padding-bottom: 150% !important;
    grid-column: span 1 !important;
  }
}

.map-wrapper {
  width: 100%;
  padding-bottom: 50%;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  border-radius: 4px;
  grid-column: span 2;
}

.map-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
}
</style>