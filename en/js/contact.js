 $(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "Through struggle...to the stars";
      myQuotes[1] = "Nothing is difficult, everything's a challenge";
	  myQuotes[2] = "They do not know it was impossible so they do it";
	  myQuotes[3] = "Do not think to win, Think not to lose";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[3] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
   });
   
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
            var lastname        = $("#lastname").val();
			var firstname     = $("#firstname").val();
			var phone      = $("#phone").val();
            var subject      = $("#subject").val();
            var email      = $("#email").val();
            var message    = $("#message").val();
            var dataString = firstname + lastname + phone + subject + email + message;
            $.ajax({
                    type : "POST",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    success : function(){
                        $('#contact').html('<p>Message bien envoyé</p>');
                    },
                    error: function(){
                        $('#contact').html("<p>Erreur, le message ne peut pas être envoyé</p>");
                    }
            });
            //return false;
    });
});