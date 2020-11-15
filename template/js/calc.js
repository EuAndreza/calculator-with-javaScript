var cal, number1,number2,operacao;   

function sum(n1,n2){
	cal = (n1 +" + " + n2 + " = " + (n1 + n2));
	document.getElementById("exibir").innerHTML = cal;
}

function subtraction(n1,n2){
	cal = (n1 +" - " + n2 + " = " + (n1 - n2));
	document.getElementById("exibir").innerHTML = cal;
}

function multiplication(n1,n2){
	cal = (n1 +" * " + n2 + " = " + (n1 * n2));
	document.getElementById("exibir").innerHTML = cal;
}

function division(n1,n2){
	cal = (n1 +" / " + n2 + " = " + (n1 / n2));
	document.getElementById("exibir").innerHTML = cal;
}

function calc(){
	number1 = document.getElementById('n1').value;
	number2 = document.getElementById('n2').value;
	operacao = document.getElementById('operacao').value;

	if (operacao == "soma"){
		sum(parseFloat(number1),parseFloat(number2));
	}else if(operacao == "sub"){
		subtraction(parseFloat(number1),parseFloat(number2));
	}else if(operacao == "mult"){
		multiplication(parseFloat(number1),parseFloat(number2));
	}else if(operacao == "divi"){
		division(parseFloat(number1),parseFloat(number2));
	}
}
