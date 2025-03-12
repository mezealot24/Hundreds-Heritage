<?php
// Set headers to handle CORS and JSON responses
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Load environment variables
function loadEnv($path) {
    if (file_exists($path)) {
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos($line, '=') !== false) {
                list($key, $value) = explode('=', $line, 2);
                $key = trim($key);
                $value = trim($value);
                
                putenv("$key=$value");
                $_ENV[$key] = $value;
            }
        }
    }
}

// Try to find .env file in parent directories
$dir = __DIR__;
$envFound = false;
while ($dir !== '/' && !$envFound) {
    if (file_exists($dir . '/.env')) {
        loadEnv($dir . '/.env');
        $envFound = true;
    } else {
        $dir = dirname($dir);
    }
}

// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Auto-detect PHPMailer location
$phpmailerLocations = [
    __DIR__ . '/PHPMailer-master/src/',
    __DIR__ . '/vendor/phpmailer/phpmailer/src/',
    __DIR__ . '/lib/PHPMailer/src/',
    __DIR__ . '/../PHPMailer/src/',
    __DIR__ . '/../vendor/phpmailer/phpmailer/src/'
];

$phpmailerFound = false;
foreach ($phpmailerLocations as $location) {
    if (file_exists($location . 'PHPMailer.php')) {
        require $location . 'Exception.php';
        require $location . 'PHPMailer.php';
        require $location . 'SMTP.php';
        $phpmailerFound = true;
        break;
    }
}

if (!$phpmailerFound) {
    echo json_encode(['status' => 'error', 'message' => 'PHPMailer not found']);
    exit;
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Validate required fields only (no email validation)
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(['status' => 'error', 'message' => 'Please fill all required fields']);
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings from .env
        $mail->isSMTP();
        $mail->Host = getenv('SMTP_HOST') ?: 'your-smtp-server.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USERNAME') ?: 'your-email@domain.com';
        $mail->Password = getenv('SMTP_PASSWORD') ?: 'your-email-password';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = getenv('SMTP_PORT') ?: 587;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress(getenv('MAIL_TO') ?: 'recipient@hundreds-heritage.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form: ' . $subject;
        $mail->Body = "
            <h3>New message from the website contact form</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong></p>
            <p>{$message}</p>
        ";
        $mail->AltBody = "New message from: {$name}\nEmail: {$email}\nPhone: {$phone}\nSubject: {$subject}\nMessage: {$message}";

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>