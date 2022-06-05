	var i=0; 
var text=document.getElementById('text');
function changeval(val){
if(val==0){i=0; 
text.innerHTML="By Name";
}
else if(val==1){i=1; 
text.innerHTML="By Degree";
}
else if(val==2){i=2; 
text.innerHTML="By Position";
}
					}

	function search(){

		var input=document.getElementById('myinput').value.toUpperCase();

		var table=document.getElementById('mytable');
		var tr=table.getElementsByTagName('tr');
		for(l=1;i<tr.length;l++){

var td=tr[l].getElementsByTagName('td')[i];

if(td){

var textval = td.textContent || td.innerHTML;

if(textval.toUpperCase().indexOf(input)>-1){
	tr[l].style.display="";
}
else{
	tr[l].style.display="none";
}
}
		}

	}