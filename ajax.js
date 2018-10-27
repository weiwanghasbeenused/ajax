$(document).ready(function(){
	var d = "hello!";
	$("#btn").click(function(){
		$.ajax ({
		   type: "POST",
		   url:"ajax.php",
		   data: d,
		   success: function() {
		      console.log("message sent!");
		   }
		});
	});
});