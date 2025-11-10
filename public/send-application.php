<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}

// Email configuration
$to_emails = [
    'daghighi.kyle@gmail.com',
    'jimrakhshani@yahoo.com'
];

$subject = 'New Employment Application - Cafe Renaissance';

// Build email content
$message = "New Employment Application Received\n\n";
$message .= "===========================================\n\n";

$message .= "Personal Information:\n";
$message .= "Name: " . ($data['firstName'] ?? '') . " " . ($data['lastName'] ?? '') . "\n";
$message .= "Email: " . ($data['email'] ?? '') . "\n";
$message .= "Phone: " . ($data['phone'] ?? '') . "\n";
$message .= "Address: " . ($data['address'] ?? '') . "\n";
$message .= "City: " . ($data['city'] ?? '') . "\n";
$message .= "State: " . ($data['state'] ?? '') . "\n";
$message .= "ZIP Code: " . ($data['zipCode'] ?? '') . "\n";
$message .= "Date of Birth: " . ($data['dateOfBirth'] ?? '') . "\n\n";

$message .= "Position Information:\n";
$message .= "Position Applied For: " . ($data['position'] ?? '') . "\n";
$message .= "Available Start Date: " . ($data['startDate'] ?? '') . "\n";
$message .= "Desired Salary: " . ($data['desiredSalary'] ?? '') . "\n";
$message .= "Work Schedule: " . ($data['workSchedule'] ?? '') . "\n\n";

$message .= "Availability:\n";
if (!empty($data['availability'])) {
    foreach ($data['availability'] as $day) {
        $message .= "- " . $day . "\n";
    }
}
$message .= "\n";

$message .= "Work Experience:\n";
if (!empty($data['workExperience'])) {
    foreach ($data['workExperience'] as $index => $job) {
        $message .= "Job " . ($index + 1) . ":\n";
        $message .= "  Company: " . ($job['company'] ?? '') . "\n";
        $message .= "  Position: " . ($job['position'] ?? '') . "\n";
        $message .= "  Duration: " . ($job['startDate'] ?? '') . " to " . ($job['endDate'] ?? '') . "\n";
        $message .= "  Duties: " . ($job['duties'] ?? '') . "\n";
        $message .= "  Reason for Leaving: " . ($job['reasonForLeaving'] ?? '') . "\n\n";
    }
}

$message .= "Education:\n";
if (!empty($data['education'])) {
    foreach ($data['education'] as $index => $edu) {
        $message .= "Education " . ($index + 1) . ":\n";
        $message .= "  School: " . ($edu['school'] ?? '') . "\n";
        $message .= "  Degree: " . ($edu['degree'] ?? '') . "\n";
        $message .= "  Year: " . ($edu['year'] ?? '') . "\n\n";
    }
}

$message .= "References:\n";
if (!empty($data['references'])) {
    foreach ($data['references'] as $index => $ref) {
        $message .= "Reference " . ($index + 1) . ":\n";
        $message .= "  Name: " . ($ref['name'] ?? '') . "\n";
        $message .= "  Relationship: " . ($ref['relationship'] ?? '') . "\n";
        $message .= "  Phone: " . ($ref['phone'] ?? '') . "\n";
        $message .= "  Email: " . ($ref['email'] ?? '') . "\n\n";
    }
}

$message .= "Additional Information:\n";
$message .= "Emergency Contact: " . ($data['emergencyContact'] ?? '') . "\n";
$message .= "Emergency Phone: " . ($data['emergencyPhone'] ?? '') . "\n";
$message .= "Transportation: " . ($data['transportation'] ?? '') . "\n";
$message .= "Work Authorization: " . ($data['workAuthorization'] ?? '') . "\n";
$message .= "Criminal Background: " . ($data['criminalBackground'] ?? '') . "\n";
$message .= "Additional Information: " . ($data['additionalInfo'] ?? '') . "\n\n";

$message .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
$headers .= "Reply-To: " . ($data['email'] ?? 'noreply@' . $_SERVER['HTTP_HOST']) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send emails
$success = true;
$failed_emails = [];

foreach ($to_emails as $email) {
    if (!mail($email, $subject, $message, $headers)) {
        $success = false;
        $failed_emails[] = $email;
    }
}

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Application sent successfully']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'error' => 'Failed to send to some recipients',
        'failed_emails' => $failed_emails
    ]);
}
?>