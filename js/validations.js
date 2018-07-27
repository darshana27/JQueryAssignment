fname=document.getElementById("fname").value;
lname=document.getElementById("lname").value;
phno=document.getElementById("phno").value;
officeno=document.getElementById("officeno").value;
about=document.getElementById("phno").value;
console.log("is name");
function isName(){
	console.log("is name");
	fname=document.getElementById("fname").value;
	// document.getElementById("ErrFname").style.display="none";
	if(fname.length<1){
		document.getElementById("ErrFname").style.display="block";
		document.getElementById("ErrFname").innerHTML="First Name should not be empty";
		// alert("Please fill in your first name.");
	}
	else{
		document.getElementById("ErrFname").style.display="none";
	}
	if(fname.match(/[^0-9]/g)){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="First Name must contain only numbers";
	}
	else{
		document.getElementById("ErrFname").style.display="none";
	}
	if(lname<1){
		alert("Please fill in your last name.");
	}
	if(lname.match(/[^0-9]/g)){
		document.getElementById("ErrLname").style.display="block";
		document.getElementById("ErrLname").innerHTML="First Name must contain only numbers";
	}
}
	// if(lname<1){
	// 	alert("Please fill in your last name.");
	// }
	if(phno<1){
		alert("Please fill in your phone number.");
	}
	else if(officeno<1){
		alert("Please fill in your office number.");
	}
	else if(emailid<1){
		alert("Please fill in your email ID.");
	}
	else if(pwd<1){
		alert("Please fill in your password.");
	}
	else if(cnf_pwd<1){
		alert("Please re-type your password in confirm password field..");
	}
	else if(about<1){
		alert("Please fill in your about yourself details.");
	}

/*********Validation for Office Number***********/

	
	if(phno.toString().match(/[^0-9]/g)){
		alert("This field must contain only numbers.");
	}
	else if(phno.toString().length != 10){
		alert("Number of digits must be 10.");
	}

/*********Validation for Office Number***********/

	
	if(officeno.toString().match(/[^0-9]/g)){
		alert("Office Number must contain only numbers");
		return false;
	}

/*********Validation for Email ID***********/

	emailid=document.getElementById("emailid").value;
	if(!emailid.toString().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g)){
		alert("Invalid Email");
		return false;
	}

/*********Validation for Password***********/

	pwd=document.getElementById("pwd").value;
	if(!pwd.toString().match(/^[a-z0-9]+$/g) || pwd.length<8 || pwd.length>12){
		alert("Password must contain atleast 8-12 numbers or letters.");
		return false;
	}

/*********Validation for Confirm Password***********/

	cnf_pwd=document.getElementById("cnfPwd").value;
	if(cnfPwd!=pwd){
		alert("Passwords donot match. Re-type passwords.");
		return false;
	}

/*********Validation for Gender***********/

	rdMale=document.getElementById("residence1").value;
	rdFemale=document.getElementById("residence2").value;

	if(rdMale.checked==false && rdFemale==false){
		alert("Please select your gender")
		document.getElementById("ErrGender").style.display="block";
		document.getElementById("ErrGender").innerHTML="Please select your gender";
		return false;
	}

/*********Validation for Interest***********/

	val1=document.getElementById("checkbox_sample18");
	val2=document.getElementById("checkbox_sample19");
	val3=document.getElementById("checkbox_sample20");
	if(val1.checked==false && val2.checked==false && val3.checked==false){
		alert("Please select atleast one interest");
		return false;
	}

/*********Validation for Age***********/


function isLeap(year){
	console.log("Function callled");
		if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) 
		{
			alert("Leap");
			return true;  
		}
		else{
			alert("Not leap");
		}
}
function isFeb(){
	month=document.getElementById("month");
	v_month=month.options[month.selectedIndex].value;
	day=document.getElementById("day");
	year=document.getElementById("year");
	v_year=year.options[year.selectedIndex].value;
	console.log(v_year);
	if(isLeap(year)){
		alert("if condition");
	}
	if(v_month=='02' && date.length==31){	
		day=document.getElementById("day");day=document.getElementById("day");
		day.remove(30);
		day.remove(29);
	}
	else if(v_month == '02' && date.length == 30){
				day.remove(29);
	}
	else if(v_month=='01' || v_month=='03' || v_month=='05' || v_month=='07' || v_month=='08' || v_month=='10' || v_month=='12'){
		if(date.length==29){
			option=document.createElement("option");
			option2=document.createElement("option");
			option.text="30";
			option2.text="31";
			date.add(option);
			date.add(option2);
		}
		else if(date.length==30){
			option=document.createElement("option");
			option.text="31";
			date.add(option);
		}
	}
	else if(v_month=='04' || v_month=='06' || v_month=='09' || v_month=='11'){
		if(date.length==29){
			date=document.getElementById("date");
			option=document.createElement("option");
			option.text="30";	
			date.add(option);
		}
		else if(date.length==31){
			date=document.getElementById("date");
			date.remove(30);
		}	
	}
	calculateAge();
}
function calculateAge(){

	var month=document.getElementById("month");
	var date=document.getElementById("date");
	var year=document.getElementById("year");

	var v_month=month.options[month.selectedIndex].value;
	var v_date=date.options[date.selectedIndex].value;
	v_year=year.options[year.selectedIndex].value;

	var today=new Date();
	var this_year=0;
	if(today.getMonth() < v_month){
		this_year=1;
	}
	else if(today.getMonth()==v_month && today.getDate < v_date){
		this_year=1;
	}
	var age=today.getFullYear()-v_year-this_year;
	document.getElementById("age").value=age;
	return true;
}