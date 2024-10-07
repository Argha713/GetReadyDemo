<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = trim($_POST["txtName"]);
    $phone = trim($_POST["txtPhone"]);
    $email = trim($_POST["txtMail"]);
    $course = trim($_POST["ddlCource"]);
    $location = trim($_POST["txtlocation"]);

    // Check if any field is empty.
    if (empty($name) || empty($phone) || empty($email) || empty($course) || empty($location)) {
        echo "<script>alert('Please complete all fields before submitting.'); window.history.back();</script>";
        exit;
    }

    // Recipient email address (Change to your email address)
    $recipient = "sarkar.argha2@gmail.com, sudipan19@gmail.com, gogetready.gr@gmail.com";
    $subject = "New Free Career Counselling Request";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Course Interested: $course\n";
    $email_content .= "Location: $location\n";

    $email_from = 'info@gogetready.in';
    // Build the email headers.
    $email_headers = "From: $email_from\r\n";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Include JavaScript for success message and close popup
        echo "<script>
                alert('Your request has been submitted successfully.');
                
                window.location.href='/index.html';
              </script>";
    } else {
        echo "<script>alert('There was an error sending your request. Please try again later.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Invalid request.'); window.location.href='index.html';</script>";
}
?>
