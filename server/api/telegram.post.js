export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, phone, service, message } = body

    // Валідація даних
    if (!name || !phone || !service) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Обов\'язкові поля: ім\'я, телефон та послуга'
      })
    }

    // Налаштування Telegram
    const token = '8559796605:AAHHohPIr72iyrzOUf6npG59NBldEO8GiFY'
    const chatId = '-4980152340'

    // Форматування повідомлення
    const text = `🏥 Нова заявка з Laser Nice Beauty:
👤 Ім'я: ${name}
📞 Телефон: ${phone}
💅 Послуга: ${service}${message ? `
📝 Повідомлення: ${message}` : ''}
📅 Дата: ${new Date().toLocaleString('uk-UA', { 
  timeZone: 'Europe/Kiev',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}`

    // Відправка повідомлення в Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`
    
    const response = await $fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        chat_id: chatId,
        text: text
      }
    })

    if (!response.ok) {
      throw createError({
        statusCode: 500,
        statusMessage: response.description || 'Помилка відправки повідомлення в Telegram'
      })
    }

    return {
      ok: true,
      message: 'Повідомлення успішно відправлено!'
    }

  } catch (error) {
    console.error('Telegram API Error:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || error.message || 'Помилка сервера'
    })
  }
})
