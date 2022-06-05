	function validations(){

		var user=document.getElementById('user').value;
		var key=document.getElementById('key').value;
		var num=document.getElementById('num').value;

			 if(key=="" && user=="" && num==""){
				document.getElementById('user').style.border="2px solid red";
				document.getElementById('key').style.border="2px solid red";
				document.getElementById('num').style.border="2px solid red";

				document.getElementById('userr').innerHTML="Invalid Data";
				document.getElementById('keyerr').innerHTML="Invalid Data";
				document.getElementById('numerr').innerHTML="Invalid Data";
			return false;}

		else if(num.length<10|| num.length>10 || num==""){
				document.getElementById('numerr').innerHTML="Valid Contact Number Is Required";
				document.getElementById('num').style.border="2px solid red";
				return false;		}

			else if(key==""){
				document.getElementById('keyerr').innerHTML="Password Is Required";
				document.getElementById('key').style.border="2px solid red";
				return false;		}
			else if(user==""){
				document.getElementById('userr').innerHTML="Username Is Required";
				document.getElementById('user').style.border="2px solid red";
				return false;		}

}

function remove1(){
	document.getElementById('user').style.border="1px solid #E2E2E2";
	document.getElementById('userr').innerHTML="";
}

function remove2(){
	document.getElementById('num').style.border="1px solid #E2E2E2";
	document.getElementById('numerr').innerHTML="";
}

function remove3(){
	document.getElementById('key').style.border="1px solid #E2E2E2";
	document.getElementById('keyerr').innerHTML="";
}
