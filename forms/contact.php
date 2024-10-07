<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $visitor_email = $_POST['email'];
    $visitor_name = $_POST['name'];
    $visitor_course = $_POST['course'];
    $visitor_phoneNo = $_POST['phoneNo'];
    $visitor_message = $_POST['message'];

    // File upload handling
    if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
        $file_name = $_FILES['cv']['name'];
        $file_tmp = $_FILES['cv']['tmp_name'];
        $file_size = $_FILES['cv']['size'];
        $file_type = $_FILES['cv']['type'];
        
        // Read the file content
        $handle = fopen($file_tmp, "r");
        $content = fread($handle, filesize($file_tmp));
        fclose($handle);

        // Encode the file content
        $encoded_content = chunk_split(base64_encode($content));

        // Generate a boundary to separate different parts of the email
        $boundary = md5("random");

        // Email headers
        $email_from = 'info@gogetready.in';
        $email_subject = "New Form Submission with CV";
        $to = "sarkar.argha2@gmail.com, sudipan19@gmail.com, gogetready.gr@gmail.com";
        
        // Email headers for MIME
        $headers = "From: $email_from\r\n";
        $headers .= "Reply-To: $visitor_email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

        // Email body content
        $email_body = "--$boundary\r\n";
        $email_body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $email_body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $email_body .= "Hi Admin,\n".
                        "Visitor Email: $visitor_email.\n".
                        "Visitor Name: $visitor_name.\n".
                        "Visitor Course: $visitor_course.\n".
                        "Visitor Contact No: $visitor_phoneNo.\n".
                        "Visitor Message: $visitor_message.\n".
                        "Subject: Course enquiry. Please reply back from gogetready.gr@gmail.com mail address.\n\n";

        // Attachment part
        $email_body .= "--$boundary\r\n";
        $email_body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $email_body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $email_body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $email_body .= "$encoded_content\r\n";
        $email_body .= "--$boundary--";

        // Send the email
        if (mail($to, $email_subject, $email_body, $headers)) {
            echo json_encode(['status' => 'success', 'message' => 'Your message has been sent successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'There was an error sending your message.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error uploading the file.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
?>
