/** Affichage Quote Motto **/

 $(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "&ldquo; Through struggle...to the stars &bdquo;";
      myQuotes[1] = "&ldquo; Nothing is difficult, everything's a challenge &bdquo;";
	  myQuotes[2] = "&ldquo; Do not think to win, Think not to lose &bdquo;";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[2] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
});

/** Validation Engine **/

//$(document).ready(function(){
   //$("#cform").validationEngine();/*{
    //binded: false  });*/
 //});
 
 $(document).ready(function(){ 
    $("#cform").validationEngine({
		 binded: true
         ,promptPosition : "centerRight"
        ,onAjaxFormComplete: function(status,form) {
          if (status === true) {
            return pageLoad_onsubmit();
            form.submit();
          }
         }
    });
 
});

$(document).ready(function(){
		$("#contact").submit(function(event){
				var firstname  = $("#firstname").val();
				var lastname   = $("#lastname").val();
				var telephone  = $("#telephone").val();
				var subject    = $("#subject").val();
				var email      = $("#email").val();
				var message    = $("#message").val();
				var dataString = firstname + lastname + telephone + subject + email + message;
				
				if(document.getElementById('radio2').checked) {
					$.ajax({
							type : "POST",
							url: $(this).attr('action'),
							data: $(this).serialize(),
							success : function(){
								$('#contact').html('<p>Message well sent</p>');
							},
							error: function(){
								$('#contact').html("<p>Sorry, message can not be sent</p>");
							}
					});
				}
				else if(document.getElementById('radio1').checked) {
				  alert("You are just a machina, go away");
				}
				//return false;
		});
});