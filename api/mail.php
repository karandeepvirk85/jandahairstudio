<?php
	header("Access-Control-Allow-Origin: *");
	class Email_Controller{	
		function __construct(){
			@$this->sendEmail();
		}
		public function sendEmail(){
			$strName 	  = isset($_POST['name'])  		? $_POST['name'] : '';
			$strMessage   = isset($_POST['message'])   	? $_POST['message'] : '';
			if(!mail('virkkarandeep85@gmail.com',$strName, $strMessage)){
				echo json_encode(array(
					"sent" => true
				));
			}else{
				echo json_encode(["sent" => false, "message" => "Something went wrong"]);
			}
		}		
	}
	new Email_Controller();
?>