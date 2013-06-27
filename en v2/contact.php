<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
 
    // CONDITIONS IDENTITE
    if ( (isset($_POST['firstname'])) && (strlen(trim($_POST['firstname'])) > 0) ):
        $firstname = stripslashes(strip_tags($_POST['firstname']));
    else:
        echo "Merci d'écrire un prénom <br />";
        $firstname = '';
    endif;
	
    if ( (isset($_POST['lastname'])) && (strlen(trim($_POST['lastname'])) > 0) ):
        $lastname = stripslashes(strip_tags($_POST['lastname']));
    else:
        echo "Merci d'écrire un nom <br />";
        $lastname = '';
    endif;
	
	// CONDITIONS EMAIL
    if ( (isset($_POST['mail_address'])) && (strlen(trim($_POST['mail_address'])) > 0) && (filter_var($_POST['mail_address'], FILTER_VALIDATE_EMAIL)) ):
        $email = stripslashes(strip_tags($_POST['mail_address']));
    elseif (empty($_POST['mail_address'])):
        echo "Merci d'écrire une adresse email <br />";
        $email = '';
    else:
        echo 'Email invalide :(<br />';
        $email = '';
    endif;
 
    // CONDITIONS SUBJECT
    if ( (isset($_POST['subject'])) && (strlen(trim($_POST['subject'])) > 0) ):
        $subject = stripslashes(strip_tags($_POST['subject']));
    else:
        echo "Merci d'écrire un sujet <br />";
        $subject = '';
    endif;
  
    // CONDITIONS MESSAGE
    if ( (isset($_POST['mail_text'])) && (strlen(trim($_POST['mail_text'])) > 0) ):
        $message = stripslashes(strip_tags($_POST['mail_text']));
    else:
        echo "Merci d'écrire un message<br />";
        $message = '';
    endif;
  
    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
 
 
    // PREPARATION DES DONNEES
	$ip           = $_SERVER['REMOTE_ADDR'];
    $hostname     = gethostbyaddr($_SERVER['REMOTE_ADDR']);
    $destinataire = "halter.emmanuel@gmail.com";
    $objet        = "[Site EmL] ".$subject;
	$name = $firstname ." " .$lastname;
    $contenu      = "Expediteur : ".$name."\r\n";
	$contenu     .= "Téléphone : ".$telephone."\r\n";
    $contenu     .= "Message : " .$message."\r\n";
    $contenu     .= "Adresse IP de l'expediteur : ".$ip."\r\n";
    $contenu     .= "DLSAM : ".$hostname;
  
    $headers  = 'From: '.$email."\n"; // ici l'expéditeur du mail
	$headers .= "Reply-To: ".$email."\n";
    $headers .= "Content-Type: text/plain; charset=\"ISO-8859-1\"; DelSp=\"Yes\"; format=flowed rn";
    $headers .= "Content-Disposition: inline rn";
    $headers .= "Content-Transfer-Encoding: 7bit rn";
    $headers .= "MIME-Version: 1.0";
     
	  
    // SI LES CHAMPS SONT MAL REMPLIS
    if ( (empty($nom)) && (empty($sujet)) && (empty($email)) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (empty($message)) ):
        echo 'echec :( <br /><a href="contact.html"></a>';
    // ENCAPSULATION DES DONNEES
    elseif ($_POST['mail_check'] == "non"):
        mail($destinataire,$objet,utf8_decode($contenu),$headers);
        echo 'Message bien envoy&eacute;';
		header('Location: contact.html'); 
	else:
		header('Location: contact.html'); 
    endif;
 
    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
?>
