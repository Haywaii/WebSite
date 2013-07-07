/** Affichage Quote Motto **/

 $(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "&Agrave; travers l'adversit&eacute;...jusqu'aux &eacute;toiles";
      myQuotes[1] = "Rien n'est difficile, tout est challenge";
	  myQuotes[2] = "Ils ne savaient pas que c'&eacute;tait impossible alors ils l'ont fait";
	  myQuotes[3] = "Ne pense pas &agrave; gagner, pense &agrave; ne pas perdre";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[3] = "Gichin Funakoshi";
      
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
								$('#contact').html('<p>Message bien envoyé</p>');
							},
							error: function(){
								$('#contact').html("<p>Erreur, le message ne peut pas être envoyé</p>");
							}
					});
				}
				else if(document.getElementById('radio1').checked) {
				  alert("Vous n'êtes qu'une machine, passez votre chemin");
				}
				//return false;
		});
});