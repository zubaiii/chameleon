<?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
 
// //required files
// require 'phpmailer/src/Exception.php';
// require 'phpmailer/src/PHPMailer.php';
// require 'phpmailer/src/SMTP.php';



// if ($_SERVER["REQUEST_METHOD"] == "POST"){
//     $name =  htmlspecialchars($_POST["name"]);
//     $email =  filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
//     $number = htmlspecialchars($_POST["number"]);
//     $select = $_POST[""]; htmlspecialchars($_POST["select"]);
//     $message = htmlspecialchars($_POST["Mesege"]);

//     $mail = new PHPMailer(true);
//     $mail->isSMTP();                                   //Send using SMTP
//     $mail->Host       = 'smtp.gmail.com';    //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;           //Enable SMTP authentication
//     $mail->Username   = 'zubair520548ahm@gmail.com';   //SMTP username
//     $mail->Password   = 'mbmbrdrkyebpbhhr';   //SMTP password
//     $mail->SMTPSecure = 'ssl';            //Enable implicit SSL encryption
//     $mail->Port       = 465;  
 
//    $mail->setFrom( $email, $name); // Sender Email and name
//    $mail->addAddress('zubair520548ahm@gmail.com');     //Add a recipient email  
//    $mail->addReplyTo($_POST["email"], $_POST["name"]); // reply to sender email

//    //Content
//    $mail->isHTML(true);               //Set email format to HTML
//    $mail->Subject = "ind";   // email subject headings
//    $mail->Body    = "<b>name</b> : ".$name . "<br> <b>Email</b> : " . $email ."<br> <b>Categorie</b> : ". $select . "<br> <b>Number</b> : ".$number. "<br> <b>message </b> : ". $message;
     
// if ($mail->send()) {
//   echo json_encode("Success");
// } else {
//     echo " <script> 
//     alert('echo 'Email could not be sent.Error: ' . $mail->ErrorInfo;');
//     document.location.href = 'contact.php';
// </script>";
    
// }
// }



include('smtp/PHPMailerAutoload.php');

if ($_SERVER["REQUEST_METHOD"] == "POST"){
      $name =  htmlspecialchars($_POST["name"]);
      $email =  filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
      $number = htmlspecialchars($_POST["number"]);
      $select = htmlspecialchars($_POST["select"]);
      $message = htmlspecialchars($_POST["Mesege"]);
  
        $mail = new PHPMailer(); 
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	//$mail->SMTPDebug = 2; 
	$mail->Username = "zubair520548ahm@gmail.com";
	$mail->Password = "mbmbrdrkyebpbhhr";
	$mail->SetFrom("zubair520548ahm@gmail.com");
	$mail->Subject = "hu";
	$mail->Body = "<b>name</b> : ".$name . "<br> <b>Email</b> : " . $email ."<br> <b>Categorie</b> : ". $select . "<br> <b>Number</b> : ".$number. "<br> <b>message </b> : ". $message;
	$mail->AddAddress($email);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
  if ($mail->send()) {
      echo json_encode("Success");
    } else {
        echo " <script> 
        alert('echo 'Email could not be sent.Error: ' . $mail->ErrorInfo;');
        document.location.href = 'contact.php';
    </script>";
    }


}

// mbmb rdrk yebp bhhr 
?>
