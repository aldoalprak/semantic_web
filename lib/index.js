$(document).ready(function(){
	$("button").click(function(){
		$("#imgCute1").fadeIn();
		$("#imgCute2").fadeIn(1500);
		$("#imgCute3").fadeIn(3000);
		$("#imgCute4").fadeIn(4500);
	});
});

$(document).ready(function(){
    $("#text-box").keyup(function(){
       let email = this.value
	   let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	   let result = validateEmail.test(email)
	   console.log(this.value)
	   if(result == true) {
	   		$("#text-box").css("border-color", "green")
	   }else{
	   		$("#text-box").css("border-color", "red")
	   }
    });
});