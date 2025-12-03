<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Налаштування
$token = '8559796605:AAHHohPIr72iyrzOUf6npG59NBldEO8GiFY';
$chat_id = '-4980152340';

// Отримання POST-даних
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$service = $_POST['service'] ?? '';
$message = $_POST['message'] ?? '';

// Формування тексту
$text = "🏥 Нова заявка з Laser Nice Beauty:\n";
$text .= "👤 Ім'я: $name\n";
$text .= "📞 Телефон: $phone\n";
$text .= "💅 Послуга: $service\n";
if (!empty($message)) {
    $text .= "📝 Повідомлення: $message\n";
}
$text .= "📅 Дата: " . date('d.m.Y H:i');

// Надсилання в Telegram
$url = "https://api.telegram.org/bot$token/sendMessage";
$response = file_get_contents($url . '?' . http_build_query([
    'chat_id' => $chat_id,
    'text' => $text
]));

$result = json_decode($response, true);

if ($result && $result['ok']) {
    echo json_encode(['ok' => true, 'message' => 'Повідомлення успішно відправлено']);
} else {
    echo json_encode(['ok' => false, 'message' => 'Помилка відправки повідомлення']);
}
?>
