function Inicio(){
	var valor =	document.getElementById("btninicio");
		if(valor.value==0){
		document.getElementById("artA").style.display = "none";
		document.getElementById("artB").style.display = "none";
		document.getElementById("pagina2").style.display = "none";
		document.getElementById("pagina1").style.display = "none";
		document.getElementById("imgInicio").style.display = "block";
		document.getElementById("imgcss").style.display = "none";
		document.getElementById("btn1").style.display = "block";
		document.getElementById("btn2").style.display = "block";		
			valor.value=1;
		}
		else{
			
			valor.value=0;
		}
}


function Pagina(){
	var valor =	document.getElementById("btnproyectos");
		if(valor.value==0){
		document.getElementById("pagina1").style.display = "block";
		document.getElementById("pagina2").style.display = "none";
		document.getElementById("imgInicio").style.display = "block";
		document.getElementById("imgcss").style.display = "none";
		document.getElementById("artA").style.display = "none";
		document.getElementById("artB").style.display = "none";
			document.getElementById("btn1").style.display = "block";
		document.getElementById("btn2").style.display = "block";

			valor.value=1;
		}
		else{
			document.getElementById("pagina1").style.display = "none";
			document.getElementById("imgInicio").style.display = "block";
			valor.value=0;
		}
}

function Examenes(){
	var valor =	document.getElementById("btnexamenes");
		if(valor.value==0){
		document.getElementById("pagina2").style.display = "block";
		document.getElementById("pagina1").style.display = "none";
		document.getElementById("imgInicio").style.display = "block";
		document.getElementById("imgcss").style.display = "none";
		document.getElementById("artA").style.display = "none";
		document.getElementById("artB").style.display = "none";
			document.getElementById("btn1").style.display = "block";
		document.getElementById("btn2").style.display = "block";
			valor.value=1;
		}
		else{
			document.getElementById("pagina2").style.display = "none";
			valor.value=0;
		}
}

function mostrarimg(){
	var valor =	document.getElementById("btn1");
		if(valor.value==0){
		document.getElementById("imgInicio").style.display = "block";
		document.getElementById("imgcss").style.display = "none";
			valor.value=1;
		}
		else{
			
			valor.value=0;
		}
}

function mostrarimge(){
	var valor =	document.getElementById("btn2");
		if(valor.value==0){
		document.getElementById("imgcss").style.display = "block";
		document.getElementById("imgInicio").style.display = "none";
			valor.value=1;
		}
		else{
			
			valor.value=0;
		}
}

function informacion(){
	var valor =	document.getElementById("btninf");
		if(valor.value==0){
		document.getElementById("artA").style.display = "block";
		document.getElementById("artB").style.display = "block";
		document.getElementById("pagina2").style.display = "none";
		document.getElementById("pagina1").style.display = "none";
		document.getElementById("imgInicio").style.display = "none";
		document.getElementById("imgcss").style.display = "none";
		document.getElementById("btn1").style.display = "none";
		document.getElementById("btn2").style.display = "none";		
			valor.value=1;
		}
		else{
			
			valor.value=0;
		}
}