<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$company = $_POST['company'];
	$message = $_POST['message'];
	$hpot = $_POST['hpot'];
	$huch = $_POST['huch'];
	$user_email = $_POST['user_email'];
	$user_email = $_POST['user_email'];

	if( filter_var($email, FILTER_VALIDATE_EMAIL) && 
		!empty($name) && 
		!empty($message) && 
		( (strlen($name) <= 15) && (strlen($email) <= 30) && (strlen($message) <= 1000) ) &&
		$hpot == "http://" &&
		$huch == "" &&
		!($user_email)
	  ){
		  	$email_add = "ninojamesquibido@gmail.com";
			$subject = "From AlphaRank Website Contat Form";
			$body = "From: $name \n Phone: $phone \n Message: $message";
			$headers = "From :".$email;
			mail($email_add, $subject, $body) or die("Error!");
			echo 'Thank you';
			//header("Location:http://botjames.com/");
		}
	else{
		header("Location:http://botjames.com/");
		echo "We encountered an error sending your mail";
	}

?>