var inicio = function()
{
	$("#home").show("fast");

	var inicio = function()
	{ 
		$("#home").show("fast");
		$("#artA").hide("fast");	
		$("#artB").hide("fast");
		
	}
	var Academica = function()
	{
		$("section > article").hide("fast");
		$("#artA").show("fast");
	}

	$("#btnPrincipal").on("click",inicio);
	$("#btnInformacion").on("click",Academica);
	
}
$(document).on("ready",inicio);