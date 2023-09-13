let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");

//function
function digits(){
 var dig=0;

for(let i=0;i<arr.length;i++){
	//b=arr[i];
	var c= String(arr[i]);
	dig=dig+c.length;
}
return dig;
}

var res=digits();
document.write("number of dig in an array is  "+res);

