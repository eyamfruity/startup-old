<?php 
	$name = $_POST['name'];
	$companyName = $_POST['company-name'];
	$formSubject = $_POST['subject'];
	$message = $_POST['message'];
	$email = $_POST['email'];

	$to = "eyamfruity@gmail.com"; 
	// $date = date ("d.m.Y"); 
	// $time = date ("h:i");
	$emailSubject = "Startup form";

	$msg="
	Name: $name/n
	Company name: $companyName/n
	Subject: $formSubject/n
	E-mail: $email/n
	Message: $message";

	mail($to, $emailSubject, $msg, "From: $to") //Во избежание попадания в спам мы как бы отссылаем письмо себе самому.
?>